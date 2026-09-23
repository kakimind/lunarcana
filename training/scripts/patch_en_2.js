const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'data', 'pilot', 'en.jsonl');

const patches = {
"en-0178": "Someone juggling two coins. Hold onto both and eventually both start slipping. The choosing itself might be less scary than the guilt you're expecting to feel after.",
"en-0179": "Someone carrying a heavy load, reversed. That weight might never have been fully yours to begin with. You can care about their feelings without agreeing to manage them.",
"en-0183": "Queen of Cups, someone deeply attuned to feeling, reversed — overwhelmed by it right now. It's normal for feelings to get louder for a while right after they lose a steady place to land.",
"en-0185": "Someone staring at a spark, reversed — hesitation instead of excitement. Low confidence at the start of something new is common, not a sign you were the wrong pick for it.",
"en-0186": "Someone facing a row of choices. Lots of options is a good problem, but you still have to pick one. Which one did you imagine first when you pictured actually being happy there?",
"en-0187": "Death — that's exactly what this card answers. Something has to end to clear room for something new. The ending you're picturing might just be the door, not the whole story.",
"en-0188": "Someone trapped, reversed — maybe it was never as locked-in as it felt. Worth testing that assumption once, even quietly, before treating it as fact.",
"en-0189": "Wheel of Fortune, reversed — a stalled season. The wheel's still turning underneath though. Grades plateauing sometimes just means the method needs to change, not the effort.",
"en-0192": "Someone alone in their garden, reversed — physically out, not yet independent inside. Moving out was one boundary — the next one might be about what you let through the door now.",
"en-0193": "A sword through clouds, reversed — clarity not quite grasped yet. Sometimes writing it down first, before saying it out loud, untangles the words.",
"en-0194": "Someone battered but still holding the line. Taking care of people takes strength you have to have to give. What would it look like to help them without also absorbing the exhaustion yourself?",
"en-0195": "The Empress, abundant and nurturing. Sometimes just being there matters more than having a fix. Have you actually asked what kind of help they want, or guessed at it?",
"en-0196": "Legacy, reversed — an inherited mold that doesn't fit who you are now. Knowing it doesn't fit is already more clarity than a lot of people your age have.",
"en-0197": "Knight of Cups, reversed — a dream floating loose from the ground. One small, unglamorous real step might do more for this than another daydream.",
"en-0198": "Figures rising to answer a call, reversed — the call not yet answered. What would you actually say to a friend who made the same mistake you're still punishing yourself for?",
"en-0200": "The Magician, every tool laid out on the table. What you need might already be in your hands. What's the one skill you already have that this side hustle would actually use first?",
"en-0201": "Looking back on the past. Comparing then and now is natural, but now needs its own approach. What's one thing that worked for your parents financially that genuinely doesn't apply to your situation?",
"en-0210": "The Sun, reversed — the outer brightness and your inner feeling don't quite match. That mismatch is worth trusting more than the parts that look good on paper.",
"en-0211": "The Lovers, checking real feeling before a choice. It might help to separate whether you're tired of the work itself, or tired of doing it alone.",
"en-0212": "Someone who fell, reversed — a comeback after hitting bottom. Starting small after a hard fall usually beats forcing yourself back to full speed too fast.",
"en-0213": "A coin came up reversed, suspiciously on cue. Marketing or not, the conversation we just had wasn't fake. What's actually true is whatever you noticed in yourself while we talked.",
"en-0214": "Someone gazing at distant seas, reversed. It's not meant to change your future, but it might widen how you see it right now. Sometimes a clearer view of the present is worth more than a peek at the future anyway.",
"en-0220": "Queen of Pentacles, generous and nurturing. Their style might be their way of showing love — just a bit more than fits you right now. It's fair to tell them what kind of care actually feels good to you.",
"en-0221": "The Hermit, reversed — not needing alone time, more like drifting into isolation. Has something changed recently, or has this been building quietly for a while?",
"en-0223": "King of Cups, balanced emotional command. You don't have to carry it all, just listening is often enough. What would it look like to set one boundary around how available you are outside work hours?",
"en-0224": "Five of Swords, reversed — a win that cost something. Winning the round and keeping the relationship aren't always the same prize.",
"en-0228": "A boat crossing calm water — exactly that movement. Slow and steady is still moving, even on the days it doesn't feel dramatic enough to notice.",
"en-0229": "Tradition, reversed — an inherited way that doesn't fit you now. Different values don't have to mean disrespect — it might help to name that out loud to them directly.",
"en-0233": "A knight moving steady but unhurried. Slow isn't wrong, it might just be your pace. What matters more to you, finishing fast or finishing well?",
"en-0237": "The Chariot, reversed — trying to steer but colliding instead. It might not be what you're saying, but the moment you're choosing to say it.",
"en-0238": "A coin resting in an open hand. A small start can grow into something bigger. What's the smallest version of this you could start literally this week?",
"en-0240": "The Tower falling, reversed — less total collapse, more a choice to rebuild deliberately. Before scrapping it all, it might be worth saving the one piece that still feels right.",
"en-0241": "The World, reversed — a chapter not quite closed. Plenty of people start something new while still mid-chapter — it doesn't have to wait for perfect order.",
"en-0242": "Celebration, flower-draped and joyful. Whatever nerves come with making it official, this card says the joy is the bigger, truer part.",
"en-0246": "Someone juggling, reversed. You don't have to hold both perfectly right now. Even dropping one for a day, on purpose, counts as taking care of yourself.",
"en-0247": "A path barely visible under moonlight. Right now might not be about finding a clear answer, but walking one step at a time through the uncertainty. What would make this job feel more certain — more time, or more honesty with yourself about it?",
"en-0248": "People gathered like family, reversed — good conditions, but no sense of belonging. A great offer on paper still has to be a place you actually want to walk into every day.",
"en-0249": "The Star, reversed. Hope isn't gone, just momentarily hidden. A retake year is its own kind of hard — losing confidence here doesn't mean losing ability.",
"en-0250": "Knight of Cups, cup carefully held. Her expectations might be her own way of loving you. It's possible to appreciate the love and still ask for a little more space around it.",
"en-0251": "The bright Sun. That moment sounds like the kind that stays with you. What made this time different from the ones that usually feel tense?",
"en-0255": "Two people facing each other, reversed — right now, turned away even from yourself. If a friend described themselves the way you just described yourself, what would you say back to them?",
"en-0256": "Someone charging off, reversed — speed outrunning judgment. The regret means your judgment's already caught back up — that's useful information for next time, not just guilt.",
"en-0257": "Death, reversed — a pattern that should've ended, hasn't. Patterns like this usually loosen around the trigger, not the willpower — what tends to set it off?",
"en-0264": "The Magician, reversed — every tool in hand, just not trusting yourself with them. What's a smaller decision you've made recently that turned out fine, that you could point to right now?",
"en-0265": "Someone indifferent even to a new cup right in front of them. Feels like a numb season. Numb isn't the same as gone — it might just need something smaller to wake it back up.",
"en-0266": "A craftsman's hand, reversed — fittingly. Whatever the intent behind it, what matters more is what you actually get from it. Did tonight actually give you anything, or does it still feel hollow?",
"en-0267": "The Hanged Man, reversed, interestingly enough. Sorry if it landed generic. What's the actual specific thing on your mind right now — let's start there instead.",
"en-0273": "Someone standing alone in a garden they built. Alone doesn't read as lacking here, more like its own completeness. What's one part of living alone that's turned out better than you expected?",
"en-0274": "Someone carefully pouring water between two cups. Maybe the answer isn't perfect balance, just the constant adjusting itself. What tipped the scale this week, work or life?",
"en-0275": "Page of Wands, someone curious about a spark. This card doesn't know 'too late' — it just knows starting. What's pulling you toward the new major more than fear is pulling you back?",
"en-0276": "Someone who won but looks bitter about it. Always folding first can be its own kind of losing. What would happen if, just once, you let the silence sit instead of filling it with sorry?",
"en-0277": "Someone gently closing a lion's jaw. Letting it slide isn't always the stronger move. Still sitting with you days later is usually a sign it's worth actually saying something.",
"en-0278": "Looking back on the past, reversed — time to turn that gaze forward. What's one thing right in front of you today that you haven't fully noticed yet?",
"en-0279": "Legacy, long-term stability. That vague fear usually gets quieter once it turns into an actual number and a plan, even a small one.",
"en-0284": "A row of choices, reversed — the fog clearing into a clear pick. Notice what finally tipped it — that's worth remembering for the next big decision too.",
"en-0285": "The Emperor, order. What you might need right now is structure more than inspiration. Try splitting the next project into three fixed stages before you touch the actual work.",
"en-0286": "Someone resting, reversed. Looking for somewhere to lean isn't pathetic. What's been the hardest part of today that actually brought you here?",
"en-0291": "Someone looking at what they've grown, reversed — disappointment that it hasn't grown as hoped. Tired is worth listening to — it's usually not about the time invested, it's about whether it's still going anywhere.",
"en-0292": "The Hierophant, familiar and trustworthy support. Having something steady and known nearby is a real strength right now. Have you told them how much that's actually meant to you?",
"en-0293": "Someone gazing at distance, reversed. Plans without action. What's the smallest possible first step, small enough that skipping it would feel almost silly?",
"en-0294": "A boat crossing calm water, reversed — the movement stalled. Is it the paperwork that's stuck, or is some part of you not fully ready yet?",
"en-0295": "The chain, reversed — starting to slip free of a pattern that bound you. What do you think finally made this time different from all the times before?",
"en-0296": "Someone standing high, fending off staves alone. Holding a belief is naturally a lonely position sometimes. Friction doesn't mean the belief is wrong, just that it's actually yours.",
"en-0297": "The Hanged Man, patience. Waiting can be its own wisdom. What would become clearer if you gave this a little more time before spending?",
"en-0300": "The World, a circle completing — an ending and a beginning at once. However this feels right now, you already have everything you need to walk into it without looking back.",
};

const lines = fs.readFileSync(file, 'utf8').trim().split('\n');
let count = 0;
const out = lines.map(line => {
  const rec = JSON.parse(line);
  if (patches[rec.id]) {
    rec.messages[rec.messages.length - 1].content = patches[rec.id];
    count++;
  }
  return JSON.stringify(rec);
});
fs.writeFileSync(file, out.join('\n') + '\n');
console.log('patched', count, 'records');
