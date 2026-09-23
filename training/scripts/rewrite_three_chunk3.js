const fs = require('fs');
const path = require('path');
const PILOT = path.join(__dirname, '..', 'data', 'pilot', 'ko.jsonl');

const lines = fs.readFileSync(PILOT, 'utf8').trim().split('\n');
const recs = lines.map(l => JSON.parse(l));
const byId = new Map(recs.map(r => [r.id, r]));

function tag(card) {
  const ow = card.orientation === 'upright' ? '정방향' : '역방향';
  return `[뽑힌 카드: ${card.name}(${ow})]`;
}

// turns: array of {u, a} for card reveals, with optional follow-up {u,a} pairs interspersed
// We build messages by hand per record for full creative control.
function buildRecord(id, topic, cards, turnsFlat) {
  const r = byId.get(id);
  const messages = [r.messages[0]]; // keep system prompt
  for (const t of turnsFlat) {
    messages.push({ role: 'user', content: t.u });
    messages.push({ role: 'assistant', content: t.a });
  }
  const turn_count = turnsFlat.length;
  r.cards = cards;
  r.turn_count = turn_count;
  r.messages = messages;
}

// ---- ko-0388 love_new: 컵의 시종(up) / 검 7(rev) / 연인(up) ----
buildRecord('ko-0388', 'love_new', [
  { id: 'cupa', name: '컵의 시종', orientation: 'upright' },
  { id: 'sw07', name: '검 7', orientation: 'reversed' },
  { id: 'ar06', name: '연인', orientation: 'upright' },
], [
  { u: `${tag({name:'컵의 시종',orientation:'upright'})}\n소개팅 앱에서 만난 사람인데 연락 텀이 신경 쓰여서 자꾸 눈치를 보게 돼요.`,
    a: '컵의 시종이 나왔어요, 손에 든 컵에서 물고기가 고개를 내미는 카드예요. 마음이 아직 조심스럽게 살피는 단계라는 뜻이라, 연락 텀 하나에 일희일비하는 것도 자연스러워요.' },
  { u: `${tag({name:'검 7',orientation:'reversed'})}\n다음 카드요.`,
    a: '검 7이 거꾸로 나왔어요. 뭔가 숨기거나 속이려는 게 아니라, 오히려 슬쩍 재던 걸 그만두고 솔직해지는 흐름으로 보여요.' },
  { u: '그럼 저도 좀 더 편하게 연락해도 될까요?',
    a: '눈치 보며 텀을 재는 것보다, 궁금한 걸 그냥 물어보는 쪽이 지금 흐름에는 더 잘 맞아요.' },
  { u: `${tag({name:'연인',orientation:'upright'})}\n마지막 카드요.`,
    a: '연인 카드로 마무리되네요 — 시종의 조심스러움, 검 7의 솔직해짐, 그리고 이 선택의 카드가 이어지면서, 지금은 재는 걸 멈추고 마음 가는 대로 한 걸음 다가가도 괜찮은 시기라고 말해주고 있어요.' },
]);

// ---- ko-0389 burnout_identity: 펜타클 10(rev) / 검 8(up) / 은둔자(up) ----
buildRecord('ko-0389', 'burnout_identity', [
  { id: 'pe10', name: '펜타클 10', orientation: 'reversed' },
  { id: 'sw08', name: '검 8', orientation: 'upright' },
  { id: 'ar09', name: '은둔자', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 10',orientation:'reversed'})}\n열심히 일했는데 정작 성과는 다른 사람이 가져가는 것 같아서 무기력해요.`,
    a: '펜타클 10이 거꾸로 나왔어요 — 쌓아온 것들이 정당하게 인정받지 못하고 있다는 느낌을 그대로 담고 있는 카드예요.' },
  { u: `${tag({name:'검 8',orientation:'upright'})}\n다음 카드는요?`,
    a: '검 8이에요. 눈이 가려진 채 칼들에 둘러싸인 사람이 나오는데, 실제로는 움직일 틈이 있는데도 스스로 갇혔다고 느끼는 상태를 보여줘요.' },
  { u: '진짜 갇힌 게 아니라는 뜻이에요?',
    a: '네, 적어도 이 카드는 그렇게 말해요. 지금 상황을 바꿀 수 없다고 믿는 것과 실제로 바꿀 수 없는 건 다른 문제일 수 있어요.' },
  { u: `${tag({name:'은둔자',orientation:'upright'})}\n마지막 카드 볼게요.`,
    a: '은둔자로 마무리돼요. 인정에 대한 억울함에서 시작해 스스로 갇혔다고 느끼던 마음을 지나, 지금은 잠시 물러나 혼자 생각을 정리할 시간이 필요하다는 흐름으로 읽혀요.' },
]);

// ---- ko-0390 friendship: 검 5(up) / 컵 7(rev) / 펜타클 9(up) ----
buildRecord('ko-0390', 'friendship', [
  { id: 'sw05', name: '검 5', orientation: 'upright' },
  { id: 'cu07', name: '컵 7', orientation: 'reversed' },
  { id: 'pe09', name: '펜타클 9', orientation: 'upright' },
], [
  { u: `${tag({name:'검 5',orientation:'upright'})}\n친구 무리에서 저만 은근히 빼고 약속을 잡는 것 같은 느낌이 들어요.`,
    a: '검 5가 나왔어요 — 누군가는 이기고 누군가는 씁쓸하게 자리를 뜨는 장면이에요. 지금 느끼는 소외감이 그냥 기분 탓만은 아닐 수 있어요.' },
  { u: `${tag({name:'컵 7',orientation:'reversed'})}\n다음 카드요.`,
    a: '컵 7이 거꾸로 나왔어요. 여러 가능성 중에 흐릿하게 헤매던 마음이 이제 조금씩 뭘 원하는지 선명해지는 시점이라는 뜻이에요.' },
  { u: `${tag({name:'펜타클 9',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '펜타클 9로 마무리되네요. 무리에게 느낀 서운함, 그 안에서 원하는 게 뭔지 선명해지는 흐름을 지나, 결국 혼자서도 충분히 잘 지낼 수 있는 자기만의 자리가 있다는 걸 보여줘요. 이 무리에 계속 매달릴 필요는 없을지도 몰라요.' },
]);

// ---- ko-0391 life_transition: 매달린 사람(up) / 완드 10(rev) / 바보(up) ----
buildRecord('ko-0391', 'life_transition', [
  { id: 'ar12', name: '매달린 사람', orientation: 'upright' },
  { id: 'wa10', name: '완드 10', orientation: 'reversed' },
  { id: 'ar00', name: '바보', orientation: 'upright' },
], [
  { u: `${tag({name:'매달린 사람',orientation:'upright'})}\n몇 달 뒤면 정년퇴직인데 그 이후가 막막해요.`,
    a: '매달린 사람이 나왔어요 — 거꾸로 매달려서도 평온한 표정을 짓고 있는 카드예요. 익숙한 자리에서 내려오는 지금이, 생각보다 나쁜 시간이 아닐 수 있어요.' },
  { u: `${tag({name:'완드 10',orientation:'reversed'})}\n다음 카드는요?`,
    a: '완드 10이 거꾸로 나왔어요. 오랫동안 짊어져 온 짐들을 이제 하나씩 내려놓아도 된다는 신호로 읽혀요.' },
  { u: '그게 무섭기도 해요. 짐을 내려놓으면 제가 뭐가 되는 건지.',
    a: '그 두려움, 충분히 이해돼요. 오래 짊어졌던 걸 놓는 건 자유이면서 동시에 낯섦이기도 하니까요.' },
  { u: `${tag({name:'바보',orientation:'upright'})}\n마지막 카드요.`,
    a: '바보 카드로 끝나네요. 짐을 내려놓는 그 낯섦 끝에, 이 카드는 정해진 답 없이 다시 첫걸음을 떼는 것도 나쁘지 않다고 말해줘요. 퇴직이 끝이 아니라 새로 걸어볼 여백으로 보여요.' },
]);

// ---- ko-0392 parenting_worry: 컵 3(rev) / 검 4(up) / 여사제(up) ----
buildRecord('ko-0392', 'parenting_worry', [
  { id: 'cu03', name: '컵 3', orientation: 'reversed' },
  { id: 'sw04', name: '검 4', orientation: 'upright' },
  { id: 'ar02', name: '여사제', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 3',orientation:'reversed'})}\n아이가 학교에서 친구 문제로 힘들어하는 것 같은데 어떻게 도와줘야 할지 모르겠어요.`,
    a: '컵 3이 거꾸로 나왔어요 — 함께 어울리던 무리에 금이 가는 모습이에요. 아이가 겪는 게 단순한 다툼이 아니라 관계 자체의 흔들림일 수 있어요.' },
  { u: `${tag({name:'검 4',orientation:'upright'})}\n다음 카드요.`,
    a: '검 4예요. 조용히 누워 쉬는 모습이 나오는데, 지금은 부모가 나서서 문제를 해결하기보다 아이가 스스로 숨 고를 시간을 주는 게 먼저일 수 있어요.' },
  { u: '그냥 지켜만 봐도 괜찮을까요?',
    a: '완전히 손 놓으라는 뜻은 아니에요. 다만 답을 대신 찾아주려 하기보다, 곁에서 안심할 수 있게 있어주는 것만으로도 충분할 때가 있어요.' },
  { u: `${tag({name:'여사제',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '여사제로 마무리돼요. 아이의 관계가 흔들리는 걸 지켜보며 쉴 시간을 주고 나면, 이 카드는 아이가 스스로 무엇이 필요한지 이미 알고 있을 거라고 말해줘요. 먼저 물어보고, 그다음엔 아이의 속도를 믿어봐도 좋을 것 같아요.' },
]);

// ---- ko-0393 unresolved_closure: 검 10(rev) / 죽음(up) / 펜타클 5(rev) ----
buildRecord('ko-0393', 'unresolved_closure', [
  { id: 'sw10', name: '검 10', orientation: 'reversed' },
  { id: 'ar13', name: '죽음', orientation: 'upright' },
  { id: 'pe05', name: '펜타클 5', orientation: 'reversed' },
], [
  { u: `${tag({name:'검 10',orientation:'reversed'})}\n예전 회사에서 억울하게 잘렸던 일이 아직도 가끔 떠올라서 화가 나요.`,
    a: '검 10이 거꾸로 나왔어요 — 바닥까지 갔던 그 일이 이제 서서히 회복되는 국면이라는 뜻이에요. 다만 화가 남아있다는 건 아직 다 소화되지 않았다는 신호이기도 해요.' },
  { u: `${tag({name:'죽음',orientation:'upright'})}\n다음 카드요.`,
    a: '죽음 카드예요. 두려운 이름과 달리, 하나의 장이 완전히 끝났다는 걸 인정해야 다음으로 넘어갈 수 있다는 뜻으로 읽혀요.' },
  { u: `${tag({name:'펜타클 5',orientation:'reversed'})}\n마지막 카드도 봐주세요.`,
    a: '펜타클 5가 거꾸로 나오며 마무리돼요. 억울함에서 회복으로, 그리고 그 장을 완전히 닫는 흐름 끝에, 이 카드는 그때 잃었다고 느꼈던 것들이 사실 생각보다 많이 채워져 있다는 걸 보여줘요. 이제 그 화를 조금씩 내려놓아도 괜찮을 것 같아요.' },
]);

// ---- ko-0394 money_practical: 펜타클 4(rev) / 완드 2(up) / 펜타클 9(up) ----
buildRecord('ko-0394', 'money_practical', [
  { id: 'pe04', name: '펜타클 4', orientation: 'reversed' },
  { id: 'wa02', name: '완드 2', orientation: 'upright' },
  { id: 'pe09', name: '펜타클 9', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 4',orientation:'reversed'})}\n갑자기 목돈 나갈 일이 생겨서 세워뒀던 저축 계획이 다 무너졌어요.`,
    a: '펜타클 4가 거꾸로 나왔어요 — 꽉 움켜쥐고 있던 손이 풀리는 카드예요. 계획이 무너진 게 아니라, 너무 단단하게만 짜여 있던 계획이 유연해질 기회일 수 있어요.' },
  { u: `${tag({name:'완드 2',orientation:'upright'})}\n다음 카드는요?`,
    a: '완드 2예요. 지도를 들고 다음 방향을 가늠하는 모습이라, 지금이 새로 계획을 다시 세워볼 타이밍이라는 뜻으로 보여요.' },
  { u: `${tag({name:'펜타클 9',orientation:'upright'})}\n마지막 카드도요.`,
    a: '펜타클 9로 마무리돼요. 계획이 무너진 것에서 새 방향을 가늠하는 흐름을 지나, 이 카드는 지금까지 쌓아온 게 생각보다 단단하다는 걸 보여줘요. 이번 지출이 전부를 무너뜨리진 않을 거예요.' },
]);

// ---- ko-0395 study_exam: 검 2(up) / 펜타클 8(rev) / 태양(up) ----
buildRecord('ko-0395', 'study_exam', [
  { id: 'sw02', name: '검 2', orientation: 'upright' },
  { id: 'pe08', name: '펜타클 8', orientation: 'reversed' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'검 2',orientation:'upright'})}\n자격증 시험이 얼마 안 남았는데 도무지 집중이 안 돼요.`,
    a: '검 2가 나왔어요 — 눈을 가린 채 균형을 잡고 있는 카드예요. 집중이 안 되는 게 아니라, 뭘 먼저 해야 할지 스스로 결정을 미루고 있는 상태일 수 있어요.' },
  { u: `${tag({name:'펜타클 8',orientation:'reversed'})}\n다음 카드요.`,
    a: '펜타클 8이 거꾸로 나왔어요. 반복 연습에 지친 마음이 보여요, 양보다 방향을 한번 점검해볼 때예요.' },
  { u: '그럼 공부 방법을 아예 바꿔야 할까요?',
    a: '전부 바꾸기보다, 지금 제일 막히는 한 부분만 먼저 다시 들여다보는 걸로 충분할 수 있어요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 끝나네요. 결정을 미루던 마음, 방향을 점검하려던 흐름을 지나, 이 카드는 지금 쌓고 있는 것들이 결국 밝은 결과로 이어질 거라고 말해줘요.' },
]);

// ---- ko-0396 breakup_grief: 컵 9(rev) / 달(up) / 완드 6(rev) ----
buildRecord('ko-0396', 'breakup_grief', [
  { id: 'cu09', name: '컵 9', orientation: 'reversed' },
  { id: 'ar18', name: '달', orientation: 'upright' },
  { id: 'wa06', name: '완드 6', orientation: 'reversed' },
], [
  { u: `${tag({name:'컵 9',orientation:'reversed'})}\n오래 만난 사람이랑 헤어졌는데 주변 사람들한테는 아무렇지 않은 척하고 있어요.`,
    a: '컵 9가 거꾸로 나왔어요 — 겉으로는 만족한 척하지만 속은 그렇지 않은 모습이에요. 괜찮은 척이 오래가면 결국 지치게 돼요.' },
  { u: `${tag({name:'달',orientation:'upright'})}\n다음 카드는요?`,
    a: '달이에요. 밤에 홀로 짖는 개와 늑대가 보이는 카드인데, 지금은 혼란스럽고 불안한 감정이 그대로 드러나도 괜찮은 시기라는 뜻이에요.' },
  { u: `${tag({name:'완드 6',orientation:'reversed'})}\n마지막 카드도 봐주세요.`,
    a: '완드 6이 거꾸로 나오며 마무리돼요. 괜찮은 척하던 마음, 그리고 그 아래 숨어있던 혼란을 지나, 이 카드는 아직 스스로 인정할 승리의 순간이 오지 않았을 뿐이라고 말해줘요. 아무렇지 않은 척을 잠시 내려놓아도 괜찮아요.' },
]);

// ---- ko-0397 decision_fork: 펜타클 10(up) / 검 3(rev) / 전차(up) ----
buildRecord('ko-0397', 'decision_fork', [
  { id: 'pe10', name: '펜타클 10', orientation: 'upright' },
  { id: 'sw03', name: '검 3', orientation: 'reversed' },
  { id: 'ar07', name: '전차', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 10',orientation:'upright'})}\n대기업 오퍼랑 스타트업 오퍼 둘 다 받았는데 어디로 가야 할지 모르겠어요. 두 선택 비교해서 봐주세요.`,
    a: '대기업 자리에는 펜타클 10이 나왔어요 — 대대로 쌓인 안정과 기반을 뜻하는 카드예요.' },
  { u: `${tag({name:'검 3',orientation:'reversed'})}\n스타트업 쪽은요?`,
    a: '검 3이 거꾸로 나왔어요. 아플 수 있는 시기를 지나 회복으로 가는 흐름이라, 초반의 불안정함이 영원하진 않을 거라는 뜻이에요.' },
  { u: `${tag({name:'전차',orientation:'upright'})}\n뭐가 더 중요한지도 보여주세요.`,
    a: '전차 카드가 그 답이에요. 안정이냐 도전이냐보다, 지금 스스로 방향을 확실히 쥐고 나아갈 수 있는 쪽이 어디인지가 더 중요하다고 말해주고 있어요. 둘 중 당신이 더 강하게 이끌고 싶은 쪽은 어디예요?' },
]);

// ---- ko-0399 big_life_decision: 펜타클의 기사(rev) / 탑(up) / 세계(up) ----
buildRecord('ko-0399', 'big_life_decision', [
  { id: 'pekn', name: '펜타클의 기사', orientation: 'reversed' },
  { id: 'ar16', name: '탑', orientation: 'upright' },
  { id: 'ar21', name: '세계', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클의 기사',orientation:'reversed'})}\n안정적인 직장을 그만두고 프리랜서로 전향할까 고민 중이에요.`,
    a: '펜타클의 기사가 거꾸로 나왔어요 — 꾸준함이 어느새 정체로 느껴지고 있는 지금을 보여줘요.' },
  { u: `${tag({name:'탑',orientation:'upright'})}\n다음 카드요.`,
    a: '탑이에요. 무너지는 이미지가 강렬한 카드지만, 낡은 틀을 깨는 게 꼭 재앙은 아니에요. 필요했던 균열일 수 있어요.' },
  { u: '갑자기 다 무너지면 어떡하죠?',
    a: '이 카드가 말하는 건 통제 불가능한 붕괴라기보다, 더는 맞지 않는 틀을 스스로 깨고 나오는 쪽에 가까워요.' },
  { u: `${tag({name:'세계',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '세계 카드로 마무리돼요. 정체된 안정에서 낡은 틀을 깨는 흐름을 지나, 이 카드는 하나의 매듭이 완성되고 새로운 장이 열릴 준비가 됐다는 뜻이에요. 지금이 그 전환의 순간일 수 있어요.' },
]);

// ---- ko-0439 decision_fork: 펜타클 3(up) / 검 3(rev) / 별(up) ----
buildRecord('ko-0439', 'decision_fork', [
  { id: 'pe03', name: '펜타클 3', orientation: 'upright' },
  { id: 'sw03', name: '검 3', orientation: 'reversed' },
  { id: 'ar17', name: '별', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 3',orientation:'upright'})}\n프리랜서로 계속 갈지, 안정적인 정규직으로 돌아갈지 3장으로 봐주세요.`,
    a: '프리랜서 쪽엔 펜타클 3이 나왔어요 — 함께 협업하며 기술을 쌓아가는 카드예요. 지금 하고 있는 일이 헛되지 않다는 뜻이에요.' },
  { u: `${tag({name:'검 3',orientation:'reversed'})}\n정규직 쪽은요?`,
    a: '검 3이 거꾸로 나왔어요. 안정을 택했을 때 오히려 마음의 상처가 회복되는 방향으로 읽혀요, 나쁜 선택은 아니에요.' },
  { u: `${tag({name:'별',orientation:'upright'})}\n뭐가 더 중요한지 봐주세요.`,
    a: '별 카드가 답해요. 어느 쪽이든 중요한 건 지금 하는 일에서 희망을 잃지 않는 거예요 — 협업으로 쌓아가든, 안정 속에서 회복하든, 그 희망이 있는 쪽을 골라도 괜찮아요.' },
]);

// ---- ko-0440 career_decision: 검 7(rev) / 완드 4(up) / 컵 9(up) ----
buildRecord('ko-0440', 'career_decision', [
  { id: 'sw07', name: '검 7', orientation: 'reversed' },
  { id: 'wa04', name: '완드 4', orientation: 'upright' },
  { id: 'cu09', name: '컵 9', orientation: 'upright' },
], [
  { u: `${tag({name:'검 7',orientation:'reversed'})}\n이직한 지 두 달 됐는데 적응이 너무 안 돼요. 흐름을 좀 보고 싶어요.`,
    a: '검 7이 거꾸로 나왔어요 — 몰래 빠져나가려던 마음을 내려놓고 정면으로 마주하기 시작하는 시점이라는 뜻이에요.' },
  { u: `${tag({name:'완드 4',orientation:'upright'})}\n다음 카드는요?`,
    a: '완드 4예요. 작은 축하와 안정의 카드라, 지금 겪는 어려움이 지나고 나면 곧 자리를 잡을 신호로 보여요.' },
  { u: `${tag({name:'컵 9',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '컵 9로 마무리돼요. 정면으로 마주하려던 마음이 곧 안정으로 이어지고, 결국 이 자리에 만족하게 될 흐름이에요. 지금의 적응기가 생각보다 짧게 끝날 수 있어요.' },
]);

// ---- ko-0441 love_existing: 컵 10(rev) / 컵 6(up) / 절제(up) ----
buildRecord('ko-0441', 'love_existing', [
  { id: 'cu10', name: '컵 10', orientation: 'reversed' },
  { id: 'cu06', name: '컵 6', orientation: 'upright' },
  { id: 'ar14', name: '절제', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 10',orientation:'reversed'})}\n남자친구랑 권태기인 것 같은데 헤어져야 할지 모르겠어요. 세 장으로 봐줄래요?`,
    a: '컵 10이 거꾸로 나왔어요 — 그렸던 행복한 그림에 균열이 생긴 지금을 보여줘요. 다만 이건 관계의 끝이 아니라 흔들림의 신호에 더 가까워요.' },
  { u: `${tag({name:'컵 6',orientation:'upright'})}\n다음 카드요.`,
    a: '컵 6이에요. 어릴 적 순수했던 마음을 나누는 장면인데, 처음 좋았던 이유를 다시 떠올려볼 때라는 뜻이에요.' },
  { u: '그때로 돌아갈 수 있을까요?',
    a: '완전히 그때와 같아지진 않겠지만, 그 마음의 일부를 다시 꺼내볼 여지는 있어 보여요.' },
  { u: `${tag({name:'절제',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '절제로 마무리되네요. 균열에서 시작해 처음의 순수함을 되짚는 흐름 끝에, 이 카드는 서두르지 말고 두 사람 사이에서 균형을 다시 맞춰보라고 말해줘요. 헤어짐보다 먼저 시도해볼 게 남아있을 수 있어요.' },
]);

// ---- ko-0442 big_life_decision: 은둔자(up) / 검 2(rev) / 태양(up) ----
buildRecord('ko-0442', 'big_life_decision', [
  { id: 'ar09', name: '은둔자', orientation: 'upright' },
  { id: 'sw02', name: '검 2', orientation: 'reversed' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'은둔자',orientation:'upright'})}\n회사 그만두고 유학 갈까 고민 중이에요. 스프레드로 봐주세요.`,
    a: '은둔자가 나왔어요 — 등불 하나 들고 혼자 걷는 카드예요. 이 결정을 남에게 묻기보다 스스로 깊이 들여다보고 있는 시기라는 뜻이에요.' },
  { u: `${tag({name:'검 2',orientation:'reversed'})}\n다음 카드는요?`,
    a: '검 2가 거꾸로 나왔어요. 눈을 가리고 있던 것을 풀고 이제 결정을 미루지 않아도 될 때가 됐다는 뜻으로 보여요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 마무리돼요. 혼자 깊이 고민하던 시간을 지나 이제 결정을 미룰 필요가 없어진 지금, 이 카드는 유학이 밝고 좋은 방향으로 풀릴 가능성이 크다고 말해줘요.' },
]);

// ---- ko-0443 family_conflict: 검 5(up) / 펜타클 9(rev) / 정의(up) ----
buildRecord('ko-0443', 'family_conflict', [
  { id: 'sw05', name: '검 5', orientation: 'upright' },
  { id: 'pe09', name: '펜타클 9', orientation: 'reversed' },
  { id: 'ar11', name: '정의', orientation: 'upright' },
], [
  { u: `${tag({name:'검 5',orientation:'upright'})}\n새언니랑 자꾸 부딪혀서 명절마다 스트레스예요. 상황-원인-조언으로 봐줄 수 있어요?`,
    a: '상황 자리에 검 5가 나왔어요 — 누군가는 이기고 누군가는 물러나는 모양새예요. 명절마다 승패를 가르는 분위기가 반복되고 있는 것 같아요.' },
  { u: `${tag({name:'펜타클 9',orientation:'reversed'})}\n원인은요?`,
    a: '펜타클 9가 거꾸로 나왔어요. 각자 자기만의 방식과 영역을 지키려는 마음이 부딪히는 게 원인으로 보여요.' },
  { u: `${tag({name:'정의',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '정의 카드예요. 누가 옳고 그른지 가리기보다, 서로의 방식을 있는 그대로 인정하는 게 이 갈등을 풀 실마리라고 말해주고 있어요.' },
]);

// ---- ko-0444 reconciliation: 검 8(rev) / 악마(rev) / 별(up) ----
buildRecord('ko-0444', 'reconciliation', [
  { id: 'sw08', name: '검 8', orientation: 'reversed' },
  { id: 'ar15', name: '악마', orientation: 'reversed' },
  { id: 'ar17', name: '별', orientation: 'upright' },
], [
  { u: `${tag({name:'검 8',orientation:'reversed'})}\n전 남자친구가 다시 만나자는데 예전 문제가 반복될까 봐 겁나요. 봐주세요.`,
    a: '검 8이 거꾸로 나왔어요 — 스스로 묶여 있다고 느꼈던 게 실은 풀릴 수 있는 매듭이었다는 뜻이에요. 그 두려움이 근거 없는 건 아니지만, 갇혀있을 필요는 없어요.' },
  { u: `${tag({name:'악마',orientation:'reversed'})}\n다음 카드요.`,
    a: '악마가 거꾸로 나왔어요. 예전에 두 사람을 붙잡던 나쁜 패턴에서 벗어날 힘이 지금은 있다는 신호예요.' },
  { u: '그럼 다시 만나봐도 될까요?',
    a: '카드는 확답을 주진 않지만, 예전 패턴이 반복될지는 이제 당신 의지에 달린 부분이 더 크다고 말하고 있어요.' },
  { u: `${tag({name:'별',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '별로 마무리되네요. 묶여있던 두려움에서 벗어날 힘을 확인한 흐름 끝에, 이 카드는 조심스럽지만 희망을 가져봐도 좋다고 말해줘요. 다만 예전과 똑같은 방식으로 돌아가진 않는다는 전제로요.' },
]);

// ---- ko-0445 grief_loss: 검 9(rev) / 컵 3(up) / 태양(up) ----
buildRecord('ko-0445', 'grief_loss', [
  { id: 'sw09', name: '검 9', orientation: 'reversed' },
  { id: 'cu03', name: '컵 3', orientation: 'upright' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'검 9',orientation:'reversed'})}\n친정엄마 병간호하다가 돌아가셨어요. 죄책감이 자꾸 들어요.`,
    a: '검 9가 거꾸로 나왔어요 — 밤새 뒤척이던 마음이 이제 조금씩 밖으로 나오기 시작하는 카드예요. 그 죄책감, 혼자 안고 있지 않아도 돼요.' },
  { u: `${tag({name:'컵 3',orientation:'upright'})}\n다음 카드는요?`,
    a: '컵 3이에요. 함께 어울리며 슬픔을 나누는 모습인데, 지금 혼자보다 곁에 있는 사람들과 이 마음을 나눠도 괜찮다는 뜻이에요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '태양으로 마무리돼요. 밤새 뒤척이던 죄책감이 조금씩 밖으로 나오고, 곁의 사람들과 나누는 흐름을 지나면, 이 카드는 그 시간 동안 최선을 다했다는 걸 다시 비춰줘요. 자책보다 스스로를 다독여도 될 시기예요.' },
]);

// ---- ko-0446 boundary_setting: 완드 7(up) / 검 4(up) / 힘(up) ----
buildRecord('ko-0446', 'boundary_setting', [
  { id: 'wa07', name: '완드 7', orientation: 'upright' },
  { id: 'sw04', name: '검 4', orientation: 'upright' },
  { id: 'ar08', name: '힘', orientation: 'upright' },
], [
  { u: `${tag({name:'완드 7',orientation:'upright'})}\n친한 언니가 자꾸 무리한 부탁을 해요. 거절하는 법을 좀 보고 싶어요.`,
    a: '완드 7이 나왔어요 — 높은 곳에서 여러 도전을 막아내는 카드예요. 지금 당신에게 필요한 건 자기 자리를 지키는 힘이에요.' },
  { u: `${tag({name:'검 4',orientation:'upright'})}\n다음 카드요.`,
    a: '검 4예요. 잠시 멈춰 숨 고르는 카드라, 거절하기 전에 스스로 마음을 정리할 시간이 필요하다는 뜻이에요.' },
  { u: `${tag({name:'힘',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '힘 카드로 마무리돼요. 자리를 지키려는 마음, 숨 고르며 정리한 마음을 지나, 이 카드는 부드럽지만 단호하게 선을 그을 수 있는 힘이 이미 당신 안에 있다고 말해줘요.' },
]);

// ---- ko-0447 self_growth: 은둔자(rev) / 컵 7(rev) / 별(up) ----
buildRecord('ko-0447', 'self_growth', [
  { id: 'ar09', name: '은둔자', orientation: 'reversed' },
  { id: 'cu07', name: '컵 7', orientation: 'reversed' },
  { id: 'ar17', name: '별', orientation: 'upright' },
], [
  { u: `${tag({name:'은둔자',orientation:'reversed'})}\n번역가로 일하는데 요즘 제가 뭘 위해 사는지 모르겠어요. 3장으로 봐주세요.`,
    a: '은둔자가 거꾸로 나왔어요 — 혼자만의 시간이 오히려 고립처럼 느껴지고 있는 지금을 보여줘요.' },
  { u: `${tag({name:'컵 7',orientation:'reversed'})}\n다음 카드는요?`,
    a: '컵 7이 거꾸로 나왔어요. 여러 선택지 사이에서 흐릿하던 마음이 이제 하나씩 정리되기 시작하는 신호예요.' },
  { u: '그럼 지금 이 일을 계속해도 될까요?',
    a: '이 카드만으로 단정하긴 어렵지만, 적어도 흐릿함이 걷히고 있다는 건 스스로 방향을 찾아가는 중이라는 뜻이에요.' },
  { u: `${tag({name:'별',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '별로 마무리되네요. 고립감에서 시작해 흐릿함이 걷히는 흐름을 지나, 이 카드는 지금 느끼는 방황이 결국 희망 쪽으로 향하고 있다고 말해줘요.' },
]);

// ---- ko-0448 love_new: 컵 8(rev) / 검 6(up) / 달(rev) ----
buildRecord('ko-0448', 'love_new', [
  { id: 'cu08', name: '컵 8', orientation: 'reversed' },
  { id: 'sw06', name: '검 6', orientation: 'upright' },
  { id: 'ar18', name: '달', orientation: 'reversed' },
], [
  { u: `${tag({name:'컵 8',orientation:'reversed'})}\n소개팅 앱에서 만난 사람인데 연락 텀이 점점 길어져요. 흐름 좀 봐주실래요?`,
    a: '컵 8이 거꾸로 나왔어요 — 떠나려다 다시 돌아보는 모습이에요. 완전히 마음이 떠난 건 아니지만 흔들리고 있다는 뜻으로 보여요.' },
  { u: `${tag({name:'검 6',orientation:'upright'})}\n다음 카드요.`,
    a: '검 6이에요. 거친 물을 지나 더 잔잔한 곳으로 나아가는 카드라, 지금이 관계에서 다음 단계로 넘어가는 과도기일 수 있어요.' },
  { u: `${tag({name:'달',orientation:'reversed'})}\n마지막 카드도 봐주세요.`,
    a: '달이 거꾸로 나오며 마무리돼요. 흔들리던 마음, 과도기를 지나는 흐름 끝에, 이 카드는 안개가 걷히고 상황이 좀 더 명확해질 거라고 말해줘요. 조금만 더 지켜봐도 괜찮을 것 같아요.' },
]);

// ---- ko-0449 burnout_identity: 펜타클 4(rev) / 검 10(rev) / 태양(up) ----
buildRecord('ko-0449', 'burnout_identity', [
  { id: 'pe04', name: '펜타클 4', orientation: 'reversed' },
  { id: 'sw10', name: '검 10', orientation: 'reversed' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 4',orientation:'reversed'})}\n이 악물고 승진했는데 막상 하나도 안 기뻐요.`,
    a: '펜타클 4가 거꾸로 나왔어요 — 꽉 쥐고 있던 손이 풀리는 카드예요. 그토록 원했던 걸 손에 쥐고 나니, 사실 다른 게 더 중요했다는 걸 알게 된 것 같아요.' },
  { u: `${tag({name:'검 10',orientation:'reversed'})}\n다음 카드는요?`,
    a: '검 10이 거꾸로 나왔어요. 힘든 시기가 이제 끝나가고 회복이 시작되는 신호예요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 마무리돼요. 손에 쥔 것의 허탈함, 그리고 회복의 흐름 끝에, 이 카드는 진짜 기쁨을 다시 찾을 수 있다고 말해줘요. 다만 그게 승진 자체는 아닐 수도 있어요.' },
]);

// ---- ko-0450 friendship: 검 3(up) / 컵 4(rev) / 절제(up) ----
buildRecord('ko-0450', 'friendship', [
  { id: 'sw03', name: '검 3', orientation: 'upright' },
  { id: 'cu04', name: '컵 4', orientation: 'reversed' },
  { id: 'ar14', name: '절제', orientation: 'upright' },
], [
  { u: `${tag({name:'검 3',orientation:'upright'})}\n단톡방에서 저만 빼고 이야기가 오간 걸 알았어요. 상황을 좀 정리하고 싶어요.`,
    a: '검 3이 나왔어요 — 마음을 세 갈래로 찌르는 듯한 카드예요. 소외감이 그만큼 날카롭게 다가왔다는 뜻이에요.' },
  { u: `${tag({name:'컵 4',orientation:'reversed'})}\n다음 카드는요?`,
    a: '컵 4가 거꾸로 나왔어요. 무심하게 외면하던 마음이 이제 다시 주변을 돌아보기 시작하는 신호로 보여요.' },
  { u: '그럼 그 친구들한테 먼저 다가가도 될까요?',
    a: '지금 마음이 다시 열리고 있다면, 조심스럽게라도 먼저 말을 걸어볼 여지는 있어 보여요.' },
  { u: `${tag({name:'절제',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '절제로 마무리되네요. 날카로운 소외감에서 다시 열리는 마음을 지나, 이 카드는 서두르지 말고 차분히 균형을 찾아가라고 말해줘요. 관계를 완전히 끊기 전에 한 번 더 대화해볼 여지가 있어요.' },
]);

// ---- ko-0451 life_transition: 은둔자(up) / 달(up) / 태양(up) ----
buildRecord('ko-0451', 'life_transition', [
  { id: 'ar09', name: '은둔자', orientation: 'upright' },
  { id: 'ar18', name: '달', orientation: 'upright' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'은둔자',orientation:'upright'})}\n은퇴하고 나니 하루하루가 막막해요. 앞으로가 궁금해요.`,
    a: '은둔자가 나왔어요 — 등불 하나 들고 자기 길을 비추는 카드예요. 막막함 속에서도 스스로 답을 찾아가는 시기라는 뜻이에요.' },
  { u: `${tag({name:'달',orientation:'upright'})}\n다음 카드는요?`,
    a: '달이에요. 아직 앞이 또렷하게 보이지 않는 안갯속이지만, 그 불확실함도 지나가는 과정일 뿐이에요.' },
  { u: '언제쯤 또렷해질까요?',
    a: '정확한 시점은 카드도 알려주지 않지만, 조급해하지 않아도 서서히 풀릴 거라는 흐름이에요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 마무리되네요. 스스로 길을 비추던 시간, 안갯속을 지나온 흐름 끝에, 이 카드는 결국 밝고 만족스러운 날들이 기다리고 있다고 말해줘요.' },
]);

// ---- ko-0452 parenting_worry: 펜타클 10(up) / 검 4(rev) / 별(up) ----
buildRecord('ko-0452', 'parenting_worry', [
  { id: 'pe10', name: '펜타클 10', orientation: 'upright' },
  { id: 'sw04', name: '검 4', orientation: 'reversed' },
  { id: 'ar17', name: '별', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 10',orientation:'upright'})}\n늦둥이를 키우는데 체력도 마음도 자꾸 부쳐요.`,
    a: '펜타클 10이 나왔어요 — 여러 세대가 함께 있는 카드예요. 지금 힘들어도, 이 시간이 결국 단단한 기반으로 남을 거예요.' },
  { u: `${tag({name:'검 4',orientation:'reversed'})}\n다음 카드요.`,
    a: '검 4가 거꾸로 나왔어요. 쉬고 싶어도 못 쉬는 지금의 상태를 그대로 보여주는 카드예요.' },
  { u: `${tag({name:'별',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '별로 마무리돼요. 단단한 기반과 쉬지 못하는 지침을 지나, 이 카드는 잠깐이라도 스스로를 돌볼 시간을 허락하라고 말해줘요. 그래야 계속 걸어갈 수 있어요.' },
]);

// ---- ko-0453 unresolved_closure: 검 3(rev) / 컵 9(up) / 세계(up) ----
buildRecord('ko-0453', 'unresolved_closure', [
  { id: 'sw03', name: '검 3', orientation: 'reversed' },
  { id: 'cu09', name: '컵 9', orientation: 'upright' },
  { id: 'ar21', name: '세계', orientation: 'upright' },
], [
  { u: `${tag({name:'검 3',orientation:'reversed'})}\n전 배우자랑 이혼한 지 5년인데 왜 아직도 명절마다 생각나죠.`,
    a: '검 3이 거꾸로 나왔어요 — 아픔이 조금씩 아물어가는 카드예요. 완전히 잊은 게 아니라 서서히 회복 중이라는 신호일 수 있어요.' },
  { u: `${tag({name:'컵 9',orientation:'upright'})}\n다음 카드는요?`,
    a: '컵 9예요. 만족스럽게 팔짱을 낀 모습인데, 지금 삶에서 채워진 것들이 이미 많다는 뜻이에요.' },
  { u: `${tag({name:'세계',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '세계로 마무리되네요. 서서히 아물어가는 흐름, 이미 채워진 지금의 삶을 지나, 이 카드는 그 장이 사실 온전히 끝났다는 걸 다시 확인시켜줘요. 명절마다 떠오르는 건 그리움일 뿐, 미련은 아닐 수 있어요.' },
]);

// ---- ko-0454 money_practical: 펜타클 5(rev) / 펜타클 8(up) / 절제(up) ----
buildRecord('ko-0454', 'money_practical', [
  { id: 'pe05', name: '펜타클 5', orientation: 'reversed' },
  { id: 'pe08', name: '펜타클 8', orientation: 'upright' },
  { id: 'ar14', name: '절제', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 5',orientation:'reversed'})}\n대출 갚느라 숨만 쉬고 사는 것 같아요. 흐름 좀 봐주세요.`,
    a: '펜타클 5가 거꾸로 나왔어요 — 춥고 힘들던 시기가 서서히 끝나가고 있다는 뜻이에요.' },
  { u: `${tag({name:'펜타클 8',orientation:'upright'})}\n다음 카드요.`,
    a: '펜타클 8이에요. 한 땀 한 땀 꾸준히 쌓아가는 카드라, 지금의 갚는 과정이 헛된 게 아니라 실력처럼 쌓이고 있다는 뜻이에요.' },
  { u: `${tag({name:'절제',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '절제로 마무리돼요. 힘든 시기가 끝나가는 흐름, 꾸준히 쌓아가는 과정을 지나, 이 카드는 지금처럼 균형 잡힌 속도를 유지하면 결국 숨통이 트일 거라고 말해줘요.' },
]);

// ---- ko-0455 study_exam: 은둔자(up) / 검 8(rev) / 태양(up) ----
buildRecord('ko-0455', 'study_exam', [
  { id: 'ar09', name: '은둔자', orientation: 'upright' },
  { id: 'sw08', name: '검 8', orientation: 'reversed' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'은둔자',orientation:'upright'})}\n대학원 시험 준비 중인데 이 길이 맞는지도 모르겠어요.`,
    a: '은둔자가 나왔어요 — 혼자 깊이 들여다보는 시간이라는 뜻이에요. 답을 서두르기보다 지금은 스스로에게 묻는 시기예요.' },
  { u: `${tag({name:'검 8',orientation:'reversed'})}\n다음 카드는요?`,
    a: '검 8이 거꾸로 나왔어요. 스스로 갇혔다고 느꼈던 생각의 틀에서 벗어나기 시작하는 신호예요.' },
  { u: '그럼 이 길이 맞다는 뜻인가요?',
    a: '맞다 틀리다보다, 지금까지 의심하며 갇혀있던 생각에서 벗어나 좀 더 자유롭게 판단할 수 있게 됐다는 뜻에 가까워요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 마무리되네요. 스스로 깊이 묻던 시간, 갇힌 생각에서 벗어나는 흐름을 지나, 이 카드는 결국 밝은 결과가 기다리고 있다고 말해줘요.' },
]);

// ---- ko-0456 breakup_grief: 컵 10(rev) / 검 3(up) / 별(up) ----
buildRecord('ko-0456', 'breakup_grief', [
  { id: 'cu10', name: '컵 10', orientation: 'reversed' },
  { id: 'sw03', name: '검 3', orientation: 'upright' },
  { id: 'ar17', name: '별', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 10',orientation:'reversed'})}\n10년 만난 사람이랑 헤어졌는데 이제야 실감이 나요.`,
    a: '컵 10이 거꾸로 나왔어요 — 그려왔던 큰 그림이 깨진 지금을 그대로 보여줘요. 10년의 시간이 무너진 게 실감 나는 건 당연해요.' },
  { u: `${tag({name:'검 3',orientation:'upright'})}\n다음 카드는요?`,
    a: '검 3이에요. 마음이 찔린 채로 솔직하게 아파하는 카드라, 지금 느끼는 슬픔을 억누르지 않아도 된다는 뜻이에요.' },
  { u: `${tag({name:'별',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '별로 마무리돼요. 무너진 그림, 그리고 솔직하게 아파하는 흐름을 지나, 이 카드는 이 슬픔 끝에 다시 희망이 자리 잡을 거라고 말해줘요. 10년의 시간이 헛된 건 아니었어요.' },
]);

// ---- ko-0457 decision_fork: 펜타클 2(up) / 검 7(rev) / 세계(up) ----
buildRecord('ko-0457', 'decision_fork', [
  { id: 'pe02', name: '펜타클 2', orientation: 'upright' },
  { id: 'sw07', name: '검 7', orientation: 'reversed' },
  { id: 'ar21', name: '세계', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 2',orientation:'upright'})}\n지금 살던 동네에 남을지, 새 동네로 이사갈지 고민이에요.`,
    a: '남는 쪽엔 펜타클 2가 나왔어요 — 두 가지를 저글링하듯 균형을 잡는 카드예요. 익숙함과 변화 사이에서 계속 저울질하게 될 거예요.' },
  { u: `${tag({name:'검 7',orientation:'reversed'})}\n이사 가는 쪽은요?`,
    a: '검 7이 거꾸로 나왔어요. 몰래 도망치듯 떠나는 게 아니라, 솔직하게 마음을 정리하고 떠나는 선택이 될 거라는 뜻이에요.' },
  { u: `${tag({name:'세계',orientation:'upright'})}\n뭐가 더 중요한지 봐주세요.`,
    a: '세계 카드가 답해요. 저울질보다, 지금 있는 자리에서 이미 하나의 장을 완성했다고 느끼는지가 더 중요해요. 완성됐다고 느낀다면, 새로운 장을 열어도 좋은 시기예요.' },
]);

// ---- ko-0458 creative_block: 검 4(up) / 컵 6(rev) / 태양(up) ----
buildRecord('ko-0458', 'creative_block', [
  { id: 'sw04', name: '검 4', orientation: 'upright' },
  { id: 'cu06', name: '컵 6', orientation: 'reversed' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'검 4',orientation:'upright'})}\n브랜드 런칭 준비하는데 아이디어가 하나도 안 떠올라요.`,
    a: '검 4가 나왔어요 — 조용히 누워 쉬는 카드예요. 지금 필요한 건 더 많은 아이디어가 아니라, 잠깐의 휴식일 수 있어요.' },
  { u: `${tag({name:'컵 6',orientation:'reversed'})}\n다음 카드는요?`,
    a: '컵 6이 거꾸로 나왔어요. 과거 방식에 너무 매여있는 것도 막힘의 이유일 수 있어요, 새로운 시선이 필요해요.' },
  { u: '그럼 예전 방식을 다 버려야 할까요?',
    a: '다 버릴 필요는 없어요, 다만 익숙한 틀에서 한 발짝 벗어나 보는 정도면 충분할 수 있어요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n마지막 카드 봐주세요.`,
    a: '태양으로 마무리되네요. 쉬어가려던 마음, 낡은 방식에서 벗어나려던 흐름을 지나, 이 카드는 곧 밝고 선명한 아이디어가 떠오를 거라고 말해줘요.' },
]);

// ---- ko-0459 return_visit: 태양(up) / 완드 3(up) / 세계(up) ----
buildRecord('ko-0459', 'return_visit', [
  { id: 'ar19', name: '태양', orientation: 'upright' },
  { id: 'wa03', name: '완드 3', orientation: 'upright' },
  { id: 'ar21', name: '세계', orientation: 'upright' },
], [
  { u: `${tag({name:'태양',orientation:'upright'})}\n저번에 번아웃 얘기했던 사람인데요, 요즘 조금씩 다시 즐거워지고 있어요.`,
    a: '태양이 나왔어요 — 그 얘기를 다시 들으니 정말 반가워요. 조금씩 즐거움을 되찾고 있다는 게 카드에도 그대로 보여요.' },
  { u: `${tag({name:'완드 3',orientation:'upright'})}\n다음 카드는요?`,
    a: '완드 3이에요. 저 멀리를 내다보는 카드라, 이제 눈앞의 회복을 넘어 더 앞으로 나아갈 준비가 됐다는 뜻이에요.' },
  { u: `${tag({name:'세계',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '세계로 마무리되네요. 되찾은 즐거움에서 더 먼 곳을 바라보는 흐름을 지나, 이 카드는 그때의 번아웃이 이제 완전히 하나의 매듭으로 잘 마무리됐다는 걸 보여줘요.' },
]);

// ---- ko-0499 love_new: 컵 에이스(up) / 완드의 시종(up) / 연인(up) ----
buildRecord('ko-0499', 'love_new', [
  { id: 'cuac', name: '컵 에이스', orientation: 'upright' },
  { id: 'wapa', name: '완드의 시종', orientation: 'upright' },
  { id: 'ar06', name: '연인', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 에이스',orientation:'upright'})}\n소개팅에서 오랜만에 좋은 느낌을 받은 사람이 있어요. 세 장으로 흐름 좀 봐줄래요?`,
    a: '컵 에이스가 나왔어요 — 손 위에 넘치는 잔이 떠오르는 카드예요. 마음이 새롭게 열리는 순간을 그대로 보여줘요.' },
  { u: `${tag({name:'완드의 시종',orientation:'upright'})}\n다음 카드는요?`,
    a: '완드의 시종이에요. 호기심 가득한 눈으로 불꽃을 바라보는 카드라, 지금의 설렘을 가볍게 따라가 봐도 좋다는 뜻이에요.' },
  { u: `${tag({name:'연인',orientation:'upright'})}\n마지막 카드도 봐주세요.`,
    a: '연인 카드로 마무리되네요. 새롭게 열린 마음, 그리고 그 설렘을 따라가려는 흐름 끝에, 이 카드는 진심으로 서로를 향해 다가가 볼 만한 관계라고 말해줘요.' },
]);

// ---- ko-0500 career_decision: 펜타클의 왕(up) / 완드의 기사(up) / 정의(up) ----
buildRecord('ko-0500', 'career_decision', [
  { id: 'peki', name: '펜타클의 왕', orientation: 'upright' },
  { id: 'wakn', name: '완드의 기사', orientation: 'upright' },
  { id: 'ar11', name: '정의', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클의 왕',orientation:'upright'})}\n대기업 안정적인 자리랑 스타트업 도전 중에 고민이에요. 두 선택지로 봐주세요.`,
    a: '대기업 자리엔 펜타클의 왕이 나왔어요 — 단단히 쌓아온 것 위에 앉은 카드예요. 안정과 신뢰를 뜻해요.' },
  { u: `${tag({name:'완드의 기사',orientation:'upright'})}\n스타트업 쪽은요?`,
    a: '완드의 기사가 나왔어요. 열정을 품고 거침없이 달려나가는 카드라, 도전 속에서 살아있는 느낌을 받을 수 있어요.' },
  { u: `${tag({name:'정의',orientation:'upright'})}\n뭐가 더 중요한지 봐주세요.`,
    a: '정의 카드가 답해요. 안정과 열정 중 어느 게 정답이라기보다, 지금 스스로에게 더 공정하게 느껴지는 선택이 어느 쪽인지를 물어보라고 말해줘요.' },
]);

// ---- ko-0501 reconciliation: 검 7(rev) / 매달린 사람(up) / 펜타클 6(up) ----
buildRecord('ko-0501', 'reconciliation', [
  { id: 'sw07', name: '검 7', orientation: 'reversed' },
  { id: 'ar12', name: '매달린 사람', orientation: 'upright' },
  { id: 'pe06', name: '펜타클 6', orientation: 'upright' },
], [
  { u: `${tag({name:'검 7',orientation:'reversed'})}\n이혼을 진지하게 고민 중이에요. 상황과 장애물, 조언으로 봐줄 수 있어요?`,
    a: '상황 자리에 검 7이 거꾸로 나왔어요 — 더 이상 숨기지 않고 솔직하게 마주하려는 지금을 보여줘요.' },
  { u: `${tag({name:'매달린 사람',orientation:'upright'})}\n장애물은요?`,
    a: '매달린 사람이에요. 결정을 미루고 정지된 상태로 오래 머물러 있는 게 장애물로 보여요.' },
  { u: `${tag({name:'펜타클 6',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '펜타클 6이에요. 주고받는 균형을 뜻하는 카드라, 지금 이 관계에서 서로 얼마나 공평하게 주고받고 있는지를 솔직하게 따져보라고 말해주고 있어요.' },
]);

// ---- ko-0502 family_conflict: 검 5(up) / 컵 7(rev) / 절제(up) ----
buildRecord('ko-0502', 'family_conflict', [
  { id: 'sw05', name: '검 5', orientation: 'upright' },
  { id: 'cu07', name: '컵 7', orientation: 'reversed' },
  { id: 'ar14', name: '절제', orientation: 'upright' },
], [
  { u: `${tag({name:'검 5',orientation:'upright'})}\n할머니 장례를 치르면서 형제들이랑 절차 문제로 크게 부딪혔어요. 과거-현재-미래로 봐주세요.`,
    a: '과거 자리에 검 5가 나왔어요 — 슬픔 속에서도 서로 이기려 들었던 순간이 담겨 있어요.' },
  { u: `${tag({name:'컵 7',orientation:'reversed'})}\n현재는요?`,
    a: '컵 7이 거꾸로 나왔어요. 서로의 입장이 조금씩 명확해지고 있는 지금이에요.' },
  { u: `${tag({name:'절제',orientation:'upright'})}\n미래도 봐주세요.`,
    a: '절제 카드예요. 앞으로는 서로 감정이 아니라 균형 잡힌 대화로 풀어갈 수 있는 방향으로 흘러갈 거라고 말해줘요.' },
]);

// ---- ko-0503 self_growth: 교황(up) / 검 2(rev) / 바보(up) ----
buildRecord('ko-0503', 'self_growth', [
  { id: 'ar05', name: '교황', orientation: 'upright' },
  { id: 'sw02', name: '검 2', orientation: 'reversed' },
  { id: 'ar00', name: '바보', orientation: 'upright' },
], [
  { u: `${tag({name:'교황',orientation:'upright'})}\n가족들이랑 종교나 가치관이 너무 달라서 명절마다 멀어지는 기분이에요. 상황-장애물-조언으로 봐줘요.`,
    a: '상황 자리에 교황이 나왔어요 — 전통적인 믿음과 체계를 뜻하는 카드예요. 가족이 지켜온 틀이 지금 당신과 부딪히고 있는 모습이에요.' },
  { u: `${tag({name:'검 2',orientation:'reversed'})}\n장애물은요?`,
    a: '검 2가 거꾸로 나왔어요. 오래 미뤄온 대화, 서로 눈을 피하며 결정을 미루는 게 장애물로 보여요.' },
  { u: `${tag({name:'바보',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '바보 카드예요. 정해진 틀 없이, 있는 그대로의 자기 모습으로 가볍게 대화를 시작해보라고 말해주고 있어요.' },
]);

// ---- ko-0504 decision_fork: 컵 3(up) / 은둔자(up) / 태양(up) ----
buildRecord('ko-0504', 'decision_fork', [
  { id: 'cu03', name: '컵 3', orientation: 'upright' },
  { id: 'ar09', name: '은둔자', orientation: 'upright' },
  { id: 'ar19', name: '태양', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 3',orientation:'upright'})}\n해외 대학원이랑 국내 취업 중에 고민이에요. 두 갈래로 봐줄래요?`,
    a: '해외 대학원 쪽엔 컵 3이 나왔어요 — 새로운 사람들과 함께 어울리며 배우는 기쁨을 뜻하는 카드예요.' },
  { u: `${tag({name:'은둔자',orientation:'upright'})}\n국내 취업 쪽은요?`,
    a: '은둔자가 나왔어요. 혼자만의 시간을 가지며 착실히 실력을 쌓아가는 흐름으로 보여요.' },
  { u: `${tag({name:'태양',orientation:'upright'})}\n뭐가 더 중요한지 봐주세요.`,
    a: '태양 카드가 답해요. 어느 쪽이든 결국 밝은 결과로 이어질 거예요 — 함께 배우고 싶은지, 혼자 단단히 쌓고 싶은지, 지금 더 끌리는 방식을 골라도 괜찮아요.' },
]);

// ---- ko-0505 love_existing: 펜타클 7(rev) / 검의 여왕(up) / 여황제(up) ----
buildRecord('ko-0505', 'love_existing', [
  { id: 'pe07', name: '펜타클 7', orientation: 'reversed' },
  { id: 'swqu', name: '검의 여왕', orientation: 'upright' },
  { id: 'ar03', name: '여황제', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 7',orientation:'reversed'})}\n결혼 전 상견례 준비로 스트레스가 너무 심해요. 상황-장애물-조언으로 봐주세요.`,
    a: '상황 자리에 펜타클 7이 거꾸로 나왔어요 — 들인 노력에 비해 결과가 보이지 않아 조급해진 마음이에요.' },
  { u: `${tag({name:'검의 여왕',orientation:'upright'})}\n장애물은요?`,
    a: '검의 여왕이에요. 너무 완벽하게 다 갖추려는 마음 자체가 오히려 장애물로 작용하고 있어요.' },
  { u: `${tag({name:'여황제',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '여황제 카드예요. 완벽함보다 따뜻하고 편안한 분위기를 만드는 데 집중해보라고 말해주고 있어요. 결국 그게 더 좋은 인상을 남길 거예요.' },
]);

// ---- ko-0506 grief_loss: 컵 4(up) / 달(up) / 별(rev) ----
buildRecord('ko-0506', 'grief_loss', [
  { id: 'cu04', name: '컵 4', orientation: 'upright' },
  { id: 'ar18', name: '달', orientation: 'upright' },
  { id: 'ar17', name: '별', orientation: 'reversed' },
], [
  { u: `${tag({name:'컵 4',orientation:'upright'})}\n할아버지 기일이 다가올 때마다 슬픔이 다시 올라와요. 과거-현재-미래로 봐줄래요?`,
    a: '과거 자리에 컵 4가 나왔어요 — 눈앞에 놓인 것들을 미처 다 받아들이지 못했던 그때의 마음이에요.' },
  { u: `${tag({name:'달',orientation:'upright'})}\n현재는요?`,
    a: '달이에요. 지금도 여전히 감정이 안갯속처럼 뿌옇게 다가오는 시기라는 뜻이에요.' },
  { u: `${tag({name:'별',orientation:'reversed'})}\n미래도 봐주세요.`,
    a: '별이 거꾸로 나왔어요. 희망을 억지로 찾으려 하지 않아도, 시간이 지나면 자연스럽게 마음이 편안해질 거예요. 기일마다 올라오는 슬픔은 사랑이 남긴 흔적이지 극복해야 할 문제가 아니에요.' },
]);

// ---- ko-0507 friendship: 검 4(up) / 컵 2(rev) / 심판(up) ----
buildRecord('ko-0507', 'friendship', [
  { id: 'sw04', name: '검 4', orientation: 'upright' },
  { id: 'cu02', name: '컵 2', orientation: 'reversed' },
  { id: 'ar20', name: '심판', orientation: 'upright' },
], [
  { u: `${tag({name:'검 4',orientation:'upright'})}\n예전에 크게 싸우고 멀어진 친구랑 화해해볼까 고민 중이에요. 상황-장애물-조언으로 봐주세요.`,
    a: '상황 자리에 검 4가 나왔어요 — 오랫동안 말없이 거리를 두고 지내온 지금을 보여줘요.' },
  { u: `${tag({name:'컵 2',orientation:'reversed'})}\n장애물은요?`,
    a: '컵 2가 거꾸로 나왔어요. 서로 마음의 균형이 어긋나 있어서, 먼저 다가가기가 조심스러운 게 장애물이에요.' },
  { u: `${tag({name:'심판',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '심판 카드예요. 지난 일을 다시 불러내 평가하기보다, 지금이라도 솔직하게 마음을 전할 부름의 순간이라고 말해주고 있어요.' },
]);

// ---- ko-0508 money_practical: 펜타클 4(rev) / 펜타클 10(up) / 운명의 수레바퀴(up) ----
buildRecord('ko-0508', 'money_practical', [
  { id: 'pe04', name: '펜타클 4', orientation: 'reversed' },
  { id: 'pe10', name: '펜타클 10', orientation: 'upright' },
  { id: 'ar10', name: '운명의 수레바퀴', orientation: 'upright' },
], [
  { u: `${tag({name:'펜타클 4',orientation:'reversed'})}\n전세 계약을 연장할지 무리해서라도 집을 살지 고민이에요. 두 선택지로 봐주세요.`,
    a: '전세 연장 쪽엔 펜타클 4가 거꾸로 나왔어요 — 움켜쥔 손이 풀리는 카드예요. 지금의 안전함에 너무 집착하지 않아도 된다는 뜻이에요.' },
  { u: `${tag({name:'펜타클 10',orientation:'upright'})}\n집을 사는 쪽은요?`,
    a: '펜타클 10이에요. 오래도록 남는 기반을 뜻하는 카드라, 무리해서라도 도전할 만한 가치가 있어 보여요.' },
  { u: `${tag({name:'운명의 수레바퀴',orientation:'upright'})}\n뭐가 더 중요한지 봐주세요.`,
    a: '운명의 수레바퀴가 답해요. 지금 흐름이 바뀌는 시점이라, 안전함에 머무르기보다 한 걸음 나아가는 쪽이 더 큰 흐름과 맞아떨어질 수 있어요.' },
]);

// ---- ko-0509 burnout_identity: 완드 10(up) / 검 9(up) / 은둔자(rev) ----
buildRecord('ko-0509', 'burnout_identity', [
  { id: 'wa10', name: '완드 10', orientation: 'upright' },
  { id: 'sw09', name: '검 9', orientation: 'upright' },
  { id: 'ar09', name: '은둔자', orientation: 'reversed' },
], [
  { u: `${tag({name:'완드 10',orientation:'upright'})}\n승진했는데 기쁘기보다 오히려 허탈해요. 상황-장애물-조언으로 봐줄래요?`,
    a: '상황 자리에 완드 10이 나왔어요 — 무거운 짐을 잔뜩 짊어진 채 걷는 카드예요. 승진이 짐처럼 느껴지고 있는 것 같아요.' },
  { u: `${tag({name:'검 9',orientation:'upright'})}\n장애물은요?`,
    a: '검 9예요. 밤새 뒤척이며 자책하는 카드라, 스스로에게 너무 가혹한 잣대를 들이대고 있는 게 장애물이에요.' },
  { u: `${tag({name:'은둔자',orientation:'reversed'})}\n조언도 봐주세요.`,
    a: '은둔자가 거꾸로 나왔어요. 혼자 끙끙 앓지 말고, 지금 느끼는 허탈함을 누군가에게 솔직히 털어놓아 보라고 말해주고 있어요.' },
]);

// ---- ko-0510 boundary_setting: 완드 8(rev) / 검 3(up) / 황제(up) ----
buildRecord('ko-0510', 'boundary_setting', [
  { id: 'wa08', name: '완드 8', orientation: 'reversed' },
  { id: 'sw03', name: '검 3', orientation: 'upright' },
  { id: 'ar04', name: '황제', orientation: 'upright' },
], [
  { u: `${tag({name:'완드 8',orientation:'reversed'})}\n부모님이 명절마다 결혼 얘기를 꺼내셔서 만날 때마다 긴장돼요. 상황-장애물-조언으로 봐주세요.`,
    a: '상황 자리에 완드 8이 거꾸로 나왔어요 — 같은 이야기가 계속 반복되며 정체된 느낌을 주는 카드예요.' },
  { u: `${tag({name:'검 3',orientation:'upright'})}\n장애물은요?`,
    a: '검 3이에요. 그 이야기를 들을 때마다 마음이 찔리는 것 같은 아픔이 장애물로 나와요.' },
  { u: `${tag({name:'황제',orientation:'upright'})}\n조언도 봐주세요.`,
    a: '황제 카드예요. 방어적으로 피하기보다, 이 주제에 대한 당신의 입장을 분명하고 단단하게 말해보라고 말해주고 있어요.' },
]);

// ---- ko-0511 parenting_worry: 컵 9(up) / 검 10(rev) / 절제(up) ----
buildRecord('ko-0511', 'parenting_worry', [
  { id: 'cu09', name: '컵 9', orientation: 'upright' },
  { id: 'sw10', name: '검 10', orientation: 'reversed' },
  { id: 'ar14', name: '절제', orientation: 'upright' },
], [
  { u: `${tag({name:'컵 9',orientation:'upright'})}\n아이가 요즘 부쩍 반항이 심해요. 과거-현재-미래로 봐줄래요?`,
    a: '과거 자리에 컵 9가 나왔어요 — 만족스럽고 평온했던 시절을 뜻하는 카드예요.' },
  { u: `${tag({name:'검 10',orientation:'reversed'})}\n현재는요?`,
    a: '검 10이 거꾸로 나왔어요. 힘들었던 갈등의 바닥을 지나 이제 조금씩 회복되어 가는 지금이에요.' },
  { u: `${tag({name:'절제',orientation:'upright'})}\n미래도 봐주세요.`,
    a: '절제 카드예요. 앞으로는 아이와 감정적으로 부딪히기보다, 조금씩 균형을 맞춰가며 대화할 수 있는 사이가 될 거라고 말해줘요.' },
]);

// write back
const outLines = recs.map(r => JSON.stringify(r));
fs.writeFileSync(PILOT, outLines.join('\n') + '\n');
console.log('done, wrote', PILOT);
