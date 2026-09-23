const { rec, writeBatch } = require('./lang_batch_helper')('ko');

const batch = [
  rec('ko-0955', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "오늘의 카드 한 장 뽑아주세요",
    "완드 4가 나왔어요, 소소한 축하와 어울림의 카드예요. 오늘은 작은 즐거움을 그냥 즐겨도 좋은 날이에요."
  ]]),
  rec('ko-0956', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "오늘 카드 봐주세요",
    "펜타클 9가 나왔어요, 스스로 일군 것 안에서 편안히 서 있는 모습이에요. 오늘은 혼자만의 시간을 누려도 죄책감 느끼지 않으셔도 돼요."
  ]]),
  rec('ko-0957', 'daily_checkin', 1, [{id:'sw06',orientation:'reversed'}], [[
    "오늘 카드요",
    "검 6이 거꾸로 나왔어요, 아직 완전히 건너지 못한 모습이에요. 오늘은 무리해서 앞으로 나아가려 하지 않아도 괜찮아요."
  ]]),
  rec('ko-0958', 'daily_checkin', 1, [{id:'ar07',orientation:'upright'}], [[
    "오늘의 카드 뽑아줘",
    "전차 카드가 나왔어요, 흩어진 힘을 하나로 모아 나아가는 모습이에요. 오늘은 이것저것 벌이기보다 한 가지에 집중해보세요."
  ]]),
  rec('ko-0959', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "카드 한 장만 봐주세요",
    "컵 5가 거꾸로 나왔어요, 쏟아진 것 대신 아직 남은 걸 바라보기 시작하는 카드예요. 오늘은 아쉬운 것보다 남은 걸 세어보는 하루가 될 것 같아요."
  ]]),
  rec('ko-0960', 'daily_checkin', 1, [{id:'wakn',orientation:'reversed'}], [[
    "오늘 카드 하나만요",
    "완드의 기사가 거꾸로 나왔어요, 성급한 속도를 잠시 늦추는 모습이에요. 오늘은 서두르는 대신 한 박자 천천히 가보세요."
  ]]),
];

writeBatch(batch);
