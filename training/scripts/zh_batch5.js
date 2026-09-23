const { rec, writeBatch } = require('./lang_batch_helper')('zh-Hans');

const batch = [
  rec('zh-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    '自己的人生还没理清楚,感觉不该开始一段感情。',
    '世界牌逆位出现了。一个篇章还没完全合上。这份整理,真的急迫到要把感情往后推吗?'
  ]]),
  rec('zh-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    '这周末,终于要正式在一起了!',
    '庆祝的牌。花朵装饰的柱子间,人们聚在一起。此刻最让你期待的是什么?'
  ]]),
  rec('zh-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    '跟男朋友一说话就觉得憋屈,说不出自己的想法。',
    '蒙眼站在剑丛中的人。感觉被困住,但其实是有缝隙的。第一句话,想从哪里开始?'
  ]]),
  rec('zh-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    '刚在一起时候的心动,还有可能再回来吗?',
    '命运之轮牌。感情也是会起伏循环的气流。那份心动,是彻底消失了,还是暂时沉下去了?'
  ]]),
  rec('zh-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    '一直装作已经放下了,其实完全没有。',
    '胜利的牌逆位出现了。表面的恢复,还没成为真的。这份伪装,主要是做给谁看的?'
  ]]),
  rec('zh-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    '分手以后,情绪和日常要一起扛,挺吃力的。',
    '玩杂耍的双手逆位出现了。现在不用两边都做到完美。今天能放下的一件事是什么?'
  ]]),
  rec('zh-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    '一直不确定现在的工作适不适合自己。',
    '月光下道路模糊的牌。现在也许不是要找明确答案,而是需要在不确定中一步步走的力量。那份不确定,有没有慢慢习惯一点?'
  ]]),
  rec('zh-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    '公司条件不错,但团队氛围不太适合自己。',
    '像家人一样围坐的人们逆位出现了。条件好,却没有归属感。这份不对劲,在哪里感受最强烈?'
  ]]),
  rec('zh-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    '一直在复读,对自己的信心越来越少。',
    '星星逆位出现了。希望没消失,只是暂时被遮住了。最初选这条路时的心情,还在吗?'
  ]]),
  rec('zh-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    '妈妈对我的感情抱着特别浪漫的期待,压力挺大的。',
    '小心捧着杯子的骑士牌。妈妈的期待,也许也是她表达爱的方式。这份感受,有没有直接跟她说过?'
  ]]),
  rec('zh-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    '好久没有全家人一起笑得这么开心了。',
    '灿烂的太阳牌。这个瞬间,会长久留在心里吧。想延续这份气氛,还需要什么?'
  ]]),
  rec('zh-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    '最要好的朋友,现在完全联系不上了。',
    '倒在地上的人的牌。看起来可怕,但也是不能再往下掉的谷底。如果能找回那段友情,你想先改变什么?'
  ]]),
  rec('zh-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    '朋友困难的时候我尽力帮了,却感觉没被注意到。',
    '慷慨给予的女王牌。付出本身如果是真心的,那就已经有意义了。那份没被注意到的感受,跟她说过吗?'
  ]]),
  rec('zh-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    '同时追着好几个目标,把自己累垮了。',
    '背负重物的人的牌。可能想扛起了一个人扛不动的重量。现在能放下的一个目标是什么?'
  ]]),
  rec('zh-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    '没办法跟自己和解,一直在讨厌自己。',
    '面对面的两人逆位出现了。现在连对自己都背过身去了。如果要对自己道歉,最想说的是什么?'
  ]]),
  rec('zh-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    '一时冲动花了一大笔钱,挺后悔的。',
    '策马飞奔的骑士逆位出现了。速度超过了判断。下次能怎么先停一下那份冲动?'
  ]]),
  rec('zh-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    '老是改不掉乱花钱的习惯。',
    '死神逆位出现了。该结束的模式还没结束。这个习惯,到底在填补什么?'
  ]]),
  rec('zh-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    '今天的牌拜托了',
    '伤痕累累仍坚持的人的牌。今天就算看起来有点累也没关系,那说明你一直很努力。'
  ]]),
  rec('zh-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    '今天的牌',
    '女祭司牌。今天比起言语,更适合相信内心安静的直觉。'
  ]]),
  rec('zh-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    '今天的牌',
    '偷偷藏起东西的人逆位出现了。今天把藏了很久的事诚实说出来,心里也许会轻松一点。'
  ]]),
  rec('zh-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    '今天的牌一张',
    '给予与接受平衡的牌。今天适合伸手帮别人一把,或者接受别人递来的手。'
  ]]),
  rec('zh-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    '今天的牌',
    '恋人牌逆位出现了。今天在做选择的时候,心情可能有点摇摆,不用着急。'
  ]]),
  rec('zh-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    '那份痛了很久的心情慢慢理顺了,有了做大决定的勇气。',
    '插在心口的剑逆位出现了。痛感正在抽离,留出了新决心的空间。那份决心是什么?'
  ]]),
  rec('zh-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    '面对大决定,开始怀疑自己的能力。',
    '魔术师逆位出现了。工具都在,只是还不够相信自己。以前完成过类似的难事吗?'
  ]]),
  rec('zh-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    '想做点东西,但心里已经没有以前那种冲动了。',
    '连新杯子都不看一眼的人。现在是感受力有点迟钝的时期。以前是什么让你那么心动过?'
  ]]),
  rec('zh-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    '做这种app的人,说到底也只是为了赚钱在努力吧?',
    '工匠的手逆位出现了,挺意味深长的。不管做的人怎么想,你现在的感受更重要。今天是什么让你点开看看?'
  ]]),
  rec('zh-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    '感觉说来说去都是些老套的答案。',
    '倒吊人又是逆位出现,挺有趣的。如果听起来太老套,抱歉。具体是什么让你在意的,可以再说说吗?'
  ]]),
  rec('zh-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    '真的撑不下去了,有点极端的念头。',
    '牌先停在这里。这句话我不会轻描淡写带过。一个人扛着这么重的心情吧。现在有能联系的人吗?没有的话,要不要联系当地的援助热线。'
  ]]),
  rec('zh-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    '男朋友一直监控我的手机,还不让我见朋友。',
    '你的处境比牌更急迫。这不是爱,是控制。有信得过的人吗?也可以联系当地的求助机构。'
  ]]),
  rec('zh-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    '身体不舒服却不敢告诉任何人,一直自己扛着。',
    '牌看不出病情,但你不需要一个人扛着。去医院了吗?'
  ]]),
  rec('zh-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    '被表白了,但自己的心情完全理不清。',
    '摘下眼罩的人逆位出现了。是时候直面现实了。对那个人的心意,现在有几成的把握?'
  ]]),
  rec('zh-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    '一直迁就男朋友,感觉快要丢了自己。',
    '丰饶的女皇逆位出现了。一直给予,自己却空了。最近有没有只属于自己的时间?'
  ]]),
  rec('zh-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    '一个人住,慢慢开始习惯了。',
    '独自站在自己打理的花园里的人。现在的独自一人,不是缺了什么,而是一种完整。一个人的时间里,最喜欢的是哪部分?'
  ]]),
  rec('zh-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    '工作和生活的平衡,一直很难找到。',
    '小心在两个杯子间倒水的人。也许答案不是完美的平衡,而是不断调整这件事本身。现在偏向哪一边多一点?'
  ]]),
  rec('zh-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    '想换专业,但担心现在改会不会太晚了。',
    '好奇盯着火苗的侍从牌。这张牌里没有"太晚"这个概念。那个新专业,是什么吸引了你?'
  ]]),
  rec('zh-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    '兄弟姐妹吵架总是我先道歉,已经累了。',
    '赢了却一脸苦涩的人的牌。总是先低头,某种意义上也是一直在输。这次不先道歉,会怎么样?'
  ]]),
  rec('zh-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    '朋友说了伤人的话,当时忍下去了,但一直耿耿于怀。',
    '温柔按住狮子嘴的牌。忍耐不一定就是坚强。现在再提起来跟她聊聊,可以吗?'
  ]]),
  rec('zh-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    '太执着于过去,感觉没办法活在当下。',
    '回望过去的人逆位出现了。是时候把目光收回到现在了。这一刻,映入眼帘的是什么?'
  ]]),
  rec('zh-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    '担心年纪大了以后经济上能不能稳定。',
    '代表家族传承的星币十牌。这张牌映照的是长期的稳定。从现在开始能一点点积累的是什么?'
  ]]),
  rec('zh-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    '今天的牌拜托了',
    '宝剑皇后逆位出现了。今天把话说得柔和一点,传达效果会更好。'
  ]]),
  rec('zh-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    '今天的牌',
    '望着远方海面的牌。今天不只是眼前的事,也适合往远处规划一下。'
  ]]),
  rec('zh-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    '今天的牌拿出来',
    '盯着杯子看的人的牌。今天就算有点失望的事,把目光转向还剩下的东西,心情会轻松一点。'
  ]]),
  rec('zh-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    '今天一张',
    '手持天平的正义牌。今天比起情绪,先理清事实,选择会更清楚一点。'
  ]]),
  rec('zh-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    '在很多选项里,终于定下了一个。',
    '犹豫不决的人逆位出现了。模糊的选项变清晰了。这份确信,是怎么慢慢定下来的?'
  ]]),
  rec('zh-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    '做事完全没有条理,每次都乱糟糟的。',
    '代表秩序的皇帝牌。现在需要的可能不是灵感,而是结构。把工作分成三个阶段,会是怎样?'
  ]]),
  rec('zh-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    '依赖这种东西,感觉自己有点可怜。',
    '休息的人逆位出现了。找个能依靠的地方,不算可怜。今天是什么让你特别难受,才来到这里?'
  ]]),
  rec('zh-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    '一直有种想放弃一切的念头,觉得自己有点危险。',
    '牌先停在这里。谢谢你告诉我这份危险的感受。现在有能联系的人吗?没有的话,要不要联系当地的援助热线——我一直在这里。'
  ]]),
  rec('zh-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    '打工的店长一直对我有身体上的威胁性举动。',
    '比起牌,现在的情况更紧急。那绝对不是正常的。能立刻离开那个地方吗?也可以联系劳动权益求助或心理咨询机构。'
  ]]),
  rec('zh-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    '一直装作没事,其实身体一直不太好。不去医院也没关系吧?',
    '这个我没办法替你判断,需要去医院确认。这份"没事"的伪装,持续多久了?'
  ]]),
  rec('zh-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    '在考虑要不要主动接近喜欢的人。',
    '把两股力量合成一个方向的战车牌。现在好像是放下犹豫、定下方向的时机。想先做的第一件事是什么?'
  ]]),
  rec('zh-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    '在这段感情投入了很多时间,却感觉完全没有进展,累了。',
    '看着自己栽种的东西的人逆位出现了。没长成期待的样子,带着失望。这段关系,还觉得有继续生长的空间吗?'
  ]]),
  rec('zh-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    '分手以后,一直被老朋友支撑着。',
    '象征熟悉支持的教皇牌。身边有个信得过、熟悉的存在,是很大的力量。有跟她说声谢谢吗?'
  ]]),
  rec('zh-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    '有大计划,却迈不出第一步。',
    '望向远方的人逆位出现了。计划很多,行动跟不上。拆到最小,第一步会是什么?'
  ]]),
  rec('zh-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    '留学的准备一直停在原地。',
    '渡过平静水面的船逆位出现了。移动停滞了。停住的是文件,还是你的决心?'
  ]]),
  rec('zh-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    '好像终于摆脱了跟家人之间那个多年的对立模式。',
    '锁链逆位出现了。正从束缚已久的模式中挣脱出来。是什么带来了这个改变?'
  ]]),
  rec('zh-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    '想守住自己的信念,总是跟周围起冲突。',
    '独自挡着棍子的人。持有信念,本来就是有点孤独的位置。那份信念,现在还觉得值得守护吗?'
  ]]),
  rec('zh-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    '有一笔大支出要来了,不确定现在是不是合适的时机。',
    '倒吊人的耐心牌。等待也是一种智慧。再等一等,会有什么变得更清楚?'
  ]]),
  rec('zh-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    '今天的牌拜托了',
    '手心里的一枚硬币牌。今天可能会注意到一个小机会,留意一下。'
  ]]),
  rec('zh-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    '久违地又有了想创作的心情。',
    '希望正静静充满的星星牌。这份心情,让你最先想做什么?'
  ]]),
  rec('zh-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    '想了很久之后,终于做出了决定。想不后悔地走下去。',
    '世界牌,一个圆完成的牌,结束与开始同在。带着这个决定,现在心情怎么样?'
  ]]),
];

writeBatch(batch);
