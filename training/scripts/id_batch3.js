const { rec, writeBatch } = require('./lang_batch_helper')('id');

const batch = [
  rec('id-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    "Aku ngerasa capek banget terus-terusan waspada dalam hubungan ini, kayak nggak pernah bisa santai.",
    "Kartu Sembilan Tongkat keluar terbalik — kewaspadaan yang berlebihan sampai bikin lelah sendiri. Ada kejadian tertentu yang bikin kamu jadi seperti selalu siaga begini?",
    "Kayaknya sejak dia pernah bohong soal hal kecil dulu.",
    "Wajar kalau kepercayaan yang pernah retak butuh waktu buat pulih. Tapi kamu juga berhak cerita ke dia kalau rasa waspada ini mulai melelahkan buatmu sendiri."
  ]]),
  rec('id-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Kami lagi kesulitan finansial dan itu bikin hubungan kami tegang.",
    "Kartu Lima Koin keluar terbalik — masa sulit yang mulai menemukan jalan keluarnya. Tekanan uang memang bisa merembet ke hubungan, tapi itu nggak berarti fondasi kalian yang salah."
  ]]),
  rec('id-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Aku tahu hubungan ini harus berakhir tapi aku terus menunda-nunda.",
    "Kartu Kematian keluar terbalik — perubahan yang seharusnya terjadi tapi ditahan-tahan. Apa yang paling bikin kamu takut buat benar-benar mengakhirinya?"
  ]]),
  rec('id-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Aku terus keinget masa-masa indah kami dan itu bikin susah move on.",
    "Kartu Enam Piala keluar terbalik — nostalgia yang terlalu lama dipeluk sampai menahan langkah ke depan. Kenangan indah itu boleh disimpan, tapi nggak harus jadi tempat kamu terus tinggal."
  ]]),
  rec('id-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Aku maksa diri buat cepat move on padahal belum beneran siap.",
    "Kartu Empat Pedang keluar terbalik — istirahat yang dipaksa berakhir terlalu cepat. Nggak apa-apa kalau kamu butuh waktu lebih lama, nggak ada jadwal pasti buat sembuh dari luka."
  ]]),
  rec('id-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Setelah putus, mimpi-mimpiku jadi aneh dan penuh emosi campur aduk.",
    "Kartu Bulan yang keluar — jalan yang samar di bawah cahaya malam, penuh perasaan yang belum sepenuhnya jelas. Wajar kalau pikiran bawah sadarmu masih memproses semuanya secara perlahan."
  ]]),
  rec('id-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Aku baru aja dapat kesempatan kerja yang selama ini aku impikan.",
    "Kartu As Koin yang keluar — sebuah koin di telapak tangan terbuka, peluang nyata yang siap digenggam. Kesempatan seperti ini datang jarang-jarang, jadi sambut dengan penuh keyakinan."
  ]]),
  rec('id-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "Aku terlalu terburu-buru ambil keputusan penting soal karier tanpa mikir matang.",
    "Kartu Ksatria Pedang keluar terbalik — kecepatan yang melampaui kehati-hatian. Coba beri diri sendiri sedikit waktu lagi sebelum benar-benar memutuskan."
  ]]),
  rec('id-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Aku ngerasa kerjaanku menguras semua energiku sampai nggak ada sisa buat diri sendiri.",
    "Kartu Sang Permaisuri keluar terbalik — kesuburan yang terkuras habis. Menurutmu, satu hal kecil apa yang bisa mengisi ulang energimu minggu ini?"
  ]]),
  rec('id-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Aku akhirnya sadar dan mulai membuka diri sama peluang baru di kantor.",
    "Kartu Empat Piala keluar terbalik — mata yang akhirnya terangkat dari lamunan menuju piala baru di depan. Keterbukaan ini bisa jadi awal dari sesuatu yang segar."
  ]]),
  rec('id-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Aku udah kerja keras lama banget dan mulai penasaran, kapan hasilnya kelihatan.",
    "Kartu Tujuh Koin yang keluar — seseorang menatap hasil kerjanya yang masih tumbuh perlahan. Pertumbuhan yang lambat bukan berarti nggak ada kemajuan, tetap perhatikan tanda-tanda kecilnya."
  ]]),
  rec('id-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "Aku ngerasa udah terlalu lama mengabaikan firasatku soal kerjaan ini.",
    "Kartu Pendeta Wanita Agung keluar terbalik — suara batin yang dibiarkan diam terlalu lama. Coba dengarkan lagi apa yang sebenarnya firasatmu katakan selama ini."
  ]]),
  rec('id-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Aku terlalu banyak rencana belajar tapi susah eksekusi.",
    "Kartu Pangeran Pedang keluar terbalik — ide-ide berlimpah tapi belum berubah jadi tindakan. Coba pilih satu rencana paling sederhana dan mulai dari situ hari ini."
  ]]),
  rec('id-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Aku akhirnya lulus setelah bertahun-tahun berjuang di sekolah.",
    "Kartu Sepuluh Koin yang keluar — hasil kerja keras yang terkumpul jadi sesuatu yang bertahan lama. Ini pencapaian besar, dan kamu layak merayakannya penuh-penuh."
  ]]),
  rec('id-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Aku ngerasa udah belajar banyak tapi masih ragu sama kemampuanku sendiri.",
    "Kartu Sang Pesulap keluar terbalik — semua alat sudah ada, tapi keyakinan buat memakainya belum sepenuhnya muncul. Kemampuan itu memang sudah ada dalam dirimu, tinggal kamu percayai lagi."
  ]]),
  rec('id-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Aku pengen mulai proyek baru bareng keluarga tapi mereka nggak tertarik.",
    "Kartu As Tongkat keluar terbalik — semangat yang belum menemukan tempat untuk bertunas. Coba cari cara yang lebih kecil dan santai buat mengajak mereka terlibat, bukan langsung besar-besaran."
  ]]),
  rec('id-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Akhirnya kami bisa ngobrol tenang soal masalah keluarga yang lama dipendam.",
    "Kartu Raja Piala yang keluar — sosok yang mengendalikan emosinya dengan tenang di tengah lautan yang bergejolak. Ketenangan seperti ini adalah kekuatan besar buat menyelesaikan hal yang berat."
  ]]),
  rec('id-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Konflik keluarga ini udah nyampe titik paling parah, rasanya nggak bisa lebih buruk lagi.",
    "Kartu Sepuluh Pedang yang keluar — titik terendah yang justru menandai bahwa hanya ada arah naik dari sini. Sesulit apa pun sekarang, ini bukan akhir dari cerita kalian."
  ]]),
  rec('id-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Aku menunggu keluarga berubah tapi kayaknya harapanku ketinggian.",
    "Kartu Tiga Tongkat keluar terbalik — penantian yang belum menghasilkan apa yang diharapkan. Mungkin waktunya berhenti menunggu perubahan dari mereka, dan mulai fokus ke apa yang bisa kamu kendalikan sendiri."
  ]]),
  rec('id-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Aku pengen banget mengakhiri pertemanan ini tapi terus ragu-ragu.",
    "Kartu Delapan Piala keluar terbalik — langkah pergi yang masih tertahan. Nggak apa-apa kalau kamu butuh waktu lebih lama buat memutuskan, ini bukan hal yang harus diburu-buru."
  ]]),
  rec('id-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Aku dan temanku ngobrol seharian penuh tawa kemarin, rasanya menyembuhkan banget.",
    "Kartu Matahari yang keluar — kebahagiaan yang terang dan sederhana. Momen seperti ini adalah pengingat kenapa pertemanan yang tepat itu berharga."
  ]]),
  rec('id-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Aku bantu temanku yang lagi susah, dan dia juga selalu ada buat aku.",
    "Kartu Enam Koin yang keluar — pertukaran yang seimbang antara memberi dan menerima. Pertemanan yang saling menopang seperti ini memang yang paling langgeng."
  ]]),
  rec('id-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Aku mau mulai babak baru dalam hidup tapi takut banget sama yang nggak diketahui.",
    "Kartu Si Bodoh yang keluar — seseorang melangkah ringan di tepi jurang, percaya pada apa yang belum terlihat. Rasa takut itu wajar, tapi langkah pertama tetap bisa diambil dengan penuh percaya."
  ]]),
  rec('id-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Rasa sakit lama pelan-pelan mulai mereda dan aku merasa lebih lega.",
    "Kartu Tiga Pedang keluar terbalik — luka yang mulai sembuh perlahan. Proses penyembuhan ini terlihat jelas, dan kamu boleh bangga sudah sampai sejauh ini."
  ]]),
  rec('id-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Aku ngerasa udah lama nggak jujur sama perasaanku sendiri.",
    "Kartu Pangeran Piala keluar terbalik — rasa ingin tahu yang tertutup rapat. Coba mulai dari satu perasaan kecil yang selama ini kamu abaikan, dan akui saja secara jujur."
  ]]),
  rec('id-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Aku capek terus berjuang membela diri di setiap kesempatan.",
    "Kartu Tujuh Tongkat keluar terbalik — pertahanan yang mulai kelelahan. Nggak apa-apa kalau sesekali kamu memilih untuk tidak bertarung, dan cukup istirahat dulu."
  ]]),
  rec('id-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Aku sibuk banget ngurus orang lain sampai lupa ngurus diri sendiri.",
    "Kartu Ratu Koin keluar terbalik — kehangatan yang mengurus semua orang kecuali dirinya sendiri. Mungkin ini saatnya kamu memberi perhatian yang sama besarnya buat dirimu sendiri."
  ]]),
  rec('id-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Aku dapat kenaikan gaji tapi kok malah ngerasa nggak puas.",
    "Kartu Enam Tongkat keluar terbalik — kemenangan yang terasa kurang memuaskan dari yang dibayangkan. Coba pikirkan lagi, apa sebenarnya yang kamu cari selain angka di slip gaji?"
  ]]),
  rec('id-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Aku belanja banyak buat merasa lebih baik, tapi rasanya cuma sementara.",
    "Kartu Sembilan Piala keluar terbalik — kepuasan permukaan yang cepat menghilang. Mungkin ada perasaan lain yang sebenarnya sedang kamu coba isi lewat belanja itu."
  ]]),
  rec('id-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "Keuanganku mulai membaik setelah lama berjuang.",
    "Kartu Roda Keberuntungan yang keluar — siklus yang berputar dan kini membawa arah yang lebih ringan. Nikmati momentum baik ini sambil tetap menjaga kebiasaan baik yang sudah kamu bangun."
  ]]),
  rec('id-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Sang Pendeta Agung yang keluar — kebijaksanaan yang mengalir dari pengalaman yang sudah teruji. Hari ini cocok buat mencari nasihat dari seseorang yang kamu percaya."
  ]]),
  rec('id-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "kartu buat hari ini",
    "Kartu Dua Piala yang keluar — koneksi yang setara dan hangat. Hari ini bagus buat menghubungi seseorang yang sudah lama nggak kamu sapa."
  ]]),
  rec('id-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu Lima Pedang yang keluar — persaingan yang mungkin nggak layak diperjuangkan. Hari ini boleh coba melepas satu argumen yang sebenarnya nggak terlalu penting."
  ]]),
  rec('id-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "kartu buat hari ini dong",
    "Kartu Sembilan Koin yang keluar — kepuasan yang datang dari kemandirian. Hari ini nikmati saja hasil kerja kerasmu sendiri tanpa perlu validasi dari siapa pun."
  ]]),
  rec('id-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "minta kartu hari ini dong",
    "Kartu Empat Tongkat yang keluar — perayaan kecil yang menghangatkan. Hari ini pantas buat merayakan hal sekecil apa pun yang bikin kamu senang."
  ]]),
  rec('id-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "kartu hari ini",
    "Kartu Dua Pedang keluar terbalik — waktunya membuka mata dan melihat pilihan yang selama ini dihindari. Hari ini coba hadapi satu keputusan kecil yang selama ini ditunda."
  ]]),
  rec('id-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "kartu buat hari ini",
    "Kartu Sepuluh Piala yang keluar — kebahagiaan yang utuh bersama orang-orang tersayang. Hari ini cocok buat menghargai orang-orang di sekitarmu."
  ]]),
  rec('id-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Sepuluh Tongkat yang keluar — beban yang berat tapi hampir sampai tujuan. Hari ini boleh terasa berat, tapi kamu lebih dekat ke garis akhir dari yang kamu kira."
  ]]),
  rec('id-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Aku butuh waktu sendiri sebelum ambil keputusan besar dalam hidup.",
    "Kartu Sang Pertapa yang keluar — cahaya kecil yang menerangi jalan sendirian. Waktu menyendiri seperti ini justru penting buat mendengar apa yang sebenarnya kamu inginkan."
  ]]),
  rec('id-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Hidupku berubah drastis dan tiba-tiba karena satu kejadian tak terduga.",
    "Kartu Menara yang keluar — perubahan mendadak yang meruntuhkan struktur lama. Sesulit apa pun ini terasa sekarang, kadang keruntuhan seperti ini membuka ruang untuk sesuatu yang lebih jujur dibangun kembali."
  ]]),
  rec('id-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Setelah masa sulit yang panjang, aku mulai punya harapan lagi buat masa depan.",
    "Kartu Bintang yang keluar — cahaya harapan yang perlahan kembali menyala. Harapan yang kamu rasakan sekarang ini nyata, dan pantas kamu percayai."
  ]]),
  rec('id-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Aku ngerasa nggak adil, karyaku nggak dihargai sebanding usahanya.",
    "Kartu Keadilan keluar terbalik — timbangan yang terasa berat sebelah. Perasaan itu valid, dan mungkin saatnya kamu mencari ruang yang lebih menghargai kerja kerasmu."
  ]]),
  rec('id-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Aku terlalu kritis sama karyaku sendiri sampai nggak pernah puas.",
    "Kartu Ratu Pedang keluar terbalik — ketajaman pikiran yang berbalik menyerang diri sendiri. Coba beri sedikit kelembutan pada dirimu sendiri saat menilai karyamu."
  ]]),
  rec('id-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "Aku akhirnya berhasil menyelesaikan proyek besar yang lama tertunda.",
    "Kartu Kereta Perang yang keluar — dua kekuatan yang berlawanan akhirnya bergerak searah. Menyatukan fokus seperti ini adalah pencapaian yang layak dirayakan."
  ]]),
  rec('id-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "kayaknya semua respons di sini cuma template yang diulang-ulang aja.",
    "Kartu Ksatria Piala keluar terbalik — keindahan yang terasa dangkal. Aku ngerti kekhawatiranmu. Coba ceritakan sesuatu yang spesifik, biar aku bisa merespons sesuai situasimu, bukan template."
  ]]),
  rec('id-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "aku ragu buat buka diri di sini, takut cuma dipakai buat data doang.",
    "Kartu Empat Koin keluar terbalik — genggaman yang mulai melonggar. Wajar kalau kamu berhati-hati. Kamu boleh berbagi sebanyak yang kamu nyaman saja, nggak perlu semuanya sekaligus."
  ]]),
  rec('id-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "aku awalnya skeptis, tapi kayaknya obrolan ini lumayan membantu juga.",
    "Kartu Enam Pedang yang keluar — perjalanan tenang menuju tempat yang lebih baik. Senang rasanya kalau ini sedikit membantu, dan aku tetap di sini kalau kamu ingin lanjut cerita."
  ]]),
  rec('id-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Aku ngerasa terjebak banget dan mikir buat menyakiti diri sendiri biar semua berhenti.",
    "Aku berhenti dulu dari kartu — ini yang paling penting sekarang. Perasaan terjebak itu berat banget, dan kamu nggak harus menanggungnya sendirian. Ada seseorang yang bisa kamu hubungi malam ini?"
  ]]),
  rec('id-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Aku udah nyoba banyak cara tapi rasa sakitnya nggak hilang, kadang kepikiran buat nyakitin diri.",
    "Aku berhenti dulu dari kartu — ini lebih penting sekarang. Kamu udah berusaha keras, dan itu berarti banyak. Mau aku bantu carikan layanan bantuan yang bisa dihubungi sekarang?"
  ]]),
  rec('id-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Pasanganku ngontrol semua keputusan aku sampai aku ngerasa nggak punya suara sendiri.",
    "Ini jauh lebih penting daripada kartu sekarang. Yang kamu alami itu bentuk kontrol yang nggak sehat, bukan cinta. Ada orang yang kamu percaya buat cerita ini, atau mau aku bantu carikan layanan bantuan?"
  ]]),
  rec('id-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Aku sering banget diteriaki dan direndahkan di rumah, sampai aku takut ngomong apa-apa.",
    "Ini lebih penting daripada kartu sekarang. Kamu berhak merasa aman di rumahmu sendiri. Ada tempat aman yang bisa kamu tuju sekarang, atau mau aku bantu carikan layanan dukungan?"
  ]]),
  rec('id-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Aku baru didiagnosis sama penyakit dan masih bingung harus gimana.",
    "Ini berat banget buat dihadapi sendirian, dan aku senang kamu mau cerita. Kartu Penyeimbangan menunjukkan proses menyesuaikan diri pelan-pelan itu wajar. Ada orang terdekat atau dokter yang bisa kamu ajak bicara lebih lanjut soal langkah berikutnya?"
  ]]),
  rec('id-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Aku takut banget buat periksa ke dokter walau tahu itu penting.",
    "Rasa takut itu manusiawi banget. Tapi keberanian buat menghadapi sesuatu yang menakutkan itu justru penting di sini. Ada seseorang yang bisa menemanimu waktu periksa nanti?"
  ]]),
  rec('id-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Delapan Tongkat yang keluar — segalanya bergerak cepat hari ini. Manfaatkan momentum ini buat menyelesaikan satu hal yang sudah lama tertunda."
  ]]),
  rec('id-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Pertemanan ini udah bertahan bertahun-tahun dan makin terasa berharga.",
    "Kartu Dunia yang keluar — lingkaran yang lengkap dan utuh. Pertemanan yang bertahan selama ini adalah pencapaian yang layak kamu syukuri."
  ]]),
  rec('id-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Aku merasa penuh harapan soal hubungan baru yang lagi aku jalani.",
    "Kartu Bintang yang keluar — harapan yang bersinar tenang setelah masa-masa sepi. Nikmati saja rasa harapan ini tanpa terburu-buru membebaninya dengan ekspektasi besar."
  ]]),
  rec('id-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Aku sering kepikiran, jangan-jangan dia nggak beneran suka sama aku.",
    "Kartu Sembilan Pedang yang keluar — pikiran-pikiran cemas yang datang di tengah malam. Kadang kekhawatiran itu lebih besar di kepala daripada kenyataannya, coba tanyakan langsung ke dia."
  ]]),
  rec('id-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Aku coba menyeimbangkan waktu antara circle pertemanan lama dan hubungan baru ini.",
    "Kartu Dua Koin yang keluar — seseorang menyeimbangkan dua hal dengan lincah. Kamu sedang belajar ritme baru, dan itu wajar butuh sedikit penyesuaian."
  ]]),
  rec('id-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Aku ngerasa terlalu banyak berkorban sendirian demi hubungan ini.",
    "Kartu Sepuluh Tongkat keluar terbalik — beban yang dipanggul sendirian sampai kelelahan. Coba bicarakan langsung dengan pasanganmu soal berbagi beban ini lebih adil."
  ]]),
  rec('id-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "Aku sadar aku dan pasangan sama-sama terjebak dalam pola hubungan yang nggak sehat.",
    "Kartu Sang Iblis yang keluar — dua sosok terikat rantai yang sebenarnya bisa dilepas. Menyadari pola ini adalah langkah pertama yang penting buat mengubahnya."
  ]]),
];

writeBatch(batch);
