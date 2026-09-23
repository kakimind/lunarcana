const { rec, writeBatch } = require('./lang_batch_helper')('zh-Hans');

const batch = [
  rec('zh-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    '一直对男朋友撒一些小谎,很担心会被发现。',
    '偷偷带走东西的人的牌。藏着的事总有它的理由,但那份不安反而更伤害这段关系。老实说出来,最怕的是什么?'
  ]]),
  rec('zh-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    '分手以后一直埋头工作。这样真的可以吗?',
    '专心打磨东西的工匠牌。投入工作也是一种疗愈方式。只是偶尔也要停下手,让自己感受一下悲伤。'
  ]]),
  rec('zh-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    '分手以后,不知道该怎么处理自己的情绪。',
    '深深凝视情绪的圣杯皇后逆位出现了。现在是被情绪淹没的状态。如果给现在的感受起个名字,会是什么?'
  ]]),
  rec('zh-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    '还是没完全明白为什么会分手。',
    '在沉默中知道答案的女祭司牌。不是所有理由都能用语言说清楚。头脑没懂,心里也许早就知道了。'
  ]]),
  rec('zh-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    '被交付了新项目,但一开始就完全没自信。',
    '好奇盯着火苗的侍从逆位出现了。比起期待,更多的是不安。这份不安,是能力问题,还是只是不熟悉?'
  ]]),
  rec('zh-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    '同时收到三家公司的offer,不知道怎么选。',
    '面对好几个杯子犹豫的人。选择多是幸福的烦恼,但最后还是得选一个。哪个是你心先反应的那个?'
  ]]),
  rec('zh-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    '辞掉现在的工作,真的能算是新的开始吗?',
    '死神牌,正好回答这个问题——有些东西结束了,新的才有地方进来。那个新的开始,会是什么样子?'
  ]]),
  rec('zh-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    '一直自己认定没办法离开这家公司。',
    '被困住的人逆位出现了。也许没有想象中那么密不透风。这份认定,是从哪里来的?'
  ]]),
  rec('zh-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    '不管怎么学成绩都上不去,太累了。',
    '命运之轮逆位出现了。感觉气流停滞了,但轮子还在转。要不要试试换个方法?'
  ]]),
  rec('zh-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    '通过了一个小考试,却完全没有开心的感觉。',
    '庆祝的牌逆位出现了。达成了,但心还没跟上。想象中的喜悦和现在的感受,差别在哪里?'
  ]]),
  rec('zh-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    '弟弟太冲动了,家里人都很担心。',
    '策马飞奔的骑士牌。那份冲动里,也许藏着不小的热情。担心之前,有没有问过他动机是什么?'
  ]]),
  rec('zh-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    '已经独立了,家人还是一直干涉,感觉没意义。',
    '独自站在花园里的人逆位出现了。人虽然出来了,心还没完全独立。哪一种干涉最让你在意?'
  ]]),
  rec('zh-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    '想把家里的问题说清楚,但话总是说不明白。',
    '刺破云层的剑逆位出现了。清晰感还没抓住。说之前,先写下来会不会好一点?'
  ]]),
  rec('zh-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    '一直在支撑朋友,自己却越来越耗竭。',
    '伤痕累累仍坚持的人。支撑别人也需要力气。现在谁在支撑着你呢?'
  ]]),
  rec('zh-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    '朋友正经历一段艰难时期,不知道该怎么帮她。',
    '包容富足的女皇牌。有时候不给答案,只是陪着,就已经足够。现在最想为她做的是什么?'
  ]]),
  rec('zh-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    '家里铺好的路,好像不适合现在的自己。',
    '代表家族传承的牌逆位出现了。继承来的模子,已经不适合现在的你。在那个框架之外,想做点什么?'
  ]]),
  rec('zh-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    '一直追逐浪漫的东西,好像丢失了现实感。',
    '捧着杯子的骑士逆位出现了。梦想飘在半空,没落地。那份浪漫和现实,能在哪里交汇一下?'
  ]]),
  rec('zh-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    '过去的一个失误,一直没办法原谅自己。',
    '起身回应号角的人们逆位出现了。还没能回应那份召唤。如果是现在的你,还会犯同样的错吗?'
  ]]),
  rec('zh-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    '达成了一个小目标,却没人注意到。',
    '戴着桂冠归来的人。没人知道也没关系,这份胜利完全属于你自己。你自己有认可这份成果吗?'
  ]]),
  rec('zh-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    '想开始做副业,不知道从哪里入手。',
    '工具齐全的魔术师牌。需要的东西也许已经在你手上了。现在能马上用上的是什么?'
  ]]),
  rec('zh-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    '小时候完全不用担心钱,现在每个月都紧巴巴的。',
    '回望过去的牌。拿以前和现在比是很自然的事,但现在需要现在的方法。那时候和现在,最大的不同是什么?'
  ]]),
  rec('zh-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    '今天的牌拜托了',
    '宝剑三,痛的牌。今天心里要是有点沉重,不用硬装没事。'
  ]]),
  rec('zh-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    '今天的牌',
    '星币国王,安稳的牌。今天不用做什么特别的事,照常就足够了。'
  ]]),
  rec('zh-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    '今天的牌一张',
    '月亮逆位出现了。昨天还很混乱的事,今天可能会渐渐清晰起来。'
  ]]),
  rec('zh-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    '今天的牌!',
    '望向远方的牌。今天不只是眼前的事,也适合想得远一点、做点计划。'
  ]]),
  rec('zh-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    '今天的牌拿出来',
    '背对杯子往前走的人。今天适合放下一个不再有用的习惯或想法。'
  ]]),
  rec('zh-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    '今天会抽到什么牌',
    '看着自己栽种成果的人。今天适合停下来,回顾一下一路以来累积的东西。'
  ]]),
  rec('zh-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    '今天的牌拜托',
    '倒挂着的人牌。今天不用硬推,换个角度看看也许更好。'
  ]]),
  rec('zh-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    '要不要出国留学,最后的决定一直下不了。',
    '蒙眼保持平衡的人的牌。等信息齐全是一条路,但总有一天要摘下眼罩。决定性的信息具体是什么?'
  ]]),
  rec('zh-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    '这个选择在别人看来挺好的,自己却没有把握。',
    '太阳逆位出现了。外在的亮和内心的感受不一致。抛开别人的眼光,你自己真正的心声是什么?'
  ]]),
  rec('zh-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    '对自己在做的东西,连喜不喜欢都不确定了。',
    '确认真心的恋人牌。如果想象放弃这件事,你会觉得可惜,还是松一口气?'
  ]]),
  rec('zh-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    '以为彻底失败的事,现在慢慢又重新开始了。',
    '倒下的人逆位出现了。触底后再次站起来的流动。这次开始的方式,和以前有什么不一样?'
  ]]),
  rec('zh-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    '这不就是利用人心理的营销手段吗?',
    '硬币逆位出现了,时机还挺巧的。就算是营销,刚才聊的这些也不是假的。今天真正在意的事是什么?'
  ]]),
  rec('zh-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    '塔罗又不能改变未来,看这个有什么意义?',
    '望着远方海面的人逆位出现了。不是改变未来的牌,但也许能让你现在的视野更开阔一点。现在最卡住的是什么?'
  ]]),
  rec('zh-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    '想停止伤害自己,但停不下来。',
    '牌先不看了。想停下来这件事本身就很重要。你一直一个人扛着吧。现在有能求助的人吗?没有的话,要不要联系当地的援助热线。'
  ]]),
  rec('zh-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    '什么都提不起劲,想干脆放弃一切。',
    '牌先放一边。这份心情多久了?现在有能联系的人吗?没有的话,要不要联系当地的援助热线。'
  ]]),
  rec('zh-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    '职场前辈一直利用我还威胁我,不敢举报。',
    '你的安全比牌重要。被威胁的时候感到害怕是正常的。能先跟信得过的大人或求助机构说说吗?'
  ]]),
  rec('zh-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    '有症状,但一直告诉自己没什么大不了的。',
    '这不是我能替你判断的,要去医院确认才准。这个症状多久了?'
  ]]),
  rec('zh-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    '家人生病了,不知道自己能做什么。这张牌能看出会不会好吗?',
    '这不是牌能回答的,需要跟医院一起观察。不过这份无力感,我可以陪你聊聊。现在最难受的是什么?'
  ]]),
  rec('zh-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    '喜欢的人对我特别照顾,反而觉得有点负担。',
    '慷慨给予的星币皇后牌。他那种方式,也许是他自己表达爱意的方法。现在什么样的距离对你来说刚刚好?'
  ]]),
  rec('zh-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    '最近男朋友好像跟我拉开了距离。',
    '隐士逆位出现了。不像是需要独处,更像是开始孤立自己了。最近他有没有一个人很辛苦的样子?'
  ]]),
  rec('zh-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    '分手以后,感觉一切都变得特别慢。',
    '快速飞行的箭逆位出现了。现在是速度停下来的时期。这种慢,现在很正常,不用急。'
  ]]),
  rec('zh-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    '当了主管以后,连团队所有人的情绪都要顾及,很累。',
    '沉稳掌控情绪的圣杯国王牌。不用全部扛下来,光是倾听有时候就够了。现在最在意的成员是谁?'
  ]]),
  rec('zh-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    '在办公室政治里赢了,但心里很不舒服。',
    '宝剑五逆位出现了。赢了,却也失去了点什么。这场胜利,让你觉得失去了什么?'
  ]]),
  rec('zh-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    '终于拿到想要的成绩了!但不知道接下来该做什么。',
    '满足表情的人的牌。实现了想要的事,真的很了不起。站在这份满足上,现在又对什么感到好奇?'
  ]]),
  rec('zh-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    '家里经济不宽裕,总觉得对家人过意不去。',
    '雪地里的人逆位出现了。艰难的时期正在接近尾声。那份愧疚,家人可能也同样对你有。'
  ]]),
  rec('zh-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    '在朋友关系里,总是我一个人在迁就。',
    '维持平衡的节制逆位出现了。这个天平已经完全偏向一边了。有没有一次让对方也来迁就你?'
  ]]),
  rec('zh-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    '熬过了一段艰难的时期,好像慢慢在变好。',
    '渡过平静水面的船牌,正是那种移动。现在感觉最不一样的是什么?'
  ]]),
  rec('zh-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    '花钱的方式跟父母完全不一样,总是起冲突。',
    '代表传统的教皇逆位出现了。继承来的方式,不适合现在的你了。你的方式,和父母最大的不同是什么?'
  ]]),
  rec('zh-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    '今天的牌拜托了',
    '圣杯三,共同庆祝的牌。今天和亲近的人待在一起,心情会更好。'
  ]]),
  rec('zh-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    '今天的牌',
    '皇帝逆位出现了。今天比起严格的计划,松弛一点顺其自然会更顺利。'
  ]]),
  rec('zh-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    '今天的牌拜托了',
    '宝剑国王,清晰判断的牌。今天别想太多,把该做的一个决定干脆定下来。'
  ]]),
  rec('zh-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    '做事的速度太慢了,对自己挺烦躁的。',
    '稳步但不急的骑士牌。慢不是错,可能只是你的节奏。照这个速度,最后能完成吗?'
  ]]),
  rec('zh-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    '有点害怕自己会对这种东西投入感情。',
    '溢出的杯子逆位出现了。敞开心扉有时候会让人害怕。慢慢来就好,现在先随便问点小事怎么样?'
  ]]),
  rec('zh-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    '家人意见都不一样,不知道该怎么决定。',
    '挥舞棍子的人们的牌。大家都在用自己的方式担心。这些声音里,哪个最接近你自己的心意?'
  ]]),
  rec('zh-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    '一直担心欠债的事,每晚都睡不好。',
    '痛苦的人逆位出现了。担忧正在慢慢减轻的迹象。这笔债,有没有哪怕一点点的计划?'
  ]]),
  rec('zh-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    '在家里说出自己的意见,总会变成冲突。',
    '战车逆位出现了。想定方向,结果变成了碰撞。换一种说法试试看,会怎么样?'
  ]]),
  rec('zh-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    '哪怕再小,也想靠自己的力量开始点什么。',
    '手心里的一枚硬币的牌。小小的开始,也可能长成很大的东西。那个开始,会是什么?'
  ]]),
  rec('zh-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    '今天的牌拜托了',
    '一起配合完成工作的星币三牌。今天比起一个人,跟别人合作会更顺利。'
  ]]),
  rec('zh-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    '很想把已经完成的东西全部推倒重来。',
    '崩塌的塔逆位出现了。与其说是彻底崩溃,更像是主动选择重新搭建。这次想做出哪里不一样的东西?'
  ]]),
];

writeBatch(batch);
