const { rec, writeBatch } = require('./lang_batch_helper')('tr');

const batch = [
  rec('tr-0001', 'friendship', 1, [{id:'ar06',orientation:'upright'}], [[
    "En yakın arkadaşımla aramızda tuhaf bir mesafe oluştu, sebebini de tam bilmiyorum.",
    "Aşıklar kartı düz geldi — bu kart seçim ve gerçek bağ hakkında, sadece romantik aşk değil. Bu mesafeyi ilk fark ettiğin an ne olmuştu?"
  ]]),
  rec('tr-0002', 'career_decision', 2, [{id:'wa05',orientation:'reversed'}], [
    ["İşyerinde sürekli bir rekabet havası var, çok yoruluyorum.", "Değnek Beşlisi ters geldi — çatışma dışa vurmuyor ama içeride birikiyor. Bu rekabeti en çok kimle hissediyorsun?"],
    ["Özellikle bir iş arkadaşımla, sanki her fikrimizi karşılaştırıyoruz.", "Belki bu bir yarış değil, iki farklı bakış açısının aynı anda var olma çabası. Onunla bunu konuşmayı denedin mi hiç?"]
  ]),
  rec('tr-0003', 'daily_checkin', 1, [{id:'ar17',orientation:'upright'}], [[
    "bugün için bir kart çeker misin",
    "Yıldız geldi, düz. Bugün küçük bir umut ışığı seni bulabilir, ona yer açmaya değer."
  ]]),
  rec('tr-0004', 'crisis_selfharm', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Artık kendime zarar vermeyi düşünüyorum, dayanamıyorum.",
    "Kart şu an ikinci planda kalsın, çünkü bu söylediğin çok önemli. Yalnız değilsin ve bu ağırlığı taşımana gerek yok. Şu anda yanında güvendiğin biri var mı, ya da birlikte bir destek hattına ulaşabilir miyiz?"
  ]]),
  rec('tr-0005', 'skeptical_user', 1, [{id:'ar00',orientation:'upright'}], [[
    "bu kartlara gerçekten inanmıyorum, sadece meraktan soruyorum.",
    "Deli kartı düz geldi, hoşuma gitti aslında — şüphecilikle gelmek de bir tür açıklık. İnanmasan da, bugün seni buraya getiren neydi?"
  ]]),
  rec('tr-0006', 'career_decision', 1, [{id:'cu02',orientation:'upright'}], [[
    "Yeni işe başladığım günden beri patronumla garip bir uyum var, tuhaf hissediyorum.",
    "Kupa İkilisi düz geldi, karşılıklı anlayış. Bu tür bir uyumu iş hayatında bulmak nadirdir, değerini bilmeye çalış."
  ]]),
  rec('tr-0007', 'love_existing', 2, [{id:'cuki',orientation:'reversed'}], [
    ["Partnerim son zamanlarda duygularını hiç göstermiyor, içine kapandı.", "Kupa Kralı ters geldi — duygular var ama kontrol altında tutuluyor, belki de korkudan. Ona bunu fark ettiğini söyledin mi?"],
    ["Söylemeye çalıştım ama o konuyu değiştirdi.", "Bazen kapıyı zorlamak yerine, açık bırakmak daha işe yarar. Belki bir sonraki denemede, cevap beklemeden sadece onu duyduğunu hissettirebilirsin."]
  ]),
  rec('tr-0008', 'breakup_grief', 2, [{id:'ar13',orientation:'upright'}], [
    ["Ayrılıktan sonra hayatımın bir bölümü kapandı gibi hissediyorum.", "Ölüm kartı düz geldi, ama bu kart sonu değil dönüşümü anlatır. Bu kapanışın içinde ne bitti sence?"],
    ["Sanırım eski halime dair bir şey bitti, artık o kişi değilim.", "Bu fark ediş bile başlı başına bir ilerleme. Yeni haline yer açmaya hazır görünüyorsun."]
  ]),
  rec('tr-0009', 'career_decision', 1, [{id:'pe08',orientation:'upright'}], [[
    "Yeni bir beceri öğrenmeye başladım ama çok yavaş ilerliyorum gibi hissediyorum.",
    "Tılsım Sekizlisi düz geldi, usta işçinin kartı. Yavaş olması ustalaşmadığın anlamına gelmez, sadece emek harcadığın anlamına gelir."
  ]]),
  rec('tr-0010', 'career_decision', 2, [{id:'wa10',orientation:'reversed'}], [
    ["Üzerimde çok fazla sorumluluk var, hepsini taşıyamıyorum.", "Değnek Onlusu ters geldi — yük görünenden ağır, bırakma zamanı gelmiş olabilir. Bunlardan hangisini bırakabileceğini düşünüyorsun?"],
    ["Belki bazı görevleri ekibe devredebilirim, hep kendim yapmam gerektiğini düşünüyordum.", "Devretmek zayıflık değil, güven işaretidir. Bu küçük adım bile omuzlarını hafifletebilir."]
  ]),
  rec('tr-0011', 'study_exam', 1, [{id:'sw08',orientation:'upright'}], [[
    "Sınava az kaldı ve kendimi kapana kısılmış gibi hissediyorum.",
    "Kılıç Sekizlisi düz geldi, gözleri bağlı biri. Bu his gerçek değil, sadece öyle görünüyor — etrafında aslında hareket alanın var."
  ]]),
  rec('tr-0012', 'family_conflict', 2, [{id:'ar05',orientation:'reversed'}], [
    ["Ailemin geleneksel beklentileriyle kendi yolum arasında sıkışmış hissediyorum.", "Aziz kartı ters geldi — kurallar sorgulanıyor ama henüz net bir yön yok. Kendi yolun ne kadar netleşti şu an?"],
    ["Aslında ne istediğimi biliyorum, sadece onlara nasıl söyleyeceğimi bilmiyorum.", "O zaman engel netlik değil, cesaret. Belki de en zor kısım, sadece ilk cümleyi kurmak."]
  ]),
  rec('tr-0013', 'family_conflict', 3, [{id:'cu05',orientation:'upright'}], [
    ["Kardeşimle uzun süredir konuşmuyoruz, aramızdaki kırgınlık büyüdü.", "Kupa Beşlisi düz geldi, dökülen kupalara bakan biri. Kaybettiğine mi yoksa hâlâ ayakta duranlara mı odaklanıyorsun şu an?"],
    ["Sanırım hep kaybettiğime bakıyorum, ne kadar zaman geçtiğine.", "O zaman belki bakışını çevirmenin zamanı gelmiştir — arkanda duran iki kupa hâlâ orada."],
    ["Haklısın, hâlâ bir şeyler kurtarılabilir belki.", "Bu umut bile, ilk adımı atmak için yeterli bir sebep. Bugün ona küçük bir mesaj göndermek bile bir başlangıç olabilir."]
  ]),
  rec('tr-0014', 'friendship', 1, [{id:'cu03',orientation:'reversed'}], [[
    "Arkadaş grubumdan giderek uzaklaştığımı hissediyorum.",
    "Kupa Üçlüsü ters geldi — kutlamalar var ama sen dışında kalmışsın gibi. Bu uzaklaşma senin tercihin mi, yoksa öyle mi oldu?"
  ]]),
  rec('tr-0015', 'self_growth', 2, [{id:'ar09',orientation:'upright'}], [
    ["Son zamanlarda yalnız kalmaya daha çok ihtiyaç duyuyorum, bu normal mi?", "Ermiş kartı düz geldi, kendi ışığıyla yürüyen biri. Bu bir kaçış değil, kendine dönme ihtiyacı gibi görünüyor."],
    ["Evet, aslında kendimi daha net görmek istiyorum galiba.", "O zaman bu yalnızlık bir armağan, ceza değil. Bu zamanı kendine saygıyla kullanmaya devam et."]
  ]),
  rec('tr-0016', 'self_growth', 4, [{id:'ar09',orientation:'upright'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [
    ["Kendimi tamamen yeniden inşa etme sürecindeyim, üç kart açılımı istiyorum.", "İlk kart Ermiş, düz — geçmişin senin içe dönüş dönemin. Bu içe dönüş sende neyi netleştirdi?"],
    ["Kendi değerlerimi daha net görmeye başladım.", "İkinci kart Kader Çarkı, düz — şimdi bir döngünün ortasındasın, değişim hızlanıyor. Bu değişimi nasıl hissediyorsun?"],
    ["Ürkütücü ama heyecan verici de.", "Üçüncü kart Yıldız, düz — gelecekte umut ve iyileşme var. Bu üç kart bir arada, kendini kaybetmenden değil, kendini bulmandan bahsediyor."],
    ["Bunu duymak çok güzel, teşekkür ederim.", "Bu yolculuk sana ait ve her adımında sen zaten doğru yöndesin."]
  ]),
  rec('tr-0017', 'money_practical', 1, [{id:'pe05',orientation:'upright'}], [[
    "Bu ay bütçem gerçekten zorlandı, biraz endişeliyim.",
    "Tılsım Beşlisi düz geldi, kapı dışında kalan biri. Bu dönem zor ama geçici — geçmişte de benzer dönemleri atlattığını unutma."
  ]]),
  rec('tr-0018', 'daily_checkin', 1, [{id:'wa06',orientation:'upright'}], [[
    "bugünkü kartım ne olur acaba",
    "Değnek Altılısı geldi, düz. Bugün küçük bir başarı seni bekliyor olabilir, onu fark etmeye çalış."
  ]]),
  rec('tr-0019', 'daily_checkin', 1, [{id:'sw02',orientation:'upright'}], [[
    "bana bugün için bir kart çek",
    "Kılıç İkilisi geldi, düz. Bugün zor bir kararla yüzleşebilirsin, gözlerini kapatmadan bakmaya çalış."
  ]]),
  rec('tr-0020', 'big_life_decision', 4, [{id:'ar09',orientation:'reversed'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [
    ["Hayatımı tamamen değiştirecek bir karar vermek üzereyim, yardım eder misin?", "İlk kart Ermiş, ters — yalnız karar vermekten yorulmuşsun, belki de biraz izole hissediyorsun. Bu kararı kiminle paylaştın şimdiye kadar?"],
    ["Aslında kimseyle paylaşmadım, hep kendi başıma düşündüm.", "İkinci kart Kader Çarkı, düz — bu an bir dönüm noktası, değişim zaten harekete geçmiş. Bu değişimi başlatan neydi?"],
    ["Sanırım artık eskisi gibi devam edemeyeceğimi fark ettim.", "Üçüncü kart Yıldız, düz — bu yolun sonunda umut var. Belki de artık başkalarına da güvenmenin zamanı gelmiştir."],
    ["Belki haklısın, yalnız taşımak zorunda değilim bunu.", "Bu farkındalık bile büyük bir adım. Kararını ne zaman verirsen ver, artık yalnız yürümüyorsun."]
  ]),
  rec('tr-0021', 'creative_block', 1, [{id:'wa08',orientation:'upright'}], [[
    "Fikirlerim var ama bir türlü harekete geçemiyorum.",
    "Değnek Sekizlisi düz geldi, hızla ilerleyen oklar. Enerji zaten hazır, belki sadece ilk adımı atman gerekiyor."
  ]]),
  rec('tr-0022', 'skeptical_user', 1, [{id:'ar12',orientation:'upright'}], [[
    "bu uygulamayı sadece deneme amaçlı indirdim, ciddiye almıyorum açıkçası.",
    "Asılan Adam kartı düz geldi, ilginç bir tesadüf — bu kart da yeni bir bakış açısına açık olmakla ilgili. Ciddiye almasan da, bugün seni buraya ne getirdi?"
  ]]),
  rec('tr-0023', 'crisis_selfharm', 1, [{id:'ar18',orientation:'reversed'}], [[
    "İçimde hiçbir şey hissetmiyorum, uyuşmuş gibiyim, bazen bunun bitmesini istiyorum.",
    "Kart şimdi ikinci planda, bu söylediğin çok daha önemli. Bu uyuşukluk hissi seni çok yormuş olmalı. Şu an yanında güvenebileceğin biri var mı, ya da bir destek hattıyla birlikte iletişime geçelim mi?"
  ]]),
  rec('tr-0024', 'crisis_abuse', 1, [{id:'sw09',orientation:'upright'}], [[
    "Evde biri bana sürekli bağırıyor ve aşağılıyor, artık korkuyorum.",
    "Bu şu an karttan çok daha önemli. Bu davranış asla normal değil ve senin suçun değil. Şu anda güvende misin, ve güvenebileceğin biri var mı yanında?"
  ]]),
  rec('tr-0025', 'crisis_medical', 1, [{id:'cu09',orientation:'upright'}], [[
    "Birkaç haftadır uyuyamıyorum ve hiçbir şeyden keyif almıyorum.",
    "Bunu kartla açıklayamam, ama bu belirtiler önemli ve bir uzmana görünmen gerekiyor. Bu konuda bir sağlık uzmanına danıştın mı?"
  ]]),
  rec('tr-0026', 'love_new', 1, [{id:'ar03',orientation:'upright'}], [[
    "Yeni tanıştığım biri var ve içimde bir şeyler filizleniyor gibi.",
    "İmparatoriçe kartı düz geldi, bolluk ve büyüme. Bu his büyümeye devam ederse ne olacağını merak ediyor musun?"
  ]]),
  rec('tr-0027', 'family_conflict', 1, [{id:'cuac',orientation:'upright'}], [[
    "Ailemle aramızda uzun süredir konuşulmayan bir kırgınlık var.",
    "Kupa Ası düz geldi, yeni bir duygusal başlangıç kartı. Bu kırgınlığı çözmek için ilk adımı atmaya hazır mısın?"
  ]]),
  rec('tr-0028', 'love_new', 1, [{id:'cu06',orientation:'upright'}], [[
    "Eski bir arkadaşım son zamanlarda farklı bakıyor bana, kafam karıştı.",
    "Kupa Altılısı düz geldi, nostalji ve masumiyet kartı. Belki de bu tanıdıklık, yeni bir şeyin başlangıcı için güvenli bir zemin sunuyor."
  ]]),
  rec('tr-0029', 'love_existing', 2, [{id:'sw04',orientation:'upright'}], [
    ["İlişkimizde sürekli tartışıyoruz, ikimiz de yorgunuz.", "Kılıç Dörtlüsü düz geldi, dinlenme kartı. Belki de şu an ihtiyacınız olan şey konuşmak değil, bir mola."],
    ["Belki haklısın, hep çözmeye çalışıyoruz ama sadece yoruluyoruz.", "Bazen en iyi çözüm, biraz nefes almaya izin vermektir. Döndüğünüzde konu hâlâ orada olacak, ama sizler daha dinlenmiş olacaksınız."]
  ]),
  rec('tr-0030', 'love_existing', 1, [{id:'waqu',orientation:'upright'}], [[
    "Partnerim bana çok güven veriyor, bu bazen beni şaşırtıyor.",
    "Değnek Kraliçesi düz geldi, kendinden emin ve sıcak bir enerji. Bu güveni hak ettiğini biliyorsun, değil mi?"
  ]]),
  rec('tr-0031', 'love_existing', 1, [{id:'pe06',orientation:'reversed'}], [[
    "İlişkimizde hep ben veriyorum gibi hissediyorum, dengesiz geliyor.",
    "Tılsım Altılısı ters geldi, dengesiz bir alışveriş. Bu dengesizliği ona söylemeyi düşündün mü hiç?"
  ]]),
  rec('tr-0032', 'breakup_grief', 1, [{id:'cu08',orientation:'upright'}], [[
    "Ayrılıktan sonra eski hayatımdan uzaklaşmak istiyorum ama nereye gideceğimi bilmiyorum.",
    "Kupa Sekizlisi düz geldi, arkasını dönüp giden biri. Bilmemek bile yolun bir parçası, gitmen gereken yeri zamanla bulacaksın."
  ]]),
  rec('tr-0033', 'breakup_grief', 1, [{id:'sw03',orientation:'upright'}], [[
    "Ayrılığın acısı hâlâ çok taze, bazı günler nefes almakta zorlanıyorum.",
    "Kılıç Üçlüsü düz geldi, kalpteki kırık kart. Bu acı gerçek ve şu an hissetmene izin vermelisin — geçmesi zaman alacak."
  ]]),
  rec('tr-0034', 'career_decision', 1, [{id:'waac',orientation:'upright'}], [[
    "Kendi işimi kurmayı düşünüyorum ama hâlâ tereddütlüyüm.",
    "Değnek Ası düz geldi, yeni bir başlangıcın tohumu. Bu fikir içinde ne zamandır büyüyor?"
  ]]),
  rec('tr-0035', 'career_decision', 1, [{id:'pekn',orientation:'reversed'}], [[
    "Yeni projeye başlarken çok acele ettim, şimdi pişmanım.",
    "Tılsım Şövalyesi ters geldi, aceleyle atılan adım. Şimdi yavaşlayıp gözden geçirmek için hâlâ vaktin var."
  ]]),
  rec('tr-0036', 'career_decision', 1, [{id:'wa03',orientation:'upright'}], [[
    "Kariyerimde uzun vadeli bir plan yapmaya çalışıyorum.",
    "Değnek Üçlüsü düz geldi, ufka bakan biri. Bu genişleme zamanı senin için — planların netleşiyor gibi görünüyor."
  ]]),
  rec('tr-0037', 'career_decision', 1, [{id:'swqu',orientation:'upright'}], [[
    "İş görüşmesinde çok net ve doğrudan olmak istiyorum ama tarzım pek öyle değil.",
    "Kılıç Kraliçesi düz geldi, netlik ve dürüstlük kartı. Bu enerji zaten içinde var, sadece ona izin vermen gerekiyor."
  ]]),
  rec('tr-0038', 'study_exam', 1, [{id:'sw07',orientation:'upright'}], [[
    "Ders çalışırken sürekli kısayollar arıyorum, ama işe yaramıyor gibi.",
    "Kılıç Yedilisi düz geldi, gizlice kaçan biri. Belki de gerçek yol, kısayol aramaktan vazgeçip doğrudan çalışmaktan geçiyor."
  ]]),
  rec('tr-0039', 'study_exam', 1, [{id:'pe03',orientation:'upright'}], [[
    "Grup projesinde herkesle uyum içinde çalışmak zor geliyor.",
    "Tılsım Üçlüsü düz geldi, birlikte inşa eden eller. Bu uyumsuzluk aslında bir işbirliği fırsatına dönüşebilir."
  ]]),
  rec('tr-0040', 'family_conflict', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Babamla her konuşmamız bir güç mücadelesine dönüşüyor.",
    "İmparator kartı ters geldi, katı bir kontrol arayışı. Bu mücadele belki de ikinizin de kontrolü bırakmaktan korkmasından geliyor."
  ]]),
  rec('tr-0041', 'family_conflict', 1, [{id:'cu04',orientation:'upright'}], [[
    "Ailem bana bir şeyler sunuyor ama ben hiç ilgi duymuyorum.",
    "Kupa Dörtlüsü düz geldi, kollarını kapatmış biri. Belki de şu an ilgi duymamak, kendi yolunu arıyor olmanın bir işareti."
  ]]),
  rec('tr-0042', 'family_conflict', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Aile mirası konusunda büyük bir anlaşmazlığımız var.",
    "Tılsım Onlusu ters geldi, bölünen miras. Bu konu sadece parayla değil, aidiyet duygusuyla da ilgili olabilir."
  ]]),
  rec('tr-0043', 'friendship', 1, [{id:'waki',orientation:'reversed'}], [[
    "Arkadaşım her zaman liderliği ele alıyor, ben hiç söz sahibi olamıyorum.",
    "Değnek Kralı ters geldi, baskın bir enerji dengesizliği. Ona bu dengesizliği hissettirdin mi hiç açıkça?"
  ]]),
  rec('tr-0044', 'friendship', 1, [{id:'cu10',orientation:'upright'}], [[
    "Arkadaş grubumla geçirdiğim zaman beni gerçekten mutlu ediyor.",
    "Kupa Onlusu düz geldi, tam bir duygusal tatmin kartı. Bu mutluluğu fark etmen bile değerli — tadını çıkar."
  ]]),
  rec('tr-0045', 'self_growth', 1, [{id:'ar02',orientation:'upright'}], [[
    "İçsel sesimi dinlemeye çalışıyorum ama çok gürültü var etrafımda.",
    "Azize kartı düz geldi, sessizlik ve iç bilgelik. Belki de bugün sadece birkaç dakika sessizliğe ihtiyacın var."
  ]]),
  rec('tr-0046', 'self_growth', 1, [{id:'ar14',orientation:'upright'}], [[
    "Hayatımda daha dengeli olmaya çalışıyorum ama zor geliyor.",
    "Denge kartı düz geldi, iki kap arasında akan su. Denge bir varış noktası değil, sürekli bir ayarlama süreci."
  ]]),
  rec('tr-0047', 'self_growth', 1, [{id:'sw05',orientation:'upright'}], [[
    "Bir tartışmada haklı çıkmak için çok uğraştım ama sonunda kendimi kötü hissettim.",
    "Kılıç Beşlisi düz geldi, kazanan ama yalnız kalan biri. Bazen kazanmak, en değerli şeyi kaybetmek anlamına gelebilir."
  ]]),
  rec('tr-0048', 'self_growth', 4, [{id:'ar02',orientation:'reversed'},{id:'ar14',orientation:'upright'},{id:'ar21',orientation:'upright'}], [
    ["Kendimi tamamen kaybetmiş hissediyorum, üç kartlık bir açılım istiyorum.", "İlk kart Azize, ters — iç sesini bastırmışsın, kendi bilgeliğine güvenmiyorsun. Bu güvensizlik ne zaman başladı?"],
    ["Sanırım başkalarının beklentilerine uymaya çalışırken oldu.", "İkinci kart Denge, düz — şimdi dengeyi yeniden bulma sürecindesin. Bu süreçte kendine nasıl davranıyorsun?"],
    ["Biraz daha sabırlı olmaya çalışıyorum kendime karşı.", "Üçüncü kart Dünya, düz — bu yolculuk bir tamamlanmaya doğru ilerliyor. Kendini kaybetmemişsin, sadece yeniden bulma sürecindesin."],
    ["Bunu duymak gerçekten rahatlatıcı.", "Bu üç kart birlikte, senin zaten doğru yolda olduğunu gösteriyor."]
  ]),
  rec('tr-0049', 'money_practical', 1, [{id:'pe02',orientation:'upright'}], [[
    "Gelir ve giderlerimi dengelemeye çalışırken sürekli jonglörlük yapıyorum gibi.",
    "Tılsım İkilisi düz geldi, dengeyi koruyan eller. Bu esneklik aslında güçlü bir beceri, kendine kredi ver."
  ]]),
  rec('tr-0050', 'money_practical', 1, [{id:'pe09',orientation:'upright'}], [[
    "Kendi emeğimle kazandığım bir şeye sahip olmak istiyorum.",
    "Tılsım Dokuzlusu düz geldi, kendi bahçesinde duran biri. Bu bağımsızlık arzun zaten gerçekleşmeye başlamış gibi görünüyor."
  ]]),
  rec('tr-0051', 'daily_checkin', 1, [{id:'ar07',orientation:'upright'}], [[
    "günün kartını çeker misin bugün için",
    "Savaş Arabası geldi, düz. Bugün kararlılıkla ilerlemek için güzel bir gün olabilir."
  ]]),
  rec('tr-0052', 'daily_checkin', 1, [{id:'cu07',orientation:'upright'}], [[
    "bugün için kart lütfen",
    "Kupa Yedilisi geldi, düz. Bugün çok fazla seçenek karşına çıkabilir, hangisinin gerçek olduğuna dikkat et."
  ]]),
  rec('tr-0053', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "bugünkü kartımı görmek istiyorum",
    "Değnek Dörtlüsü geldi, düz. Bugün küçük bir kutlama ya da huzurlu bir an seni bekliyor olabilir."
  ]]),
  rec('tr-0054', 'daily_checkin', 1, [{id:'swpa',orientation:'upright'}], [[
    "bir kart çek bugün için",
    "Kılıç Prensi geldi, düz. Bugün meraklı ve dikkatli olmak sana yeni bir şey öğretebilir."
  ]]),
  rec('tr-0055', 'daily_checkin', 1, [{id:'cupa',orientation:'upright'}], [[
    "günün kartı ne olsun bakalım",
    "Kupa Prensi geldi, düz. Bugün küçük ve tatlı bir duygusal sürpriz seni bulabilir."
  ]]),
  rec('tr-0056', 'big_life_decision', 4, [{id:'pequ',orientation:'upright'},{id:'waki',orientation:'upright'},{id:'ar19',orientation:'upright'}], [
    ["Büyük bir taşınma kararı düşünüyorum, üç kart açılımı alabilir miyim?", "İlk kart Tılsım Kraliçesi, düz — pratik bir temel ve güvenlik arayışın var. Bu taşınmada seni en çok kaygılandıran şey ne?"],
    ["Yeni bir yerde kendimi güvende hissedip hissedemeyeceğim.", "İkinci kart Değnek Kralı, düz — cesur ve vizyoner bir enerji seni bekliyor. Bu değişim aslında liderlik yönünü ortaya çıkarabilir."],
    ["Umarım öyle olur, biraz korkuyorum ama heyecanlıyım da.", "Üçüncü kart Güneş, düz — bu üç kart birlikte parlak ve mutlu bir sonucu işaret ediyor. Korku ve heyecan bazen aynı kapıdan gelir."],
    ["Teşekkür ederim, biraz daha cesaretlendim.", "Bu yolculukta zaten doğru yöne bakıyorsun."]
  ]),
  rec('tr-0057', 'big_life_decision', 1, [{id:'sw06',orientation:'upright'}], [[
    "Zor bir dönemden daha sakin sulara geçmeye çalışıyorum.",
    "Kılıç Altılısı düz geldi, sakin sulara doğru giden tekne. Bu geçiş yavaş olabilir ama doğru yönde ilerliyorsun."
  ]]),
  rec('tr-0058', 'creative_block', 1, [{id:'wa09',orientation:'upright'}], [[
    "Defalarca denedim ama hâlâ istediğim sonucu alamadım, pes etmek üzereyim.",
    "Değnek Dokuzlusu düz geldi, yorgun ama ayakta duran biri. Bu kadar yol katettikten sonra pes etmek yazık olur."
  ]]),
  rec('tr-0059', 'creative_block', 1, [{id:'pepa',orientation:'upright'}], [[
    "Yeni bir projeye başlamak istiyorum ama nereden başlayacağımı bilmiyorum.",
    "Tılsım Prensi düz geldi, meraklı ve öğrenmeye açık biri. Başlamak için mükemmel bir plana ihtiyacın yok, sadece merakına güvenmen yeterli."
  ]]),
  rec('tr-0060', 'skeptical_user', 1, [{id:'ar20',orientation:'upright'}], [[
    "aslında bu tür şeylere pek güvenmem ama bugün kendimi biraz kayıp hissediyorum.",
    "Mahkeme kartı düz geldi, bir uyanış çağrısı. Güvenmesen de, bugün kendini kayıp hissetmen zaten önemli bir sinyal. Şu an en çok neyi netleştirmek istersin?"
  ]]),
];

writeBatch(batch);
