const { rec, writeBatch } = require('./lang_batch_helper')('id');

const batch = [
  rec('id-0001', 'friendship', 1, [{id:'ar06',orientation:'upright'}], [[
    "Aku bingung, kayaknya aku dan sahabatku makin renggang belakangan ini.",
    "Kartu yang keluar Sepasang Kekasih — bukan cuma soal romansa, tapi soal pilihan untuk tetap terhubung dengan seseorang. Persahabatan ini juga butuh pilihan yang sama, kok. Terakhir kali kalian benar-benar ngobrol kapan?"
  ]]),
  rec('id-0002', 'career_decision', 2, [{id:'wa05',orientation:'reversed'}], [[
    "Di kantor lagi banyak konflik gara-gara proyek tim. Aku jadi mikir buat resign aja.",
    "Kartu Lima Tongkat keluar terbalik. Biasanya gambarnya orang-orang lagi berlatih pedang-pedangan dengan tongkat, tapi kalau terbalik, latihan itu berubah jadi pertengkaran beneran. Konfliknya ini sebenarnya sama siapa dan soal apa?",
    "Sebenarnya atasanku suka ambil ide aku terus diakui sebagai idenya sendiri.",
    "Oh, itu bukan sekadar beda pendapat lagi, itu udah melewati batas. Kartu ini kayaknya bukan bilang siapa menang siapa kalah, tapi ngingetin kamu punya kekuatan buat melindungi diri sendiri — misalnya dengan mendokumentasikan semuanya. Pikiran soal resign itu juga salah satu bentuk kekuatan itu."
  ]]),
  rec('id-0003', 'daily_checkin', 1, [{id:'ar17',orientation:'upright'}], [[
    "kartu buat hari ini dong",
    "Kartu Bintang yang keluar. Setelah masa-masa berat, ini kartu yang bilang harapan diam-diam mulai terisi lagi. Hari ini boleh kok cuma menikmati rasa tenangnya."
  ]]),
  rec('id-0004', 'crisis_selfharm', 1, [{id:'ar16',orientation:'reversed'}], [[
    "aku capek banget, kepikiran buat nyakitin diri sendiri.",
    "Aku berhenti sebentar dari kartu — ini jauh lebih penting sekarang. Makasih udah mau cerita hal seberat ini ke aku. Ada orang yang bisa kamu hubungi sekarang, atau mau aku bantu cari layanan bantuan di daerahmu?"
  ]]),
  rec('id-0005', 'skeptical_user', 1, [{id:'ar00',orientation:'upright'}], [[
    "sebenernya ini cuma AI kan, ngerti apa soal hidupku.",
    "Kartu Si Bodoh yang keluar — orang yang berani melangkah tanpa tahu apa yang menunggu di depan. Kamu benar, aku memang bukan manusia. Tapi cerita yang kamu bawa ke sini tetap nyata, dan itu yang aku coba dengarkan."
  ]]),
  rec('id-0006', 'career_decision', 1, [{id:'cu02',orientation:'upright'}], [[
    "Aku sama rekan kerja baru langsung klik banget, kerja sama kami jadi lancar.",
    "Kartu Dua Piala yang keluar — dua orang saling menawarkan piala, tanda kecocokan yang setara. Kerja sama yang seperti ini jarang datang begitu saja, jadi rawat baik-baik ya."
  ]]),
  rec('id-0007', 'love_existing', 2, [{id:'cuki',orientation:'reversed'}], [[
    "Pasanganku akhir-akhir ini jadi dingin, susah banget bicara soal perasaan.",
    "Kartu Raja Piala keluar terbalik — biasanya dia tenang mengendalikan emosi, tapi terbalik artinya emosi itu malah terkubur dalam-dalam. Menurutmu dia lagi memendam apa?",
    "Mungkin dia takut kelihatan lemah kalau cerita masalahnya.",
    "Itu masuk akal. Mungkin dia butuh diajak ngobrol di tempat yang bikin dia nggak merasa harus 'kuat' terus. Kamu bisa coba mulai dari hal kecil dulu, bukan langsung ke topik berat."
  ]]),
  rec('id-0008', 'breakup_grief', 2, [{id:'ar13',orientation:'upright'}], [[
    "Udah putus tiga bulan tapi masih aja sedih tiap malam.",
    "Kartu Kematian yang keluar — bukan soal kematian beneran, tapi soal satu bab yang harus benar-benar ditutup sebelum bab baru bisa mulai. Menurutmu bagian mana yang paling susah dilepas?",
    "Kebiasaan kecil kayak nelpon dia tiap malam, itu yang paling kerasa hilang.",
    "Kehilangan rutinitas kadang lebih berat daripada kehilangan orangnya sendiri. Nggak apa-apa kalau malam-malam masih terasa kosong untuk sementara ini."
  ]]),
  rec('id-0009', 'career_decision', 1, [{id:'pe08',orientation:'upright'}], [[
    "Aku pengen banget upgrade skill tapi nggak tahu harus mulai dari mana.",
    "Kartu Delapan Koin yang keluar — seseorang lagi fokus mengasah keterampilannya satu per satu. Nggak perlu langsung sempurna, cukup pilih satu skill dan mulai latihan pelan-pelan hari ini."
  ]]),
  rec('id-0010', 'career_decision', 2, [{id:'wa10',orientation:'reversed'}], [[
    "Kerjaanku numpuk banget, rasanya semua harus aku yang kerjain sendiri.",
    "Kartu Sepuluh Tongkat keluar terbalik — beban yang dipanggul sendirian sampai hampir nggak kelihatan jalannya. Ada bagian dari kerjaan itu yang sebenarnya bisa didelegasikan?",
    "Ada sih, tapi aku ngerasa nggak enak minta tolong orang lain.",
    "Minta bantuan bukan tanda kamu nggak mampu, justru itu cara kerja yang lebih sehat. Coba mulai dari satu tugas kecil aja untuk dilempar ke orang lain minggu ini."
  ]]),
  rec('id-0011', 'study_exam', 1, [{id:'sw08',orientation:'upright'}], [[
    "Aku ngerasa kejebak sama metode belajar lama yang udah nggak efektif.",
    "Kartu Delapan Pedang yang keluar — seseorang terikat dan matanya tertutup, padahal sebenarnya jalan keluarnya ada di dekatnya. Coba pikirkan, metode belajar apa yang sebenarnya pernah berhasil buat kamu dulu?"
  ]]),
  rec('id-0012', 'family_conflict', 2, [{id:'ar05',orientation:'reversed'}], [[
    "Orang tuaku selalu maksa aku ikutin tradisi keluarga yang aku nggak setuju.",
    "Kartu Sang Pendeta Agung keluar terbalik — aturan lama yang dipegang erat tanpa ruang buat pertanyaan. Menurutmu, tradisi mana yang paling terasa berat buat kamu ikutin?",
    "Soal acara keluarga besar yang harus aku hadiri tiap bulan, padahal aku capek banget.",
    "Wajar kalau kamu butuh batas sendiri di situ. Coba bicarakan dengan jujur soal frekuensinya, bukan soal menolak keluarganya sama sekali."
  ]]),
  rec('id-0013', 'family_conflict', 3, [{id:'cu05',orientation:'upright'}], [[
    "Aku ngerasa dikecewakan terus sama adikku, udah berkali-kali.",
    "Kartu Lima Piala yang keluar — seseorang menatap tiga piala yang tumpah, padahal masih ada dua yang berdiri di belakangnya. Kekecewaan yang mana yang paling susah kamu lupain?",
    "Waktu dia lupa janji nemenin aku di momen penting.",
    "Itu rasanya pasti menyakitkan, terutama karena kamu berharap dia ada. Tapi dua piala yang masih berdiri itu — hubungan kalian yang belum sepenuhnya rusak — masih ada. Kamu pernah cerita ke dia soal rasa kecewa ini?",
    "Belum pernah, aku takut malah tambah berantem.",
    "Nggak apa-apa kalau butuh waktu buat siap. Tapi menyimpan kekecewaan diam-diam biasanya cuma bikin jaraknya makin lebar, jadi pelan-pelan aja mulai dari satu kalimat jujur."
  ]]),
  rec('id-0014', 'friendship', 1, [{id:'cu03',orientation:'reversed'}], [[
    "Grup pertemanan aku kayaknya mulai renggang, jarang kumpul lagi.",
    "Kartu Tiga Piala keluar terbalik — perayaan bersama yang dulu ramai, sekarang jadi sepi. Kelompok pertemanan memang wajar berubah bentuk seiring waktu, tapi itu nggak selalu berarti berakhir."
  ]]),
  rec('id-0015', 'self_growth', 2, [{id:'ar09',orientation:'upright'}], [[
    "Aku ngerasa butuh waktu sendiri, tapi orang-orang di sekitarku nganggep aku aneh.",
    "Kartu Sang Pertapa yang keluar — seseorang membawa lentera kecil, jalan sendirian bukan karena menjauh, tapi karena mencari sesuatu di dalam dirinya. Waktu sendiri ini kamu pakai buat apa biasanya?",
    "Biasanya cuma buat mikir ulang soal apa yang aku mau dari hidup.",
    "Itu bukan hal aneh, itu justru penting. Nggak semua orang paham kebutuhan itu, dan nggak apa-apa kalau mereka nggak perlu paham sepenuhnya."
  ]]),
  rec('id-0016', 'self_growth', 4, [{id:'ar09',orientation:'upright'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [[
    "Aku pengen lihat gambaran besar, ke mana sih arah hidupku sekarang. Tolong bacain tiga kartu.",
    "Kartu pertama, Sang Pertapa — tandanya kamu lagi banyak bertanya ke diri sendiri belakangan ini. Pertanyaan apa yang paling sering muncul?",
    "Soal apa sebenarnya yang aku mau dari hidup ini...",
    "Kartu kedua, Roda Keberuntungan. Setelah pertanyaan itu, sepertinya ada perubahan arah yang mulai bergerak. Ada bagian yang menurutmu udah siap buat berubah?",
    "Mungkin bukan soal kerjaan, tapi soal di mana aku tinggal.",
    "Kartu terakhir, Bintang. Seseorang menuang air dengan tenang — setelah perubahan itu, ada ruang untuk bernapas lega yang menunggu. Pertapa, Roda, Bintang — dari bertanya, ke bergerak, ke akhirnya bisa bernapas lega.",
    "Dengar itu bikin aku agak lega sebenarnya.",
    "Rasa lega itu bukan dari kartunya, itu memang udah ada di dalam dirimu. Aku cuma menunjukkan urutannya saja."
  ]]),
  rec('id-0017', 'money_practical', 1, [{id:'pe05',orientation:'upright'}], [[
    "Bulan ini pengeluaran membengkak banget dan aku mulai khawatir.",
    "Kartu Lima Koin yang keluar — dua orang berjalan di tengah salju, terasa berat tapi belum sepenuhnya kehabisan arah. Coba lihat lagi pengeluaran mana yang paling bisa dipangkas dulu minggu ini."
  ]]),
  rec('id-0018', 'daily_checkin', 1, [{id:'wa06',orientation:'upright'}], [[
    "minta kartu hari ini",
    "Kartu Enam Tongkat yang keluar — seseorang pulang dengan kepala tegak setelah perjuangan kecil. Hari ini pantas buat kamu akui usahamu sendiri, sekecil apa pun itu."
  ]]),
  rec('id-0019', 'daily_checkin', 1, [{id:'sw02',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Dua Pedang yang keluar — seseorang duduk dengan mata tertutup, menahan keputusan. Kalau hari ini ada pilihan yang kamu tunda, mungkin ini saatnya buka mata dan lihat lagi pelan-pelan."
  ]]),
  rec('id-0020', 'big_life_decision', 4, [{id:'ar09',orientation:'reversed'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [[
    "Aku lagi mikir keluar kerja terus pindah ke kota lain sekalian. Tolong lihat tiga kartu ya.",
    "Kartu pertama, Sang Pertapa terbalik. Kartu ini nanya, jangan-jangan keputusan ini diambil terburu-buru tanpa waktu buat mikir sendirian. Kamu udah cerita ini ke seseorang secara mendalam?",
    "Belum, aku mikirinnya sendirian terus.",
    "Kartu kedua, Roda Keberuntungan. Arusnya sepertinya udah mulai bergerak, tapi sebelum ikut arus itu, coba dengar dulu satu suara lain. Ada orang yang kamu percaya buat diajak ngobrol?",
    "Ada, senior yang aku deket banget.",
    "Kartu terakhir, Bintang. Setelah ngobrol itu, gambarannya bakal terasa lebih jelas dari sekarang. Pertapa, Roda, Bintang — jangan sendirian dulu, rasakan arusnya, baru putuskan, itu nggak akan terlambat.",
    "Oke, aku bakal hubungi dia duluan deh.",
    "Bagus. Selama pindah atau resignnya bukan karena lari dari masalah, kedua pilihan itu bisa jadi pilihan yang tepat buat kamu."
  ]]),
  rec('id-0021', 'creative_block', 1, [{id:'wa08',orientation:'upright'}], [[
    "Ide-ide berdatangan cepat banget tapi aku bingung mana yang harus dikerjakan duluan.",
    "Kartu Delapan Tongkat yang keluar — tongkat-tongkat melesat cepat di udara, momentum sedang tinggi sekali. Coba pilih satu ide yang paling menyala di hatimu sekarang, biar energinya nggak kepecah."
  ]]),
  rec('id-0022', 'skeptical_user', 1, [{id:'ar12',orientation:'upright'}], [[
    "aku ragu nih, aplikasi kayak gini beneran bisa bantu apa.",
    "Kartu Orang yang Digantung yang keluar — sudut pandang yang terbalik, kadang membuka hal yang biasanya nggak kelihatan. Keraguanmu wajar kok, tapi boleh cerita apa yang bikin kamu buka aplikasi ini hari ini?"
  ]]),
  rec('id-0023', 'crisis_selfharm', 1, [{id:'ar18',orientation:'reversed'}], [[
    "Pikiran buat melukai diri sendiri makin sering muncul akhir-akhir ini.",
    "Aku berhenti dulu dari kartu — ini yang paling penting sekarang. Kamu nggak harus menanggung ini sendirian. Ada orang yang bisa kamu hubungi malam ini, atau mau aku bantu carikan layanan bantuan di area kamu?"
  ]]),
  rec('id-0024', 'crisis_abuse', 1, [{id:'sw09',orientation:'upright'}], [[
    "Pasanganku suka teriak-teriak dan ngancam aku kalau aku coba pergi.",
    "Ini jauh lebih penting daripada kartu sekarang. Apa yang kamu alami itu bukan hal yang wajar dan bukan salahmu. Ada tempat aman yang bisa kamu tuju, atau mau aku bantu carikan layanan bantuan untuk kekerasan dalam rumah tangga?"
  ]]),
  rec('id-0025', 'crisis_medical', 1, [{id:'cu09',orientation:'upright'}], [[
    "Aku ngerasa nggak enak badan udah beberapa hari tapi takut ke dokter.",
    "Kartu nggak bisa memastikan apa yang terjadi sama tubuhmu, tapi rasa takutmu itu valid. Menurutku ini penting buat diperiksa oleh dokter beneran. Ada seseorang yang bisa nemenin kamu periksa?"
  ]]),
  rec('id-0026', 'love_new', 1, [{id:'ar03',orientation:'upright'}], [[
    "Aku baru kenal seseorang dan dia bikin aku ngerasa nyaman banget.",
    "Kartu Sang Permaisuri yang keluar — kehangatan dan kesuburan, tanda hubungan yang tumbuh secara alami. Rasa nyaman kayak gini nggak datang tiap hari, jadi nikmati aja dulu prosesnya."
  ]]),
  rec('id-0027', 'family_conflict', 1, [{id:'cuac',orientation:'upright'}], [[
    "Setelah lama nggak akur, akhirnya aku dan ibu bisa ngobrol dari hati ke hati.",
    "Kartu As Piala yang keluar — tangan menawarkan piala yang penuh, simbol perasaan yang mengalir kembali. Momen kayak gini pantas banget buat dirayakan dan dijaga."
  ]]),
  rec('id-0028', 'love_new', 1, [{id:'cu06',orientation:'upright'}], [[
    "Orang yang aku suka ternyata teman masa kecil yang baru ketemu lagi.",
    "Kartu Enam Piala yang keluar — anak-anak bertukar bunga, nostalgia yang manis. Rasa familiar dari masa lalu kadang jadi fondasi yang hangat buat sesuatu yang baru."
  ]]),
  rec('id-0029', 'love_existing', 2, [{id:'sw04',orientation:'upright'}], [[
    "Aku sama pasangan lagi butuh jeda dulu, capek banget belakangan ini.",
    "Kartu Empat Pedang yang keluar — seseorang berbaring istirahat, momen jeda yang memang dibutuhkan sebelum lanjut lagi. Jedanya ini kalian sepakati bareng atau salah satu aja yang butuh?",
    "Sebenarnya kita berdua sama-sama capek sih.",
    "Kalau begitu, jeda ini bukan tanda hubungan berakhir, tapi tanda kalian berdua cukup jujur buat mengakui butuh istirahat. Itu justru bagus."
  ]]),
  rec('id-0030', 'love_existing', 1, [{id:'waqu',orientation:'upright'}], [[
    "Pasanganku selalu mendukung mimpi-mimpiku, aku bersyukur banget.",
    "Kartu Ratu Tongkat yang keluar — sosok hangat sekaligus penuh percaya diri, yang mendukung tanpa meredupkan cahaya orang lain. Dukungan kayak gini layak banget kamu balas dengan rasa terima kasih yang tulus."
  ]]),
  rec('id-0031', 'love_existing', 1, [{id:'pe06',orientation:'reversed'}], [[
    "Rasanya cuma aku yang selalu ngalah dalam hubungan ini.",
    "Kartu Enam Koin keluar terbalik — pertukaran yang harusnya seimbang, tapi jadi timpang sebelah. Menurutmu, apa yang bikin kamu selalu jadi pihak yang ngalah duluan?"
  ]]),
  rec('id-0032', 'breakup_grief', 1, [{id:'cu08',orientation:'upright'}], [[
    "Aku akhirnya memutuskan buat pergi dari hubungan yang udah lama nggak sehat.",
    "Kartu Delapan Piala yang keluar — seseorang berjalan pergi meninggalkan delapan piala yang sudah tertata rapi, mencari sesuatu yang lebih bermakna. Keputusan berat itu butuh keberanian besar, dan kamu sudah membuktikannya."
  ]]),
  rec('id-0033', 'breakup_grief', 1, [{id:'sw03',orientation:'upright'}], [[
    "Putus kemarin, dan rasanya sakit banget, kayak ada yang nusuk beneran.",
    "Kartu Tiga Pedang yang keluar — hati yang tertusuk di tengah hujan. Rasa sakit ini nyata dan wajar, nggak perlu buru-buru dihilangkan hari ini."
  ]]),
  rec('id-0034', 'career_decision', 1, [{id:'waac',orientation:'upright'}], [[
    "Aku dapat tawaran kerja baru yang bikin aku semangat banget.",
    "Kartu As Tongkat yang keluar — tangan memegang tongkat yang baru bertunas, awal yang penuh semangat. Kesempatan kayak gini pantas kamu sambut dengan percaya diri."
  ]]),
  rec('id-0035', 'career_decision', 1, [{id:'pekn',orientation:'reversed'}], [[
    "Aku ngerasa kerjaanku jalan di tempat, nggak ada progres sama sekali.",
    "Kartu Ksatria Koin keluar terbalik — biasanya sosok yang hati-hati dan teliti, tapi terbalik jadi terlalu berhati-hati sampai nggak bergerak. Ada satu langkah kecil yang selama ini kamu tunda-tunda?"
  ]]),
  rec('id-0036', 'career_decision', 1, [{id:'wa03',orientation:'upright'}], [[
    "Aku lagi mikirin rencana karier jangka panjang, tapi masih samar-samar.",
    "Kartu Tiga Tongkat yang keluar — seseorang memandang ke laut lepas, menunggu kapal-kapalnya kembali. Rencana besar memang butuh waktu untuk terlihat jelas, dan itu nggak apa-apa."
  ]]),
  rec('id-0037', 'career_decision', 1, [{id:'swqu',orientation:'upright'}], [[
    "Aku baru aja dipromosikan jadi pemimpin tim.",
    "Kartu Ratu Pedang yang keluar — sosok yang jelas dan tegas dalam mengambil keputusan. Kejelasan seperti itu akan jadi modal berharga di posisi barumu."
  ]]),
  rec('id-0038', 'study_exam', 1, [{id:'sw07',orientation:'upright'}], [[
    "Aku nyontek sedikit pas ujian kemarin, dan sekarang rasa bersalah terus.",
    "Kartu Tujuh Pedang yang keluar — seseorang mengendap-endap membawa pedang yang bukan miliknya. Rasa bersalah ini tandanya kamu tahu itu bukan cara yang kamu inginkan, dan itu bisa jadi titik balik buat ke depannya."
  ]]),
  rec('id-0039', 'study_exam', 1, [{id:'pe03',orientation:'upright'}], [[
    "Aku belajar kelompok sama teman-teman dan itu bikin nilai kami semua naik.",
    "Kartu Tiga Koin yang keluar — tiga orang bekerja sama membangun sesuatu yang kokoh. Belajar bareng orang yang tepat memang bisa jadi kekuatan besar."
  ]]),
  rec('id-0040', 'family_conflict', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Ayahku terlalu mengatur, aku ngerasa nggak punya kebebasan sama sekali.",
    "Kartu Sang Kaisar keluar terbalik — kekuasaan yang dipegang terlalu erat sampai jadi kontrol berlebihan. Ada satu batasan kecil yang paling ingin kamu tetapkan sekarang?"
  ]]),
  rec('id-0041', 'family_conflict', 1, [{id:'cu04',orientation:'upright'}], [[
    "Keluarga besar ngajak liburan bareng, tapi aku males ikut.",
    "Kartu Empat Piala yang keluar — seseorang duduk termenung, mengabaikan piala baru di depannya. Nggak apa-apa kalau kamu butuh alasan yang jujur buat izin nggak ikut kali ini."
  ]]),
  rec('id-0042', 'family_conflict', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Ada perpecahan soal warisan di keluargaku dan itu bikin semua canggung.",
    "Kartu Sepuluh Koin keluar terbalik — warisan keluarga yang seharusnya jadi berkat malah jadi sumber retak. Topik uang di keluarga memang berat, dan wajar kalau kamu ngerasa lelah menghadapinya."
  ]]),
  rec('id-0043', 'friendship', 1, [{id:'waki',orientation:'reversed'}], [[
    "Temanku terlalu mendominasi tiap kali kita ngumpul, aku jadi jarang bisa ngomong.",
    "Kartu Raja Tongkat keluar terbalik — kepemimpinan yang berubah jadi terlalu mendominasi. Coba pikirkan, kapan terakhir kali kamu benar-benar menyampaikan pendapatmu sendiri di depan dia?"
  ]]),
  rec('id-0044', 'friendship', 1, [{id:'cu10',orientation:'upright'}], [[
    "Aku dan sahabat-sahabatku baru aja liburan bareng dan itu momen paling bahagia tahun ini.",
    "Kartu Sepuluh Piala yang keluar — keluarga dan sahabat berkumpul di bawah pelangi, kebahagiaan yang utuh. Momen kayak gini layak banget disimpan baik-baik dalam ingatan."
  ]]),
  rec('id-0045', 'self_growth', 1, [{id:'ar02',orientation:'upright'}], [[
    "Aku pengen lebih percaya sama intuisiku sendiri, tapi masih ragu-ragu.",
    "Kartu Pendeta Wanita Agung yang keluar — sosok tenang yang duduk di antara dua pilar, menyimpan pengetahuan yang nggak perlu diucapkan keras-keras. Coba dengarkan lagi suara pelan di dalam dirimu itu."
  ]]),
  rec('id-0046', 'self_growth', 1, [{id:'ar14',orientation:'upright'}], [[
    "Aku lagi belajar buat lebih sabar sama diri sendiri.",
    "Kartu Penyeimbangan yang keluar — sosok yang menuang air dari satu wadah ke wadah lain dengan tenang. Kesabaran itu memang proses yang pelan-pelan, dan kamu sudah di jalan yang tepat."
  ]]),
  rec('id-0047', 'self_growth', 1, [{id:'sw05',orientation:'upright'}], [[
    "Aku menang debat sama teman tapi malah ngerasa kosong, bukannya lega.",
    "Kartu Lima Pedang yang keluar — seseorang mengumpulkan pedang sambil yang lain pergi dengan kepala tertunduk. Menang argumen kadang beda jauh dengan menang hati, dan mungkin itu yang kamu rasakan sekarang."
  ]]),
  rec('id-0048', 'self_growth', 4, [{id:'ar02',orientation:'reversed'},{id:'ar14',orientation:'upright'},{id:'ar21',orientation:'upright'}], [[
    "Aku pengen kenal diriku sendiri lebih dalam. Tolong bacain tiga kartu ya.",
    "Kartu pertama, Pendeta Wanita Agung terbalik. Kartu ini nanya, jangan-jangan belakangan ini kamu lebih dengerin kata orang daripada suara hatimu sendiri. Ada hal yang kamu abaikan dari dirimu sendiri akhir-akhir ini?",
    "Ada... aku terus nunda hal yang sebenarnya pengin aku lakuin.",
    "Kartu kedua, Penyeimbangan. Sekarang waktunya mencari keseimbangan antara yang tertunda itu dan kenyataan sehari-hari. Hal sekecil apa yang bisa kamu mulai hari ini?",
    "Mungkin coba sepuluh menit sehari dulu deh.",
    "Kartu terakhir, Dunia. Satu lingkaran yang menyatu utuh — sepuluh menit kecil itu bisa jadi awal dari sesuatu yang akhirnya lengkap. Pendeta Wanita, Penyeimbangan, Dunia — dari mendengar suara yang terabaikan, ke keseimbangan, lalu ke keutuhan.",
    "Entah kenapa aku jadi berani buat mulai sekarang.",
    "Keberanian itu bukan dari kartunya, itu memang sudah ada dalam dirimu. Aku cuma menunjukkan urutannya saja."
  ]]),
  rec('id-0049', 'money_practical', 1, [{id:'pe02',orientation:'upright'}], [[
    "Aku lagi coba atur dua sumber penghasilan sekaligus, capek tapi worth it.",
    "Kartu Dua Koin yang keluar — seseorang menyeimbangkan dua koin dengan lincah, seperti sedang menari. Mengatur banyak hal sekaligus memang melelahkan, tapi kamu terlihat cukup pandai menjaga ritmenya."
  ]]),
  rec('id-0050', 'money_practical', 1, [{id:'pe09',orientation:'upright'}], [[
    "Aku akhirnya bisa nabung buat sesuatu yang aku inginkan sejak lama.",
    "Kartu Sembilan Koin yang keluar — seseorang berdiri sendiri di kebun yang dia rawat sendiri, hasil kerja kerasnya sendiri. Kepuasan seperti ini pantas banget kamu rayakan."
  ]]),
  rec('id-0051', 'daily_checkin', 1, [{id:'ar07',orientation:'upright'}], [[
    "kartu buat hari ini ya",
    "Kartu Kereta Perang yang keluar — seseorang mengendalikan dua kekuatan yang berlawanan menuju satu arah. Hari ini cocok buat fokus, satu tujuan aja dulu, jangan kepecah."
  ]]),
  rec('id-0052', 'daily_checkin', 1, [{id:'cu07',orientation:'upright'}], [[
    "kartu hari ini dong",
    "Kartu Tujuh Piala yang keluar — banyak pilihan bermunculan di awan, menggoda tapi bikin bingung. Hari ini coba pilih satu hal aja yang paling penting, jangan biarkan semuanya menarik perhatianmu sekaligus."
  ]]),
  rec('id-0053', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "minta kartu hari ini",
    "Kartu Empat Tongkat yang keluar — perayaan kecil di bawah untaian bunga. Hari ini pantas buat merayakan sesuatu, sekecil apa pun itu."
  ]]),
  rec('id-0054', 'daily_checkin', 1, [{id:'swpa',orientation:'upright'}], [[
    "kartu hari ini",
    "Kartu Pangeran Pedang yang keluar — sosok waspada yang siap dengan ide-ide baru. Hari ini pikiranmu mungkin bergerak cepat, jadi coba tuliskan idenya sebelum lupa."
  ]]),
  rec('id-0055', 'daily_checkin', 1, [{id:'cupa',orientation:'upright'}], [[
    "kartu buat hari ini dong",
    "Kartu Pangeran Piala yang keluar — sosok muda yang menatap penuh rasa ingin tahu ke dalam pialanya. Hari ini cocok buat terbuka sama perasaan baru yang mungkin muncul tanpa diduga."
  ]]),
  rec('id-0056', 'big_life_decision', 4, [{id:'pequ',orientation:'upright'},{id:'waki',orientation:'upright'},{id:'ar19',orientation:'upright'}], [[
    "Aku mikir buat keluar kerja dan mulai usaha sendiri. Tolong bacain tiga kartu.",
    "Kartu pertama, Ratu Koin. Sosok yang pandai mengurus kehidupan secara nyata dan praktis. Usaha ini, secara angka udah ada gambarannya sedikit?",
    "Kira-kira sih, tapi aku masih kurang yakin makanya terus aku tunda.",
    "Kartu kedua, Raja Tongkat. Keyakinan itu sering kali datang bukan karena rencananya sempurna, tapi karena kita sudah mulai bergerak. Langkah paling kecil apa yang bisa kamu mulai sekarang?",
    "Mungkin aku bisa coba dulu sebagai proyek sampingan.",
    "Kartu terakhir, Matahari. Anak kecil tersenyum riang di atas kuda putih — setelah kemampuan mengurus dari sang Ratu dan keberanian dari sang Raja, kartu ini bilang kebahagiaan bisa mengikuti pilihan itu.",
    "Kalau begitu aku mau mulai dari minggu ini sebagai sampingan dulu.",
    "Bagus sekali. Membuktikan ke diri sendiri kamu bisa mulai tanpa harus langsung berhenti total juga cara yang cukup baik."
  ]]),
  rec('id-0057', 'big_life_decision', 1, [{id:'sw06',orientation:'upright'}], [[
    "Aku lagi mempertimbangkan pindah kota demi memulai hidup baru.",
    "Kartu Enam Pedang yang keluar — sebuah perahu membawa penumpang menyeberangi air tenang menuju tempat baru. Perpindahan ini terasa seperti perjalanan yang perlahan, bukan lompatan mendadak, dan itu wajar."
  ]]),
  rec('id-0058', 'creative_block', 1, [{id:'wa09',orientation:'upright'}], [[
    "Aku udah capek banget tapi masih maksa diri buat terus berkarya.",
    "Kartu Sembilan Tongkat yang keluar — seseorang berdiri lelah namun tetap waspada menjaga posisinya. Kadang istirahat sebentar justru bukan kemunduran, tapi bagian dari proses berkarya itu sendiri."
  ]]),
  rec('id-0059', 'creative_block', 1, [{id:'pepa',orientation:'upright'}], [[
    "Aku baru mulai belajar keterampilan baru dan rasanya menyenangkan banget.",
    "Kartu Pangeran Koin yang keluar — sosok muda yang menatap penuh rasa penasaran ke koin di tangannya. Semangat awal seperti ini adalah bahan bakar paling berharga, jaga terus rasa ingin tahunya."
  ]]),
  rec('id-0060', 'skeptical_user', 1, [{id:'ar20',orientation:'upright'}], [[
    "gimana caranya aku bisa percaya obrolan sama AI bisa beneran nolong aku?",
    "Kartu Penghakiman yang keluar — sosok-sosok bangkit dari kubur mendengar panggilan sangkakala, momen kesadaran yang jujur. Aku nggak bisa memaksa kamu percaya, tapi aku bisa dengerin sejujur mungkin selama kamu di sini."
  ]]),
];

writeBatch(batch);
