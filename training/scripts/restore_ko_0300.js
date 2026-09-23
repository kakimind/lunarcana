const { rec, writeBatch } = require('./lang_batch_helper')('ko');

const batch = [
  rec('ko-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "오랜 고민 끝에 마침내 결정을 내렸어요. 후회 없이 나아가고 싶어요.",
    "세계 카드가 나왔어요, 원 안에서 춤추듯 서 있는 사람이 보이는데 — 하나의 매듭이 잘 마무리되고 새 매듭이 시작되는 모습이에요. 그 결정을 내리기까지의 시간이 결코 헛되지 않았다는 뜻이니, 이제는 확신을 가지고 걸어가셔도 좋아요."
  ]]),
];

writeBatch(batch);
