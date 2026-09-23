const { rec, writeBatch } = require('./lang_batch_helper')('tr');

const batch = [
  rec('tr-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Partnerimden bazı şeyleri sakladığımı fark ettim, bu beni rahatsız ediyor.",
    "Kılıç Yedilisi düz geldi, sessizce uzaklaşan biri. Bu saklamanın altında ne yatıyor sence?"
  ]]),
  rec('tr-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Ayrılıktan sonra kendimi yeniden inşa etmeye odaklandım.",
    "Tılsım Sekizlisi düz geldi, sabırlı emek kartı. Bu yeniden inşa süreci seni daha güçlü kılacak."
  ]]),
  rec('tr-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Duygularımı bastırıyorum, sanki güçlü görünmem gerekiyormuş gibi.",
    "Kupa Kraliçesi ters geldi, bastırılmış duygular. Güçlü olmak, hissetmemek anlamına gelmiyor."
  ]]),
  rec('tr-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Ayrılığın ardından kendi iç sesimi daha çok dinlemeye başladım.",
    "Azize kartı düz geldi, sezgisel bilgelik. Bu içe dönüş, iyileşme yolunda güçlü bir adım."
  ]]),
  rec('tr-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Yeni bir işe hazırlıksız girdiğimi hissediyorum.",
    "Değnek Prensi ters geldi, dağınık bir enerji. Kendine biraz daha hazırlanma zamanı tanımak isteyebilirsin."
  ]]),
  rec('tr-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Kariyerimde çok fazla seçenek var ama hangisinin gerçek olduğunu bilmiyorum.",
    "Kupa Yedilisi düz geldi, hayaller arasında seçim yapan biri. Hangisinin sana gerçekten uygun olduğunu hissetmeye çalış."
  ]]),
  rec('tr-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Eski işimi bırakıp yeni bir alana geçmeye karar verdim.",
    "Ölüm kartı düz geldi, dönüşüm ve yeni başlangıç. Bu cesur adım, seni yeni bir kapıya götürecek."
  ]]),
  rec('tr-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Kendimi işimde kısıtlanmış hissediyordum ama artık çıkış yolu buldum.",
    "Kılıç Sekizlisi ters geldi, bağların çözüldüğü an. Bu özgürleşme hakkını sonuna kadar kullan."
  ]]),
  rec('tr-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Eğitim hayatımda sürekli aynı hatayı tekrarlıyorum gibi hissediyorum.",
    "Kader Çarkı ters geldi, tekrarlayan bir döngü. Bu döngüyü kırmak için neyi farklı yapabilirsin?"
  ]]),
  rec('tr-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Okul hayatımda huzurlu bir dönem bulmakta zorlanıyorum.",
    "Değnek Dörtlüsü ters geldi, ertelenen bir huzur. Bu huzuru bulmak için küçük molalar vermeyi dene."
  ]]),
  rec('tr-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Aile içinde bir konuda cesurca konuşmaya karar verdim.",
    "Değnek Şövalyesi düz geldi, cesur bir atılım. Bu cesaret, ailende gerçek bir değişim başlatabilir."
  ]]),
  rec('tr-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Ailemden bağımsız olmaya çalışırken suçluluk hissediyorum.",
    "Tılsım Dokuzlusu ters geldi, bağımsızlıkla ilgili bir gerilim. Bağımsız olmak, aileni sevmediğin anlamına gelmez."
  ]]),
  rec('tr-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Ailemle net bir şekilde konuşmaya çalıştım ama yanlış anlaşıldım.",
    "Kılıç Ası ters geldi, bulanık bir iletişim. Belki de aynı konuyu farklı bir şekilde tekrar açmaya değer."
  ]]),
  rec('tr-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Arkadaşlarımla aramda zorlu bir dönemden geçtik ama hâlâ birlikteyiz.",
    "Değnek Dokuzlusu düz geldi, yorgun ama dayanıklı biri. Bu direnç, dostluğunuzun gerçek değerini gösteriyor."
  ]]),
  rec('tr-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Bir arkadaşım bana karşı çok cömert davrandı son zamanlarda.",
    "İmparatoriçe kartı düz geldi, bolluk ve cömertlik. Bu cömertliğin farkında olman, dostluğu daha da değerli kılıyor."
  ]]),
  rec('tr-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Uzun vadeli hedeflerimden şüphe etmeye başladım.",
    "Tılsım Onlusu ters geldi, sarsılan bir güven. Bu şüphe geçici olabilir, kendine biraz zaman tanı."
  ]]),
  rec('tr-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Duygularımın peşinden gitmek yerine hep mantıklı olmaya çalışıyorum.",
    "Kupa Şövalyesi ters geldi, bastırılmış bir duygusal yön. Belki de biraz daha kalbinin sesini dinlemenin zamanı."
  ]]),
  rec('tr-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Geçmişimle yüzleşmekten kaçınıyorum, hazır değilim sanırım.",
    "Mahkeme kartı ters geldi, ertelenen bir hesaplaşma. Hazır olduğunda bu yüzleşme seni özgürleştirecek."
  ]]),
  rec('tr-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Kendimle ilgili küçük bir zaferi fark ettim bugün.",
    "Değnek Altılısı düz geldi, hak edilmiş bir zafer. Bu küçük başarıyı kutlamaya değer."
  ]]),
  rec('tr-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Finansal hedeflerime ulaşmak için elimdeki araçları kullanmaya karar verdim.",
    "Büyücü kartı düz geldi, tüm potansiyel elinde. Bu kararlılıkla ilerlersen sonuç göreceksin."
  ]]),
  rec('tr-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Geçmişte biriktirdiğim küçük bir tasarruf şimdi işime yaradı.",
    "Kupa Altılısı düz geldi, geçmişin güzel bir hediyesi. Bu öngörü senin için değerli bir alışkanlık."
  ]]),
  rec('tr-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "günün kartını istiyorum",
    "Kılıç Üçlüsü geldi, düz. Bugün küçük bir hayal kırıklığı yaşayabilirsin, kendine nazik ol."
  ]]),
  rec('tr-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "bugün için kart",
    "Tılsım Kralı geldi, düz. Bugün pratik ve sağlam adımlar atmak için iyi bir gün."
  ]]),
  rec('tr-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "kart çek bugün için lütfen",
    "Ay kartı ters geldi. Bugün kafan karışık olabilir, netlik için biraz zaman tanı kendine."
  ]]),
  rec('tr-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "günün kartı ne",
    "Değnek İkilisi geldi, düz. Bugün geleceğe dair planlar yapmak için uygun bir gün."
  ]]),
  rec('tr-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "bir kart çek",
    "Kupa Sekizlisi geldi, düz. Bugün seni artık tatmin etmeyen bir şeyi bırakmayı düşünebilirsin."
  ]]),
  rec('tr-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "günün kartını göster",
    "Tılsım Yedilisi geldi, düz. Bugün emeğinin sonuçlarını gözden geçirmek için iyi bir gün."
  ]]),
  rec('tr-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "kart çeker misin",
    "Asılan Adam geldi, düz. Bugün farklı bir bakış açısı kazanmak için biraz beklemek gerekebilir."
  ]]),
  rec('tr-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Büyük bir kararı vermek üzereyim ama hâlâ gözlerim kapalı gibi hissediyorum.",
    "Kılıç İkilisi düz geldi, gözleri bağlı bekleyen biri. Bu kararı vermek için gözlerini açmaya hazır mısın?"
  ]]),
  rec('tr-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Büyük kararım sonrasında beklediğim mutluluğu bulamadım.",
    "Güneş kartı ters geldi, geçici bir gölge. Bu mutluluk hâlâ orada, belki sadece biraz zaman istiyor."
  ]]),
  rec('tr-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "İki farklı yaratıcı yol arasında seçim yapmaya çalışıyorum.",
    "Aşıklar kartı düz geldi, kalpten bir seçim. Hangi yolun seni daha çok heyecanlandırdığına bak."
  ]]),
  rec('tr-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Bir projeyi bitiremeden bırakmak zorunda kaldım, kendimi kötü hissediyorum.",
    "Kılıç Onlusu ters geldi, bir sonun ardından gelen iyileşme. Bu bitiş, yeni bir başlangıcın önünü açabilir."
  ]]),
  rec('tr-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "yeni fırsatlara pek inanmam, hep hayal kırıklığıyla sonuçlanıyor.",
    "Tılsım Ası ters geldi, kaçırılan bir fırsat — ilginç bir tesadüf. Bu şüpheciliğin ardında ne var, merak ediyorum?"
  ]]),
  rec('tr-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "geleceğe dair planlara pek güvenmiyorum artık.",
    "Değnek Üçlüsü ters geldi, ertelenen bir vizyon. Bu güvensizlik anlaşılır, bugün seni buraya getiren neydi?"
  ]]),
  rec('tr-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Kendimi bir düşünce döngüsüne hapsolmuş hissediyorum, çıkış yolu bulamıyorum.",
    "Bu his kartlardan çok daha önemli şu an. Bu döngü seni çok yormuş olmalı. Güvendiğin biriyle konuşabilir misin, ya da birlikte bir destek hattı bulalım mı?"
  ]]),
  rec('tr-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Dinlenemiyorum, kafamda sürekli kötü şeyler dönüyor ve yorgunum.",
    "Bu şu an her şeyden önemli. Bu yorgunluk hem zihinsel hem duygusal olmalı. Yanında güvendiğin biri var mı, ya da bir destek hattına ulaşalım mı?"
  ]]),
  rec('tr-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Bir ilişkide adaletsiz muamele görüyorum ama sesimi çıkaramıyorum.",
    "Bu şu an kartlardan çok daha önemli. Sesini çıkaramamak seni daha da yalnız bırakıyor olabilir. Güvenebileceğin biri var mı yanında?"
  ]]),
  rec('tr-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Sağlığımla ilgili riskli bir şey yaptım, şimdi çok korkuyorum.",
    "Bunu kartla açıklayamam, ama bu konuda hemen bir sağlık uzmanına ulaşmanı öneririm. Şu an yanında biri var mı?"
  ]]),
  rec('tr-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Sağlık sorunumla mücadele etmeye devam ediyorum ve bazen yoruluyorum.",
    "Bunu kartla açıklayamam, ama bu mücadelede yalnız olmadığını bilmeni isterim. Tedavi sürecinde yanında kim var?"
  ]]),
  rec('tr-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "Yeni tanıştığım kişi bana karşı çok şefkatli davranıyor.",
    "Tılsım Kraliçesi düz geldi, sıcak ve besleyici bir enerji. Bu şefkati fark etmen, ilişkinin sağlıklı temellere sahip olduğunu gösteriyor."
  ]]),
  rec('tr-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Partnerimle aramda giderek büyüyen bir mesafe var.",
    "Ermiş kartı ters geldi, aşırı izolasyon. Bu mesafeyi konuşmak için ilk adımı atmayı düşünür müsün?"
  ]]),
  rec('tr-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Ayrılık sürecinde her şey çok yavaş ilerliyor gibi hissediyorum.",
    "Değnek Sekizlisi ters geldi, yavaşlayan bir süreç. Bu yavaşlık, iyileşmenin kendi hızında ilerlediğini gösteriyor olabilir."
  ]]),
  rec('tr-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "İş hayatımda duygusal zekamı kullanarak liderlik yapmaya başladım.",
    "Kupa Kralı düz geldi, olgun ve dengeli bir liderlik. Bu yaklaşım seni farklı ve değerli kılıyor."
  ]]),
  rec('tr-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "İş yerinde bir tartışmayı kazandım ama pahalıya mal oldu.",
    "Kılıç Beşlisi ters geldi, kazanılan ama acı bırakan bir zafer. Belki de bir dahaki sefere ilişkiyi kazanmayı önceliklendirebilirsin."
  ]]),
  rec('tr-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Sınav sonuçlarımdan gerçekten memnunum.",
    "Kupa Dokuzlusu düz geldi, tatmin kartı. Bu başarıyı hak ettin, tadını çıkar."
  ]]),
  rec('tr-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Ailemle maddi bir zorluğu birlikte atlattık, artık daha yakınız.",
    "Tılsım Beşlisi ters geldi, zorluktan çıkış. Bu paylaşılan zorluk, aranızdaki bağı güçlendirmiş."
  ]]),
  rec('tr-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Bir arkadaşımla aramızdaki denge bozuldu, biri hep veriyor biri hep alıyor.",
    "Denge kartı ters geldi, bozulan bir alışveriş. Bu dengesizliği ona nazikçe hatırlatmayı düşünür müsün?"
  ]]),
  rec('tr-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Zor bir dönemi geride bırakıp daha sakin bir sürece giriyorum.",
    "Kılıç Altılısı düz geldi, sakin sulara doğru giden bir yolculuk. Bu geçişin tadını çıkarmaya hak kazandın."
  ]]),
  rec('tr-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Finansal konularda geleneksel tavsiyelere uymak istemiyorum artık.",
    "Aziz kartı ters geldi, geleneksel yapıyı sorgulayan biri. Kendi yolunu bulmak da geçerli bir seçim."
  ]]),
  rec('tr-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "günün kartı lütfen",
    "Kupa Üçlüsü geldi, düz. Bugün arkadaşlarınla kutlanacak bir şey çıkabilir."
  ]]),
  rec('tr-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "bugün için kart çek",
    "İmparator kartı ters geldi. Bugün kontrolü biraz bırakmak sana iyi gelebilir."
  ]]),
  rec('tr-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "günün kartını çek lütfen",
    "Kılıç Kralı geldi, düz. Bugün net ve mantıklı kararlar vermek için iyi bir gün."
  ]]),
  rec('tr-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Yeni bir projeye kararlı ve sistemli bir şekilde başladım.",
    "Tılsım Şövalyesi düz geldi, sabırlı ve metodik bir ilerleyiş. Bu yaklaşım seni sağlam sonuçlara götürecek."
  ]]),
  rec('tr-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "yeni bir duygusal bağlantı kurmaktan çekiniyorum, hayal kırıklığından korkuyorum.",
    "Kupa Ası ters geldi, bloke olmuş bir duygu — anlamlı bir tesadüf. Bu çekingenlik seni neyden koruyor sence?"
  ]]),
  rec('tr-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Büyük bir kararı ailemle tartışırken anlaşmazlığa düştük.",
    "Değnek Beşlisi düz geldi, çatışan görüşler. Bu anlaşmazlık, aslında herkesin fikrini önemsediğinin bir işareti olabilir."
  ]]),
  rec('tr-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Para konusunda geceleri endişeleniyorum, uyku düzenim bozuldu.",
    "Kılıç Dokuzlusu ters geldi, hafifleyen bir kaygı. Bu endişeyi kağıda dökmek belki de sana rahatlama getirebilir."
  ]]),
  rec('tr-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Ailemle ortak bir karar almaya çalışırken herkes farklı yöne çekiyor.",
    "Savaş Arabası ters geldi, kontrolden çıkan bir yön. Belki de önce tek bir ortak hedefte anlaşmanız gerekiyor."
  ]]),
  rec('tr-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Kendimle ilgili yeni bir fırsatın kapısını araladığımı hissediyorum.",
    "Tılsım Ası düz geldi, yeni bir potansiyelin tohumu. Bu fırsatı büyütmeye değer."
  ]]),
  rec('tr-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "günün kartını çeker misin bugün",
    "Tılsım Üçlüsü geldi, düz. Bugün işbirliği yapmak için güzel bir gün olabilir."
  ]]),
  rec('tr-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Yaratıcı sürecimde büyük bir kırılma yaşadım ama toparlanıyorum.",
    "Kule kartı ters geldi, atlatılan bir sarsıntı. Bu toparlanma süreci seni daha güçlü bir yaratıcıya dönüştürecek."
  ]]),
];

writeBatch(batch);
