import type { Dict } from "../lib/i18n";

const id: Dict = {
  code: "id",
  name: "Bahasa Indonesia",

  nav: {
    tools: "Alat",
    devices: "Perangkat",
    about: "Tentang",
    faq: "FAQ",
    cta: "Unduh",
    menu: "Menu",
    close: "Tutup",
  },

  home: {
    badge: "Simpel • Cepat • Tanpa instal",
    h1a: "Downloader",
    h1b: "Video TikTok",
    subtitle:
      "Unduh atau simpan opsi yang tersedia dari video TikTok publik langsung dari browser Anda.",
    formatsTitle: "Semua yang bisa SFY simpan untuk Anda",
    formatsSub: "Satu tautan masuk, beberapa opsi bersih keluar. SFY hanya menampilkan yang benar-benar tersedia.",
    formats: [
      { title: "MP4 — Kualitas terbaik", desc: "Rendisi video terbersih yang tersedia, hingga 1080p, siap masuk galeri Anda.", tag: "Video" },
      { title: "Audio MP3", desc: "Ekstrak suaranya: musik, voice-over, atau audio viral dalam file ringan.", tag: "Audio" },
      { title: "Foto & carousel", desc: "Simpan setiap slide postingan foto TikTok sebagai gambar JPG.", tag: "Gambar" },
      { title: "Tanpa watermark", desc: "Jika sumbernya memungkinkan, dapatkan video tanpa logo mengambang.", tag: "Bersih" },
    ],
    whyTitle: "Kenapa orang kembali ke SFY",
    whySub: "Tanpa akun. Tanpa aplikasi. Tanpa jebakan. Cukup tautan dan hasil.",
    benefits: [
      { title: "Gratis & tanpa daftar", desc: "SFY gratis dan tidak akan meminta Anda membuat akun, memberikan email, atau menginstal apa pun. Tempel tautan, dapatkan file." },
      { title: "Siap dalam hitungan detik", desc: "Analisis biasanya kurang dari lima detik, bahkan di koneksi mobile biasa." },
      { title: "Jalan di semua perangkat", desc: "iPhone, Android, Windows, Mac, atau Linux — selama ada browser modern, SFY berjalan sempurna." },
      { title: "Privasi by design", desc: "Tautan diproses untuk melayani permintaan Anda, bukan disimpan untuk membuat profil. Tanpa riwayat, tanpa pelacakan." },
    ],
    faqTitle: "Pertanyaan yang sering diajukan",
    faqSub: "Jawaban singkat dan jujur.",
    faq: [
      { q: "Apakah SFY gratis?", a: "Ya. Fitur inti dapat digunakan gratis. Batas wajar mungkin diterapkan agar layanan tetap cepat untuk semua orang." },
      { q: "Apakah saya perlu menginstal aplikasi?", a: "Tidak. SFY berjalan sepenuhnya di browser — tidak ada yang perlu diunduh atau diperbarui." },
      { q: "Bisakah SFY dipakai di HP?", a: "Bisa. SFY dirancang mobile-first: alat, hasil, dan unduhan berfungsi di browser iPhone dan Android." },
      { q: "Kenapa video saya tidak berfungsi?", a: "Tautannya mungkin tidak valid, videonya privat, terhapus, diblokir wilayah, atau formatnya tidak didukung. Periksa tautan lalu coba lagi." },
      { q: "Apakah SFY menyimpan video saya?", a: "Tidak. SFY menghindari penyimpanan tautan atau konten Anda lebih dari yang diperlukan." },
      { q: "Apakah SFY milik TikTok?", a: "Tidak. SFY — Save For You adalah produk independen, tidak berafiliasi dengan TikTok." },
      { q: "Bisakah saya menyimpan konten apa saja?", a: "Hanya konten yang boleh Anda simpan atau gunakan ulang. Hormati hak kreator." },
    ],
    ctaTitle: "Satu tautan. Satu simpanan. Selesai.",
    ctaSub: "Video Anda, kapan pun Anda mau.",
    ctaBtn: "Simpan video sekarang",
    otherTools: "Jelajahi alat SFY lainnya",
    otherToolsSub: "Setiap alat untuk satu kebutuhan spesifik — pilih milik Anda.",
  },

  box: {
    placeholder: "https://www.tiktok.com/@pengguna/video/...",
    cta: "Unduh",
    paste: "Tempel",
    pasteHint: "Clipboard tidak tersedia — ketuk kolom lalu gunakan Ctrl+V atau tekan lama “Tempel”.",
    analyzing: "Menganalisis video…",
    fetching: "Mengambil opsi yang tersedia…",
    errEmpty: "Tempel tautan TikTok terlebih dahulu.",
    errInvalid: "Tautan TikTok ini sepertinya tidak valid.",
    errInaccessible: "Kami tidak dapat mengakses konten ini. Pastikan kontennya publik dan masih tersedia.",
    errGeneral: "Terjadi kesalahan. Silakan coba lagi.",
    errRate: "Terlalu banyak permintaan dalam waktu singkat. Coba lagi sebentar lagi.",
    readyVideo: "Video Anda siap",
    readyAudio: "Audio Anda siap",
    readyPhotos: "Foto Anda siap",
    readyStory: "Story siap",
    formatsLabel: "Opsi tersedia",
    download: "Unduh",
    newVideo: "Unduh video lain",
    demoPill: "Demo",
    demoNote: "Antarmuka demonstrasi: metadata berasal dari oEmbed publik TikTok jika terjangkau; opsi unduhan yang ditampilkan bersifat simulasi sampai backend SFY tersambung.",
    demoToast: "Mode demo — sambungkan backend SFY untuk mengaktifkan unduhan asli.",
    demoTitle: "Video contoh (mode demo)",
    demoAuthor: "@contoh.kreator",
    bestQuality: "Kualitas terbaik",
    mp4hd: "MP4 — HD",
    mp4std: "MP4 — Standar",
    mp3: "Audio — MP3",
    photos: "Foto — JPG",
    story: "Story — MP4",
    noWatermark: "Tanpa watermark",
  },

  trust: ["Tanpa daftar", "Ramah mobile", "Cepat"],

  how: {
    title: "Cara kerja SFY",
    steps: [
      { title: "Salin tautannya", desc: "Di TikTok, ketuk Bagikan lalu “Salin tautan” pada video publik." },
      { title: "Tempel di SFY", desc: "Masukkan tautan ke kolom — tombol Tempel melakukannya untuk Anda." },
      { title: "Pilih format", desc: "Unduh salah satu opsi yang tersedia." },
    ],
  },

  faq: { title: "FAQ", sub: "Jawaban cepat untuk alat ini." },

  related: { title: "Lanjutkan dengan alat SFY lain", sub: "Satu tautan sering menghasilkan beberapa format." },

  tools: {
    "tiktok-video-downloader": { name: "Downloader Video TikTok", desc: "Simpan video TikTok publik sebagai MP4." },
    "tiktok-mp3": { name: "TikTok MP3", desc: "Ekstrak audio dari TikTok." },
    "tiktok-photo-downloader": { name: "Downloader Foto TikTok", desc: "Simpan slide carousel sebagai JPG." },
    "tiktok-story-downloader": { name: "Downloader Story TikTok", desc: "Simpan story publik sebelum habis." },
  },

  devices: {
    "download-tiktok-iphone": { name: "TikTok di iPhone", desc: "Ke Files, lalu Photos." },
    "download-tiktok-android": { name: "TikTok di Android", desc: "Langsung ke folder Downloads." },
    "download-tiktok-pc": { name: "TikTok di PC", desc: "Windows & Mac, browser apa pun." },
  },

  footer: {
    tagline: "Video Anda. Kapan pun Anda mau.",
    colSfy: "SFY",
    colTools: "Alat",
    colDevices: "Perangkat",
    colLegal: "Legal",
    colLangs: "Bahasa",
    home: "Beranda",
    about: "Tentang",
    contact: "Kontak",
    privacy: "Privasi",
    terms: "Ketentuan",
    rights: "Hak cipta dilindungi.",
    disclaimer: "SFY — Save For You adalah layanan independen, tidak berafiliasi dengan atau didukung oleh TikTok. Simpan hanya konten yang berhak Anda simpan.",
  },

  notFound: { title: "Halaman tidak ditemukan", desc: "Halaman ini tidak ada — tapi simpanan berikutnya hanya sejauh satu tautan.", btn: "Kembali ke SFY" },

  pages: {
    "tiktok-video-downloader": {
      seoTitle: "Downloader Video TikTok — Unduh Video TikTok Online | SFY",
      metaDesc: "Unduh video TikTok publik dalam MP4, dengan atau tanpa watermark jika tersedia. Gratis, tanpa daftar, di iPhone, Android, dan PC.",
      h1: "Downloader Video TikTok",
      intro: "Tempel tautan TikTok publik — vm.tiktok.com, vt.tiktok.com, atau tautan lengkap — dan dapatkan opsi video yang tersedia.",
      toolMode: "video",
      sections: [
        {
          title: "Tautan TikTok apa yang diterima SFY?",
          body: [
            "SFY memahami tautan yang dibuat aplikasi melalui “Bagikan → Salin tautan”: tautan pendek vm.tiktok.com dan vt.tiktok.com, serta URL lengkap www.tiktok.com/@pengguna/video/…",
            "Videonya harus publik. Akun privat, video khusus teman, klip terhapus, atau konten yang diblokir wilayah tidak dapat diproses — SFY akan memberitahu dengan jelas.",
          ],
        },
        {
          title: "Kualitas dan watermark",
          body: [
            "SFY menampilkan rendisi yang benar-benar ada: kualitas terbaik (hingga 1080p jika sumbernya ada), MP4 HD, dan MP4 standar yang lebih ringan. Jika tidak ada, opsi tidak ditampilkan.",
            "Opsi tanpa watermark ditawarkan jika sumber memungkinkan secara teknis. Tidak pernah dijamin: tergantung videonya sendiri.",
          ],
        },
      ],
      faq: [
        { q: "Apakah SFY menghapus watermark TikTok?", a: "Jika sumber memungkinkan, SFY menawarkan rendisi tanpa watermark sebagai “Kualitas terbaik”. Jika tidak mungkin, hanya opsi standar yang tampil." },
        { q: "Kenapa opsinya cuma dua atau tiga?", a: "Karena hanya itu rendisi yang ada untuk video tersebut. SFY hanya menampilkan yang benar-benar tersedia." },
        { q: "Bisakah mengunduh dari akun privat?", a: "Tidak. SFY hanya bekerja dengan konten publik dan tidak pernah menembus pengaturan privasi atau proteksi." },
        { q: "Ada batasnya?", a: "Batas penggunaan wajar berlaku (beberapa analisis per menit) agar layanan tetap cepat." },
      ],
    },

    "tiktok-mp3": {
      seoTitle: "TikTok ke MP3 — Ekstrak Audio TikTok Online | SFY",
      metaDesc: "Ubah TikTok publik menjadi MP3: ekstrak suara, lagu, dan voice-over dalam hitungan detik. Gratis, tanpa aplikasi, di browser.",
      h1: "Konverter TikTok ke MP3",
      intro: "Hanya butuh suaranya? Tempel tautan TikTok dan ekstrak trek audio sebagai file MP3 yang ringan.",
      toolMode: "mp3",
      sections: [
        {
          title: "Kapan ekstraksi audio pilihan tepat",
          body: [
            "Kebanyakan audio TikTok pendek: hook, punchline, remix. Mengunduh video utuh membuang penyimpanan — MP3 hanya menyimpan suaranya.",
            "Ekstraksi menargetkan trek audio video publik. Jika video tidak punya audio terpisah, SFY memberitahu alih-alih membuat file kosong.",
          ],
        },
        {
          title: "Kualitas, bitrate, dan file",
          body: ["SFY menghasilkan MP3 standar (sekitar 128 kbps) yang bisa diputar di mana saja: HP, mobil, editor video, atau pembuat nada dering."],
        },
      ],
      faq: [
        { q: "Apakah MP3-nya suara asli?", a: "Itu trek audio dari video publik yang Anda tautkan, dikonversi ke MP3. Kualitas mengikuti sumbernya." },
        { q: "Bisa ekstraksi dari TikTok mana saja?", a: "Dari TikTok publik mana pun yang ada audionya. Video privat atau terhapus tidak bisa diproses." },
        { q: "Boleh pakai audionya di konten saya?", a: "Hanya jika Anda punya haknya. Banyak suara berhak cipta — periksa sebelum memakai ulang." },
        { q: "Apakah dapat videonya juga?", a: "Alat ini fokus pada audio. Gunakan Downloader Video TikTok jika ingin MP4 juga." },
      ],
    },

    "tiktok-photo-downloader": {
      seoTitle: "Downloader Foto TikTok — Simpan Slide sebagai JPG | SFY",
      metaDesc: "Unduh foto dan slide carousel dari postingan TikTok publik sebagai gambar JPG. Gratis, cepat, tanpa watermark tambahan.",
      h1: "Downloader Foto TikTok",
      intro: "Postingan foto dan carousel TikTok bisa disimpan slide per slide. Tempel tautannya dan dapatkan gambar sebagai file JPG terpisah.",
      toolMode: "photo",
      sections: [
        {
          title: "Mode foto vs. mode carousel",
          body: [
            "Sejak mode foto hadir, banyak postingan berupa slideshow, bukan video. SFY mendeteksi format dari tautan: satu gambar, atau semua slide carousel, tersimpan berurutan.",
            "Jika tautan mengarah ke video sungguhan, SFY menyarankan pindah ke Downloader Video alih-alih gagal.",
          ],
        },
        {
          title: "Yang Anda dapatkan",
          body: ["Setiap slide dikirim sebagai JPG dengan resolusi yang dipublikasikan kreator. Tanpa upscale, tanpa watermark tambahan dari SFY."],
        },
      ],
      faq: [
        { q: "Bisa untuk carousel geser?", a: "Bisa — setiap slide carousel publik dapat disimpan, berurutan, sebagai file JPG terpisah." },
        { q: "Berapa resolusi fotonya?", a: "Sesuai yang dipublikasikan di TikTok. SFY tidak memperbesar atau mengubah gambar." },
        { q: "Kenapa postingan foto saya terbaca sebagai video?", a: "Beberapa postingan mencampur format. Gunakan Downloader Video untuk tautan yang sama." },
        { q: "Apakah gambarnya ber-watermark?", a: "SFY tidak menambahkan watermark. Anda mendapat persis seperti isi sumbernya." },
      ],
    },

    "tiktok-story-downloader": {
      seoTitle: "Downloader Story TikTok — Simpan Story Publik | SFY",
      metaDesc: "Simpan story TikTok publik sebelum hilang setelah 24 jam. Gratis dan instan, langsung di browser Anda.",
      h1: "Downloader Story TikTok",
      intro: "Story hilang setelah 24 jam. Saat story publik terjangkau secara teknis, SFY membantu Anda menyimpannya sebelum lenyap.",
      toolMode: "story",
      sections: [
        {
          title: "Aturan 24 jam",
          body: ["Story TikTok memang dirancang sementara: setelah sehari, otomatis terhapus. Jika ingin menyimpannya, lakukan cepat — tautan berhenti berfungsi saat story kedaluwarsa."],
        },
        {
          title: "Yang bisa dan tidak bisa dilakukan SFY",
          body: ["SFY dapat menyimpan story publik saat platform menyediakannya. Tidak pernah mengakses story privat, tidak menembus pengaturan visibilitas, dan memberitahu dengan jelas jika story sudah tidak ada."],
        },
      ],
      faq: [
        { q: "Bisa simpan story siapa saja?", a: "Hanya story publik yang terjangkau secara teknis. Story privat atau dibatasi selalu di luar jangkauan." },
        { q: "Tautannya tidak berfungsi lagi. Kenapa?", a: "Story kedaluwarsa setelah 24 jam. Setelah itu, kontennya hilang dari TikTok sendiri." },
        { q: "Apakah kreator tahu saya menyimpan story-nya?", a: "Tidak. Menyimpan tidak mengirim notifikasi apa pun." },
        { q: "Format apa hasil simpanannya?", a: "Sebagai video MP4, dengan kualitas saat story dipublikasikan." },
      ],
    },

    "download-tiktok-iphone": {
      seoTitle: "Unduh Video TikTok di iPhone (iOS) — Tanpa Aplikasi | SFY",
      metaDesc: "Cara menyimpan video TikTok di iPhone dan iPad dengan Safari: langkah demi langkah, lokasi file, dan cara memindahkannya ke Photos.",
      h1: "Unduh Video TikTok di iPhone",
      intro: "Tanpa aplikasi, tanpa shortcut: di iOS, SFY berjalan langsung di Safari dan menyimpan video ke aplikasi Files.",
      toolMode: "video",
      steps: [
        { title: "Salin tautan di TikTok", desc: "Bagikan → Salin tautan pada video publik." },
        { title: "Tempel di SFY lewat Safari", desc: "Buka sfy.app di Safari, tempel, lalu Unduh." },
        { title: "Cari di Files → Downloads", desc: "Lalu Bagikan → Simpan Video untuk menambahkannya ke Photos." },
      ],
      sections: [
        {
          title: "Ke mana file-nya di iOS?",
          body: [
            "Sejak iOS 13, unduhan Safari masuk ke aplikasi Files — bukan langsung ke camera roll. Buka Files → Browse → Downloads: MP4 Anda ada di sana.",
            "Untuk memindahkannya ke Photos: tekan lama file-nya, pilih Bagikan, lalu “Simpan Video”. File muncul di galeri seperti video biasa.",
          ],
        },
        {
          title: "Jebakan umum di iPhone",
          body: [
            "Jika mengetuk “Unduh” justru membuka video di tab, tekan dan tahan tombolnya lalu pilih “Unduh File Tertaut”.",
            "SFY butuh Safari (atau Chrome/Firefox di iOS) — tidak bekerja di browser internal TikTok. Salin tautan dan buka di Safari.",
          ],
          list: [
            "iOS 13 atau lebih baru diperlukan untuk unduhan Safari",
            "Files → Downloads adalah folder tujuan default",
            "Bagikan → Simpan Video untuk masuk aplikasi Photos",
          ],
        },
      ],
      faq: [
        { q: "Kenapa videonya tidak ada di Photos?", a: "iOS menyimpan unduhan browser ke Files dulu. Buka Files → Downloads, lalu Bagikan → Simpan Video." },
        { q: "Perlu shortcut atau aplikasi?", a: "Tidak. SFY berjalan di Safari; tidak ada yang perlu diinstal di iPhone atau iPad Anda." },
        { q: "Terbuka di browser internal TikTok!", a: "Browser itu memblokir unduhan. Pilih “Buka di Safari” atau salin tautan dan tempel sendiri di Safari." },
        { q: "Bisa juga di iPad?", a: "Bisa, caranya persis sama — iPadOS memakai alur Files dan Photos yang sama." },
      ],
    },

    "download-tiktok-android": {
      seoTitle: "Unduh Video TikTok di Android — Tanpa Aplikasi | SFY",
      metaDesc: "Simpan video TikTok di ponsel Android mana pun dengan Chrome: lokasi file, akses galeri, dan solusi masalah umum.",
      h1: "Unduh Video TikTok di Android",
      intro: "Di Android, SFY berjalan di Chrome dan menaruh MP4 langsung di folder Downloads — terlihat di galeri.",
      toolMode: "video",
      steps: [
        { title: "Salin tautan di TikTok", desc: "Bagikan → Salin tautan pada video publik." },
        { title: "Tempel di SFY lewat Chrome", desc: "Buka sfy.app di Chrome, tempel, lalu Unduh." },
        { title: "Buka folder Downloads", desc: "Files → Downloads, atau notifikasi yang muncul." },
      ],
      sections: [
        {
          title: "Ke mana file-nya di Android?",
          body: [
            "Chrome menyimpan ke folder Downloads di penyimpanan internal. Sebagian besar galeri (Google Photos, Galeri Samsung) mendeteksinya dalam hitungan detik.",
            "Anda juga bisa membuka aplikasi Files → Downloads, atau mengetuk notifikasi unduhan yang ditampilkan Chrome.",
          ],
        },
        {
          title: "Jika tidak terjadi apa-apa",
          body: [
            "Browser dalam aplikasi (yang terbuka saat mengetuk tautan di dalam TikTok) bisa bersifat membatasi. Pilih “Buka di Chrome” atau salin tautan dan tempel langsung di Chrome.",
            "Di beberapa merek (Xiaomi, Huawei), pastikan Chrome punya izin penyimpanan: Pengaturan → Aplikasi → Chrome → Izin.",
          ],
          list: [
            "Folder Downloads = tujuan default",
            "Galeri mendeteksi MP4 baru secara otomatis",
            "Utamakan Chrome daripada browser bawaan aplikasi",
          ],
        },
      ],
      faq: [
        { q: "Di mana video yang saya unduh?", a: "Di Files → Downloads. Kebanyakan galeri juga menampilkannya di album “Downloads” atau “Video”." },
        { q: "Perlu menginstal sesuatu?", a: "Tidak. Chrome (atau Firefox) cukup — SFY berjalan sepenuhnya di browser." },
        { q: "Unduhan tidak mulai. Kenapa?", a: "Biasanya karena browser internal TikTok. Buka tautan di Chrome dan periksa izin penyimpanan Chrome." },
        { q: "Bisa dijadikan nada dering atau wallpaper?", a: "Bisa — begitu MP4 atau MP3 ada di penyimpanan, Android memperlakukannya seperti file media biasa." },
      ],
    },

    "download-tiktok-pc": {
      seoTitle: "Unduh Video TikTok di PC (Windows & Mac) | SFY",
      metaDesc: "Simpan video TikTok di Windows dan Mac dalam dua klik: tempel tautan, pilih format, temukan file-nya.",
      h1: "Unduh Video TikTok di PC",
      intro: "Di Windows, Mac, atau Linux, SFY berjalan di browser modern mana pun dan menyimpan file ke folder Downloads biasa Anda.",
      toolMode: "video",
      steps: [
        { title: "Salin tautannya", desc: "Dari aplikasi TikTok atau tiktok.com: Bagikan → Salin tautan." },
        { title: "Tempel di SFY", desc: "Browser apa pun: Chrome, Edge, Safari, Firefox…" },
        { title: "Pilih format", desc: "File masuk ke folder Downloads Anda." },
      ],
      sections: [
        {
          title: "Alur tercepat di desktop",
          body: [
            "Di tiktok.com, panah Bagikan memberi “Salin tautan” seketika. Tempel di SFY, pilih Kualitas terbaik, dan MP4 muncul di Downloads (Ctrl+J menampilkan daftar unduhan browser).",
            "Untuk editing, MP4 dari SFY bisa diimpor langsung ke CapCut, Premiere, DaVinci Resolve, atau iMovie tanpa konversi.",
          ],
        },
        {
          title: "Windows vs. Mac — ada bedanya?",
          body: ["Tidak ada bedanya di sisi SFY: alatnya 100% di browser. Hanya folder tujuannya yang berbeda — C:\\Users\\Anda\\Downloads di Windows, ~/Downloads di macOS."],
          list: [
            "Ctrl+J (atau Cmd+J) membuka daftar unduhan",
            "MP4 jalan di semua editor video utama",
            "Tanpa software, ekstensi, atau akun",
          ],
        },
      ],
      faq: [
        { q: "Perlu software di PC?", a: "Tidak. SFY adalah situs web — tanpa ekstensi, installer, atau akun. Browser saja cukup." },
        { q: "Ke mana file-nya?", a: "Ke folder Downloads default browser Anda, persis seperti unduhan lainnya." },
        { q: "Bisa unduh beberapa video beruntun?", a: "Bisa — gunakan “Unduh video lain” setelah setiap simpanan. Batas wajar mencegah penyalahgunaan." },
        { q: "Jalan di Linux?", a: "Ya. Browser modern di sistem operasi mana pun menjalankan SFY dengan cara yang sama." },
      ],
    },

    about: {
      seoTitle: "Tentang SFY — Save For You",
      metaDesc: "SFY (Save For You) adalah alat web gratis untuk menyimpan video, audio, dan foto TikTok publik — tanpa akun, tanpa aplikasi, tanpa pelacakan.",
      h1: "SFY — Save For You",
      intro: "Video Anda. Kapan pun Anda mau.",
      toolMode: "video",
      sections: [
        { title: "Produknya adalah pesannya", body: ["SFY dibangun di atas satu janji: tempel tautan, dapatkan file. Tanpa akun, tanpa dasbor, tanpa tur pengenalan. Alat ini adalah keseluruhan produk."] },
        { title: "Jujur by design", body: ["SFY hanya menampilkan opsi yang benar-benar ada, hanya bekerja dengan konten publik, dan tidak pernah menembus proteksi. Jika sesuatu tidak bisa dilakukan dengan bersih, SFY mengakuinya."] },
        { title: "Dibangun untuk dunia", body: ["Lima bahasa saat peluncuran — Inggris, Prancis, Spanyol, Portugis, dan Indonesia — dan lainnya menyusul."] },
      ],
      faq: [],
    },

    privacy: {
      seoTitle: "Kebijakan Privasi | SFY — Save For You",
      metaDesc: "Cara SFY menangani data Anda: tanpa akun, tanpa video tersimpan, analitik minimal. Versi singkat yang mudah dibaca.",
      h1: "Kebijakan Privasi",
      intro: "Versi singkatnya: SFY adalah alat, bukan bisnis data.",
      toolMode: "video",
      sections: [
        { title: "Yang tidak dilakukan SFY", body: ["Tanpa akun berarti tanpa profil. SFY tidak meminta nama, email, atau telepon. Video Anda tidak disimpan di pustaka, riwayat, atau basis data yang terikat ke Anda."] },
        { title: "Yang diproses", body: ["Saat Anda menganalisis tautan, tautan diproses untuk mengambil opsi dan mengirim file Anda. Tautan tidak disimpan melebihi yang diperlukan untuk melayani dan mengamankan permintaan."] },
        { title: "Analitik & cookie", body: ["SFY dapat menggunakan analitik agregat yang menghormati privasi. Tanpa pelacak iklan, tanpa fingerprinting, tanpa penjualan data."] },
      ],
      faq: [],
    },

    terms: {
      seoTitle: "Ketentuan Layanan | SFY — Save For You",
      metaDesc: "Ketentuan layanan SFY: penggunaan yang diizinkan, kekayaan intelektual, dan aturan yang menjaga layanan tetap gratis dan adil.",
      h1: "Ketentuan Layanan",
      intro: "Beberapa aturan agar layanan tetap gratis dan adil untuk semua.",
      toolMode: "video",
      sections: [
        { title: "Penggunaan yang diizinkan", body: ["SFY ditujukan untuk menyimpan konten yang boleh Anda simpan: video Anda sendiri, atau konten publik dengan izin pemilik hak. Anda bertanggung jawab atas penggunaan ulang."] },
        { title: "Kekayaan intelektual", body: ["Mengunduh file tidak memindahkan hak apa pun. Hak cipta tetap milik kreator. Jangan publikasikan ulang konten terlindungi tanpa izin."] },
        { title: "Layanan", body: ["SFY disediakan “sebagaimana adanya”, tanpa jaminan ketersediaan. Batas penggunaan wajar berlaku. SFY independen dan tidak berafiliasi dengan TikTok."] },
      ],
      faq: [],
    },

    contact: {
      seoTitle: "Kontak | SFY — Save For You",
      metaDesc: "Hubungi tim SFY: pertanyaan, masukan, kemitraan, atau permintaan hukum — kami membaca semuanya.",
      h1: "Kontak",
      intro: "Ada pertanyaan, ide, atau bug? Tulis ke kami — dibaca oleh manusia.",
      toolMode: "video",
      sections: [
        { title: "Menghubungi tim", body: ["Cara termudah adalah email: hello@sfy.app. Untuk permintaan terkait hak, sebutkan “copyright” di subjek agar cepat sampai ke orang yang tepat."] },
        { title: "Yang membantu kami membantu Anda", body: ["Sertakan tautan yang Anda coba, perangkat dan browser Anda, serta harapan Anda. Semakin spesifik, semakin cepat solusinya."] },
      ],
      faq: [],
    },
  },
};

export default id;
