# Training data schema

Each language file is a `.jsonl` file: one JSON object per line, one conversation per object.

```json
{
  "id": "ko-0001",
  "language": "ko",
  "topic": "career_decision",
  "turn_count": 3,
  "cards": [
    { "id": "wa05", "name": "Five of Wands", "orientation": "reversed" }
  ],
  "messages": [
    { "role": "system", "content": "<full text of persona/system_prompt.md>" },
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." },
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}
```

- `id`: `<lang>-<zero-padded index>`, unique within the language file.
- `language`: ISO 639-1 code from the confirmed 22-language list (see project memory).
- `topic`: one of the topic ids in `scenarios.json`.
- `cards`: every card drawn in this conversation, in draw order. `orientation` is `"upright"` or
  `"reversed"`. 1 card for single-draw scenarios, 3 for three-card spreads, more for Celtic Cross.
- `messages`: the actual training sequence. `system` is always the full persona prompt (same
  text in every example — do not localize/translate it, it's an instruction to the model, not
  in-character text). `user`/`assistant` turns are in `language`, including the assistant's
  in-character replies. Turn count varies by scenario (see `SCHEMA.md` distribution below).

Training scripts strip everything except `messages` before feeding the trainer; `id`/`language`/
`topic`/`cards`/`turn_count` exist for filtering, balancing, and spot-checking only — **except**
the card-drawn tag described below, which is NOT stripped: it's part of `messages` itself and is
required for the model to actually function.

## Card-drawn tag (required, in the first user turn)

The app draws the card(s) in code (random pick from `assets/tarot/cards.json` + random
orientation) — the model has no other way to know what was drawn. So the first `user` message
of every conversation must be prefixed with a one-line tag naming every card in the spread,
followed by a newline, then the user's actual message:

```
[뽑힌 카드: 연인(정방향)]
썸 타는 사람이 있는데 고백해도 될지 모르겠어요...
```

```
[Cards drawn: The Lovers (upright)]
I've got a second date lined up...
```

- For a 3-card (or Celtic Cross) spread, list every card the app drew up front in one tag, even
  though the assistant reveals them one at a time across turns — the draw happens once, at the
  start of the reading; pacing the reveal is a narrative choice the assistant makes, not a sign
  the app hands over cards mid-conversation.
- The tag uses the card name in the conversation's own language (Korean names for `ko`, English
  names for `en`, etc.) — not the English id from `cards.json` — so it matches the terminology
  the assistant actually uses when talking about the card. A per-language name table needs to
  exist for every target language before that language's data can be generated (currently only
  `ko` and `en` name tables exist, both ad hoc inside the one-off fix scripts that applied them —
  not yet centralized into a reusable file).
- Only the first user turn gets a tag; later user turns in the same conversation are the user's
  own words, untagged.
- This tag is real training signal, not a stripped annotation — the model must learn to read it
  and ignore it as literal chat if a real user ever types something bracket-shaped by coincidence
  (rare enough not to worry about specifically, but worth knowing the model was never trained to
  treat `[...]` as inherently special beyond this one convention).

## Distribution targets (per language, v1 batch = 150 examples)

- **Turn length**: ~40% single exchange (1 user + 1 assistant), ~40% short follow-up (2-3 user
  turns), ~20% longer session (4-5 user turns, usually a 3-card or Celtic Cross spread).
- **Orientation**: roughly 60% upright / 40% reversed across the batch (reversed cards need
  clear representation since they read very differently).
- **Arcana mix**: at minimum every one of the 78 cards should appear at least once across the
  150-example batch; Major Arcana can recur more since they carry the most narrative weight.
- **Crisis-boundary examples**: ~3-5 per language must exercise the self-harm/abuse/medical-
  emergency boundary rule from the persona prompt, so the model actually learns to break frame.
- **Skeptical/testing-the-AI examples**: 2-3 per language where the user pushes back ("this is
  fake", "are you just an AI", "prove it") so the model has seen how Luna handles it in-persona.
