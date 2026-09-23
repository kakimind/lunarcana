const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const PERSONA = fs.readFileSync(path.join(ROOT, 'training/persona/system_prompt.md'), 'utf8');
const NAMES = require(path.join(ROOT, 'training/data/card_names_ko.json'));
const OW = { upright: '정방향', reversed: '역방향' };

function tag(card) {
  return `[뽑힌 카드: ${NAMES[card.id]}(${OW[card.orientation]})]`;
}

// build messages for one celtic record
function build(id, topic, opening, steps, closing) {
  const messages = [{ role: 'system', content: PERSONA }];
  const cards = [];
  let firstUser = true;
  steps.forEach((s, i) => {
    cards.push({ id: s.card.id, name: NAMES[s.card.id], orientation: s.card.orientation });
    let userText = firstUser ? `${tag(s.card)}\n${opening}` : `${tag(s.card)}\n${s.userPrompt || '다음 카드요.'}`;
    firstUser = false;
    messages.push({ role: 'user', content: userText });
    const isLast = i === steps.length - 1;
    messages.push({ role: 'assistant', content: isLast ? s.text + ' ' + closing : s.text });
    (s.followups || []).forEach(f => {
      messages.push({ role: 'user', content: f.q });
      messages.push({ role: 'assistant', content: f.a });
    });
  });
  const turn_count = (messages.length - 1) / 2;
  return { id, language: 'ko', topic, turn_count, cards, messages };
}

const records = [];

// ---------------- ko-0346 : NEW premise, 동업 돈 문제 ----------------
records.push(build('ko-0346', 'celtic_cross_deep',
  '친구랑 동업했다가 돈 문제로 사이가 완전히 틀어졌어요. 그 뒤로 다른 관계들도 다 조심스러워졌고요. 열 장으로 깊게 봐주실 수 있어요?',
  [
    { card: { id: 'sw10', orientation: 'upright' }, text: '지금 상황의 중심에 검 10이 있어요. 이미 벌어질 만큼 벌어진 일이라는 뜻이에요 — 더 나빠질까 봐 조마조마할 필요는 없어요, 바닥은 이미 지났으니까.' },
    { card: { id: 'wa05', orientation: 'reversed' }, text: '이걸 가로지르는 건 완드 5의 역방향, 다툼이 잦아드는 흐름이에요. 돈 문제로 부딪히던 기세가 조금씩 꺾이고 있다는 신호예요.',
      followups: [{ q: '진짜 꺾이고 있는 걸까요? 요즘도 문자 보면 손이 떨려요.', a: '몸이 먼저 반응하는 건 당연해요, 아직 마음이 정리 안 됐다는 뜻이지 흐름이 틀렸다는 뜻은 아니에요.' }] },
    { card: { id: 'ar13', orientation: 'upright' }, text: '기반에는 죽음 카드가 있어요. 이 동업 자체가, 그리고 그 사람과의 예전 관계가 이미 끝났다는 걸 마음 한켠에서는 알고 계셨을 거예요.' },
    { card: { id: 'cu07', orientation: 'reversed' }, text: '최근 과거는 컵 7의 역방향 — 너무 많은 선택지에 흔들리던 시기가 지나가고 있어요. 뭘 믿어야 할지 몰라 헤매던 시간이었을 거예요.' },
    { card: { id: 'ar18', orientation: 'upright' }, text: '가능한 미래에는 달 카드가 있어요. 아직 안개가 걷히지 않은 구간이 남아 있다는 뜻이에요 — 지금 당장 명확한 답을 기대하지 않으셔도 돼요.',
      followups: [{ q: '언제쯤 안개가 걷힐까요?', a: '그 속도는 저도 정확히는 몰라요, 다만 다음 카드들이 그 방향을 조금 더 보여줄 거예요.' }] },
    { card: { id: 'wa09', orientation: 'reversed' }, text: '다가올 가까운 미래는 완드 9의 역방향, 방어 태세를 좀 내려놓게 되는 시기예요. 모든 사람을 의심하지 않아도 되는 순간이 올 거예요.' },
    { card: { id: 'peac', orientation: 'upright' }, text: '지금 당신의 태도를 보여주는 건 펜타클 에이스예요. 손해는 봤지만, 다시 뭔가를 새로 시작할 씨앗은 여전히 쥐고 계세요.',
      followups: [{ q: '다시 뭘 시작할 마음이 안 생겨요.', a: '지금 당장 시작하라는 뜻이 아니에요, 씨앗이 있다는 것만 알아두셔도 충분해요.' }] },
    { card: { id: 'ar11', orientation: 'upright' }, text: '외부 영향에는 정의 카드가 있어요. 주변 사람들도, 혹은 마음 한구석에서도, 이 일을 공정하게 정리하고 싶어하는 힘이 작용하고 있어요.' },
    { card: { id: 'ar17', orientation: 'upright' }, text: '희망과 두려움 자리에는 별이 있어요. 다시 누군가를 믿을 수 있을까 하는 희망과 두려움이 같은 카드 안에 겹쳐 있는 거예요.',
      followups: [{ q: '다시 사람을 믿는 게 가능할까요?', a: '가능해요, 다만 이번엔 처음보다 조심스럽게, 천천히 확인하면서 믿게 되실 거예요.' }] },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막 자리에 세계 카드가 나왔어요. 이 동업의 매듭이 완전히 닫히고, 다음 관계는 다른 방식으로 시작될 거라는 뜻이에요.' },
  ],
  '검 10에서 시작해 세계로 끝나는 흐름을 보면, 이미 끝난 일을 억지로 붙들고 있던 시간이 이제 정말 매듭지어지는 것 같아요. 완드 5와 별이 말해주듯, 다음 관계는 이번보다 신중하게, 그리고 조금 더 단단하게 시작될 거예요.'
));

// ---------------- ko-0406 : 이직 후 인간관계/자존감/방향성 ----------------
records.push(build('ko-0406', 'celtic_cross_deep',
  '이직하고 나서 인간관계도, 자존감도, 방향성도 다 흔들리는 느낌이에요. 제대로 된 켈틱크로스로 깊게 봐줄 수 있어요?',
  [
    { card: { id: 'ar15', orientation: 'reversed' }, text: '중심에 악마의 역방향이 있어요. 스스로를 옭아매던 생각의 고리에서 조금씩 풀려나오고 있다는 뜻이에요.' },
    { card: { id: 'swac', orientation: 'upright' }, text: '이걸 가로지르는 건 검 에이스, 아주 또렷한 생각 하나가 이 혼란을 가르고 있어요. 그게 뭔지 스스로 이미 눈치채고 계실 것 같아요.',
      followups: [{ q: '어떤 생각인지 저도 잘 모르겠어요.', a: '지금 당장 언어로 정리 안 돼도 괜찮아요, 다음 카드들을 따라가다 보면 조금씩 형태가 잡힐 거예요.' }] },
    { card: { id: 'cu10', orientation: 'upright' }, text: '기반에는 컵 10이 있어요. 예전 직장에서 느꼈던 안정감과 소속감이 은근히 그리운 마음이 깔려 있어요.' },
    { card: { id: 'wa04', orientation: 'reversed' }, text: '최근 과거는 완드 4의 역방향, 새 자리에 아직 제대로 자리 잡지 못한 채 떠 있던 시기예요.' },
    { card: { id: 'ar13', orientation: 'upright' }, text: '가능한 미래에는 죽음 카드가 있어요. 예전 방식으로 인정받으려던 태도 자체를 내려놓게 될 것 같아요.',
      followups: [{ q: '내려놓으면 뭐가 남나요?', a: '지금 여기서 다시 쌓아가는 자존감이요, 예전 자리에서 빌려온 게 아니라 이 자리에서 직접 만든 것이요.' }] },
    { card: { id: 'pe02', orientation: 'reversed' }, text: '다가올 가까운 미래는 펜타클 2의 역방향 — 여러 역할 사이에서 균형을 잡느라 잠깐 휘청일 수 있어요, 오래가진 않을 거예요.' },
    { card: { id: 'ar19', orientation: 'upright' }, text: '지금 당신의 태도에는 태양 카드가 있어요. 겉으로는 흔들려 보여도, 속에는 이 변화를 밝게 받아들이려는 힘이 꽤 크게 자리하고 있어요.' },
    { card: { id: 'swqu', orientation: 'reversed' }, text: '외부 영향은 검의 여왕 역방향이에요. 누군가의 날카로운 평가나 비교가 자존감을 갉아먹는 요인이 되고 있는 것 같아요.',
      followups: [{ q: '그 사람 신경 안 쓰려고 해도 자꾸 신경 쓰여요.', a: '그 말이 자꾸 맴도는 건 이상한 게 아니에요, 다만 그 평가가 당신 전체를 정의하진 않는다는 것만 기억해두세요.' }] },
    { card: { id: 'ar17', orientation: 'upright' }, text: '희망과 두려움 자리에는 별이 있어요. 이 자리에서 다시 인정받을 수 있을까 하는 희망과 두려움이 함께 있어요.' },
    { card: { id: 'ar21', orientation: 'reversed' }, text: '마지막에 세계의 역방향이 나왔어요. 아직 완전히 매듭지어지지 않았다는 뜻이에요 — 조금 더 시간이 필요한 구간이에요.' },
  ],
  '악마에서 시작해 아직 열려 있는 세계로 끝나는 흐름을 보면, 이 변화는 아직 진행 중이에요. 검 에이스와 태양이 보여주듯, 이미 방향은 또렷하게 잡혀 있고, 자존감도 이 자리에서 새로 다시 쌓이고 있는 중이에요.'
));

// ---------------- ko-0466 : 일도 관계도 꼬여있음 ----------------
records.push(build('ko-0466', 'celtic_cross_deep',
  '요즘 일도 관계도 다 꼬여있는 느낌이에요. 켈틱크로스로 제대로 봐줄 수 있어요?',
  [
    { card: { id: 'ar18', orientation: 'upright' }, text: '중심에 달 카드가 있어요. 지금 상황이 명확하게 안 보이는 게 당연해요 — 원래 이 구간은 안개 속을 지나는 시기니까요.' },
    { card: { id: 'sw02', orientation: 'reversed' }, text: '가로지르는 카드는 검 2의 역방향, 계속 미뤄오던 결정을 이제는 마주해야 한다는 신호예요.',
      followups: [{ q: '어떤 결정을 말하는 건지 감이 안 와요.', a: '지금 확실히 안 와도 괜찮아요, 두 개 중 하나를 계속 미뤄온 게 있다면 그거예요.' }] },
    { card: { id: 'ar09', orientation: 'upright' }, text: '기반에는 은둔자가 있어요. 혼자 조용히 생각할 시간을 충분히 갖지 못한 채 여기까지 온 것 같아요.' },
    { card: { id: 'cu10', orientation: 'reversed' }, text: '최근 과거는 컵 10의 역방향, 겉으로는 괜찮아 보이는 관계 안에서도 뭔가 어긋나 있던 시기예요.' },
    { card: { id: 'wa05', orientation: 'upright' }, text: '가능한 미래에는 완드 5가 있어요. 크고 작은 부딪힘이 한 번은 표면으로 올라올 수 있어요, 나쁜 신호는 아니에요.',
      followups: [{ q: '부딪히는 게 왜 나쁜 신호가 아니에요?', a: '눌러뒀던 게 드러나야 진짜로 풀 수 있거든요, 덮어두기만 하면 계속 꼬인 채로 남으니까요.' }] },
    { card: { id: 'pe07', orientation: 'reversed' }, text: '다가올 가까운 미래는 펜타클 7의 역방향 — 그동안 들인 노력이 헛수고처럼 느껴질 수 있지만, 아직 결과를 판단하기엔 일러요.' },
    { card: { id: 'ar16', orientation: 'upright' }, text: '지금 당신의 태도에는 탑이 있어요. 예전 방식이 무너지는 걸 두려워하기보다, 이미 받아들이기 시작하신 것 같아요.' },
    { card: { id: 'swqu', orientation: 'upright' }, text: '외부 영향은 검의 여왕, 냉정하고 정확한 시선을 가진 사람이 주변에 있어요. 불편해도 도움이 될 말을 해줄 사람이에요.',
      followups: [{ q: '그 사람이 누굴 말하는 건지 궁금해요.', a: '구체적으로 누구인지는 저도 알 수 없지만, 최근에 유독 직설적으로 느껴졌던 사람이 있다면 그 사람일 가능성이 커요.' }] },
    { card: { id: 'ar17', orientation: 'upright' }, text: '희망과 두려움 자리에는 별이 있어요. 이 모든 게 결국 풀릴 거라는 희망과, 혹시 안 풀리면 어쩌나 하는 두려움이 같이 있어요.' },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막에 세계 카드가 나왔어요. 지금의 혼란이 결국 하나의 완결된 매듭으로 정리될 거라는 뜻이에요.' },
  ],
  '달에서 시작해 세계로 끝나는 흐름이에요. 안개 속에서 시작했지만, 검 2가 보여준 미뤄둔 결정을 마주하고 완드 5의 부딪힘을 지나면, 결국 세계 카드처럼 하나의 매듭으로 정리될 거예요.'
));

// ---------------- ko-0527 : 가업 이어받을지 ----------------
records.push(build('ko-0527', 'celtic_cross_deep',
  '가업을 이어받을지 말지, 인생 전체가 걸린 결정이라 제대로 깊게 켈틱크로스로 봐주면 좋겠어요.',
  [
    { card: { id: 'ar04', orientation: 'reversed' }, text: '중심에 황제의 역방향이 있어요. 물려받는다는 게 통제받는 느낌으로 다가오고 있는 것 같아요.' },
    { card: { id: 'sw06', orientation: 'upright' }, text: '가로지르는 카드는 검 6, 조용히 다른 방향으로 이동하고 싶은 마음이 이미 흐르고 있어요.',
      followups: [{ q: '이동하고 싶다는 게 가업을 완전히 떠난다는 뜻일까요?', a: '꼭 그런 뜻은 아니에요, 지금 방식 그대로가 아니라 다른 형태로 이어가고 싶은 마음일 수도 있어요.' }] },
    { card: { id: 'pe03', orientation: 'upright' }, text: '기반에는 펜타클 3이 있어요. 이 가업이 여러 사람의 손으로 함께 쌓아온 것이라는 감각이 깔려 있어요.' },
    { card: { id: 'ar13', orientation: 'upright' }, text: '최근 과거는 죽음 카드예요. 예전처럼 무조건 순응하던 태도가 이미 끝나가고 있었어요.' },
    { card: { id: 'cu03', orientation: 'reversed' }, text: '가능한 미래는 컵 3의 역방향, 가족 안에서 한동안 의견이 갈릴 수 있어요.',
      followups: [{ q: '갈등이 심해지면 어떡하죠?', a: '심해질 수도 있지만 영구적인 단절을 뜻하지는 않아요, 시간이 지나면 다시 이야기할 여지가 남아있는 흐름이에요.' }] },
    { card: { id: 'wa07', orientation: 'upright' }, text: '다가올 가까운 미래는 완드 7, 자기 입장을 지켜내야 하는 순간이 곧 올 거예요.' },
    { card: { id: 'pekn', orientation: 'upright' }, text: '지금 당신의 태도에는 펜타클의 기사가 있어요. 서두르지 않고 신중하게, 한 걸음씩 판단해나가고 계세요.',
      followups: [{ q: '너무 느리게 결정하는 건 아닐까요?', a: '이 정도 무게의 결정이라면 느린 게 아니라 신중한 거예요, 서두를 이유가 없어요.' }] },
    { card: { id: 'ar02', orientation: 'reversed' }, text: '외부 영향은 여사제의 역방향, 가족 중 누군가가 속마음을 다 드러내지 않고 있는 것 같아요.' },
    { card: { id: 'ar19', orientation: 'upright' }, text: '희망과 두려움 자리에는 태양이 있어요. 이 결정 뒤에도 가족과 밝게 지낼 수 있을까 하는 희망과 두려움이 겹쳐 있어요.' },
    { card: { id: 'ar21', orientation: 'reversed' }, text: '마지막에 세계의 역방향이 나왔어요. 아직 완전한 매듭은 아니고, 몇 번의 대화를 더 거쳐야 할 것 같아요.' },
  ],
  '황제에서 시작해 아직 열려 있는 세계로 끝나는 흐름이에요. 검 6과 완드 7이 보여주듯, 방향은 이미 마음속에 있고, 이제 그걸 가족들 앞에서 지켜내는 대화들이 남아 있어요.'
));

// ---------------- ko-0591 : 짝사랑 고백 ----------------
records.push(build('ko-0591', 'celtic_cross_deep',
  '오랫동안 짝사랑해온 사람한테 고백할지 말지, 인생이 다 걸린 것처럼 심각하게 고민 중이에요. 켈틱크로스로 깊게 봐주세요.',
  [
    { card: { id: 'ar02', orientation: 'upright' }, text: '중심에 여사제가 있어요. 겉으로 드러내지 않은 마음이 꽤 오래, 깊게 쌓여왔다는 뜻이에요.' },
    { card: { id: 'wa10', orientation: 'upright' }, text: '가로지르는 카드는 완드 10, 그 마음을 혼자 짊어지고 있느라 지친 상태예요.',
      followups: [{ q: '진짜 너무 지쳤어요.', a: '그 무게를 혼자 들고 있었으니 당연해요, 이제 그걸 내려놓을 때가 다가오고 있어요.' }] },
    { card: { id: 'cu05', orientation: 'upright' }, text: '기반에는 컵 5가 있어요. 예전에 마음을 표현했다가 아팠던 기억이 지금도 조심스럽게 만드는 것 같아요.' },
    { card: { id: 'sw06', orientation: 'reversed' }, text: '최근 과거는 검 6의 역방향, 마음을 정리하고 넘어가려 했지만 완전히 떠나보내지 못한 시기였어요.' },
    { card: { id: 'ar20', orientation: 'upright' }, text: '가능한 미래에는 심판 카드가 있어요. 이 마음을 더 이상 숨기지 않고 직접 마주하는 순간이 다가오고 있어요.',
      followups: [{ q: '고백해도 괜찮다는 뜻인가요?', a: '결과를 보장하는 카드는 아니에요, 다만 더는 숨기지 않아도 될 때라는 뜻이에요.' }] },
    { card: { id: 'pe09', orientation: 'reversed' }, text: '다가올 가까운 미래는 펜타클 9의 역방향, 혼자만의 세계에서 조금 걸어 나오게 될 거예요.' },
    { card: { id: 'ar16', orientation: 'reversed' }, text: '지금 당신의 태도에는 탑의 역방향이 있어요. 큰 변화가 두렵지만, 그 두려움을 조금씩 견뎌내고 있는 중이에요.',
      followups: [{ q: '거절당하면 어떡하죠?', a: '그 결과는 저도 장담할 수 없어요, 다만 지금 이 질문에 몇 달째 갇혀있는 것도 힘든 일이라는 건 알아요.' }, { q: '그럼 그냥 말 안 하고 지금처럼 지내는 게 나을까요?', a: '그것도 하나의 선택이에요, 다만 이 카드들은 계속 숨기는 쪽보다는 마주하는 쪽을 가리키고 있어요.' }] },
    { card: { id: 'cukn', orientation: 'upright' }, text: '외부 영향에는 컵의 기사가 있어요. 그 사람도 부드럽고 감정에 열려 있는 성향으로 보여요.' },
    { card: { id: 'ar03', orientation: 'upright' }, text: '희망과 두려움 자리에는 여황제가 있어요. 이 마음이 받아들여지길 바라는 희망이 두려움보다 조금 더 크게 자리하고 있어요.' },
    { card: { id: 'ar10', orientation: 'reversed' }, text: '마지막에 운명의 수레바퀴 역방향이 나왔어요. 흐름이 완전히 멈춰 있는 건 아니고, 조금 천천히 움직이고 있다는 뜻이에요.' },
  ],
  '여사제에서 시작해 운명의 수레바퀴로 끝나는 흐름이에요. 완드 10의 무게를 내려놓고 심판 카드처럼 마음을 마주하는 순간이 오면, 결과가 어떻든 이 오랜 흐름 자체는 다시 움직이기 시작할 거예요.'
));

// ---------------- ko-0651 : NEW premise, 아버지 병간호 + 형제 갈등 + 결혼 준비 ----------------
records.push(build('ko-0651', 'celtic_cross_deep',
  '아버지 병간호 문제로 형제들이랑 갈라지고 있는데, 하필 제 결혼 준비 시기까지 겹쳐서 정신이 하나도 없어요. 열 장으로 깊게 봐주세요.',
  [
    { card: { id: 'ar18', orientation: 'upright' }, text: '중심에 달 카드가 있어요. 지금은 누가 맞고 틀린지보다, 다들 각자의 두려움 속에서 움직이고 있는 시기예요.' },
    { card: { id: 'ar16', orientation: 'upright' }, text: '가로지르는 카드는 탑이에요. 예전처럼 형제들과 아무렇지 않게 지내던 방식이 이미 무너져버린 상태예요.',
      followups: [{ q: '이 관계가 다시 예전으로 돌아갈 수 있을까요?', a: '똑같은 모습으로 돌아가긴 어려울 수 있어요, 다만 다른 형태로 다시 이어질 여지는 아직 남아 있어요.' }] },
    { card: { id: 'pe10', orientation: 'upright' }, text: '기반에는 펜타클 10이 있어요. 가족이라는 울타리 자체는 여전히 단단하게 깔려 있어요, 지금 흔들리는 건 그 위의 방식들이에요.' },
    { card: { id: 'sw09', orientation: 'upright' }, text: '최근 과거는 검 9예요. 밤마다 이 걱정들을 혼자 끌어안고 잠 못 이루던 시기였을 거예요.' },
    { card: { id: 'wa03', orientation: 'upright' }, text: '가능한 미래에는 완드 3이 있어요. 지금 벌어지는 일들 너머를 조금 더 멀리 내다보게 될 거예요.',
      followups: [{ q: '멀리 내다본다는 게 무슨 뜻이에요?', a: '지금의 갈등이 가족 전체의 끝이 아니라, 새로운 균형을 찾아가는 과정의 일부라는 걸 보게 된다는 뜻이에요.' }] },
    { card: { id: 'swqu', orientation: 'upright' }, text: '다가올 가까운 미래는 검의 여왕이에요. 감정을 걷어내고 필요한 말을 명확하게 해야 하는 순간이 다가오고 있어요.' },
    { card: { id: 'cu06', orientation: 'upright' }, text: '지금 당신의 태도에는 컵 6이 있어요. 어릴 때부터 형제들 사이를 조율해온 역할이 여전히 몸에 배어 있어요.',
      followups: [{ q: '그 역할을 계속 해야 할까요?', a: '계속할지 말지는 선택할 수 있어요, 다만 이번엔 자신을 희생하지 않는 방식으로 조율하는 법을 찾아도 괜찮아요.' }] },
    { card: { id: 'sw08', orientation: 'upright' }, text: '외부 영향에는 검 8이 있어요. 형제들도 각자 나름의 방식으로 갇혀 있어요, 일부러 매정하게 구는 게 아닐 수 있어요.' },
    { card: { id: 'ar17', orientation: 'upright' }, text: '희망과 두려움 자리에는 별이 있어요. 결혼 준비와 병간호를 동시에 잘 해낼 수 있을까 하는 희망과 두려움이 같이 있어요.' },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막에 세계 카드가 나왔어요. 이 힘든 시기가 결국은 가족 모두에게 하나의 매듭으로 남을 거예요.' },
  ],
  '달에서 시작해 세계로 끝나는 흐름이에요. 탑이 무너뜨린 예전 방식 위에, 완드 3처럼 조금 더 멀리 내다보는 시야가 생기면, 결혼 준비도 병간호도 각자의 자리에서 결국 함께 매듭지어질 거예요.'
));

// ---------------- ko-0763 : 일이 다 꼬여있음 ----------------
records.push(build('ko-0763', 'celtic_cross_deep',
  '요즘 하는 일마다 실이 다 꼬여있는 느낌이에요. 열 장짜리 깊은 스프레드로 봐주실 수 있어요?',
  [
    { card: { id: 'ar18', orientation: 'upright' }, text: '중심에 달 카드가 있어요. 지금은 원인이 또렷하게 보이지 않는 게 당연한 시기예요.' },
    { card: { id: 'sw07', orientation: 'reversed' }, text: '가로지르는 카드는 검 7의 역방향, 숨기고 있던 게 곧 드러날 흐름이에요.',
      followups: [{ q: '뭐가 드러난다는 거예요?', a: '구체적으로는 저도 알 수 없지만, 계속 미뤄두거나 혼자 안고 있던 문제가 표면으로 올라올 가능성이 커요.' }] },
    { card: { id: 'cu04', orientation: 'reversed' }, text: '기반에는 컵 4의 역방향이 있어요. 무기력하게 느껴졌던 시간이 이제 움직이기 시작하는 지점에 서 있어요.' },
    { card: { id: 'pe07', orientation: 'upright' }, text: '최근 과거는 펜타클 7이에요. 지금까지 들인 노력이 결과로 잘 안 보여서 답답했던 시기였을 거예요.' },
    { card: { id: 'wa05', orientation: 'upright' }, text: '가능한 미래에는 완드 5가 있어요. 여러 일들이 한꺼번에 부딪히며 정리되는 순간이 올 수 있어요.',
      followups: [{ q: '한꺼번에 부딪히면 더 힘들어지는 거 아니에요?', a: '단기적으로는 그럴 수 있지만, 눌러뒀던 것들이 한 번에 드러나야 진짜로 정리가 시작돼요.' }] },
    { card: { id: 'ar12', orientation: 'upright' }, text: '다가올 가까운 미래는 매달린 사람이에요. 지금 상황을 다른 각도에서 바라봐야 할 시기가 다가와요.' },
    { card: { id: 'sw02', orientation: 'reversed' }, text: '지금 당신의 태도에는 검 2의 역방향이 있어요. 계속 미뤄온 결정 하나가 이제 눈에 들어오기 시작했어요.',
      followups: [{ q: '그 결정이 뭘 말하는지 감이 안 와요.', a: '지금은 몰라도 괜찮아요, 다음 카드들을 따라가면 조금씩 또렷해질 거예요.' }] },
    { card: { id: 'ar09', orientation: 'upright' }, text: '외부 영향에는 은둔자가 있어요. 지금은 조언을 구하기보다 스스로 조용히 정리할 시간이 필요한 흐름이에요.' },
    { card: { id: 'cu10', orientation: 'reversed' }, text: '희망과 두려움 자리에는 컵 10의 역방향이 있어요. 일이 잘 풀려도 예전 같은 안정감을 못 찾을까 봐 걱정하는 마음이 있어요.' },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막에 세계 카드가 나왔어요. 지금 꼬여 있는 실타래가 결국 하나의 매듭으로 정리될 거예요.' },
  ],
  '달에서 시작해 세계로 끝나는 흐름이에요. 검 7이 드러낼 것과 완드 5의 부딪힘을 지나면, 매달린 사람이 보여주는 새로운 시각과 함께 결국 실타래는 풀려나갈 거예요.'
));

// ---------------- ko-0820 : 이혼 고민 ----------------
records.push(build('ko-0820', 'celtic_cross_deep',
  '이혼을 진지하게 고민 중인데, 너무 얽혀 있어서 켈틱크로스로 깊게 봐주실 수 있어요?',
  [
    { card: { id: 'sw07', orientation: 'reversed' }, text: '중심에 검 7의 역방향이 있어요. 서로에게 숨겨왔던 마음들이 이제 조금씩 드러나야 하는 시기예요.' },
    { card: { id: 'ar13', orientation: 'upright' }, text: '가로지르는 카드는 죽음이에요. 지금의 결혼 형태 자체가 하나의 끝을 향해 가고 있다는 뜻일 수 있어요, 사람에 대한 끝이 아니라 방식에 대한 끝이요.',
      followups: [{ q: '방식의 끝이랑 관계의 끝은 다른 건가요?', a: '네, 지금 이대로의 결혼 생활은 끝나가고 있지만, 그게 꼭 두 분 관계 자체의 끝을 뜻하진 않아요.' }] },
    { card: { id: 'cu09', orientation: 'reversed' }, text: '기반에는 컵 9의 역방향이 있어요. 겉으로 만족한 척했던 시간들이 사실은 그렇지 않았다는 게 깔려 있어요.' },
    { card: { id: 'pe10', orientation: 'upright' }, text: '최근 과거는 펜타클 10이에요. 가정이라는 틀 자체를 지키려는 마음이 컸던 시기였어요.' },
    { card: { id: 'ar12', orientation: 'reversed' }, text: '가능한 미래에는 매달린 사람의 역방향이 있어요. 오래 미뤄온 결정을 더는 미룰 수 없는 순간이 다가와요.',
      followups: [{ q: '이 결정을 서둘러야 한다는 뜻인가요?', a: '서두르라는 뜻보다는, 계속 미루는 것 자체가 이제 어려워진다는 뜻이에요.' }, { q: '이혼을 하라는 쪽으로 나오는 건가요?', a: '카드는 어느 쪽을 선택하라고 말하지 않아요, 다만 더는 결정을 피할 수 없는 지점에 와 있다는 것만 보여줘요.' }] },
    { card: { id: 'wa05', orientation: 'upright' }, text: '다가올 가까운 미래는 완드 5, 결정을 둘러싼 대화가 순탄치만은 않을 수 있어요.' },
    { card: { id: 'ar18', orientation: 'upright' }, text: '지금 당신의 태도에는 달 카드가 있어요. 확신 없이 불안한 채로 이 시간을 버텨내고 계세요.' },
    { card: { id: 'sw10', orientation: 'reversed' }, text: '외부 영향에는 검 10의 역방향이 있어요. 가장 힘든 국면은 이미 지나가고 있다는 뜻이에요.' },
    { card: { id: 'cuqu', orientation: 'upright' }, text: '희망과 두려움 자리에는 컵의 여왕이 있어요. 어떤 결정을 내리든 자신의 감정에 솔직할 수 있을까 하는 희망과 두려움이 있어요.' },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막에 세계 카드가 나왔어요. 어느 쪽으로 가든, 이 시기가 결국 하나의 완결된 매듭으로 남을 거예요.' },
  ],
  '검 7에서 시작해 세계로 끝나는 흐름이에요. 죽음이 가리키는 건 방식의 끝이지 사람에 대한 끝이 아니고, 매달린 사람이 보여준 더는 미룰 수 없는 순간을 지나면, 어느 길이든 결국 하나의 매듭으로 정리될 거예요.'
));

// ---------------- ko-0887 : NEW premise, 해외 발령 + 장거리 연애 + 부모님 건강 ----------------
records.push(build('ko-0887', 'celtic_cross_deep',
  '해외 발령 제안을 받았는데, 지금 만나는 사람이랑 장거리가 될 상황이고 부모님 건강도 걱정돼서 아무것도 결정을 못 하겠어요. 열 장으로 봐주실 수 있어요?',
  [
    { card: { id: 'ar12', orientation: 'reversed' }, text: '중심에 매달린 사람의 역방향이 있어요. 오래 멈춰서 바라보던 시선이 이제 다시 움직이기 시작하는 지점이에요.' },
    { card: { id: 'sw09', orientation: 'upright' }, text: '가로지르는 카드는 검 9예요. 이 결정을 두고 밤마다 걱정이 많으셨을 거예요.',
      followups: [{ q: '맞아요, 요즘 잠을 거의 못 자요.', a: '이 정도 무게의 결정이라면 당연한 반응이에요, 다만 지금 잠 못 이루는 걱정이 결정 자체를 대신해주지는 않을 거예요.' }] },
    { card: { id: 'pe04', orientation: 'upright' }, text: '기반에는 펜타클 4가 있어요. 지금 가진 것들 — 관계, 가족, 익숙한 자리 — 을 놓치고 싶지 않은 마음이 깔려 있어요.' },
    { card: { id: 'ar18', orientation: 'reversed' }, text: '최근 과거는 달의 역방향이에요. 막연한 불안이 조금씩 걷혀가던 시기였을 거예요.' },
    { card: { id: 'wa10', orientation: 'upright' }, text: '가능한 미래에는 완드 10이 있어요. 세 가지를 다 완벽하게 챙기려다 지칠 수 있는 흐름이에요.',
      followups: [{ q: '세 가지를 다 챙길 방법은 없는 걸까요?', a: '완벽하게 다 챙기긴 어려울 수 있어요, 다만 순서를 정하면 짐이 조금 가벼워질 거예요.' }] },
    { card: { id: 'cu07', orientation: 'reversed' }, text: '다가올 가까운 미래는 컵 7의 역방향, 여러 선택지 중 하나로 마음이 점점 좁혀질 거예요.' },
    { card: { id: 'ar16', orientation: 'upright' }, text: '지금 당신의 태도에는 탑이 있어요. 어느 쪽을 고르든 지금까지의 익숙한 틀이 깨질 거라는 걸 이미 받아들이고 계세요.',
      followups: [{ q: '틀이 깨지는 게 두려워요.', a: '두려운 게 당연해요, 다만 탑은 무너뜨리기만 하는 카드가 아니라 그 자리에 더 튼튼한 걸 다시 세우는 카드이기도 해요.' }] },
    { card: { id: 'sw05', orientation: 'reversed' }, text: '외부 영향에는 검 5의 역방향이 있어요. 주변 사람과의 갈등이 생각보다 크게 번지진 않을 거예요.' },
    { card: { id: 'ar09', orientation: 'upright' }, text: '희망과 두려움 자리에는 은둔자가 있어요. 이 결정을 혼자 감당해야 한다는 두려움과, 그래도 스스로 답을 찾을 수 있다는 희망이 같이 있어요.' },
    { card: { id: 'ar21', orientation: 'reversed' }, text: '마지막에 세계의 역방향이 나왔어요. 아직 완전히 닫히지 않은 결정이에요 — 조금 더 시간을 두고 지켜봐도 괜찮아요.' },
  ],
  '매달린 사람에서 시작해 아직 열려 있는 세계로 끝나는 흐름이에요. 완드 10의 무게를 다 혼자 지려 하지 않고 컵 7이 보여주는 좁혀지는 선택지를 따라가면, 탑이 깨뜨린 자리에 결국 당신에게 맞는 답이 다시 세워질 거예요.'
));

// ---------------- ko-0945 : 대학원 진학 ----------------
records.push(build('ko-0945', 'celtic_cross_deep',
  '이 나이에 다시 대학원에 진학해도 될지, 그로 인해 가족들과의 관계도 안정된 일자리도 다 포기해야 하는 상황이라 계속 고민만 하고 있어요. 열 장으로 깊게 봐주실 수 있어요?',
  [
    { card: { id: 'ar09', orientation: 'upright' }, text: '중심에 은둔자가 있어요. 지금은 남의 속도가 아니라 자신만의 속도로 이 결정을 들여다봐야 하는 시기예요.' },
    { card: { id: 'sw06', orientation: 'reversed' }, text: '가로지르는 카드는 검 6의 역방향, 아직 떠날 준비가 완전히 끝나지 않은 상태예요.',
      followups: [{ q: '준비가 안 됐다는 게 포기해야 한다는 뜻일까요?', a: '아니에요, 아직 마음 정리가 다 안 됐을 뿐이지 방향 자체가 틀렸다는 뜻은 아니에요.' }] },
    { card: { id: 'pe03', orientation: 'upright' }, text: '기반에는 펜타클 3이 있어요. 배움에 대한 마음이 혼자만의 충동이 아니라 오래 쌓아온 진심이라는 게 깔려 있어요.' },
    { card: { id: 'cu04', orientation: 'reversed' }, text: '최근 과거는 컵 4의 역방향이에요. 지금 자리에 안주하던 무기력함에서 조금씩 깨어나던 시기였어요.' },
    { card: { id: 'ar17', orientation: 'upright' }, text: '가능한 미래에는 별이 있어요. 지금의 불안 너머에 당신이 원했던 방향에 대한 조용한 희망이 자리하고 있어요.',
      followups: [{ q: '희망만 있고 현실적인 어려움은 어떻게 되나요?', a: '별 카드가 어려움을 없애주진 않아요, 다만 그 어려움을 견딜 만한 이유가 분명히 있다는 걸 보여줘요.' }] },
    { card: { id: 'wa02', orientation: 'upright' }, text: '다가올 가까운 미래는 완드 2예요. 구체적인 계획을 세우고 실행 가능성을 따져보는 단계가 다가와요.' },
    { card: { id: 'sw09', orientation: 'reversed' }, text: '지금 당신의 태도에는 검 9의 역방향이 있어요. 밤새 걱정하던 것들이 낮의 빛 아래서는 조금 다르게 보이기 시작했어요.',
      followups: [{ q: '가족들을 설득할 자신이 없어요.', a: '설득은 한 번에 끝나지 않을 수 있어요, 다만 이 카드는 그 대화를 시작할 힘이 이미 당신 안에 있다는 걸 보여줘요.' }] },
    { card: { id: 'ar02', orientation: 'upright' }, text: '외부 영향에는 여사제가 있어요. 가족 중 누군가는 겉으로 말하지 않아도 속으로는 응원하고 있을 수 있어요.' },
    { card: { id: 'peki', orientation: 'reversed' }, text: '희망과 두려움 자리에는 펜타클의 왕 역방향이 있어요. 안정된 일자리를 놓치는 게 두렵지만, 그 안정이 진짜 원하는 건 아니었다는 자각도 함께 있어요.' },
    { card: { id: 'ar21', orientation: 'upright' }, text: '마지막에 세계 카드가 나왔어요. 이 진학이 인생의 새로운 장을 여는 완결된 매듭이 될 거예요.' },
  ],
  '은둔자에서 시작해 세계로 끝나는 흐름이에요. 검 6의 역방향이 보여주는 아직 남은 망설임을 지나, 별이 가리키는 방향으로 완드 2의 구체적인 계획을 세우면, 이 진학은 결국 세계 카드처럼 하나의 새로운 장으로 완결될 거예요.'
));

// ---------------- ko-1011 : 승진 실패 + 남친 갈등 + 대학원 흔들림 ----------------
records.push(build('ko-1011', 'celtic_cross_deep',
  '이번 승진 심사에서 떨어진 후로 회사 사람들 보기도 힘들고, 남자친구랑도 자꾸 싸우고, 예전부터 준비하던 대학원도 다시 흔들려요. 한꺼번에 제대로 봐줄 수 있어요?',
  [
    { card: { id: 'sw08', orientation: 'reversed' }, text: '중심에 검 8의 역방향이 있어요. 스스로를 옭아매던 생각에서 조금씩 빠져나오기 시작하는 지점이에요.' },
    { card: { id: 'pe08', orientation: 'reversed' }, text: '가로지르는 카드는 펜타클 8의 역방향, 노력한 만큼 결과가 안 보여서 답답했던 마음을 가로지르고 있어요.',
      followups: [{ q: '그동안 노력이 다 헛수고였던 걸까요?', a: '헛수고는 아니에요, 다만 이번 결과가 그 노력을 다 대변해주진 못했을 뿐이에요.' }] },
    { card: { id: 'ar09', orientation: 'upright' }, text: '기반에는 은둔자가 있어요. 원래도 혼자 조용히 버텨내는 데 익숙한 성향이 깔려 있어요.' },
    { card: { id: 'sw09', orientation: 'upright' }, text: '최근 과거는 검 9예요. 승진 발표 이후로 잠 못 이루던 밤들이 이어졌을 거예요.' },
    { card: { id: 'ar17', orientation: 'upright' }, text: '가능한 미래에는 별이 있어요. 지금의 실망 너머에 다시 회복될 여지가 분명히 있어요.',
      followups: [{ q: '남자친구랑도 잘 풀릴까요?', a: '이 카드는 관계보다는 전체적인 회복력을 보여줘요, 다만 그 힘이 관계 안에서도 함께 작동할 가능성은 있어요.' }] },
    { card: { id: 'wa06', orientation: 'upright' }, text: '다가올 가까운 미래는 완드 6이에요. 이번 일과는 별개로, 곧 인정받는 순간이 다시 찾아올 수 있어요.' },
    { card: { id: 'swqu', orientation: 'upright' }, text: '지금 당신의 태도에는 검의 여왕이 있어요. 감정을 걷어내고 상황을 냉정하게 보려는 힘이 이미 작동하고 있어요.',
      followups: [{ q: '냉정해지려고 하는데 자꾸 남자친구한테 화풀이하게 돼요.', a: '지금 쌓인 감정이 가까운 사람한테 흘러가는 건 흔한 일이에요, 다만 화풀이라는 걸 스스로 알아챈 것만으로도 이미 조절이 시작된 거예요.' }] },
    { card: { id: 'cuki', orientation: 'reversed' }, text: '외부 영향에는 컵의 왕 역방향이 있어요. 남자친구도 지금 자기 감정을 잘 다루지 못하고 있는 상태일 수 있어요.' },
    { card: { id: 'ar18', orientation: 'upright' }, text: '희망과 두려움 자리에는 달이 있어요. 대학원도 관계도 회사도 한꺼번에 잃을까 봐 하는 막연한 두려움이 커요.' },
    { card: { id: 'ar19', orientation: 'upright' }, text: '마지막에 태양 카드가 나왔어요. 지금은 흐려 보여도, 이 세 가지 모두 결국 밝은 쪽으로 정리될 흐름이에요.' },
  ],
  '검 8에서 시작해 태양으로 끝나는 흐름이에요. 검 9의 불면과 펜타클 8의 답답함을 지나 별이 보여준 회복력에 이르면, 승진도 관계도 대학원도 각자 다른 속도로, 결국 태양 아래에서 다시 정리될 거예요.'
));

// ---- write back ----
const outPath = path.join(ROOT, 'training/data/pilot/ko.jsonl');
const lines = fs.readFileSync(outPath, 'utf8').trim().split('\n');
const byId = new Map();
records.forEach(r => byId.set(r.id, r));
let replaced = 0;
const newLines = lines.map(line => {
  const rec = JSON.parse(line);
  if (byId.has(rec.id)) { replaced++; return JSON.stringify(byId.get(rec.id)); }
  return line;
});
fs.writeFileSync(outPath, newLines.join('\n') + '\n');
console.log('replaced', replaced, 'of', records.length, 'expected');
