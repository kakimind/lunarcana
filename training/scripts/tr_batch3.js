const { rec, writeBatch } = require('./lang_batch_helper')('tr');

const batch = [
  rec('tr-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [
    ["İlişkimizde sürekli tetikte hissediyorum, sanki her an bir şey kötüye gidecekmiş gibi.", "Değnek Dokuzlusu ters geldi, yorgun bir savunma hâli. Bu tetikte olma hissi nereden geliyor sence?"],
    ["Belki geçmişte yaşadığım bir ilişkinin izleridir.", "Geçmişin izlerini taşımak doğal, ama bu ilişkiye farklı bir güvenle bakmayı hak ediyorsun."]
  ]),
  rec('tr-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "İlişkimizde maddi zorluklar yaşadık ama artık toparlanıyoruz.",
    "Tılsım Beşlisi ters geldi, zorluktan çıkış kartı. Bu toparlanma süreci, ilişkinizi daha da güçlendirebilir."
  ]]),
  rec('tr-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Ayrılığı hâlâ kabullenemiyorum, sanki geri dönebilirmiş gibi hissediyorum.",
    "Ölüm kartı ters geldi, kabullenmeye direnen bir hâl. Bu kabullenme süreci zaman alır, kendine izin ver."
  ]]),
  rec('tr-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Sürekli eski günlere dönüp duruyorum, geçmişte takılı kaldım.",
    "Kupa Altılısı ters geldi, geçmişte fazla kalan biri. Anıları onurlandırmak güzel, ama bugüne de yer açmaya değer."
  ]]),
  rec('tr-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Kendime dinlenmek için izin vermiyorum, sürekli bir şeylerle meşgul oluyorum.",
    "Kılıç Dörtlüsü ters geldi, dinlenmeyi reddeden biri. Belki de en cesur şey şu an durup nefes almaktır."
  ]]),
  rec('tr-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Ayrılığın ardından belirsizlik içindeyim ama yavaş yavaş netlik kazanıyorum.",
    "Ay kartı düz geldi, sisli ama ilerleyen bir yol. Bu belirsizlik bile bir sürecin parçası, sabırlı kalmaya devam et."
  ]]),
  rec('tr-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Yeni bir fırsat kapımı çaldı ama hazır olup olmadığımdan emin değilim.",
    "Tılsım Ası düz geldi, yeni bir fırsatın tohumu. Hazır hissetmek şart değil, önemli olan adımı atmaya açık olmak."
  ]]),
  rec('tr-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "İşimde çok hızlı ilerlemeye çalışırken hatalar yapıyorum.",
    "Kılıç Şövalyesi ters geldi, dikkatsiz bir hız. Biraz yavaşlamak, aslında daha hızlı ilerlemene yardımcı olabilir."
  ]]),
  rec('tr-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Yaratıcı projelerimde bir tıkanıklık yaşıyorum işimde.",
    "İmparatoriçe kartı ters geldi, tıkanmış bir bereket. Kendine yaratıcılığın için biraz alan açmayı dene."
  ]]),
  rec('tr-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Bana sunulan bir fırsata karşı ilgisiz kalıyorum, neden bilmiyorum.",
    "Kupa Dörtlüsü ters geldi, artık uyanma zamanı. Belki de bu fırsat, fark ettiğinden daha değerli."
  ]]),
  rec('tr-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Uzun süredir emek verdiğim bir proje sonunda meyvesini vermeye başladı.",
    "Tılsım Yedilisi düz geldi, sabırlı emeğin karşılığı. Bu ilerlemeyi görmek gurur verici olmalı."
  ]]),
  rec('tr-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "İç sesimi dinlemek yerine hep başkalarının tavsiyesine göre karar veriyorum.",
    "Azize kartı ters geldi, bastırılmış bir sezgi. Kendi iç sesine biraz daha yer açmayı dene."
  ]]),
  rec('tr-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Ders çalışırken sürekli dikkatim dağılıyor.",
    "Kılıç Prensi ters geldi, odaklanamayan bir zihin. Belki de kısa molalarla çalışmak sana daha iyi gelir."
  ]]),
  rec('tr-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Uzun vadeli bir eğitim planına başlıyorum, biraz heyecanlıyım.",
    "Tılsım Onlusu düz geldi, uzun vadeli bir miras kartı. Bu yatırımın karşılığını uzun vadede göreceksin."
  ]]),
  rec('tr-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Elimdeki kaynakları nasıl kullanacağımı bilmiyorum, kararsızım.",
    "Büyücü kartı ters geldi, kullanılmayan potansiyel. Belki de ilk adım, sadece bir kaynağı seçip denemeye başlamak."
  ]]),
  rec('tr-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Ailemle yeni bir konuda anlaşmazlık başlattık, tam bir başlangıç sancısı.",
    "Değnek Ası ters geldi, ertelenen bir başlangıç. Bu anlaşmazlık, aslında yeni bir anlayışın kapısı olabilir."
  ]]),
  rec('tr-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Babamla duygusal olarak daha yakın olmaya başladık son zamanlarda.",
    "Kupa Kralı düz geldi, olgun bir duygusal denge. Bu yakınlaşma değerli, onu beslemeye devam et."
  ]]),
  rec('tr-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Ailemle olan bir tartışma beni tamamen tükendim hissettirdi.",
    "Kılıç Onlusu düz geldi, dibe vurmuş ama artık yükselecek biri. Bu en zor an, aynı zamanda yeni bir başlangıcın işareti olabilir."
  ]]),
  rec('tr-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Ailemle gelecek planlarımız hakkında anlaşamıyoruz.",
    "Değnek Üçlüsü ters geldi, geciken bir vizyon. Belki de herkesin planını tek bir çizgide birleştirmek yerine, ayrı ayrı desteklemek gerekiyor."
  ]]),
  rec('tr-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Bir arkadaşlıktan uzaklaşmak istiyorum ama suçluluk hissediyorum.",
    "Kupa Sekizlisi ters geldi, gitmekte tereddüt eden biri. Kendi iyiliğin için uzaklaşmak suçluluk gerektirmez."
  ]]),
  rec('tr-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Arkadaşlarımla geçirdiğim zaman beni gerçekten aydınlatıyor.",
    "Güneş kartı düz geldi, saf mutluluk ve sıcaklık. Bu dostluklar hayatına ışık katıyor, kıymetini bil."
  ]]),
  rec('tr-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Bir arkadaşıma yardım ettim ve karşılığında çok şey öğrendim.",
    "Tılsım Altılısı düz geldi, karşılıklı bir alışveriş. Vermek ve almak arasındaki bu denge güzel bir şey."
  ]]),
  rec('tr-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Yeni bir başlangıç yapmaya hazır hissediyorum, ama biraz da korkuyorum.",
    "Deli kartı düz geldi, uçurumun kenarında duran ama gülümseyen biri. Bu korku, yeni bir maceranın habercisi olabilir."
  ]]),
  rec('tr-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Eski bir kırgınlığı bırakmaya çalışıyorum, yavaş yavaş iyileşiyorum.",
    "Kılıç Üçlüsü ters geldi, iyileşmeye başlayan bir kalp. Bu iyileşme süreci gurur verici, kendine zaman tanı."
  ]]),
  rec('tr-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Duygularımı ifade etmekte hâlâ zorlanıyorum.",
    "Kupa Prensi ters geldi, henüz olgunlaşmamış bir duygusal ifade. Bu bir eksiklik değil, sadece hâlâ öğrenme sürecinde olduğun bir alan."
  ]]),
  rec('tr-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Kendi sınırlarımı savunmakta zorlanıyorum, hep geri adım atıyorum.",
    "Değnek Yedilisi ters geldi, savunmasız kalan biri. Sınırlarını netleştirmek için önce kendine izin vermen gerekiyor."
  ]]),
  rec('tr-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Kendime bakım göstermeyi ihmal ediyorum, hep başkalarını önceliyorum.",
    "Tılsım Kraliçesi ters geldi, kendini ihmal eden bir şefkat. Kendine bakmak bencillik değil, gereklilik."
  ]]),
  rec('tr-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Bir finansal başarıyı kutlamayı unuttum, hemen bir sonrakine odaklandım.",
    "Değnek Altılısı ters geldi, fark edilmeyen bir zafer. Küçük başarıları da kutlamaya değer."
  ]]),
  rec('tr-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Maddi hedeflerime ulaştım ama beklediğim tatmini hissetmiyorum.",
    "Kupa Dokuzlusu ters geldi, yüzeysel bir tatmin. Belki de aradığın tatmin başka bir yerde saklı."
  ]]),
  rec('tr-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "Finansal durumum son zamanlarda iyiye gidiyor gibi.",
    "Kader Çarkı düz geldi, olumlu bir döngü. Bu iyi gidişatın tadını çıkarmaya değer."
  ]]),
  rec('tr-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "günün kartını çeker misin",
    "Aziz kartı geldi, düz. Bugün bilgece bir tavsiye ya da öğretici bir an seni bulabilir."
  ]]),
  rec('tr-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "bugün için kart",
    "Kupa İkilisi geldi, düz. Bugün birisiyle güzel bir bağ kurabilirsin."
  ]]),
  rec('tr-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "bir kart çeker misin bugün için",
    "Kılıç Beşlisi geldi, düz. Bugün bir tartışmada haklı çıkmak yerine barışı seçmek daha iyi olabilir."
  ]]),
  rec('tr-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "günün kartı nedir",
    "Tılsım Dokuzlusu geldi, düz. Bugün kendi başarılarının tadını çıkarmak için güzel bir gün."
  ]]),
  rec('tr-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "kart çek bugün için",
    "Değnek Dörtlüsü geldi, düz. Bugün küçük bir kutlama ya da huzurlu an seni bekliyor olabilir."
  ]]),
  rec('tr-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "günün kartını istiyorum",
    "Kılıç İkilisi ters geldi. Bugün ertelediğin bir kararla yüzleşmen gerekebilir."
  ]]),
  rec('tr-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "bugün için bir kart",
    "Kupa Onlusu geldi, düz. Bugün ailenle ya da sevdiklerinle mutlu bir an yaşayabilirsin."
  ]]),
  rec('tr-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "günün kartı",
    "Değnek Onlusu geldi, düz. Bugün üzerinde fazla yük hissedebilirsin, bir kısmını bırakmayı dene."
  ]]),
  rec('tr-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Yalnız kalıp kendimle baş başa kalmaya karar verdim bir süreliğine.",
    "Ermiş kartı düz geldi, kendi ışığıyla yürüyen biri. Bu tercih güçlü bir öz farkındalık işareti."
  ]]),
  rec('tr-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Hayatımda beklenmedik bir değişim oldu, her şey altüst oldu.",
    "Kule kartı düz geldi, ani bir yıkım. Bu yıkım acı verici olsa da, yeni ve daha sağlam bir temelin başlangıcı olabilir."
  ]]),
  rec('tr-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Zor bir dönemin ardından yeniden umutlanmaya başladım.",
    "Yıldız kartı düz geldi, iyileşme ve umut. Bu umut hak ettiğin bir şey, ona sarıl."
  ]]),
  rec('tr-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Yaratıcı çalışmamda adil bir denge kuramıyorum, hep bir yanı ihmal ediyorum.",
    "Adalet kartı ters geldi, bozulan bir denge. Belki de mükemmeliyetçilikten biraz uzaklaşmanın zamanı."
  ]]),
  rec('tr-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Kendi işimi çok sert eleştiriyorum, hiçbir şey yeterli gelmiyor.",
    "Kılıç Kraliçesi ters geldi, aşırı eleştirel bir bakış. Kendine biraz daha nazik olmayı hak ediyorsun."
  ]]),
  rec('tr-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "Uzun süredir ertelediğim bir projeye nihayet başlama kararı aldım.",
    "Savaş Arabası düz geldi, kararlı bir ilerleyiş. Bu kararlılık seni hedefe ulaştıracak."
  ]]),
  rec('tr-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "bu tür duygusal tavsiyelerin işe yaradığından emin değilim.",
    "Kupa Şövalyesi ters geldi, boş vaatler kartı — ilginç bir tesadüf. Şüphen anlaşılır, bugün gerçekten neyi merak ediyorsun?"
  ]]),
  rec('tr-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "para harcamadan önce her şeyi test etmek isterim, bu konuda da öyleyim.",
    "Tılsım Dörtlüsü ters geldi, temkinli bir tutum — mantıklı bir yaklaşım. Bugün seni buraya getiren neydi merak ediyorum?"
  ]]),
  rec('tr-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "belki de biraz açık fikirli olmayı denemeliyim.",
    "Kılıç Altılısı düz geldi, sakin bir geçiş kartı. Bu açıklık bile küçük bir yolculuğun başlangıcı olabilir."
  ]]),
  rec('tr-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Kendimi cezalandırmak istiyorum bazen, bu düşünceler beni korkutuyor.",
    "Bu şu an kartlardan çok daha önemli. Bu düşünceler seni yormuş olmalı. Yanında güvendiğin biri var mı, ya da bir destek hattına birlikte ulaşalım mı?"
  ]]),
  rec('tr-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Kendimi sürekli suçluyorum, bu bazen dayanılmaz hale geliyor.",
    "Bu his kartlardan çok daha önemli şu an. Bu ağırlığı yalnız taşımana gerek yok. Güvenebileceğin biri var mı, ya da bir destek hattı bulalım mı birlikte?"
  ]]),
  rec('tr-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Bir aile üyem beni sürekli kontrol ediyor, özgür hissetmiyorum.",
    "Bu şu an her şeyden önemli. Bu kontrol asla normal değil. Güvenebileceğin biriyle konuşabilir misin, ya da destek almanı önereyim mi?"
  ]]),
  rec('tr-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "İş yerinde sürekli tacize uğruyorum ama kimseye söyleyemiyorum.",
    "Bu şu an kartlardan çok daha önemli. Bu senin suçun değil. Güvendiğin biriyle ya da bir destek hattıyla konuşmayı düşünür müsün?"
  ]]),
  rec('tr-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Sağlığımla ilgili iyi bir haber aldım ama hâlâ endişeliyim.",
    "Bunu kartla açıklayamam, ama iyi haberler bile zaman zaman endişe bırakabilir. Bu endişeyi doktorunla paylaştın mı?"
  ]]),
  rec('tr-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Kronik bir ağrım var ve artık nasıl başa çıkacağımı bilmiyorum.",
    "Bunu kartla açıklayamam, ama bu ağrıyı yönetmek için bir uzmandan destek almanı öneririm. Bu konuda kiminle görüştün?"
  ]]),
  rec('tr-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "bugünkü kartımı çek",
    "Değnek Sekizlisi geldi, düz. Bugün işler hızla ilerleyebilir, hazır ol."
  ]]),
  rec('tr-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Uzun süredir devam eden bir arkadaşlık sonunda tam bir uyuma kavuştu.",
    "Dünya kartı düz geldi, tamamlanma ve bütünlük. Bu dostluk artık olgun bir noktaya ulaşmış görünüyor."
  ]]),
  rec('tr-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Yeni biriyle tanıştım ve içimde tuhaf bir umut var.",
    "Yıldız kartı düz geldi, saf umut. Bu his gerçek, kendine ona inanmak için izin ver."
  ]]),
  rec('tr-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "İlgilendiğim kişi hakkında geceleri endişelenip duruyorum.",
    "Kılıç Dokuzlusu düz geldi, gece kaygıları. Bu endişeler gerçeklikten çok, zihninde büyüyor olabilir."
  ]]),
  rec('tr-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Yeni bir ilişkide zamanımı nasıl dengeleyeceğimi öğreniyorum.",
    "Tılsım İkilisi düz geldi, esnek bir denge. Bu öğrenme süreci zaten doğru yolda olduğunu gösteriyor."
  ]]),
  rec('tr-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "İlişkimizdeki sorumlulukları paylaşmakta zorlanıyoruz.",
    "Değnek Onlusu ters geldi, dengesiz dağıtılan bir yük. Bu paylaşımı yeniden konuşmaya değer."
  ]]),
  rec('tr-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "İlişkimizde birbirimize bağımlı hale geldiğimizi fark ettim.",
    "Şeytan kartı düz geldi, bağımlılık ve tutsaklık. Bu farkındalık, sağlıklı bir mesafe kurmanın ilk adımı olabilir."
  ]]),
];

writeBatch(batch);
