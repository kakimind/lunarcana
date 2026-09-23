const { rec, writeBatch } = require('./lang_batch_helper')('tr');

const batch = [
  rec('tr-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "bu uygulamanın beni manipüle etmeye çalıştığını düşünüyorum bazen.",
    "Kılıç Kralı ters geldi, ilginç bir tesadüf — kontrol kaybı korkusuyla ilgili bir kart. Bu şüphen anlaşılır, seni buraya getiren neydi bugün?"
  ]]),
  rec('tr-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "Kendimi hiçbir şeye değer görmüyorum, bazen yok olmayı düşünüyorum.",
    "Bu şu an kartlardan çok daha önemli. Kendini bu kadar değersiz hissetmen çok ağır bir yük. Yanında güvendiğin biri var mı, ya da birlikte bir destek hattına ulaşabilir miyiz?"
  ]]),
  rec('tr-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Partnerim beni tehdit ediyor, ne zaman patlayacağını bilmiyorum.",
    "Bu şu an her şeyden önemli. Bu davranış kabul edilemez ve senin suçun değil. Şu anda güvende misin, seninle birlikte bir destek hattı bulabilir miyiz?"
  ]]),
  rec('tr-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "Vücudumda garip belirtiler var ama doktora gitmekten korkuyorum.",
    "Bunu kartla açıklayamam, ama bu korkunu aşıp bir uzmana görünmen önemli. Seni bu kadar korkutan şey ne?"
  ]]),
  rec('tr-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Sağlığımla ilgili çok kötü bir haber aldım, ne yapacağımı bilmiyorum.",
    "Bu an için kartlar geri planda kalsın. Bu haberi taşımak çok ağır, yalnız taşımana gerek yok. Yanında sana destek olabilecek biri var mı?"
  ]]),
  rec('tr-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "Elimde birçok beceri var ama nasıl kullanacağımı bilmiyorum.",
    "Büyücü kartı düz geldi, tüm araçlar masada. İhtiyacın olan her şey zaten elinde, sadece niyetini netleştirmen gerekiyor."
  ]]),
  rec('tr-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Kendi öfkemi kontrol etmekte zorlanıyorum bazen.",
    "Güç kartı düz geldi, aslanı yumuşaklıkla evcilleştiren biri. Gerçek güç bastırmak değil, nazikçe yönlendirmektir."
  ]]),
  rec('tr-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "Miras konusunda kardeşlerimle adil bir çözüm bulmaya çalışıyoruz.",
    "Adalet kartı düz geldi, dengeyi arayan terazi. Bu süreçte dürüstlükle ilerlemek, sonunda herkese huzur getirecektir."
  ]]),
  rec('tr-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Kötü bir alışkanlıktan kurtulmaya çalışıyorum ama sürekli geri dönüyorum.",
    "Şeytan kartı düz geldi, zincire bağlı biri. Bu zincir göründüğünden daha gevşek olabilir — fark etmen bile ilk adım."
  ]]),
  rec('tr-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Yeni bir sanat dalına merak sardım ama başlamaya çekiniyorum.",
    "Değnek Prensi düz geldi, ateşli bir merak kıvılcımı. Çekinmene gerek yok, bu kart tam da senin gibi meraklı ruhları temsil ediyor."
  ]]),
  rec('tr-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "Uzun süredir düşündüğüm bir maceraya atılmaya karar verdim.",
    "Değnek Şövalyesi düz geldi, cesur bir atılganlık. Bu kararlılık zaten seni doğru yola sokmuş görünüyor."
  ]]),
  rec('tr-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "İki farklı kariyer yolu arasında kalmış durumdayım.",
    "Değnek İkilisi düz geldi, ufka bakan biri, elinde küre tutan. Her iki yol da elinde, sadece hangisine adım atacağını seçmen gerekiyor."
  ]]),
  rec('tr-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "Arkadaşlarım arasında kendi fikrimi savunmakta zorlanıyorum.",
    "Değnek Yedilisi düz geldi, yüksekten savunma yapan biri. Duruşunu koruyorsun bile, bu zaten güçlü bir şey."
  ]]),
  rec('tr-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "Biriyle tanıştım ve çok romantik bir yaklaşımı var, biraz şaşırdım.",
    "Kupa Şövalyesi düz geldi, kalbinin peşinden giden biri. Bu tarz seni cezbetti mi, yoksa temkinli mi yaklaşıyorsun?"
  ]]),
  rec('tr-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "Partnerimin duygusal derinliği beni her seferinde etkiliyor.",
    "Kupa Kraliçesi düz geldi, sezgisel ve şefkatli bir enerji. Bu bağ gerçekten değerli, onu her fırsatta hatırlatmaya devam et."
  ]]),
  rec('tr-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Param konusunda kontrolü kaybetmiş gibi hissediyorum.",
    "Tılsım Kralı ters geldi, kontrolü elinden kaçırmış biri. Bu durumu net bir şekilde gözden geçirmenin zamanı gelmiş olabilir."
  ]]),
  rec('tr-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "Elimdekini kaybetme korkusuyla hiç harcama yapamıyorum.",
    "Tılsım Dörtlüsü düz geldi, sıkıca tutulan bir kart. Güvenlik önemli, ama bazen sıkı tutmak da seni yoruyor olabilir."
  ]]),
  rec('tr-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "Zihnimde net bir amaç oluşmaya başladı sanki.",
    "Kılıç Ası düz geldi, keskin bir netlik anı. Bu netliği yakaladıysan, ona güvenerek ilerleyebilirsin."
  ]]),
  rec('tr-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "bugün için kart çeker misin",
    "Ermiş kartı ters geldi. Bugün biraz fazla izole hissedebilirsin, birine ulaşmak iyi gelebilir."
  ]]),
  rec('tr-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "günün kartı lütfen",
    "Ölüm kartı ters geldi. Bugün bir değişime direnç gösterebilirsin, ona karşı biraz yumuşak olmayı dene."
  ]]),
  rec('tr-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "bir kart çek bugün için lütfen",
    "Kupa Beşlisi ters geldi. Bugün kaybettiklerine değil, elinde kalanlara bakmayı dene."
  ]]),
  rec('tr-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "bugünkü kart nedir",
    "Değnek Beşlisi geldi, düz. Bugün küçük anlaşmazlıklar çıkabilir, sabırlı kalmaya çalış."
  ]]),
  rec('tr-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "kart çeker misin bugün için",
    "Tılsım Sekizlisi ters geldi. Bugün odaklanmak biraz zor olabilir, kendine karşı sabırlı ol."
  ]]),
  rec('tr-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "günün kartını görmek istiyorum",
    "Kılıç Onlusu ters geldi. Bugün en kötüsünün geride kaldığını hissedebilirsin, iyileşme başlıyor olabilir."
  ]]),
  rec('tr-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Her şey birden çöktü, artık dayanacak gücüm kalmadı.",
    "Bu an kartlardan daha önemli. Bu çöküş hissi çok gerçek ve ağır. Şu anda yanında biri var mı, ya da birlikte bir destek hattına ulaşalım mı?"
  ]]),
  rec('tr-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Geceleri uyuyamıyorum, kafamda kötü düşünceler dönüp duruyor.",
    "Bu şu an her şeyden önemli. Bu düşünceleri tek başına taşımak zorunda değilsin. Güvendiğin biriyle konuşabilir misin, ya da bir destek hattına birlikte ulaşalım mı?"
  ]]),
  rec('tr-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Kontrol edilmekten bıktım ama ayrılmaya cesaret edemiyorum.",
    "Bu his kartlardan çok daha önemli şu an. Bu bağ seni tutsak ediyor gibi görünüyor. Güvenli bir şekilde konuşabileceğin biri var mı?"
  ]]),
  rec('tr-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Enerjim tamamen tükendi, günlerdir yataktan çıkamıyorum.",
    "Bunu kartla açıklayamam, ama bu belirtiler ciddiye alınmalı. Bir sağlık uzmanına danıştın mı bu konuda?"
  ]]),
  rec('tr-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "Yeni biriyle tanıştım ama bir türlü karar veremiyorum, kafam karışık.",
    "Aşıklar kartı ters geldi, kararsızlık kartı. Bu kararsızlık normal, kendine acele etmemek için izin ver."
  ]]),
  rec('tr-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [
    ["Partnerimle aramızdaki denge bozuldu, sürekli aşırıya kaçıyoruz.", "Denge kartı ters geldi, taşan kaplar. Bu dengesizlik nerede en çok kendini gösteriyor?"],
    ["Sanırım her ikimiz de çok fazla çalışıyoruz, birbirimize zaman ayıramıyoruz.", "Belki de çözüm büyük bir değişim değil, küçük ve düzenli anlar yaratmak. Bu hafta birlikte küçük bir zaman ayırabilir misiniz?"]
  ]),
  rec('tr-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Ayrılığın ardından hâlâ eski ilişkinin yükünü taşıyor gibiyim.",
    "Değnek Onlusu düz geldi, ağır bir yük taşıyan biri. Bu yükü ne zaman bırakabileceğini düşünüyorsun?"
  ]]),
  rec('tr-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "İş değişikliği konusunda karar vermekten kaçınıyorum sanki.",
    "Kılıç İkilisi ters geldi, gözleri bağlı ama artık bakması gereken biri. Bu kararı ne kadar süredir erteliyorsun?"
  ]]),
  rec('tr-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Sınav hazırlığımda daha disiplinli olmam gerektiğini biliyorum.",
    "İmparator kartı düz geldi, yapı ve düzen. Küçük bir program oluşturmak bile büyük fark yaratabilir."
  ]]),
  rec('tr-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Ailem memnun görünüyor ama ben içten içe tatmin olmuyorum.",
    "Kupa Dokuzlusu ters geldi, yüzeysel bir tatmin. Bu boşluğu en çok nerede hissediyorsun?"
  ]]),
  rec('tr-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Arkadaşımla ortak bir hedefe doğru ilerlemekte zorlanıyoruz.",
    "Savaş Arabası ters geldi, iki farklı yöne çeken atlar. Ortak yönü yeniden bulmak için ne konuşmanız gerekiyor?"
  ]]),
  rec('tr-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Umudumu kaybetmiş gibi hissediyorum son zamanlarda.",
    "Yıldız kartı ters geldi, geçici bir karanlık dönem. Umut hâlâ orada, sadece şu an biraz gölgede kalmış."
  ]]),
  rec('tr-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Finansal olarak ilerleme kaydedemiyorum, aynı yerde sıkışmış gibiyim.",
    "Kılıç Altılısı ters geldi, ilerlemeyen tekne. Bu sıkışmışlığı aşmak için hangi küçük adımı atabilirsin?"
  ]]),
  rec('tr-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "günün kartı ne diyor",
    "Kupa İkilisi ters geldi. Bugün bir ilişkide küçük bir yanlış anlaşılma çıkabilir, sabırlı ol."
  ]]),
  rec('tr-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "bir kart çek bugün için",
    "Değnek Sekizlisi ters geldi. Bugün işler beklediğinden yavaş ilerleyebilir, telaşa kapılma."
  ]]),
  rec('tr-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Yaratıcı sürecimde bir belirsizlik içindeyim, net bir yön göremiyorum.",
    "Ay kartı düz geldi, belirsiz bir yol. Bu belirsizlik normal, sezgilerine güvenerek ilerleyebilirsin."
  ]]),
  rec('tr-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "bu tür şeylerin gerçek olmadığını düşünüyorum ama yine de merak ediyorum.",
    "Deli kartı ters geldi, dikkatsiz bir adım. İnanmasan da merakın seni buraya getirdi, bu da bir şey ifade ediyor."
  ]]),
  rec('tr-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "geçmişte bu tür şeylerden hayal kırıklığına uğradım, tekrar denemek zor.",
    "Değnek Altılısı ters geldi, ertelenen bir zafer. Geçmiş hayal kırıklıkları anlaşılır, ama bu deneyim farklı olabilir."
  ]]),
  rec('tr-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Bağımsız çalışmaya geçmeyi düşünüyorum ama güvenlik hissini kaybetmekten korkuyorum.",
    "Tılsım Dokuzlusu ters geldi, güvenlik kaygısı. Bu korku doğal, ama seni durdurmasına izin verme."
  ]]),
  rec('tr-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Ailecek bir kutlama planlıyoruz ama herkes farklı şeyler istiyor.",
    "Değnek Dörtlüsü ters geldi, ertelenen bir uyum. Belki de herkesin isteğini tam karşılamak yerine, ortak bir noktada buluşmak yeterli."
  ]]),
  rec('tr-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Dışarıdan mutlu görünüyorum ama içten içe eksik bir şey var.",
    "Kupa Onlusu ters geldi, kırılgan bir mutluluk görüntüsü. Bu eksikliği kendine dürüstçe sormaya değer."
  ]]),
  rec('tr-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ayrılıktan sonra maddi olarak da yeniden yapılanmam gerekiyor.",
    "Tılsım Onlusu düz geldi, uzun vadeli istikrar kartı. Bu yeniden yapılanma zor ama sağlam bir temel kuruyorsun."
  ]]),
  rec('tr-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Para konusunda ailemle sürekli tartışıyoruz.",
    "Kılıç Beşlisi ters geldi, biten bir çatışma. Belki de artık kim haklı sorusundan çok, birlikte nasıl ilerleriz sorusuna geçmenin zamanı."
  ]]),
  rec('tr-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "günün kartı nedir bugün",
    "Tılsım İkilisi ters geldi. Bugün çok fazla şeyi aynı anda dengelemeye çalışabilirsin, önceliklerini gözden geçir."
  ]]),
  rec('tr-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Çok fazla seçenek arasında kayboldum, hiçbirine odaklanamıyorum.",
    "Kupa Yedilisi ters geldi, dağılan hayaller arasında netlik arayan biri. Belki de tek bir seçeneğe odaklanmanın zamanı gelmiştir."
  ]]),
  rec('tr-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Hayatımın kontrolden çıktığını hissediyorum bazen.",
    "Kader Çarkı ters geldi, geçici bir kontrol kaybı hissi. Döngüler değişir, bu his de kalıcı değil."
  ]]),
  rec('tr-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "İlgi duyduğum kişiye karşı duygularımı gizliyorum.",
    "Kılıç Yedilisi ters geldi, artık saklanmaktan yorulan biri. Bu duyguyu açığa vurmaya ne zaman hazır olacaksın?"
  ]]),
  rec('tr-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Uzun süredir bir karar vermekten kaçınıyorum, artık bıktım bu bekleyişten.",
    "Asılan Adam kartı ters geldi, artık harekete geçme zamanı. Bu bekleyiş sana ne öğretti?"
  ]]),
  rec('tr-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Kendimi ailemin beklentileri içinde kısılmış hissediyorum ama artık çıkış yolu görüyorum.",
    "Kılıç Sekizlisi ters geldi, bağların çözülmeye başladığı an. Bu farkındalık zaten özgürleşmenin ilk adımı."
  ]]),
  rec('tr-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Bir arkadaşlığa çok emek verdim ama karşılığını alamadığımı hissediyorum.",
    "Tılsım Yedilisi ters geldi, emeğin karşılığını sorgulayan biri. Bu emek boşa gitmedi, sadece beklenen şekilde geri dönmedi."
  ]]),
  rec('tr-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Bir döngüyü kapatmam gerektiğini biliyorum ama bir türlü tam bitiremiyorum.",
    "Dünya kartı ters geldi, tamamlanmamış bir döngü. Bu kapanışı geciktiren şey ne olabilir sence?"
  ]]),
  rec('tr-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "İlgilendiğim kişi çok hızlı hareket ediyor, ben yetişemiyorum.",
    "Değnek Şövalyesi ters geldi, aceleci bir enerji. Kendi hızında ilerlemek istediğini ona söylemek isteyebilirsin."
  ]]),
  rec('tr-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "Yeni bir ilişkide ortak bir zemin bulmakta zorlanıyoruz.",
    "Tılsım Üçlüsü ters geldi, uyumsuz bir işbirliği. Belki de henüz birbirinizi yeterince tanımıyorsunuz."
  ]]),
  rec('tr-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Arkadaş çevremde biriyle yakınlaşıyoruz, herkes fark etmeye başladı.",
    "Kupa Üçlüsü düz geldi, kutlama ve paylaşım kartı. Bu yakınlaşma çevrende de bir sevinç yaratıyor gibi görünüyor."
  ]]),
  rec('tr-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "İlgilendiğim kişiyle ilgili adım atmaktan çekiniyorum.",
    "Değnek İkilisi ters geldi, tereddütlü bir bekleyiş. Bu çekingenlik seni neyden koruyor sence?"
  ]]),
  rec('tr-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Uzun süredir birlikte olduğumuz partnerimle hâlâ derin bir bağ hissediyorum.",
    "Aşıklar kartı düz geldi, gerçek bir uyum. Bu bağın hâlâ bu kadar güçlü olması değerli bir şey."
  ]]),
];

writeBatch(batch);
