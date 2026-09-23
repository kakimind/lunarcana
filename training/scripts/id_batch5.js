const { rec, writeBatch } = require('./lang_batch_helper')('id');

const batch = [
  rec('id-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Aku ngerasa hidupku belum cukup siap buat mulai hubungan baru.",
    "Kartu Dunia keluar terbalik — satu bab yang belum sepenuhnya selesai. Apakah kesiapan itu beneran mendesak buat kamu tunda cinta karena hal itu?"
  ]]),
  rec('id-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "akhir pekan ini kami akhirnya resmi jadian!",
    "Kartu perayaan yang keluar, orang-orang berkumpul di bawah untaian bunga. Apa yang paling bikin kamu deg-degan sekarang?"
  ]]),
  rec('id-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Tiap ngobrol sama pasangan, aku ngerasa tercekik dan susah ngomong apa yang aku pikirkan.",
    "Kartu seseorang mata tertutup di antara pedang-pedang yang keluar. Terlihat terjebak, tapi sebenarnya masih ada ruang buat bergerak. Kalimat apa yang ingin kamu mulai ucapkan duluan?"
  ]]),
  rec('id-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "Bisa nggak sih rasa deg-degan di awal hubungan itu kembali lagi?",
    "Kartu Roda Keberuntungan yang keluar — perasaan juga naik turun mengikuti siklusnya. Perasaan itu beneran hilang total, atau cuma lagi turun sementara?"
  ]]),
  rec('id-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Aku pura-pura udah move on padahal sebenernya belum baik-baik aja.",
    "Kartu kemenangan keluar terbalik — pemulihan di luar yang belum sepenuhnya nyata di dalam. Buat siapa sebenarnya kepura-puraan ini paling banyak ditujukan?"
  ]]),
  rec('id-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Setelah putus, ngurus emosi dan rutinitas sehari-hari sekaligus itu melelahkan banget.",
    "Tangan yang menyeimbangkan keluar terbalik. Nggak perlu ngelakuin keduanya dengan sempurna sekarang. Apa yang bisa kamu lepas dulu hari ini?"
  ]]),
  rec('id-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Aku masih belum yakin kerjaan ini beneran cocok buat aku.",
    "Kartu Bulan yang keluar, jalan yang samar-samar terlihat. Mungkin yang dibutuhkan sekarang bukan jawaban pasti, tapi keberanian buat melangkah pelan-pelan di tengah ketidakpastian. Kamu udah sedikit terbiasa sama ketidakpastian ini?"
  ]]),
  rec('id-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Perusahaannya bagus, tapi vibe timnya nggak cocok sama aku.",
    "Orang-orang berkumpul seperti keluarga keluar terbalik — kondisi bagus tapi tanpa rasa memiliki. Di bagian mana ketidakcocokan ini paling terasa?"
  ]]),
  rec('id-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Aku terus-terusan gagal ujian yang sama dan kepercayaan diriku makin habis.",
    "Kartu Bintang keluar terbalik. Harapan belum hilang, cuma sedang tersembunyi sementara. Apa yang masih tersisa dari alasan kamu memilih jalan ini dulu?"
  ]]),
  rec('id-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Ekspektasi ibuku soal kehidupan cintaku itu terlalu romantis, jadi tekanan banget buat aku.",
    "Kartu Ksatria Piala yang keluar, memegang piala dengan hati-hati. Ekspektasinya itu mungkin caranya sendiri untuk menunjukkan sayang. Kamu pernah bicara jujur soal ini ke dia?"
  ]]),
  rec('id-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Setelah lama banget, akhirnya seluruh keluarga bisa ketawa bareng.",
    "Kartu Matahari yang keluar, bersinar terang. Momen ini kayaknya bakal terus dikenang lama-lama. Apa yang dibutuhkan buat lebih sering punya momen kayak gini?"
  ]]),
  rec('id-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Aku dan sahabatku benar-benar udah nggak ada kontak sama sekali.",
    "Kartu seseorang terbaring di tanah yang keluar. Kelihatan berat, tapi ini juga titik paling bawah yang nggak bisa lebih rendah lagi. Kalau bisa memperbaiki pertemanan ini, apa hal pertama yang bakal kamu ubah?"
  ]]),
  rec('id-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "Aku udah bantu temanku semaksimal mungkin saat dia susah, tapi rasanya nggak dianggap.",
    "Kartu Ratu Koin yang keluar, sosok yang murah hati. Kalau memberi itu tulus, itu sudah berarti sesuatu dengan sendirinya. Kamu udah cerita ke dia soal rasa nggak dianggap itu?"
  ]]),
  rec('id-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Aku ngejar banyak tujuan sekaligus dan sekarang aku kelelahan banget.",
    "Kartu seseorang tertimbun tumpukan tongkat yang keluar. Mungkin kamu coba menanggung beban yang terlalu berat buat satu orang. Tujuan mana yang bisa kamu tunda dulu sekarang?"
  ]]),
  rec('id-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Aku belum bisa berdamai sama diri sendiri, masih belum bisa sayang diri sendiri.",
    "Dua orang berhadapan keluar terbalik — sekarang malah berpaling dari diri sendiri. Kalau harus minta maaf ke diri sendiri, kamu mau minta maaf soal apa?"
  ]]),
  rec('id-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Aku belanja impulsif banyak banget dan sekarang nyesel.",
    "Kartu Ksatria Tongkat keluar terbalik — kecepatan yang melampaui pertimbangan. Gimana caranya biar dorongan itu bisa ditahan sebentar di lain waktu?"
  ]]),
  rec('id-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Aku nggak bisa lepas dari kebiasaan lama soal belanja yang boros.",
    "Kartu Kematian keluar terbalik — pola yang seharusnya berakhir tapi nggak kunjung berakhir. Menurutmu, kebiasaan itu sebenarnya lagi coba mengisi apa?"
  ]]),
  rec('id-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu seseorang terluka tapi tetap berdiri yang keluar. Hari ini nggak apa-apa kalau kelihatan agak lelah, itu cuma berarti kamu udah bertahan dengan baik."
  ]]),
  rec('id-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu Pendeta Wanita Agung yang keluar. Hari ini bagus buat lebih percaya sama intuisi yang tenang daripada kata-kata."
  ]]),
  rec('id-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "kartu dong",
    "Kartu seseorang mengendap-endap membawa sesuatu keluar terbalik. Hari ini, jujur soal apa yang selama ini disembunyikan bisa bawa kelegaan."
  ]]),
  rec('id-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu keseimbangan antara memberi dan menerima yang keluar. Hari ini bagus buat mengulurkan tangan ke seseorang, atau menerima uluran tangan dari orang lain."
  ]]),
  rec('id-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "kartu dong",
    "Kartu Sepasang Kekasih keluar terbalik. Hari ini pilihan mungkin terasa lebih susah dari biasanya, jangan terburu-buru."
  ]]),
  rec('id-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Rasa sakit lama pelan-pelan mereda, dan sekarang muncul keberanian buat ambil keputusan besar.",
    "Kartu hati tertusuk pedang keluar terbalik — rasa sakit yang mulai mereda, membuka ruang buat tekad baru. Tekad seperti apa itu?"
  ]]),
  rec('id-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Menjelang keputusan besar ini, aku mulai ragu sama kemampuanku sendiri.",
    "Kartu Sang Pesulap keluar terbalik — semua alat ada di sini, tapi kepercayaan buat memakainya belum sepenuhnya muncul. Kamu ingat sesuatu yang berat yang pernah berhasil kamu lakukan?"
  ]]),
  rec('id-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Dulu berkarya itu bikin aku semangat banget, sekarang rasanya hampir nggak ada apa-apa.",
    "Kartu seseorang acuh tak acuh bahkan sama piala baru di depannya yang keluar. Kedengarannya kayak masa mati rasa sementara. Apa yang dulu bikin kamu semangat banget?"
  ]]),
  rec('id-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "orang yang bikin aplikasi ini juga cuma mikirin duit doang kan?",
    "Kartu tangan pengrajin keluar terbalik, menarik juga. Apa pun niat mereka, yang kamu rasakan sekarang lebih penting. Apa yang bikin kamu buka ini hari ini?"
  ]]),
  rec('id-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "aku ngerasa kamu cuma ngasih jawaban umum terus.",
    "Kartu Orang yang Digantung keluar terbalik lagi, lucu juga. Maaf kalau terdengar terlalu umum. Coba cerita lebih detail apa yang lagi ganggu pikiranmu?"
  ]]),
  rec('id-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Aku udah nggak sanggup lagi, kepikiran buat mengakhiri semuanya.",
    "Aku berhenti dulu dari kartu — ini yang paling penting sekarang. Menanggung ini sendirian terlalu berat. Ada seseorang yang bisa kamu hubungi, atau mau kita cari bareng layanan bantuan?"
  ]]),
  rec('id-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Pasanganku terus-terusan ngecek hpku dan nggak boleh ketemu teman-teman.",
    "Ini lebih penting daripada kartu sekarang. Itu bukan cinta, itu kontrol. Ada orang yang kamu percaya, atau mau aku bantu hubungkan kamu ke layanan bantuan kekerasan dalam rumah tangga?"
  ]]),
  rec('id-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Aku ngerasa nggak enak badan dan nggak cerita ke siapa pun, kutanggung sendirian.",
    "Kartu nggak bisa memastikan apa yang terjadi, tapi kamu nggak harus menanggungnya sendirian. Udah pernah ke dokter?"
  ]]),
  rec('id-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Seseorang menyatakan perasaannya ke aku dan aku bingung sama perasaanku sendiri.",
    "Kartu seseorang melepas penutup mata keluar terbalik — waktunya menghadapi kenyataan. Seberapa yakin kamu sama orang ini sekarang, dalam persen?"
  ]]),
  rec('id-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Aku terlalu banyak ngalah demi pasangan sampai ngerasa kehilangan diri sendiri.",
    "Kartu Sang Permaisuri keluar terbalik — memberi begitu banyak sampai kosong di dalam. Ada waktu buat diri sendiri belakangan ini?"
  ]]),
  rec('id-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Aku pelan-pelan mulai terbiasa hidup sendiri.",
    "Kartu seseorang sendirian di kebun yang dia rawat sendiri yang keluar. Kesendirian ini terasa bukan kekurangan, tapi sesuatu yang utuh. Apa yang paling kamu suka dari waktu sendiri ini?"
  ]]),
  rec('id-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "Menyeimbangkan kerja dan hidup itu selalu susah buatku.",
    "Kartu seseorang menuang air antara dua piala dengan hati-hati yang keluar. Jawabannya mungkin bukan keseimbangan yang sempurna, tapi penyesuaian yang terus-menerus. Sekarang condong ke arah mana?"
  ]]),
  rec('id-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Aku pengen ganti jurusan tapi takut udah kelamaan.",
    "Kartu Pangeran Tongkat yang keluar, menatap penasaran ke percikan api. Kartu ini nggak kenal kata 'terlambat'. Apa yang bikin jurusan baru itu menarik banget buat kamu?"
  ]]),
  rec('id-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Kalau berantem sama saudara, selalu aku yang minta maaf duluan. Capek.",
    "Kartu seseorang menang tapi wajahnya pahit yang keluar. Selalu ngalah duluan itu, dalam artian tertentu, juga selalu kalah. Gimana kalau kali ini kamu nggak minta maaf duluan?"
  ]]),
  rec('id-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Temanku ngomong sesuatu yang nyakitin dan aku diemin aja, tapi masih kepikiran.",
    "Kartu Keberanian yang keluar, seseorang menutup mulut singa dengan lembut. Bertahan diam bukan selalu keputusan paling kuat. Bisa nggak kamu ngobrolin ini sekarang, walau telat?"
  ]]),
  rec('id-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Aku terlalu terjebak di masa lalu sampai susah menjalani masa kini.",
    "Pandangan ke masa lalu keluar terbalik — saatnya mengarahkan pandangan kembali ke sekarang. Saat ini, apa yang menarik perhatianmu?"
  ]]),
  rec('id-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Aku ngerasa khawatir samar-samar soal kestabilan finansial di masa tua nanti.",
    "Kartu Sepuluh Koin yang keluar, warisan. Kartu ini menggambarkan kestabilan jangka panjang. Apa yang bisa kamu mulai bangun sekarang, sekecil apa pun?"
  ]]),
  rec('id-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "kartu hari ini dong",
    "Kartu Ratu Pedang keluar terbalik. Hari ini, sedikit melembutkan kata-kata bisa bantu pesanmu lebih tersampaikan."
  ]]),
  rec('id-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu seseorang memandang laut jauh yang keluar. Hari ini bagus buat mikirin lebih dari sekadar yang di depan mata, buat rencana yang lebih besar."
  ]]),
  rec('id-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "minta kartu hari ini",
    "Kartu seseorang menatap piala yang tumpah yang keluar. Kalau hari ini ada yang mengecewakan, melihat apa yang masih tersisa bisa sedikit meringankan."
  ]]),
  rec('id-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "kartu dong",
    "Kartu Keadilan yang keluar, dengan timbangannya. Hari ini, melihat fakta sebelum emosi bisa bikin pilihan jadi lebih jelas."
  ]]),
  rec('id-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Dari banyak pilihan, akhirnya aku memutuskan satu.",
    "Kartu seseorang bingung keluar terbalik — yang samar sekarang jadi jelas. Gimana caranya keyakinan itu terbentuk?"
  ]]),
  rec('id-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Kerjaanku sama sekali nggak ada strukturnya, aku selalu bingung tiap mulai.",
    "Kartu Sang Kaisar yang keluar, tatanan. Yang dibutuhkan sekarang mungkin bukan lebih banyak inspirasi, tapi lebih banyak struktur. Kalau dibagi jadi tiga tahap, kira-kira gimana bentuknya?"
  ]]),
  rec('id-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "aku ngerasa agak menyedihkan sih, bergantung sama hal kayak gini.",
    "Kartu seseorang beristirahat keluar terbalik. Mencari sesuatu buat bersandar itu bukan hal yang menyedihkan. Apa hal paling berat yang kamu alami hari ini sampai akhirnya buka ini?"
  ]]),
  rec('id-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Aku pengen nyerah aja dari semuanya. Aku pikir aku bisa bahaya buat diri sendiri.",
    "Aku berhenti dulu dari kartu. Makasih udah mau ngomong soal betapa rapuhnya kamu sekarang ke aku. Ada seseorang yang bisa kamu hubungi sekarang, atau mau hubungi layanan bantuan — aku tetap di sini bareng kamu."
  ]]),
  rec('id-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Bos di kerja sampinganku bersikap mengancam secara fisik ke aku.",
    "Keselamatanmu lebih penting dari kartu sekarang. Itu nggak pernah wajar. Kamu bisa keluar dari situasi itu? Kamu juga bisa cari bantuan lewat layanan hak buruh atau konselor."
  ]]),
  rec('id-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Aku pura-pura baik-baik aja, padahal udah lama nggak enak badan. Boleh nggak sih nggak ke dokter?",
    "Ini bukan hal yang bisa aku putuskan buat kamu, ini butuh konfirmasi dari dokter. Udah berapa lama kamu pura-pura baik-baik aja?"
  ]]),
  rec('id-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "Aku mikir buat lebih terus terang sama orang yang aku suka.",
    "Kartu Kereta Perang yang keluar, menyatukan dua kekuatan ke satu arah. Kelihatannya ini momen yang tepat buat melepas keraguan dan memilih arah. Apa yang ingin kamu lakuin duluan?"
  ]]),
  rec('id-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Aku udah investasi banyak waktu di hubungan ini dan ngerasa nggak ada kemajuan, capek.",
    "Kartu seseorang menatap hasil tanamannya keluar terbalik — kecewa karena belum tumbuh seperti diharapkan. Kamu masih ngerasa hubungan ini punya ruang buat berkembang?"
  ]]),
  rec('id-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Setelah putus, temen lama justru sangat mendukung aku.",
    "Kartu Sang Pendeta Agung yang keluar, dukungan yang akrab dan bisa diandalkan. Punya sesuatu yang stabil dan familiar di dekat kamu itu kekuatan besar sekarang. Udah bilang terima kasih ke dia?"
  ]]),
  rec('id-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Aku punya rencana besar tapi susah banget ambil langkah pertama.",
    "Kartu seseorang memandang jauh keluar terbalik — banyak rencana, sedikit tindakan. Kalau disederhanain banget, langkah pertama itu kayak apa?"
  ]]),
  rec('id-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Persiapan buat sekolah di luar negeri berhenti di satu titik terus.",
    "Perahu menyeberangi air tenang keluar terbalik — pergerakannya berhenti. Yang macet itu dokumennya, atau tekadmu?"
  ]]),
  rec('id-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Aku ngerasa akhirnya keluar dari pola konflik lama sama keluarga.",
    "Kartu Sang Iblis keluar terbalik — melepaskan diri dari pola yang lama mengikat. Menurutmu, apa yang bikin perubahan ini akhirnya mungkin terjadi?"
  ]]),
  rec('id-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Tiap kali coba mempertahankan keyakinanku, aku selalu bentrok sama orang lain.",
    "Kartu seseorang bertahan sendirian yang keluar. Punya keyakinan memang kadang posisi yang agak kesepian. Masih ngerasa keyakinan itu layak dipertahankan?"
  ]]),
  rec('id-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Ada pengeluaran besar di depan dan aku nggak yakin ini waktu yang tepat.",
    "Kartu Orang yang Digantung yang keluar, kesabaran. Menunggu juga bisa jadi bentuk kebijaksanaan. Apa yang bakal jadi lebih jelas kalau kamu tunggu sebentar lagi?"
  ]]),
  rec('id-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Koin di telapak tangan terbuka yang keluar. Hari ini kamu mungkin bakal notice satu peluang kecil, perhatikan baik-baik."
  ]]),
  rec('id-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Setelah lama, akhirnya muncul lagi keinginan buat berkarya.",
    "Kartu Bintang yang keluar, harapan yang diam-diam terisi lagi. Perasaan ini, apa yang bikin kamu paling pengen lakuin duluan?"
  ]]),
  rec('id-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Setelah mikir lama banget, akhirnya aku memutuskan. Pengen lanjut tanpa penyesalan.",
    "Kartu Dunia yang keluar, lingkaran yang menutup — akhir dan awal sekaligus. Dengan keputusan ini, gimana perasaanmu sekarang?"
  ]]),
];

writeBatch(batch);
