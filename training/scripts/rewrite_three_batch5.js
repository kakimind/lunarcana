// Rewrites 45 three-card records (ko-0757-ko-0879 range) from single-combined-reply
// to one-card-at-a-time conversational format, per scenarios.json spread_size_rules.three.
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(__dirname, '..', 'data', 'pilot', 'ko.jsonl');
const lines = fs.readFileSync(FILE, 'utf8').trim().split('\n');
const recs = lines.map(l => JSON.parse(l));
const byId = new Map(recs.map(r => [r.id, r]));

function tag(card) {
  return `[뽑힌 카드: ${card.name}(${card.orientation === 'upright' ? '정방향' : '역방향'})]`;
}

function turn(userText, card, assistantText) {
  return {
    user: card ? `${tag(card)}\n${userText}` : userText,
    assistant: assistantText,
  };
}

function buildMessages(systemContent, turns) {
  const messages = [{ role: 'system', content: systemContent }];
  for (const t of turns) {
    messages.push({ role: 'user', content: t.user });
    messages.push({ role: 'assistant', content: t.assistant });
  }
  return messages;
}

function apply(id, turns) {
  const r = byId.get(id);
  if (!r) { console.log('MISSING', id); return; }
  if (r.cards.length !== 3) { console.log('SKIP (not 3-card)', id); return; }
  const system = r.messages[0].content;
  r.turn_count = turns.length;
  r.messages = buildMessages(system, turns);
}

// ---------- ko-0757 study_exam SOA ----------
apply('ko-0757', [
  turn('대학원 진학을 고민하고 있는데 확신이 안 서요. 상황부터 봐주세요.', {name:'펜타클 9',orientation:'upright'},
    '펜타클 9가 나왔어요 — 이미 스스로 이룬 것 위에 편안히 서 있는 모습이에요. 지금 상황은 부족해서가 아니라, 이미 가진 걸 잠시 잊고 있는 것에 가까워요.'),
  turn('장애물은요?', {name:'검 5',orientation:'reversed'},
    '검 5가 거꾸로 나왔어요. 남과 속도를 비교하려는 마음이 지금 제일 큰 걸림돌로 보여요.'),
  turn('조언은요?', {name:'은둔자',orientation:'upright'},
    '은둔자 카드예요. 남의 속도가 아니라 당신만의 등불을 따라가라는 뜻인데, 이미 가진 걸 인정하는 데서(펜타클 9) 시작해 비교를 내려놓으면(검 5) 자연스레 그 등불이 보일 거예요.'),
]);

// ---------- ko-0758 creative_block PPF ----------
apply('ko-0758', [
  turn('지금 작업 방향을 완전히 바꿔볼까 고민 중이에요. 과거부터 봐주세요.', {name:'컵 7',orientation:'upright'},
    '컵 7이 나왔어요 — 너무 많은 선택지 앞에서 흔들리던 시기를 보여줘요. 그때는 뭘 골라야 할지 갈피를 못 잡았던 것 같아요.'),
  turn('현재는요?', {name:'악마',orientation:'reversed'},
    '악마 카드가 거꾸로 나왔어요. 스스로 가둬둔 틀에서 이제 막 벗어나려는 중이라는 뜻이에요.'),
  turn('미래는요?', {name:'태양',orientation:'upright'},
    '태양 카드예요. 흔들리던 컵 7의 시기를 지나, 그 틀을 벗어난 지금(악마)이 곧 환하게 열릴 새로운 방향으로 이어진다는 신호예요.'),
]);

// ---------- ko-0759 career_decision generic ----------
apply('ko-0759', [
  turn('이직 제안을 받았는데 지금 회사에 정이 많이 들어서 고민이에요.', {name:'완드 4',orientation:'upright'},
    '이직 쪽엔 완드 4가 나왔어요 — 새로운 시작을 축하하는 카드예요. 문을 넘는 순간의 설렘이 담겨 있어요.'),
  turn('지금 회사 쪽은요?', {name:'교황',orientation:'reversed'},
    '교황 카드가 거꾸로 나왔어요. 잔류 쪽은 익숙한 틀에 그냥 머무르는 느낌에 더 가까워 보여요.'),
  turn('마지막 카드는요?', {name:'전차',orientation:'upright'},
    '전차 카드예요. 새 시작(완드 4)을 택하든 익숙함(교황)에 남든, 결국 그 방향을 스스로 몰아갈 힘은 당신에게 있다는 뜻이에요.'),
]);

// ---------- ko-0799 decision_fork ----------
apply('ko-0799', [
  turn('대학원 진학이랑 바로 취업, 두 선택지로 봐줄래요?', {name:'은둔자',orientation:'upright'},
    '대학원 쪽엔 은둔자가 나왔어요 — 홀로 깊이 파고드는 시간을 뜻해요.'),
  turn('취업 쪽은요?', {name:'완드 6',orientation:'upright'},
    '완드 6이에요. 눈에 보이는 성취와 인정이 비교적 빨리 따라오는 길이에요.'),
  turn('뭐가 더 중요한지 봐주세요.', {name:'컵 4',orientation:'reversed'},
    '컵 4가 거꾸로 나왔어요. 깊이(은둔자)든 인정(완드 6)이든 어느 쪽도 완벽한 확신을 주진 않는다는 뜻이니, 나중에 조정할 여지가 있다는 걸 기억하고 고르면 돼요.'),
]);

// ---------- ko-0800 love_new PPF ----------
apply('ko-0800', [
  turn('소개팅에서 만난 사람이 계속 생각나요. 과거부터 봐줄래요?', {name:'컵의 시종',orientation:'upright'},
    '컵의 시종이 나왔어요 — 그날의 설렘을 그대로 보여주는 카드예요.'),
  turn('현재는요?', {name:'연인',orientation:'reversed'},
    '연인 카드가 거꾸로 나왔어요. 그 설렘이 아직 마음속에서 정리되지 않은 채로 남아 있다는 뜻이에요.'),
  turn('미래는요?', {name:'검 2',orientation:'upright'},
    '검 2예요. 눈을 가린 채 저울질하는 모습인데, 그 설렘(컵의 시종)이 정리 안 된 마음(연인)을 넘어서려면 결국 눈가리개를 벗고 스스로 어느 쪽인지 확인해보는 수밖에 없어요.'),
]);

// ---------- ko-0801 family_conflict SOA ----------
apply('ko-0801', [
  turn('부모님 부양을 형제 중에 저만 계속 하고 있어요. 상황부터요.', {name:'완드 10',orientation:'upright'},
    '완드 10이 나왔어요 — 지금 혼자 짊어진 무게를 그대로 보여주는 카드예요.'),
  turn('장애물은요?', {name:'펜타클 9',orientation:'reversed'},
    '펜타클 9가 거꾸로 나왔어요. 정작 당신 자신을 위한 시간은 하나도 없다는 게 걸림돌이에요.'),
  turn('조언은요?', {name:'절제',orientation:'upright'},
    '절제 카드예요. 이 무게(완드 10)를 계속 혼자 지고 스스로를 소진시키는(펜타클 9) 대신, 형제들과 침착하게 나눌 방법을 얘기해볼 때라는 뜻이에요.'),
]);

// ---------- ko-0802 reconciliation generic ----------
apply('ko-0802', [
  turn('예전에 크게 싸우고 멀어진 룸메이트 겸 친구랑 화해하고 싶어요.', {name:'검 10',orientation:'reversed'},
    '검 10이 거꾸로 나왔어요 — 그 끝이 생각보다 완전한 파국은 아니었다는 뜻이에요.'),
  turn('그다음은요?', {name:'컵 6',orientation:'upright'},
    '컵 6이에요. 둘이 나눴던 좋은 기억이 아직 다리로 남아있다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'완드 2',orientation:'upright'},
    '완드 2예요. 끝이 완전하지 않았고(검 10) 다리도 남아있으니(컵 6), 이제 먼저 손을 내밀지 말지는 당신이 정할 차례라는 신호예요.'),
]);

// ---------- ko-0803 grief_loss SOA ----------
apply('ko-0803', [
  turn('이모가 돌아가신 뒤로 엄마가 너무 힘들어하셔서 저도 지쳐가요. 상황부터요.', {name:'검 6',orientation:'upright'},
    '검 6이 나왔어요 — 잔잔한 물 위로 천천히 건너가는 중인 모습이에요.'),
  turn('장애물은요?', {name:'컵 3',orientation:'reversed'},
    '컵 3이 거꾸로 나왔어요. 지금은 다 같이 모여 축하할 여유조차 없다는 걸 보여줘요.'),
  turn('조언은요?', {name:'별',orientation:'upright'},
    '별 카드예요. 천천히 건너는 중이고(검 6) 여유가 없는 게 당연한 지금(컵 3), 엄마 곁을 지키는 동안 당신 자신의 회복도 잊지 말라고 조용히 말해줘요.'),
]);

// ---------- ko-0804 boundary_setting generic ----------
apply('ko-0804', [
  turn('시누이가 자꾸 은근히 반말로 무시하는 것 같아요.', {name:'검의 여왕',orientation:'reversed'},
    '검의 여왕이 거꾸로 나왔어요 — 지금 당신이 날카로워질 말을 계속 참고 있다는 뜻이에요.'),
  turn('그다음 카드는요?', {name:'펜타클 7',orientation:'upright'},
    '펜타클 7이에요. 이 관계에 계속 투자할 가치가 있는지 돌아볼 때라는 걸 보여줘요.'),
  turn('마지막은요?', {name:'정의',orientation:'upright'},
    '정의 카드예요. 계속 참기만 하다가(검의 여왕) 관계를 재점검할 때가 왔다면(펜타클 7), 감정적으로 터뜨리기보다 명확한 선을 한 번 그어보라고 말해요.'),
]);

// ---------- ko-0805 self_growth PPF ----------
apply('ko-0805', [
  turn('이혼 후에 제가 어떤 사람인지 잘 모르겠어요. 과거부터 봐주세요.', {name:'죽음',orientation:'reversed'},
    '죽음 카드가 거꾸로 나왔어요 — 예전 삶의 방식이 아직 완전히 끝나지 않은 채라는 뜻이에요.'),
  turn('현재는요?', {name:'달',orientation:'upright'},
    '달 카드예요. 지금은 답이 흐릿한 게 당연한 시기라는 걸 보여줘요.'),
  turn('미래는요?', {name:'완드 8',orientation:'upright'},
    '완드 8이에요. 끝나지 않은 채였던 예전(죽음)과 흐릿한 지금(달)을 지나, 생각보다 빠르게 새로운 방향이 보일 거예요.'),
]);

// ---------- ko-0806 decision_fork ----------
apply('ko-0806', [
  turn('지금 회사에 남을지, 작은 스타트업으로 옮길지 고민이에요. 두 선택지로 봐줄래요?', {name:'펜타클 8',orientation:'upright'},
    '지금 회사 쪽엔 펜타클 8이 나왔어요 — 꾸준히 실력을 쌓는 길을 보여줘요.'),
  turn('스타트업 쪽은요?', {name:'검 5',orientation:'reversed'},
    '검 5가 거꾸로 나왔어요. 소모적인 다툼 없이 새로 시작할 여지가 있다는 뜻이에요.'),
  turn('뭐가 더 중요한지 봐주세요.', {name:'태양',orientation:'upright'},
    '태양 카드예요. 꾸준함(펜타클 8)이든 새 출발(검 5)이든, 어느 쪽이든 당신이 더 밝아지는 선택을 하면 된다고 말해줘요.'),
]);

// ---------- ko-0807 unresolved_closure SOA ----------
apply('ko-0807', [
  turn('첫사랑이 결혼한다는 소식을 들었는데 마음이 이상하게 복잡해요. 상황부터요.', {name:'컵 9',orientation:'reversed'},
    '컵 9가 거꾸로 나왔어요 — 이미 지나간 만족을 아직 붙들고 있다는 뜻이에요.'),
  turn('장애물은요?', {name:'검 3',orientation:'upright'},
    '검 3이에요. 그 소식이 생각보다 아프게 와닿았다는 걸 보여줘요.'),
  turn('조언은요?', {name:'별',orientation:'reversed'},
    '별 카드가 거꾸로 나왔어요. 지나간 걸 붙들고 있다는 것도(컵 9), 생각보다 아팠다는 것도(검 3) 다 맞는 마음이니, 이 감정을 억지로 빨리 정리하려 하지 말라고 말해줘요.'),
]);

// ---------- ko-0808 burnout_identity generic ----------
apply('ko-0808', [
  turn('육아휴직 끝나고 복직했는데 예전 같지가 않아요.', {name:'검 4',orientation:'reversed'},
    '검 4가 거꾸로 나왔어요 — 제대로 쉬지 못한 채 복직했다는 뜻이에요.'),
  turn('그다음은요?', {name:'컵 8',orientation:'upright'},
    '컵 8이에요. 예전의 열정을 두고 떠나야 할 때가 왔다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'완드 3',orientation:'upright'},
    '완드 3이에요. 못다 쉰 채로(검 4) 예전 열정과 거리를 둔 지금(컵 8), 방향을 다시 잡으면 앞으로가 더 넓게 열린다는 뜻이에요.'),
]);

// ---------- ko-0809 friendship SOA ----------
apply('ko-0809', [
  turn('친구 결혼식 축의금 문제로 사이가 서먹해졌어요. 상황부터요.', {name:'펜타클 5',orientation:'reversed'},
    '펜타클 5가 거꾸로 나왔어요 — 이 일이 생각보다 마음의 여유를 많이 갉아먹었다는 뜻이에요.'),
  turn('장애물은요?', {name:'검 8',orientation:'upright'},
    '검 8이에요. 서로 오해로 스스로를 묶어두고 있다는 걸 보여줘요.'),
  turn('조언은요?', {name:'컵 6',orientation:'upright'},
    '컵 6이에요. 여유가 없었고(펜타클 5) 오해로 묶여 있었지만(검 8), 예전처럼 편하게 이 얘기를 꺼내볼 수 있는 사이라는 걸 기억하라고 말해줘요.'),
]);

// ---------- ko-0810 life_transition PPF ----------
apply('ko-0810', [
  turn('아이가 대학에 가면서 갑자기 제가 할 일이 없어진 것 같아요. 과거부터요.', {name:'컵 7',orientation:'upright'},
    '컵 7이 나왔어요 — 그동안 아이 중심으로 여러 역할을 해왔다는 걸 보여줘요.'),
  turn('현재는요?', {name:'은둔자',orientation:'reversed'},
    '은둔자가 거꾸로 나왔어요. 지금 혼자 있는 시간이 성찰보다는 허전함에 더 가깝다는 뜻이에요.'),
  turn('미래는요?', {name:'태양',orientation:'upright'},
    '태양 카드예요. 여러 역할을 해왔던 시간(컵 7)과 지금의 허전함(은둔자)을 지나, 이제 온전히 당신 몫인 시간이 밝게 열리고 있다는 신호예요.'),
]);

// ---------- ko-0811 career_decision SOA ----------
apply('ko-0811', [
  turn('프리랜서로 일하는데 클라이언트랑 계약 조건 때문에 갈등이 있어요. 상황부터요.', {name:'펜타클 3',orientation:'upright'},
    '펜타클 3이 나왔어요 — 원래 함께 잘 협의해왔던 관계라는 걸 보여줘요.'),
  turn('장애물은요?', {name:'검의 기사',orientation:'reversed'},
    '검의 기사가 거꾸로 나왔어요. 지금 감정이 앞서서 말이 거칠어지고 있다는 뜻이에요.'),
  turn('조언은요?', {name:'정의',orientation:'upright'},
    '정의 카드예요. 원래 협의가 잘 됐던 사이니(펜타클 3) 감정 대신(검의 기사) 계약서를 근거로 침착하게 조율해보라는 뜻이에요.'),
]);

// ---------- ko-0812 love_existing generic ----------
apply('ko-0812', [
  turn('애인이 요즘 너무 바빠지면서 연락이 뜸해졌어요.', {name:'완드 7',orientation:'reversed'},
    '완드 7이 거꾸로 나왔어요 — 굳이 매번 방어적으로 굴지 않아도 된다는 뜻이에요.'),
  turn('그다음은요?', {name:'검 6',orientation:'upright'},
    '검 6이에요. 지금이 잠시 잠잠해지는 시기일 뿐, 끝은 아니라는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'컵 2',orientation:'upright'},
    '컵 2예요. 방어할 필요도 없고(완드 7) 끝난 것도 아니니(검 6), 솔직하게 서운함을 얘기하면 다시 가까워질 여지가 충분해요.'),
]);

// ---------- ko-0813 decision_fork ----------
apply('ko-0813', [
  turn('지금 사는 곳에 계속 있을지, 본가로 다시 들어갈지 고민이에요. 두 선택지로 봐주세요.', {name:'펜타클 6',orientation:'upright'},
    '지금 이곳에 남는 쪽엔 펜타클 6이 나왔어요 — 스스로 경제적 균형을 지킬 수 있다는 뜻이에요.'),
  turn('본가 쪽은요?', {name:'황제',orientation:'reversed'},
    '황제 카드가 거꾸로 나왔어요. 본가로 가는 쪽은 오히려 다시 예전 통제 아래로 들어가는 느낌일 수 있어요.'),
  turn('뭐가 더 중요한지 봐주세요.', {name:'컵 10',orientation:'upright'},
    '컵 10이에요. 균형(펜타클 6)이든 통제로 돌아가는 불편함(황제)이든, 결국 어느 쪽이든 당신 마음이 편한 곳이 답이라는 신호예요.'),
]);

// ---------- ko-0814 parenting_worry SOA ----------
apply('ko-0814', [
  turn('아이가 저랑 다른 진로를 정하려고 해서 자꾸 걱정이 돼요. 상황부터요.', {name:'검 2',orientation:'reversed'},
    '검 2가 거꾸로 나왔어요 — 이 문제를 계속 미루고만 있었다는 뜻이에요.'),
  turn('장애물은요?', {name:'완드 4',orientation:'upright'},
    '완드 4예요. 사실 아이는 이미 자기 길에서 나름의 기반을 다지고 있다는 걸 보여줘요.'),
  turn('조언은요?', {name:'정의',orientation:'reversed'},
    '정의 카드가 거꾸로 나왔어요. 계속 미뤄왔지만(검 2) 아이는 이미 자기 자리를 다지고 있으니(완드 4), 지금 당신 기준으로만 "옳은 진로"를 재단하고 있진 않은지 돌아보라는 뜻이에요.'),
]);

// ---------- ko-0815 money_practical generic ----------
apply('ko-0815', [
  turn('갑자기 목돈이 필요한데 어디서 마련해야 할지 막막해요.', {name:'검 9',orientation:'reversed'},
    '검 9가 거꾸로 나왔어요 — 걱정이 실제 상황보다 부풀려져 있다는 뜻이에요.'),
  turn('그다음은요?', {name:'펜타클 2',orientation:'upright'},
    '펜타클 2예요. 지금 여러 선택지 사이에서 균형을 잡아가는 중이라는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'완드 6',orientation:'upright'},
    '완드 6이에요. 걱정만큼 심각하지 않고(검 9) 균형도 잡아가는 중이니(펜타클 2), 생각보다 이 고비를 잘 넘길 거라는 신호예요.'),
]);

// ---------- ko-0816 grief_loss PPF ----------
apply('ko-0816', [
  turn('반려묘를 잃은 지 얼마 안 됐어요. 과거부터 봐줄래요?', {name:'컵 3',orientation:'upright'},
    '컵 3이 나왔어요 — 그 아이와 함께한 따뜻한 순간들을 보여줘요.'),
  turn('현재는요?', {name:'검 3',orientation:'reversed'},
    '검 3이 거꾸로 나왔어요. 그 슬픔이 아직 완전히 가라앉지 않았다는 뜻이에요.'),
  turn('미래는요?', {name:'태양',orientation:'reversed'},
    '태양 카드가 거꾸로 나왔어요. 따뜻했던 기억(컵 3)과 아직 가라앉지 않은 슬픔(검 3)을 지나, 밝은 날이 조금 천천히 올 뿐 오긴 온다는 걸 말해줘요.'),
]);

// ---------- ko-0817 boundary_setting SOA ----------
apply('ko-0817', [
  turn('부모님이 제 연애에 자꾸 간섭하세요. 상황부터요.', {name:'황제',orientation:'upright'},
    '황제 카드가 나왔어요 — 부모님 나름의 방식으로 질서를 지키려는 마음을 보여줘요.'),
  turn('장애물은요?', {name:'컵 7',orientation:'reversed'},
    '컵 7이 거꾸로 나왔어요. 정작 당신이 원하는 게 뭔지는 흐릿해졌다는 뜻이에요.'),
  turn('조언은요?', {name:'검 2',orientation:'upright'},
    '검 2예요. 부모님 나름의 질서(황제)에 밀려 흐릿해진 마음(컵 7)을, 이제 눈을 가린 채 피하지 말고 분명하게 선을 그어볼 때라는 뜻이에요.'),
]);

// ---------- ko-0818 breakup_grief generic ----------
apply('ko-0818', [
  turn('이별하고 나서 친구들한테까지 연락을 끊게 돼요.', {name:'컵 8',orientation:'upright'},
    '컵 8이 나왔어요 — 지금 혼자 떠나 있는 시간이 필요했다는 걸 보여줘요.'),
  turn('그다음은요?', {name:'펜타클 9',orientation:'reversed'},
    '펜타클 9가 거꾸로 나왔어요. 그 사이 스스로를 돌보는 것도 잊고 있었다는 뜻이에요.'),
  turn('마지막 카드는요?', {name:'완드 9',orientation:'upright'},
    '완드 9예요. 떠나 있는 시간이 필요했고(컵 8) 자신을 돌보는 것도 잊고 있었지만(펜타클 9), 지치긴 했어도 다시 사람들에게 손 내밀 힘이 조금씩 돌아오고 있다는 신호예요.'),
]);

// ---------- ko-0819 study_exam SOA ----------
apply('ko-0819', [
  turn('유학 준비 중인데 어학 성적이 계속 목표에 안 닿아요. 상황부터요.', {name:'검 5',orientation:'upright'},
    '검 5가 나왔어요 — 지금 스스로와의 싸움에서 자꾸 지고 있다는 느낌을 보여줘요.'),
  turn('장애물은요?', {name:'달',orientation:'reversed'},
    '달 카드가 거꾸로 나왔어요. 불안이 실력보다 더 크게 느껴지고 있다는 뜻이에요.'),
  turn('조언은요?', {name:'별',orientation:'upright'},
    '별 카드예요. 스스로와 지고 있는 느낌(검 5)도, 부풀려진 불안(달)도 다 지나갈 거예요. 조급함을 내려놓으면 원래 가진 실력이 다시 보일 거예요.'),
]);

// ---------- ko-0859 love_new PPF ----------
apply('ko-0859', [
  turn('소개팅에서 만난 사람이 계속 생각나는데 다시 연락해도 될까요? 과거부터요.', {name:'완드의 시종',orientation:'upright'},
    '완드의 시종이 나왔어요 — 호기심 가득한 눈으로 시작을 알리는 카드예요.'),
  turn('현재는요?', {name:'연인',orientation:'upright'},
    '연인 카드예요. 그 마음이 진심이라고 말해주고 있어요.'),
  turn('미래는요?', {name:'컵 2',orientation:'upright'},
    '컵 2예요. 호기심 가득했던 시작(완드의 시종)이 진심(연인)으로 이어져, 마주 보는 손을 그리고 있어요. 지금 그 설렘을 믿고 먼저 연락해봐도 좋을 흐름이에요.'),
]);

// ---------- ko-0860 career_decision SOA ----------
apply('ko-0860', [
  turn('3년 다닌 회사를 그만둬야 할지 상황부터 봐주세요.', {name:'펜타클 7',orientation:'reversed'},
    '펜타클 7이 거꾸로 나왔어요 — 애쓴 만큼 못 거둔 답답함을 보여줘요.'),
  turn('장애물은요?', {name:'검 3',orientation:'upright'},
    '검 3이에요. 그 실망이 이미 마음을 찌르고 있다는 뜻이에요.'),
  turn('조언은요?', {name:'태양',orientation:'upright'},
    '태양 카드예요. 애쓴 만큼 못 거뒀고(펜타클 7) 이미 상처받았지만(검 3), 그럼에도 다음 문 너머엔 맑은 하늘이 있다고 말해줘요.'),
]);

// ---------- ko-0861 decision_fork ----------
apply('ko-0861', [
  turn('대기업 안정적인 자리랑 스타트업 도전, 둘 중 뭘 골라야 할지 봐주세요.', {name:'펜타클의 왕',orientation:'upright'},
    '안정 쪽엔 펜타클의 왕이 나왔어요 — 이미 자기 자리에서 꽤 확신에 차 있는 카드예요.'),
  turn('스타트업 쪽은요?', {name:'완드의 기사',orientation:'upright'},
    '완드의 기사예요. 이쪽도 자기 방향에 대한 확신이 상당해요.'),
  turn('뭐가 더 중요한지 봐주세요.', {name:'절제',orientation:'upright'},
    '가운데 놓인 절제 카드예요. 안정(펜타클의 왕)과 도전(완드의 기사) 둘 다 나쁘지 않은 확신이니, 정답을 고르는 문제가 아니라 지금 당신 삶에 어느 쪽 리듬이 더 필요한지를 묻는 거예요.'),
]);

// ---------- ko-0862 love_existing generic ----------
apply('ko-0862', [
  turn('연애 3년차인데 권태기인지 헤어질 때인지 모르겠어요.', {name:'컵 7',orientation:'reversed'},
    '컵 7이 거꾸로 나왔어요 — 흐릿했던 마음이 조금씩 선명해지고 있다는 뜻이에요.'),
  turn('그다음은요?', {name:'검 2',orientation:'upright'},
    '검 2예요. 아직 눈을 가린 채 결정을 미루고 있다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'컵 4',orientation:'reversed'},
    '컵 4가 거꾸로 나왔어요. 마음은 점점 선명해지는데(컵 7) 결정은 미루고 있는(검 2) 지금, 이 카드는 무심함 뒤에 아직 마음이 남아있다는 신호예요.'),
]);

// ---------- ko-0863 family_conflict SOA ----------
apply('ko-0863', [
  turn('아빠랑 오래된 갈등이 있는데 이번 설엔 풀어볼까 해요. 상황부터요.', {name:'검 5',orientation:'reversed'},
    '검 5가 거꾸로 나왔어요 — 그동안의 다툼이 힘을 잃어가고 있다는 뜻이에요.'),
  turn('장애물은요?', {name:'컵 6',orientation:'upright'},
    '컵 6이에요. 예전 좋았던 시절의 기억이 오히려 다리가 되어줄 수 있어요.'),
  turn('조언은요?', {name:'황제',orientation:'upright'},
    '황제 카드예요. 다툼이 힘을 잃어가고(검 5) 좋았던 기억이 다리로 남아있으니(컵 6), 이번엔 당신이 먼저 자리를 마련해봐도 좋겠다고 말해줘요.'),
]);

// ---------- ko-0864 burnout_identity generic ----------
apply('ko-0864', [
  turn('번아웃이 심한데 이게 그냥 게을러진 건지 진짜 쉬어야 하는 건지 모르겠어요.', {name:'검 4',orientation:'upright'},
    '검 4가 나왔어요 — 몸을 뉘인 채 회복 중임을 보여주는 카드예요.'),
  turn('그다음은요?', {name:'은둔자',orientation:'reversed'},
    '은둔자가 거꾸로 나왔어요. 혼자 있는 시간을 오히려 밀어내고 있었다는 뜻이에요.'),
  turn('마지막 카드는요?', {name:'별',orientation:'upright'},
    '별 카드예요. 몸은 이미 쉬라고 신호를 보내는데(검 4) 정작 그 시간을 밀어내고 있었다면(은둔자), 그 회복은 이미 시작된 거니 조금만 더 자신에게 시간을 주라는 뜻이에요.'),
]);

// ---------- ko-0865 money_practical generic ----------
apply('ko-0865', [
  turn('재테크 공부를 시작했는데 이 방향이 맞는지 봐주세요.', {name:'펜타클 3',orientation:'upright'},
    '펜타클 3이 나왔어요 — 함께 배우고 쌓아가는 과정이 잘 진행 중이라는 걸 보여줘요.'),
  turn('그다음은요?', {name:'완드 9',orientation:'reversed'},
    '완드 9가 거꾸로 나왔어요. 방어적으로 웅크릴 필요는 없다는 뜻이에요.'),
  turn('마지막 카드는요?', {name:'펜타클 10',orientation:'upright'},
    '펜타클 10이에요. 잘 쌓아가고 있고(펜타클 3) 굳이 경계할 필요도 없으니(완드 9), 이 방향이 결국 안정적인 기반으로 이어질 거라는 신호예요.'),
]);

// ---------- ko-0866 friendship generic ----------
apply('ko-0866', [
  turn('오랜 모임에서 이제 그만 나가고 싶은데 미안한 마음이 커요.', {name:'컵 8',orientation:'reversed'},
    '컵 8이 거꾸로 나왔어요 — 떠나고 싶은 마음이 이미 확실하다는 뜻이에요.'),
  turn('그다음은요?', {name:'검 10',orientation:'upright'},
    '검 10이에요. 이 모임이 이미 끝의 자리에 와 있다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'태양',orientation:'reversed'},
    '태양이 거꾸로 나왔어요. 마음은 이미 정해졌고(컵 8) 자리도 끝을 향해 있으니(검 10), 이 결정 뒤에도 당신의 해는 다시 뜬다는 뜻이에요.'),
]);

// ---------- ko-0867 study_exam PPF ----------
apply('ko-0867', [
  turn('자격증 시험 준비하는데 이게 맞는 길인지 과거부터 봐주세요.', {name:'펜타클 8',orientation:'upright'},
    '펜타클 8이 나왔어요 — 꾸준히 손을 놀리며 실력을 쌓아온 시간을 보여줘요.'),
  turn('현재는요?', {name:'검 7',orientation:'reversed'},
    '검 7이 거꾸로 나왔어요. 이제 요령 부리지 않고 정직하게 나아가고 있다는 뜻이에요.'),
  turn('미래는요?', {name:'태양',orientation:'upright'},
    '태양 카드예요. 꾸준히 쌓아온 시간(펜타클 8)이 정직한 지금(검 7)을 지나, 밝은 결과로 이어질 거예요.'),
]);

// ---------- ko-0868 grief_loss generic ----------
apply('ko-0868', [
  turn('키우던 화분이 죽었는데 별거 아닌 걸로 이렇게 슬퍼해도 될지 모르겠어요.', {name:'죽음',orientation:'reversed'},
    '죽음 카드가 거꾸로 나왔어요 — 끝을 온전히 받아들이지 못하고 있다는 뜻이에요.'),
  turn('그다음은요?', {name:'컵 9',orientation:'reversed'},
    '컵 9도 거꾸로 나왔어요. 그 슬픔이 남들 보기엔 작아도 당신에겐 진짜라는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'별',orientation:'upright'},
    '별 카드예요. 끝을 받아들이기 어렵고(죽음) 그 슬픔이 진짜라는 걸(컵 9) 굳이 부끄러워하지 않아도 돼요. 다시 돌봄을 시작할 힘이 곧 온다고 말해줘요.'),
]);

// ---------- ko-0869 self_growth SOA ----------
apply('ko-0869', [
  turn('제자리인 것 같은 기분이 몇 달째 계속돼요. 상황부터요.', {name:'전차',orientation:'reversed'},
    '전차가 거꾸로 나왔어요 — 방향을 잃은 채 제자리를 맴돌고 있다는 뜻이에요.'),
  turn('장애물은요?', {name:'검 9',orientation:'upright'},
    '검 9예요. 그 불안이 밤마다 당신을 깨우고 있다는 걸 보여줘요.'),
  turn('조언은요?', {name:'운명의 수레바퀴',orientation:'upright'},
    '운명의 수레바퀴예요. 방향을 잃은 채(전차) 밤마다 뒤척이고 있었다면(검 9), 이 흐름은 곧 방향이 다시 바뀔 거라는 신호예요.'),
]);

// ---------- ko-0870 reconciliation generic ----------
apply('ko-0870', [
  turn('헤어진 애인이 다시 만나자고 하는데 옛날처럼 될까 봐 겁나요.', {name:'검 6',orientation:'reversed'},
    '검 6이 거꾸로 나왔어요 — 아직 그 물을 건널 준비가 안 됐다는 뜻이에요.'),
  turn('그다음은요?', {name:'컵 6',orientation:'reversed'},
    '컵 6도 거꾸로 나왔어요. 그리움이 과거 좋았던 시절에만 머물러 있다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'연인',orientation:'reversed'},
    '연인 카드가 거꾸로 나왔어요. 아직 건널 준비가 안 됐고(검 6) 그리움도 과거에 머물러 있다면(컵 6), 그때와 같은 선택을 하기 전에 무엇이 달라졌는지부터 확인해볼 필요가 있어요.'),
]);

// ---------- ko-0871 big_life_decision PPF ----------
apply('ko-0871', [
  turn('모아둔 돈으로 1년 세계여행을 갈까 고민 중이에요. 과거부터요.', {name:'바보',orientation:'upright'},
    '바보 카드가 나왔어요 — 계획보다 마음이 먼저 그 여정을 원하고 있었다는 뜻이에요.'),
  turn('현재는요?', {name:'검 8',orientation:'reversed'},
    '검 8이 거꾸로 나왔어요. 스스로를 가두던 망설임이 풀리고 있다는 걸 보여줘요.'),
  turn('미래는요?', {name:'세계',orientation:'upright'},
    '세계 카드예요. 마음은 이미 원하고 있었고(바보) 망설임도 풀리고 있으니(검 8), 떠난다면 하나의 매듭을 잘 마무리 짓고 새 장을 여는 여정이 될 거예요.'),
]);

// ---------- ko-0872 boundary_setting SOA ----------
apply('ko-0872', [
  turn('이웃이 층간소음으로 계속 민원을 넣는데 억울해요. 상황부터요.', {name:'펜타클의 여왕',orientation:'upright'},
    '펜타클 여왕이 나왔어요 — 현실적으로 대응하려는 마음을 보여줘요.'),
  turn('장애물은요?', {name:'검 5',orientation:'upright'},
    '검 5예요. 이 다툼에서 이기고 지는 게 아니라 서로 더 지치기만 할 거라는 뜻이에요.'),
  turn('조언은요?', {name:'정의',orientation:'upright'},
    '정의 카드예요. 현실적으로 대응하되(펜타클 여왕) 감정싸움으로 서로를 지치게 하는 대신(검 5), 사실과 기록으로 차분히 풀어가라는 조언이에요.'),
]);

// ---------- ko-0873 career_decision generic ----------
apply('ko-0873', [
  turn('동료가 제 아이디어를 가로챘는데 이제 조금씩 괜찮아지고 있어요.', {name:'검 3',orientation:'reversed'},
    '검 3이 거꾸로 나왔어요 — 그 상처가 서서히 아물고 있다는 뜻이에요.'),
  turn('그다음은요?', {name:'완드 3',orientation:'upright'},
    '완드 3이에요. 시선이 이제 다시 앞을 향하고 있다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'태양',orientation:'upright'},
    '태양 카드예요. 상처가 아물고(검 3) 시선이 다시 앞을 향하는(완드 3) 지금, 이 일이 오히려 당신의 진짜 실력을 더 선명하게 드러낼 계기가 될 거예요.'),
]);

// ---------- ko-0874 love_new generic ----------
apply('ko-0874', [
  turn('온라인에서만 알던 사람을 만나볼까 고민 중이에요.', {name:'여사제',orientation:'reversed'},
    '여사제가 거꾸로 나왔어요 — 직감보다 확인이 더 필요한 시점이라는 뜻이에요.'),
  turn('그다음은요?', {name:'컵의 여왕',orientation:'upright'},
    '컵의 여왕이에요. 마음을 여는 데엔 문제 없다는 걸 보여줘요.'),
  turn('마지막 카드는요?', {name:'완드 4',orientation:'upright'},
    '완드 4예요. 확인이 필요한 시점이지만(여사제) 마음을 열 준비는 이미 돼 있으니(컵의 여왕), 실제로 만났을 때 축하할 만한 순간이 될 가능성이 있어요.'),
]);

// ---------- ko-0875 unresolved_closure PPF ----------
apply('ko-0875', [
  turn('예전 상사한테 부당한 대우를 받았던 게 아직도 가끔 화가 나요. 과거부터요.', {name:'악마',orientation:'reversed'},
    '악마 카드가 거꾸로 나왔어요 — 그때의 사슬을 이제 스스로 풀어내고 있다는 뜻이에요.'),
  turn('현재는요?', {name:'검 4',orientation:'upright'},
    '검 4예요. 지금은 그 기억으로부터 거리를 두고 쉬고 있는 상태예요.'),
  turn('미래는요?', {name:'별',orientation:'upright'},
    '별 카드예요. 사슬을 풀어내는 중이고(악마) 지금은 거리를 두고 쉬는 시간(검 4)이니, 그 화가 완전히 옅어질 날이 천천히 오고 있어요.'),
]);

// ---------- ko-0876 parenting_worry SOA ----------
apply('ko-0876', [
  turn('사춘기 아들한테 어디까지 간섭해야 할지 모르겠어요. 상황부터요.', {name:'황제',orientation:'reversed'},
    '황제가 거꾸로 나왔어요 — 통제가 오히려 힘을 잃고 있다는 뜻이에요.'),
  turn('장애물은요?', {name:'검 2',orientation:'upright'},
    '검 2예요. 아이도 당신도 서로 마주하길 망설이고 있다는 걸 보여줘요.'),
  turn('조언은요?', {name:'절제',orientation:'upright'},
    '절제 카드예요. 통제는 힘을 잃어가고(황제) 서로 마주하길 망설이는(검 2) 지금, 규칙과 자유 사이 균형점을 함께 찾아가라고 말해줘요.'),
]);

// ---------- ko-0877 life_transition PPF ----------
apply('ko-0877', [
  turn('퇴직 후 뭘 해야 할지 막막해요. 과거부터 봐주세요.', {name:'은둔자',orientation:'upright'},
    '은둔자가 나왔어요 — 그동안 바깥일에 쫓기느라 미뤄온 내면의 질문들을 보여줘요.'),
  turn('현재는요?', {name:'검 6',orientation:'upright'},
    '검 6이에요. 지금 그 질문을 안고 새로운 물가로 건너가는 중이라는 뜻이에요.'),
  turn('미래는요?', {name:'태양',orientation:'reversed'},
    '태양이 거꾸로 나왔어요. 미뤄왔던 질문들(은둔자)을 안고 건너가는 지금(검 6), 답은 천천히, 하지만 분명히 밝아질 거예요.'),
]);

// ---------- ko-0878 creative_block SOA ----------
apply('ko-0878', [
  turn('소설 쓰다가 완전히 막혔어요. 상황부터요.', {name:'컵의 시종',orientation:'reversed'},
    '컵의 시종이 거꾸로 나왔어요 — 영감이 막혔다기보다 스스로 억누르고 있다는 뜻이에요.'),
  turn('장애물은요?', {name:'검 8',orientation:'reversed'},
    '검 8도 거꾸로 나왔어요. 그 눈가리개를 이제 벗을 준비가 됐다는 걸 보여줘요.'),
  turn('조언은요?', {name:'여황제',orientation:'upright'},
    '여황제 카드예요. 억누르고 있었고(컵의 시종) 이제 벗을 준비가 됐으니(검 8), 완벽한 문장 대신 그냥 흘러가는 대로 써보라고 말해줘요.'),
]);

// ---------- ko-0879 friendship generic ----------
apply('ko-0879', [
  turn('친구 모임에서 저만 다른 의견을 냈다가 은근히 소외된 느낌이에요.', {name:'완드 7',orientation:'upright'},
    '완드 7이 나왔어요 — 지금 혼자서라도 자기 입장을 지키고 있는 모습이에요.'),
  turn('그다음은요?', {name:'펜타클의 왕',orientation:'reversed'},
    '펜타클의 왕이 거꾸로 나왔어요. 그 그룹의 결속이 사실 생각보다 단단하지 않다는 뜻이에요.'),
  turn('마지막 카드는요?', {name:'정의',orientation:'upright'},
    '정의 카드예요. 혼자서라도 입장을 지켰고(완드 7) 그 결속이 생각보다 약했다면(펜타클의 왕), 옳고 그름보다 그 모임이 당신에게 맞는 자리인지부터 살펴보라고 말해줘요.'),
]);

// Write back
fs.writeFileSync(FILE, recs.map(r => JSON.stringify(r)).join('\n') + '\n');
console.log('done');
