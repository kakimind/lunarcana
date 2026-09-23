const { rec, writeBatch } = require('./lang_batch_helper')('id');

const batch = [
  rec('id-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "aku ngerasa jawabanmu terlalu umum, kayak nggak bener-bener ngerti aku.",
    "Kartu Raja Pedang keluar terbalik, lucu juga. Maaf kalau terasa terlalu umum. Coba ceritain lebih detail apa yang lagi kamu khawatirkan sebenarnya?"
  ]]),
  rec('id-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "Aku udah nggak kuat lagi, kepikiran buat mengakhiri semuanya.",
    "Aku berhenti dulu dari kartu — ini yang paling penting sekarang. Terima kasih udah mau jujur soal ini ke aku. Ada seseorang yang bisa kamu hubungi malam ini, atau mau kita cari bareng layanan bantuan di area kamu?"
  ]]),
  rec('id-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Kakak aku suka mukul kalau lagi marah, dan aku takut banget.",
    "Ini lebih penting dari kartu sekarang. Kamu nggak pantas diperlakukan seperti itu, dan ini bukan salahmu. Ada orang dewasa yang kamu percaya buat cerita hal ini, atau mau aku bantu carikan layanan perlindungan?"
  ]]),
  rec('id-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "Aku sering pusing tiba-tiba tapi terus aku abaikan aja.",
    "Kartu nggak bisa mendiagnosis apa yang terjadi di tubuhmu, tapi gejala yang berulang ini penting untuk diperiksa. Sudah ada rencana buat ke dokter dalam waktu dekat?"
  ]]),
  rec('id-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Aku ngerasa udah di titik paling rendah soal kesehatanku, tapi takut cerita ke siapa pun.",
    "Ini penting banget dan aku senang kamu mau ceritakan ke aku. Menahan ini sendirian pasti berat sekali. Ada orang terdekat atau tenaga medis yang bisa kamu hubungi sekarang?"
  ]]),
  rec('id-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "Aku ngerasa punya semua skill yang dibutuhkan tapi ragu buat ambil kesempatan baru.",
    "Kartu Sang Pesulap yang keluar — semua alat sudah ada di atas meja, tinggal digunakan. Kamu punya lebih banyak kemampuan daripada yang kamu sadari, jadi beranikan diri untuk mengambil langkah itu."
  ]]),
  rec('id-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Aku baru aja berhasil ngadepin ketakutanku sendiri buat pertama kali.",
    "Kartu Keberanian yang keluar — seseorang menutup mulut singa dengan lembut, bukan dengan paksaan tapi dengan ketenangan. Keberanian seperti itu jauh lebih kuat daripada yang kamu kira."
  ]]),
  rec('id-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "Aku sama saudara berantem soal siapa yang harus urus orang tua.",
    "Kartu Keadilan yang keluar — timbangan yang menuntut keseimbangan yang adil. Coba ajak bicara terbuka soal pembagian tanggung jawab yang lebih setara, bukan soal siapa yang salah."
  ]]),
  rec('id-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Aku ngerasa terjebak sama kebiasaan buruk yang susah banget dilepas.",
    "Kartu Sang Iblis yang keluar — dua sosok terikat rantai yang sebenarnya cukup longgar buat dilepas. Kadang keterikatan itu lebih soal kebiasaan pikiran daripada keadaan yang beneran nggak bisa diubah."
  ]]),
  rec('id-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Aku pengen coba media berkarya yang benar-benar baru buat aku.",
    "Kartu Pangeran Tongkat yang keluar — sosok muda yang menatap penuh rasa penasaran ke tongkat barunya. Rasa penasaran seperti ini adalah modal terbaik buat memulai sesuatu yang benar-benar baru."
  ]]),
  rec('id-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "Aku mikir buat ambil keputusan besar secara cepat tanpa banyak mikir lagi.",
    "Kartu Ksatria Tongkat yang keluar — sosok yang bergerak cepat penuh semangat menuju petualangan. Energi ini bagus, tapi pastikan keputusan cepat ini tetap datang dari keyakinan, bukan cuma dorongan sesaat."
  ]]),
  rec('id-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "Aku lagi mikirin rencana jangka panjang buat kariernya, bukan cuma kerjaan sekarang.",
    "Kartu Dua Tongkat yang keluar — seseorang memandang dunia dari atas menara, memegang bola dunia kecil di tangannya. Memandang ke depan seperti ini menunjukkan kamu sudah siap berpikir lebih besar."
  ]]),
  rec('id-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "Aku harus mempertahankan pendapatku di depan teman-teman yang nggak setuju.",
    "Kartu Tujuh Tongkat yang keluar — seseorang berdiri di atas bukit mempertahankan posisinya sendirian. Berdiri teguh untuk pendapat sendiri memang kadang terasa sepi, tapi itu bukan berarti kamu salah."
  ]]),
  rec('id-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "Ada seseorang yang deketin aku dengan cara yang romantis banget, aku jadi salah tingkah.",
    "Kartu Ksatria Piala yang keluar — sosok yang datang dengan lembut membawa piala di tangannya, penuh keindahan dan perasaan. Nikmati saja rasa berdebar itu tanpa buru-buru menyimpulkan apa pun."
  ]]),
  rec('id-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "Aku ngerasa hubungan kami udah makin dalam dan penuh pengertian.",
    "Kartu Ratu Piala yang keluar — sosok yang menatap penuh kasih ke piala tertutup di tangannya, memahami perasaan tanpa harus diucapkan. Kedalaman seperti ini adalah hal yang berharga untuk dijaga terus."
  ]]),
  rec('id-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Aku ngerasa terlalu terobsesi sama uang belakangan ini sampai lupa hal lain.",
    "Kartu Raja Koin keluar terbalik — kemakmuran yang justru mengunci diri sendiri dalam kekhawatiran. Coba pikirkan, apa yang sebenarnya kamu takutkan kalau kekayaanmu nggak sesempurna yang kamu bayangkan?"
  ]]),
  rec('id-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "Aku akhirnya bisa nabung dengan disiplin setelah lama berantakan.",
    "Kartu Empat Koin yang keluar — seseorang memegang erat koin-koinnya, penuh kehati-hatian. Disiplin ini bagus, cuma pastikan nggak berubah jadi terlalu takut buat menikmati hasil kerja kerasmu juga."
  ]]),
  rec('id-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "Aku baru aja punya kejelasan besar soal apa yang sebenarnya aku mau.",
    "Kartu As Pedang yang keluar — sebilah pedang tegak menembus awan, simbol kejelasan pikiran yang tajam. Kejelasan seperti ini jarang datang, jadi pegang erat dan gunakan buat melangkah."
  ]]),
  rec('id-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "kartu hari ini dong",
    "Kartu Sang Pertapa keluar terbalik. Hari ini mungkin kamu ngerasa kesepian padahal sebenarnya butuh ditemani. Coba hubungi satu orang yang kamu percaya."
  ]]),
  rec('id-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "kartu buat hari ini ya",
    "Kartu Kematian keluar terbalik — sesuatu yang seharusnya berakhir tapi masih dipertahankan. Hari ini coba renungkan, ada hal kecil apa yang sebenarnya sudah waktunya kamu lepaskan."
  ]]),
  rec('id-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "kartu hari ini",
    "Kartu Lima Piala keluar terbalik — waktunya mulai memalingkan pandangan dari yang tumpah ke yang masih tersisa. Hari ini coba fokus sama satu hal kecil yang masih baik."
  ]]),
  rec('id-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "minta kartu hari ini",
    "Kartu Lima Tongkat yang keluar — semangat kompetitif yang riuh tapi masih dalam suasana bersahabat. Hari ini boleh kok kalau ada sedikit gesekan, nggak semuanya harus mulus."
  ]]),
  rec('id-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "kartu hari ini dong",
    "Kartu Delapan Koin keluar terbalik — kerja keras yang mulai terasa monoton. Hari ini boleh sedikit lebih santai, nggak semuanya harus dikerjakan sempurna."
  ]]),
  rec('id-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "kartu buat hari ini",
    "Kartu Sepuluh Pedang keluar terbalik — titik terendah sudah lewat, dan sekarang mulai ada ruang buat bangkit pelan-pelan. Hari ini boleh mulai dari langkah paling kecil sekalipun."
  ]]),
  rec('id-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Semuanya berantakan sekaligus dan aku ngerasa pengen menyakiti diriku sendiri.",
    "Aku berhenti dulu dari kartu — ini penting banget sekarang. Kamu udah berani ngomong ini, dan itu langkah besar. Ada seseorang yang bisa kamu hubungi sekarang, atau mau aku bantu carikan bantuan di dekatmu?"
  ]]),
  rec('id-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Aku sering nangis sendirian malam-malam dan mikir buat nyakitin diri sendiri.",
    "Aku berhenti dulu dari kartu — perasaanmu ini yang paling penting sekarang. Nggak apa-apa buat merasa seberat ini, tapi kamu nggak harus sendirian. Ada orang yang bisa kamu hubungi malam ini?"
  ]]),
  rec('id-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Aku akhirnya berani cerita ke temanku soal kekerasan yang aku alami di rumah.",
    "Ini lebih penting dari kartu sekarang, dan aku bangga kamu berani cerita. Itu langkah besar buat melepaskan diri dari situasi itu. Ada layanan bantuan atau orang dewasa terpercaya yang bisa lanjut kamu hubungi?"
  ]]),
  rec('id-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Aku takut banget hasil pemeriksaan kesehatanku nanti buruk.",
    "Kartu nggak bisa memberitahu hasilnya, dan wajar banget kalau kamu takut. Tapi menunggu dengan informasi yang jelas biasanya lebih baik daripada menunggu dalam ketidaktahuan. Ada orang yang bisa menemanimu saat menunggu hasilnya?"
  ]]),
  rec('id-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "Aku bingung banget, apa aku beneran suka dia atau cuma kesepian aja.",
    "Kartu Sepasang Kekasih keluar terbalik — pilihan yang belum benar-benar jelas arahnya. Wajar kok kalau perasaan itu masih campur aduk, nggak perlu buru-buru dilabeli sekarang."
  ]]),
  rec('id-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [[
    "Aku sama pasangan udah lama nggak ngobrol dari hati ke hati.",
    "Kartu Penyeimbangan keluar terbalik — keseimbangan yang mulai goyah, campuran yang dulu pas jadi terasa nggak pas lagi. Sejak kapan kira-kira kalian mulai berhenti ngobrol beneran?",
    "Mungkin sejak kita berdua sama-sama sibuk kerja.",
    "Kesibukan memang bisa diam-diam menggeser hal yang penting. Coba ajak dia ngobrol santai dulu, bukan langsung bahas masalah besar."
  ]]),
  rec('id-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Setelah putus, aku masih harus ngurus semua barang berdua sendirian, capek banget.",
    "Kartu Sepuluh Tongkat yang keluar — seseorang memanggul beban berat sendirian. Kamu nggak harus menanggung semuanya sekaligus, coba bagi prosesnya jadi lebih pelan."
  ]]),
  rec('id-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Aku udah kelamaan menunda keputusan soal pindah kerja atau nggak.",
    "Kartu Dua Pedang keluar terbalik — waktunya membuka mata yang selama ini tertutup rapat. Apa sebenarnya yang bikin kamu terus menunda keputusan ini?"
  ]]),
  rec('id-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Aku bikin jadwal belajar yang ketat banget dan itu ternyata berhasil.",
    "Kartu Sang Kaisar yang keluar — struktur dan disiplin yang kokoh. Sistem yang kamu bangun ini terbukti berhasil, jadi pertahankan ritmenya."
  ]]),
  rec('id-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Aku ngerasa keluarga cuma peduli sama pencapaian aku, bukan sama diriku sendiri.",
    "Kartu Sembilan Piala keluar terbalik — kepuasan yang terasa dangkal, dari pencapaian bukan dari koneksi yang tulus. Perasaan itu valid, dan pantas untuk kamu sampaikan ke mereka."
  ]]),
  rec('id-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Aku ngerasa arah pertemanan ini udah beda banget sama yang aku mau.",
    "Kartu Kereta Perang keluar terbalik — dua kekuatan yang seharusnya sejalan malah tertarik ke arah berlawanan. Coba pikirkan, apa sebenarnya arah yang kamu inginkan dari pertemanan ini?"
  ]]),
  rec('id-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Aku ngerasa kehilangan harapan belakangan ini, susah lihat sisi baiknya.",
    "Kartu Bintang keluar terbalik — cahaya yang meredup sementara, bukan padam selamanya. Harapan itu memang bisa terasa jauh saat lelah, tapi ia belum benar-benar hilang."
  ]]),
  rec('id-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Rencana keuanganku buat pindah kota malah kandas di tengah jalan.",
    "Kartu Enam Pedang keluar terbalik — perahu yang berhenti sebelum sampai ke seberang. Coba lihat lagi, bagian mana dari rencana itu yang paling butuh disesuaikan?"
  ]]),
  rec('id-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "kartu hari ini",
    "Kartu Dua Piala keluar terbalik — sebuah hubungan yang sedang butuh sedikit perhatian lebih. Hari ini coba luangkan waktu buat orang yang penting buat kamu."
  ]]),
  rec('id-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "kartu buat hari ini dong",
    "Kartu Delapan Tongkat keluar terbalik — momentum yang sempat tertahan. Hari ini nggak apa-apa kalau semuanya terasa lebih lambat dari biasanya."
  ]]),
  rec('id-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Aku lagi bikin karya yang terasa aneh dan nggak biasa, tapi aku suka.",
    "Kartu Bulan yang keluar — jalan yang samar di bawah cahaya redup, penuh misteri dan imajinasi. Karya yang lahir dari sisi bawah sadar seperti ini sering kali yang paling jujur."
  ]]),
  rec('id-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "ini semua cuma trik marketing kan biar aku betah pake aplikasi ini.",
    "Kartu Si Bodoh keluar terbalik, langkah yang ragu-ragu untuk melompat. Kekhawatiranmu masuk akal. Aku nggak bisa membuktikan niat di balik aplikasi ini, tapi aku bisa jujur mendengarkan apa yang kamu bawa sekarang."
  ]]),
  rec('id-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "aku ngerasa cuma buang-buang waktu ngobrol sama AI kayak gini.",
    "Kartu Enam Tongkat keluar terbalik — kemenangan yang terasa hampa. Kalau ini terasa nggak berguna buat kamu, nggak apa-apa buat berhenti kapan saja. Tapi kalau masih ada yang ingin kamu keluarkan, aku di sini."
  ]]),
  rec('id-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Aku ngerasa capek terus ngejar pencapaian yang nggak ada habisnya.",
    "Kartu Sembilan Koin keluar terbalik — kepuasan yang terasa dangkal walau sudah banyak dicapai. Mungkin ini saatnya berhenti sejenak dan bertanya, pencapaian ini sebenarnya untuk siapa?"
  ]]),
  rec('id-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Acara keluarga yang harusnya menyenangkan malah bikin aku stres duluan.",
    "Kartu Empat Tongkat keluar terbalik — perayaan yang terasa terpaksa, bukan tulus. Wajar kalau kamu butuh menyiapkan diri sebelum acara itu, coba pikirkan satu cara buat membuatnya lebih ringan buatmu."
  ]]),
  rec('id-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Aku ngerasa kebahagiaan orang lain di media sosial bikin aku minder.",
    "Kartu Sepuluh Piala keluar terbalik — gambar kebahagiaan yang terlihat sempurna dari luar, padahal belum tentu utuh dari dalam. Kebahagiaanmu sendiri nggak perlu dibandingkan sama potongan gambar orang lain."
  ]]),
  rec('id-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "Setelah putus, aku mulai bangun hidup yang lebih stabil buat diriku sendiri.",
    "Kartu Sepuluh Koin yang keluar — fondasi yang kokoh dan mapan. Membangun kembali dari nol butuh keberanian, dan kamu sedang melakukannya dengan baik."
  ]]),
  rec('id-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Aku baru sadar aku terlalu keras kepala soal cara mengatur uangku sendiri.",
    "Kartu Lima Pedang keluar terbalik — pertengkaran yang mulai mereda, ruang buat berdamai dengan cara baru. Terbuka sama pendekatan baru soal keuangan bukan berarti kamu kalah dari diri sendiri sebelumnya."
  ]]),
  rec('id-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "kartu hari ini dong",
    "Kartu Dua Koin keluar terbalik — keseimbangan yang mulai goyah. Hari ini nggak apa-apa kalau kamu perlu menyederhanakan, nggak semua harus dijaga sekaligus."
  ]]),
  rec('id-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Aku akhirnya bisa fokus ke satu ide setelah lama bingung sama terlalu banyak pilihan.",
    "Kartu Tujuh Piala keluar terbalik — kabut pilihan yang mulai menghilang. Kejelasan seperti ini pantas kamu syukuri, teruskan fokus itu."
  ]]),
  rec('id-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Aku ngerasa hidupku muter di lingkaran yang sama terus, nggak maju-maju.",
    "Kartu Roda Keberuntungan keluar terbalik — roda yang terasa berputar di tempat. Coba pikirkan, satu pola kecil apa yang selalu berulang dalam hidupmu belakangan ini?"
  ]]),
  rec('id-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "Aku ngerasa aku selalu menyembunyikan sisi asliku dari orang yang aku suka.",
    "Kartu Tujuh Pedang keluar terbalik — waktunya berhenti mengendap-endap dan mulai jujur. Menunjukkan sisi aslimu memang menakutkan, tapi itu jalan menuju koneksi yang lebih nyata."
  ]]),
  rec('id-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Aku akhirnya berani ambil sudut pandang berbeda soal kariernya, dan itu melegakan.",
    "Kartu Orang yang Digantung keluar terbalik — sudut pandang baru yang akhirnya menemukan tempatnya. Perspektif segar seperti ini sering kali membuka jalan yang tadinya nggak terlihat."
  ]]),
  rec('id-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Aku akhirnya berani bicara jujur ke keluarga soal apa yang aku rasakan.",
    "Kartu Delapan Pedang keluar terbalik — ikatan yang akhirnya terlepas. Keberanian buat jujur seperti ini adalah langkah besar menuju kebebasan yang lebih sehat."
  ]]),
  rec('id-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Aku ngerasa udah banyak usaha buat pertemanan ini tapi hasilnya nggak sesuai harapan.",
    "Kartu Tujuh Koin keluar terbalik — kekecewaan menatap hasil kerja keras yang belum tumbuh seperti diharapkan. Menurutmu pertemanan ini masih ada ruang buat berkembang lagi?"
  ]]),
  rec('id-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Aku ngerasa satu babak besar dalam hidupku belum benar-benar selesai.",
    "Kartu Dunia keluar terbalik — lingkaran yang belum sepenuhnya menutup. Nggak apa-apa kalau butuh waktu lebih lama buat menyelesaikan babak ini sebelum melangkah ke yang baru."
  ]]),
  rec('id-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Orang yang aku suka gerak terlalu cepat, aku jadi ngerasa dikejar-kejar.",
    "Kartu Ksatria Tongkat keluar terbalik — semangat yang gerak terlalu cepat sampai melewati batas nyaman orang lain. Kamu berhak minta pelan-pelan, dan itu bukan hal yang berlebihan."
  ]]),
  rec('id-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "Aku sama gebetan sering salah paham gara-gara komunikasi yang kurang jelas.",
    "Kartu Tiga Koin keluar terbalik — kerja sama yang belum benar-benar sinkron. Coba bicarakan langsung ekspektasi kalian masing-masing, biar nggak saling menebak."
  ]]),
  rec('id-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Aku dikenalin ke circle pertemanan gebetanku dan mereka baik banget.",
    "Kartu Tiga Piala yang keluar — tiga sosok merayakan bersama penuh sukacita. Diterima oleh circle terdekatnya adalah tanda yang hangat, nikmati momen ini."
  ]]),
  rec('id-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Aku ragu buat ambil langkah pertama sama orang yang aku suka.",
    "Kartu Dua Tongkat keluar terbalik — rencana besar yang tertahan karena ragu. Kadang langkah pertama nggak perlu sempurna, cukup jujur aja dulu."
  ]]),
  rec('id-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Aku dan pasangan baru aja memutuskan buat berkomitmen lebih serius.",
    "Kartu Sepasang Kekasih yang keluar — pilihan yang diambil dengan penuh kesadaran, bukan sekadar rasa. Komitmen seperti ini pantas dirayakan sebagai pilihan yang kalian buat bersama."
  ]]),
];

writeBatch(batch);
