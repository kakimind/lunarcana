"""
Generates the LUNARCANA multilingual tarot-dialogue fine-tuning dataset.

Run this yourself with your own Anthropic API key — it is NOT run automatically by Claude Code.

Usage:
    pip install anthropic
    export ANTHROPIC_API_KEY=sk-ant-...
    python generate_dataset.py --language ko --count 150
    python generate_dataset.py --all --count 150      # loop over every language in scenarios.json

Output: training/data/generated/<language>.jsonl (resumable — re-running skips ids already
present in the output file, so you can stop and restart safely, or top up an existing batch
with --count higher than what's already there).

See ../data/SCHEMA.md for the output format and distribution targets this script tries to hit.
"""

import argparse
import json
import os
import random
import sys
import time
from pathlib import Path

try:
    import anthropic
except ImportError:
    sys.exit("Missing dependency. Run: pip install anthropic")

ROOT = Path(__file__).resolve().parents[2]
CARDS_PATH = ROOT / "assets" / "tarot" / "cards.json"
SCENARIOS_PATH = ROOT / "training" / "data" / "scenarios.json"
PERSONA_PATH = ROOT / "training" / "persona" / "system_prompt.md"
OUT_DIR = ROOT / "training" / "data" / "generated"

MODEL = "claude-sonnet-4-5-20250929"

LANGUAGE_NAMES = {
    "en": "English", "ko": "Korean", "ja": "Japanese", "zh-Hans": "Simplified Chinese",
    "es": "Spanish", "fr": "French", "de": "German", "pt": "Portuguese", "it": "Italian",
    "ru": "Russian", "ar": "Arabic", "hi": "Hindi", "id": "Indonesian", "vi": "Vietnamese",
    "th": "Thai", "tr": "Turkish", "pl": "Polish", "nl": "Dutch", "sv": "Swedish",
    "uk": "Ukrainian", "cs": "Czech", "el": "Greek",
}

TURN_PROFILE_RANGES = {
    "short": (1, 1),
    "short_or_medium": (1, 3),
    "medium": (2, 3),
    "medium_or_long": (2, 5),
    "long": (4, 5),
}

SPREAD_SIZES = {
    "single": 1,
    "single_or_three": None,   # resolved randomly: 1 or 3
    "three_or_celtic": None,   # resolved randomly: 3 or 10
    "single_or_celtic": None,  # resolved randomly: 1 or 10
}


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def resolve_spread_size(spread):
    if spread == "single":
        return 1
    if spread == "single_or_three":
        return random.choice([1, 3])
    if spread == "three_or_celtic":
        return random.choice([3, 10])
    if spread == "single_or_celtic":
        return random.choice([1, 10])
    raise ValueError(spread)


def resolve_turn_count(profile):
    lo, hi = TURN_PROFILE_RANGES[profile]
    return random.randint(lo, hi)


def draw_cards(all_cards, n):
    picks = random.sample(all_cards, k=min(n, len(all_cards)))
    return [
        {
            "id": c["id"],
            "name": c["name"],
            "orientation": random.choices(["upright", "reversed"], weights=[60, 40])[0],
            "meaning_up": c["meaning_up"],
            "meaning_rev": c["meaning_rev"],
            "desc": c["desc"],
        }
        for c in picks
    ]


def build_generation_prompt(persona_text, language_name, topic, cards, n_user_turns):
    card_block = "\n".join(
        f"- {c['name']} ({c['orientation']}): "
        f"{c['meaning_up'] if c['orientation'] == 'upright' else c['meaning_rev']} "
        f"| scene: {c['desc'][:280]}"
        for c in cards
    )
    return f"""You are generating ONE synthetic training example for fine-tuning a small on-device
tarot-counselor chat model. Output must be a single JSON object, nothing else — no markdown
fences, no commentary.

The assistant character is "Luna". Here is Luna's full persona/behavior spec — the generated
assistant turns must actually follow it, not just be tarot-flavored text:

---
{persona_text}
---

Generate a realistic {language_name}-language conversation between a user and Luna for this
scenario: "{topic['label']}" (topic id: {topic['id']}).

Card(s) drawn this reading (draw order, use exactly these, do not invent different cards):
{card_block}

Requirements:
- The conversation must have exactly {n_user_turns} user turn(s) and {n_user_turns} assistant
  turn(s), alternating starting with the user.
- Everything except the system prompt must be written naturally in {language_name} — user
  phrasing should sound like a real person typing on their phone (casual, sometimes with typos
  or trailing off), not a translated textbook sentence.
- Luna's replies must follow every rule in the persona spec above, especially: never recite the
  card meaning verbatim, frame things as invitation not prophecy, 2-5 sentences per reply, and
  (for crisis_* topics) break character appropriately per the boundary rules.
- Do not translate or localize the persona spec itself — it only shapes behavior, it is not
  spoken text.
- Also provide "card_names": the name of each drawn card translated/localized into
  {language_name}, in the same order as the card list above (this is NOT spoken by anyone in the
  conversation — it's used to build a machine-readable tag prepended to the first user turn, so
  it must match the term Luna herself uses for that card in her replies).
- Also provide "card_tag_label": the short phrase "Cards drawn" (or "Card drawn" if just one)
  translated naturally into {language_name}, for that same tag.
- Also provide "orientation_words": the words for "upright" and "reversed" translated naturally
  into {language_name}, used in that same tag next to each card name.

Output this exact JSON shape (fill in real content, keep field order):
{{
  "card_tag_label": "...",
  "orientation_words": {{"upright": "...", "reversed": "..."}},
  "card_names": ["...", "..."],
  "user_turns": ["...", "..."],
  "assistant_turns": ["...", "..."]
}}"""


def generate_one(client, persona_text, language_code, topic, cards, n_user_turns, retries=3):
    prompt = build_generation_prompt(
        persona_text, LANGUAGE_NAMES[language_code], topic, cards, n_user_turns
    )
    for attempt in range(1, retries + 1):
        try:
            resp = client.messages.create(
                model=MODEL,
                max_tokens=2000,
                messages=[{"role": "user", "content": prompt}],
            )
            text = resp.content[0].text.strip()
            if text.startswith("```"):
                text = text.strip("`")
                text = text[text.find("{"):]
            data = json.loads(text)
            assert len(data["user_turns"]) == n_user_turns
            assert len(data["assistant_turns"]) == n_user_turns
            assert len(data["card_names"]) == len(cards)
            return data
        except Exception as e:
            wait = 2 * attempt
            print(f"  retry {attempt}/{retries} ({e}); waiting {wait}s", file=sys.stderr)
            time.sleep(wait)
    return None


def existing_ids(out_path):
    if not out_path.exists():
        return set()
    ids = set()
    with open(out_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                ids.add(json.loads(line)["id"])
            except Exception:
                pass
    return ids


def generate_language(client, persona_text, all_cards, topics, language_code, count):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{language_code}.jsonl"
    already = existing_ids(out_path)
    start_idx = len(already) + 1

    with open(out_path, "a", encoding="utf-8") as f:
        for i in range(start_idx, count + 1):
            topic = random.choice(topics)
            spread_n = resolve_spread_size(topic["spread"])
            n_user_turns = resolve_turn_count(topic["turn_profile"])
            cards = draw_cards(all_cards, spread_n)

            example_id = f"{language_code}-{i:04d}"
            print(f"[{language_code}] {i}/{count} topic={topic['id']} cards={len(cards)} turns={n_user_turns}")

            data = generate_one(client, persona_text, language_code, topic, cards, n_user_turns)
            if data is None:
                print(f"  SKIPPED {example_id} after retries", file=sys.stderr)
                continue

            ow = data["orientation_words"]
            card_list = ", ".join(
                f"{name}({ow[c['orientation']]})"
                for name, c in zip(data["card_names"], cards)
            )
            card_tag = f"[{data['card_tag_label']}: {card_list}]"

            messages = [{"role": "system", "content": persona_text}]
            for idx, (u, a) in enumerate(zip(data["user_turns"], data["assistant_turns"])):
                user_text = f"{card_tag}\n{u}" if idx == 0 else u
                messages.append({"role": "user", "content": user_text})
                messages.append({"role": "assistant", "content": a})

            record = {
                "id": example_id,
                "language": language_code,
                "topic": topic["id"],
                "turn_count": n_user_turns,
                "cards": [
                    {"id": c["id"], "name": c["name"], "orientation": c["orientation"]}
                    for c in cards
                ],
                "messages": messages,
            }
            f.write(json.dumps(record, ensure_ascii=False) + "\n")
            f.flush()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--language", help="single language code, e.g. ko")
    parser.add_argument("--all", action="store_true", help="generate for every language in scenarios.json")
    parser.add_argument("--count", type=int, default=150, help="target examples per language")
    args = parser.parse_args()

    if not args.language and not args.all:
        parser.error("pass --language <code> or --all")

    scenarios = load_json(SCENARIOS_PATH)
    all_cards = load_json(CARDS_PATH)
    persona_text = PERSONA_PATH.read_text(encoding="utf-8")

    client = anthropic.Anthropic()

    langs = scenarios["languages"] if args.all else [args.language]
    for lang in langs:
        generate_language(client, persona_text, all_cards, scenarios["topics"], lang, args.count)


if __name__ == "__main__":
    main()
