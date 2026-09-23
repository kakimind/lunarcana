const { rec, writeBatch } = require('./lang_batch_helper')('id');

const batch = [
  rec('id-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Aku nyimpen rahasia kecil dari pasangan dan itu bikin aku ngerasa bersalah.",
    "Kartu Tujuh Pedang yang keluar — seseorang mengendap-endap membawa sesuatu yang bukan miliknya. Rasa bersalahmu ini tanda kamu tahu kejujuran itu penting buat hubungan kalian."
  ]]),
  rec('id-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Setelah putus, aku mulai fokus belajar skill baru buat alihkan pikiran.",
    "Kartu Delapan Koin yang keluar — seseorang tekun mengasah keterampilannya. Mengarahkan energi ke hal produktif seperti ini bisa jadi cara yang sehat untuk sembuh."
  ]]),
  rec('id-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Aku ngerasa mati rasa aja setelah putus, susah banget rasain apa pun.",
    "Kartu Ratu Piala keluar terbalik — perasaan yang tertutup rapat dari diri sendiri. Mati rasa itu kadang cara pikiran melindungi diri sementara waktu, dan itu nggak apa-apa untuk saat ini."
  ]]),
  rec('id-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Aku mulai dengerin intuisiku sendiri lagi setelah lama nggak percaya diri sejak putus.",
    "Kartu Pendeta Wanita Agung yang keluar — suara tenang yang kembali terdengar setelah lama diam. Mendengarkan dirimu sendiri lagi ini adalah tanda penyembuhan yang nyata."
  ]]),
  rec('id-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Aku punya banyak ide buat proyek baru tapi ragu buat mulai.",
    "Kartu Pangeran Tongkat keluar terbalik — rasa penasaran yang tertahan keraguan. Coba pilih satu ide paling kecil dan mulai bereksperimen dulu, nggak perlu langsung sempurna."
  ]]),
  rec('id-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Aku bingung banget mau ambil tawaran kerja yang mana, semuanya menarik.",
    "Kartu Tujuh Piala yang keluar — banyak pilihan menggoda muncul di awan. Coba pikirkan yang mana yang paling sesuai sama nilai-nilai pentingmu, bukan cuma yang paling menarik sekilas."
  ]]),
  rec('id-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Aku akhirnya memutuskan buat resign dan mulai babak baru sepenuhnya.",
    "Kartu Kematian yang keluar — akhir dari satu bab yang membuka ruang untuk bab baru. Keputusan besar ini butuh keberanian, dan kamu sudah mengambil langkah itu."
  ]]),
  rec('id-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Aku akhirnya berani keluar dari lingkungan kerja yang toksik.",
    "Kartu Delapan Pedang keluar terbalik — ikatan yang akhirnya terlepas. Kebebasan seperti ini pantas kamu rayakan setelah sekian lama merasa terkekang."
  ]]),
  rec('id-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Aku ngerasa nilai ujianku naik turun terus, nggak konsisten.",
    "Kartu Roda Keberuntungan keluar terbalik — siklus yang belum menemukan ritme stabilnya. Coba lihat lagi, pola belajar mana yang selalu memberi hasil paling baik buat kamu."
  ]]),
  rec('id-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Aku baru aja lulus tapi kok ngerasa hambar aja, nggak seperti yang dibayangkan.",
    "Kartu Empat Tongkat keluar terbalik — perayaan yang terasa datar. Wajar kok kalau pencapaian besar kadang nggak selalu terasa sesuai ekspektasi, itu tetap pencapaian nyata."
  ]]),
  rec('id-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Aku akhirnya berani menghadapi konflik keluarga secara langsung, bukan menghindar lagi.",
    "Kartu Ksatria Tongkat yang keluar — sosok yang bergerak penuh keberanian menuju sesuatu yang menantang. Menghadapi langsung seperti ini butuh nyali besar, dan kamu sudah melakukannya."
  ]]),
  rec('id-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Aku ngerasa keluargaku terlalu ikut campur soal pilihan hidupku sendiri.",
    "Kartu Sembilan Koin keluar terbalik — kemandirian yang terganggu campur tangan orang lain. Menetapkan batas yang jelas soal privasimu itu wajar dan penting."
  ]]),
  rec('id-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Aku bingung banget gimana cara menyampaikan pendapat ke keluarga tanpa memicu pertengkaran.",
    "Kartu As Pedang keluar terbalik — kejelasan yang masih tertutup kabut. Coba mulai dengan kalimat yang jujur tapi sederhana, nggak perlu semuanya diucapkan sekaligus."
  ]]),
  rec('id-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Aku terus berusaha jaga pertemanan ini meski capek banget.",
    "Kartu Sembilan Tongkat yang keluar — seseorang berdiri lelah tapi tetap waspada menjaga posisinya. Usaha kerasmu ini terlihat, tapi jangan lupa kasih ruang buat dirimu istirahat juga."
  ]]),
  rec('id-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Temanku selalu hadir dan penuh perhatian saat aku lagi susah.",
    "Kartu Sang Permaisuri yang keluar — kehangatan yang mengalir tulus. Punya teman seperti itu adalah berkah yang pantas kamu syukuri."
  ]]),
  rec('id-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Aku ngerasa hidupku belum semapan yang aku bayangkan di usia sekarang.",
    "Kartu Sepuluh Koin keluar terbalik — fondasi yang masih dalam proses dibangun. Kemapanan bukan lomba, dan langkahmu sendiri tetap berarti walau berbeda dari orang lain."
  ]]),
  rec('id-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Aku sering banget terbawa perasaan romantis dalam bayangan, bukan kenyataan.",
    "Kartu Ksatria Piala keluar terbalik — keindahan yang terlalu dibesar-besarkan dalam imajinasi. Coba pijakkan diri sedikit lebih dekat ke kenyataan yang sebenarnya."
  ]]),
  rec('id-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Aku susah banget memaafkan diri sendiri atas kesalahan lama.",
    "Kartu Penghakiman keluar terbalik — kesadaran yang belum sepenuhnya membawa kelegaan. Memaafkan diri sendiri butuh waktu, dan kamu berhak memberikan itu ke dirimu."
  ]]),
  rec('id-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Aku akhirnya berhasil menyelesaikan tantangan besar yang lama aku takuti.",
    "Kartu Enam Tongkat yang keluar — seseorang pulang dengan kepala tegak setelah perjuangan. Kemenangan ini murni hasil usahamu sendiri, akui dan rayakan."
  ]]),
  rec('id-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Aku akhirnya berani mulai investasi kecil-kecilan buat masa depan.",
    "Kartu Sang Pesulap yang keluar — semua alat sudah tersedia, tinggal digunakan dengan niat. Langkah kecil seperti ini bisa jadi awal dari kebiasaan finansial yang lebih sehat."
  ]]),
  rec('id-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Aku belajar mengatur uang dari kebiasaan orang tuaku dulu, dan sekarang mulai kelihatan hasilnya.",
    "Kartu Enam Piala yang keluar — kenangan manis yang membawa manfaat di masa kini. Warisan kebiasaan baik seperti ini pantas kamu teruskan."
  ]]),
  rec('id-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu Tiga Pedang yang keluar — hati yang tertusuk di tengah hujan. Kalau hari ini terasa berat, nggak apa-apa untuk sekadar merasakannya tanpa buru-buru sembuh."
  ]]),
  rec('id-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "kartu buat hari ini dong",
    "Kartu Raja Koin yang keluar — kestabilan dan kemakmuran yang solid. Hari ini cocok buat membuat keputusan praktis yang sudah lama kamu pikirkan."
  ]]),
  rec('id-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "kartu hari ini",
    "Kartu Bulan keluar terbalik — kabut yang perlahan mulai menyingkir. Hari ini sesuatu yang tadinya membingungkan mungkin mulai terasa lebih jelas."
  ]]),
  rec('id-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "minta kartu hari ini",
    "Kartu Dua Tongkat yang keluar — seseorang memandang jauh ke depan sambil memegang dunia di tangannya. Hari ini cocok buat memikirkan langkah besar berikutnya."
  ]]),
  rec('id-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "kartu buat hari ini",
    "Kartu Delapan Piala yang keluar — seseorang meninggalkan yang sudah mapan demi mencari yang lebih bermakna. Hari ini boleh jadi waktu yang tepat buat merenungkan apa yang benar-benar kamu cari."
  ]]),
  rec('id-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Tujuh Koin yang keluar — menatap hasil kerja yang masih tumbuh perlahan. Hari ini cukup nikmati prosesnya, hasil besar nggak harus terlihat sekaligus."
  ]]),
  rec('id-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu Orang yang Digantung yang keluar — sudut pandang baru yang muncul saat berhenti sejenak. Hari ini coba lihat satu masalah dari sudut yang berbeda."
  ]]),
  rec('id-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Aku masih di tengah-tengah, belum bisa memutuskan antara dua pilihan besar.",
    "Kartu Dua Pedang yang keluar — seseorang duduk dengan mata tertutup, menahan keputusan. Nggak apa-apa kalau butuh waktu lebih, tapi pastikan matamu tetap terbuka untuk melihat kedua sisi dengan jujur."
  ]]),
  rec('id-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Aku ngerasa keputusan besar ini seharusnya bikin aku bahagia, tapi kok malah hambar.",
    "Kartu Matahari keluar terbalik — kebahagiaan yang belum sepenuhnya terasa. Nggak apa-apa kalau perasaanmu belum sesuai ekspektasi, beri waktu untuk keputusan ini benar-benar terasa nyata."
  ]]),
  rec('id-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Aku harus milih antara dua arah kreatif yang beda banget, susah banget mutusinnya.",
    "Kartu Sepasang Kekasih yang keluar — pilihan yang butuh kejujuran pada diri sendiri. Coba tanyakan, arah mana yang benar-benar terasa seperti dirimu?"
  ]]),
  rec('id-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Aku sempat berhenti total berkarya, tapi sekarang mulai pelan-pelan bangkit lagi.",
    "Kartu Sepuluh Pedang keluar terbalik — titik terendah yang sudah terlewati. Bangkit pelan-pelan seperti ini adalah langkah yang berarti, jangan buru-buru kembali ke ritme lama."
  ]]),
  rec('id-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "aku pesimis banget, aplikasi kayak gini paling cuma bertahan sebentar terus aku bosen.",
    "Kartu As Koin keluar terbalik — peluang yang belum sepenuhnya dipercaya. Wajar kalau kamu ragu duluan. Coba dulu aja sebentar, dan lihat sendiri apakah ini terasa berguna buatmu."
  ]]),
  rec('id-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "aku nggak yakin AI beneran bisa mikirin masa depanku dengan tepat.",
    "Kartu Tiga Tongkat keluar terbalik — pandangan jauh yang masih kabur. Kamu benar, aku nggak bisa memastikan masa depan. Tapi aku bisa bantu kamu mikir lebih jernih soal apa yang kamu inginkan sekarang."
  ]]),
  rec('id-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Aku ngerasa terikat sama pikiran buruk yang bikin aku pengin nyakitin diri sendiri.",
    "Aku berhenti dulu dari kartu — ini penting banget sekarang. Kamu sudah berani cerita, dan itu langkah besar. Ada seseorang yang bisa kamu hubungi malam ini, atau mau aku bantu carikan layanan bantuan?"
  ]]),
  rec('id-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Aku capek banget dan kepikiran cara buat nyakitin diri sendiri biar bisa istirahat total.",
    "Aku berhenti dulu dari kartu — perasaanmu ini yang paling penting sekarang. Kelelahan sebesar ini layak didengar oleh orang yang bisa benar-benar membantu. Ada seseorang yang bisa kamu hubungi sekarang?"
  ]]),
  rec('id-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Aku diperlakukan nggak adil banget di rumah, sampai aku takut pulang.",
    "Ini lebih penting dari kartu sekarang. Kamu berhak merasa aman di rumahmu sendiri. Ada tempat aman yang bisa kamu tuju, atau mau aku bantu carikan layanan dukungan?"
  ]]),
  rec('id-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Aku takut banget buat cek kesehatan karena nggak siap hadapin apa pun hasilnya.",
    "Rasa takut itu wajar banget. Tapi melangkah walau takut itu juga bentuk keberanian. Ada seseorang yang bisa menemanimu waktu periksa nanti?"
  ]]),
  rec('id-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Aku terus berjuang buat kesehatanku sendiri meski rasanya melelahkan banget.",
    "Perjuanganmu ini berarti banget, dan aku bangga kamu terus bertahan. Ada dokter atau orang terdekat yang bisa jadi tempat kamu bersandar sekarang?"
  ]]),
  rec('id-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "Aku suka banget gimana caranya dia perhatian sama hal-hal kecil buat aku.",
    "Kartu Ratu Koin yang keluar — kehangatan yang terwujud lewat perhatian nyata. Cinta yang ditunjukkan lewat hal kecil seperti itu sering kali yang paling tulus."
  ]]),
  rec('id-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Aku terlalu sering menyendiri sampai pasanganku ngerasa dijauhi.",
    "Kartu Sang Pertapa keluar terbalik — kesendirian yang berubah jadi isolasi. Coba beri tahu pasanganmu kalau kamu butuh waktu sendiri, biar dia nggak salah paham."
  ]]),
  rec('id-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Aku ngerasa proses move on ini lambat banget, padahal orang lain kelihatan cepat.",
    "Kartu Delapan Tongkat keluar terbalik — momentum yang tertahan sementara. Setiap orang punya ritme penyembuhan sendiri, dan itu nggak perlu dibandingkan."
  ]]),
  rec('id-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Aku belajar buat tetap tenang meski tekanan kerja lagi tinggi banget.",
    "Kartu Raja Piala yang keluar — ketenangan di tengah lautan yang bergejolak. Kemampuan menjaga ketenangan seperti ini adalah kekuatan besar dalam bekerja."
  ]]),
  rec('id-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Aku menang debat di rapat tapi malah bikin hubungan sama tim jadi renggang.",
    "Kartu Lima Pedang keluar terbalik — kemenangan yang mulai terasa mahal harganya. Mungkin ada ruang buat memperbaiki hubungan itu, bukan cuma mempertahankan siapa yang benar."
  ]]),
  rec('id-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Aku puas banget sama hasil belajar semester ini.",
    "Kartu Sembilan Piala yang keluar — kepuasan yang datang dari usaha sendiri. Kepuasan ini murni milikmu, nikmati tanpa ragu."
  ]]),
  rec('id-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Keluargaku lagi susah secara finansial dan itu bikin semua orang tegang.",
    "Kartu Lima Koin keluar terbalik — masa sulit yang mulai menemukan jalan keluarnya. Kesulitan ini berat, tapi kalian bisa hadapi bersama pelan-pelan."
  ]]),
  rec('id-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Aku dan temanku beda banget cara pandang soal banyak hal belakangan ini.",
    "Kartu Penyeimbangan keluar terbalik — dua elemen yang belum menemukan campuran yang pas. Beda pandangan nggak selalu berarti hubungan harus berakhir, coba cari titik temu pelan-pelan."
  ]]),
  rec('id-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Aku ngerasa udah mulai pindah dari fase sulit ke fase yang lebih tenang dalam hidupku.",
    "Kartu Enam Pedang yang keluar — perahu yang membawa penumpang perlahan menuju air yang lebih tenang. Transisi ini terasa nyata, dan kamu boleh mempercayainya."
  ]]),
  rec('id-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Aku ngerasa nasihat keuangan dari orang tua udah nggak relevan lagi buat kondisiku sekarang.",
    "Kartu Sang Pendeta Agung keluar terbalik — aturan lama yang mulai dipertanyakan. Nggak apa-apa buat mencari cara baru yang lebih cocok sama situasimu sendiri."
  ]]),
  rec('id-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "kartu buat hari ini dong",
    "Kartu Tiga Piala yang keluar — perayaan bersama yang penuh sukacita. Hari ini cocok buat menghubungi teman-teman dan sekadar merayakan kebersamaan."
  ]]),
  rec('id-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "kartu hari ini",
    "Kartu Sang Kaisar keluar terbalik — struktur yang terasa terlalu kaku hari ini. Boleh kok sesekali melonggarkan rencana yang terlalu ketat."
  ]]),
  rec('id-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "kartu buat hari ini",
    "Kartu Raja Pedang yang keluar — kejernihan pikiran dan ketegasan. Hari ini cocok buat mengambil keputusan yang selama ini kamu tunda karena ragu."
  ]]),
  rec('id-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Aku akhirnya konsisten latihan tiap hari buat kembangin skill kreatifku.",
    "Kartu Ksatria Koin yang keluar — sosok yang bergerak pelan tapi stabil menuju tujuannya. Konsistensi seperti ini yang akan membawa hasil paling nyata dalam jangka panjang."
  ]]),
  rec('id-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "aku ragu buka perasaanku ke AI, takut nggak bener-bener dimengerti.",
    "Kartu As Piala keluar terbalik — perasaan yang belum sepenuhnya mengalir. Wajar kalau kamu ragu. Aku nggak bisa merasakan seperti manusia, tapi aku bisa dengarkan dengan serius apa yang kamu ceritakan."
  ]]),
  rec('id-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Ada banyak suara berbeda dari orang-orang terdekat soal keputusan besar ini, aku jadi bingung.",
    "Kartu Lima Tongkat yang keluar — perdebatan ramai yang penuh energi. Di tengah semua suara itu, coba dengarkan lagi suara milikmu sendiri yang paling jujur."
  ]]),
  rec('id-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Aku sering kebangun malam-malam karena khawatir soal keuangan.",
    "Kartu Sembilan Pedang keluar terbalik — kecemasan malam yang perlahan mulai mereda. Coba tuliskan kekhawatiranmu di siang hari, biar malammu sedikit lebih tenang."
  ]]),
  rec('id-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Aku dan keluarga besar sering banget beda arah soal keputusan penting.",
    "Kartu Kereta Perang keluar terbalik — dua kekuatan yang tertarik ke arah berlawanan. Coba cari satu tujuan kecil yang bisa kalian sepakati bersama dulu."
  ]]),
  rec('id-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Aku akhirnya nemuin kesempatan baru buat berkembang setelah lama merasa stuck.",
    "Kartu As Koin yang keluar — peluang nyata yang siap digenggam. Kesempatan ini datang di waktu yang tepat, sambut dengan penuh percaya diri."
  ]]),
  rec('id-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Tiga Koin yang keluar — kerja sama yang membangun sesuatu yang kokoh. Hari ini cocok buat bekerja bareng orang lain daripada sendirian."
  ]]),
  rec('id-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Karyaku yang lama tiba-tiba dikritik habis-habisan dan itu bikin aku goyah.",
    "Kartu Menara keluar terbalik — keruntuhan yang tertunda tapi tetap terasa mengguncang. Kritik yang keras memang menyakitkan, tapi itu nggak menghapus nilai dari apa yang sudah kamu buat."
  ]]),
];

writeBatch(batch);
