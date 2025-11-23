/*
===========================================
Script: Javascript
===========================================
*/

// DOM
const daftarApp = document.getElementsByClassName("daftar__app")[0];

// APP
const chatGPTElement = document.getElementsByClassName("chatgpt")[0];
const gGeminiElement = document.getElementsByClassName("gemini")[0];
const cLaudeElement = document.getElementsByClassName("claude")[0];
const gRokElement = document.getElementsByClassName("grok")[0];
const deepSeekElement = document.getElementsByClassName("deepseek")[0];

// Details
const dEtail = document.getElementsByClassName("detail")[0]; 
const iCon = document.getElementsByClassName("icon")[0];
const namaApp = document.getElementsByClassName("name_app")[0];
const pUblisher = document.getElementsByClassName("publisher")[0];
const downloadD = document.getElementsByClassName("download_d")[0];
const downloadCount = document.getElementsByClassName("download_count")[0];
const detaillll = document.getElementsByClassName("detail_panjang")[0];
const IQ = document.getElementsByClassName("iq")[0];
const rTT = document.getElementsByClassName("RTT")[0];
const backBtn = document.getElementsByClassName("back")[0];

const elementDibutuhkan = [
    daftarApp, chatGPTElement, gGeminiElement, cLaudeElement, gRokElement, deepSeekElement, dEtail, iCon, namaApp, pUblisher, downloadD, downloadCount, detaillll, IQ, rTT, backBtn
];

const elementHilang = elementDibutuhkan.filter(el => el === undefined || el === null);

if (elementHilang.length === 0) {
    console.log("Element dibutuhkan: Oke")
} else {
    console.warn("Element dibutuhkan: BAD")
}

const appData = [
    {
        id: "chatgpt",
        element: chatGPTElement,
        icon: "asset/svg/ChatGPT.svg",
        name: "ChatGPT",
        link_dev: "https://play.google.com/store/apps/developer?id=OpenAI",
        publisher: "OpenAI",
        downloadcount: "500JT+",
        downloadlink: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
        desk: `
Aplikasi resmi oleh OpenAI

Dengan aplikasi ChatGPT resmi, dapatkan jawaban instan dan inspirasi di mana pun Anda berada.

Aplikasi gratis ini menghadirkan untuk Anda sejumlah perbaikan model terbaru dari OpenAI, termasuk akses ke GPT-4o, model terbaru dan terpintar kami.

Dengan berbekal ChatGPT, Anda akan dapat memanfaatkan:

· Mode suara—ketuk ikon Headphone untuk berbicara selama berada di perjalanan, minta dongeng sebelum tidur untuk keluarga Anda, atau menyelesaikan perdebatan di meja makan.
· Unggah foto—terjemahkan resep tulisan tangan atau tanyakan tentang sebuah monumen.  
· Inspirasi kreatif—ide-ide kado ulang tahun atau buatlah kartu ucapan yang disesuaikan kebutuhan pribadi.
· Saran yang disesuaikan—menyusun jawaban yang disesuaikan kebutuhan pribadi atau memandu Anda menghadapi situasi sulit.
· Pembelajaran sesuai kebutuhan pribadi—menjelaskan soal listrik kepada seorang anak penggemar dinosaurus atau membantu diri Anda menguasai peristiwa bersejarah dengan mudah.
· Masukan profesional—bertukar pikiran soal teks pemasaran atau rencana bisnis.
· Jawaban instan—dapatkan usulan resep ketika bahan yang Anda miliki hanya sedikit.

Bergabunglah dengan ratusan juta pengguna dan cobalah aplikasi yang memikat dunia ini. Unduh ChatGPT sekarang juga.

Ketentuan penggunaan: https://openai.com/terms
        `,
        iq: "155",
        rtt: "12+"
    },
    {
        id: "gemini",
        element: gGeminiElement,
        icon: "asset/svg/Gemini.svg",
        name: "Google Gemini",
        link_dev: "https://play.google.com/store/apps/dev?id=5700313618786177705",
        publisher: "Google LCC",
        downloadcount: "500JT+",
        downloadlink: "https://play.google.com/store/apps/details?id=com.google.android.apps.bard",
        desk: `
Mulailah menulis, membuat rencana, belajar, dan banyak lagi bersama AI Google

Tingkatkan kreativitas dan produktivitas Anda dengan Gemini, asisten AI dari Google.

Gemini memberi Anda akses ke berbagai model AI tercanggih Google langsung di ponsel Anda, sehingga Anda dapat:

- Menggunakan Gemini Live untuk berdiskusi mencari ide, menyederhanakan topik rumit, dan berlatih untuk momen yang penting. Bagikan kamera atau layar Anda dalam percakapan Gemini Live untuk berbicara dengan Gemini tentang apa pun yang Anda lihat. Cukup klik tombol Gemini Live di aplikasi Gemini
- Mewujudkan ide Anda dengan Canvas. Mulai dari perintah hingga prototipe, buat aplikasi, game, halaman web, infografis, ringkasan audio, dan banyak lagi.
- Menghubungkan aplikasi Google favorit Anda seperti Penelusuran, YouTube, Google Maps, Gmail, dan lainnya
- Belajar lebih cerdas serta menjelajahi berbagai topik dengan pembuatan kuis dan flashcard, elemen visual interaktif, dan contoh nyata
- Mengubah file apa pun menjadi podcast yang bisa didengarkan setiap saat, di mana saja
- Membuat dan mengedit gambar memukau dari beberapa kata saja
- Merencanakan perjalanan dengan lebih baik dan lebih cepat
- Mendapatkan ringkasan, pembahasan mendalam, dan link sumber, semuanya di satu tempat
- Bertukar pikiran untuk mencari ide baru atau meningkatkan yang sudah ada

🍌 Coba Nano Banana: alat pembuat dan pengedit gambar canggih yang dikembangkan dari Gemini 2.5 Flash 

Tingkatkan pengalaman aplikasi Gemini Anda dengan mengupgrade ke paket Plus – dapatkan berbagai fitur baru dan canggih untuk meningkatkan kreativitas dan produktivitas Anda: 
- Akses yang lebih luas ke model tercanggih kami, seperti 2.5 Pro
- Pembuatan dan pembahasan mendalam laporan terperinci tentang topik apa pun dengan Deep Research yang didukung oleh 2.5 Pro
- Pembuatan klip video berkualitas tinggi berdurasi 8 detik dari kata-kata dengan Veo 3.1 Fast, dan banyak lagi. 

Google AI Plus menyertakan berbagai manfaat tambahan. Aplikasi Gemini, sebagai bagian dari Google AI Plus, akan tersedia di paket Google Workspace Business dan Education yang memenuhi syarat. Pelajari lebih lanjut: https://gemini.google/subscriptions/

Dapatkan pengalaman aplikasi Gemini lebih maksimal dengan mengupgrade ke paket Pro, yang membantu Anda menangani tugas dan project yang kompleks. Nikmati jendela konteks 1 juta token yang terdepan di industri (mampu mendukung Gemini memproses teks hingga 1.500 halaman atau 30 ribu baris kode), serta akses yang lebih leluasa ke model 2.5 Pro kami yang paling andal, Deep Research di 2.5 Pro, dan fitur pembuatan video dengan Veo 3.1 Fast. 

Gemini di Google AI Pro menyertakan berbagai manfaat tambahan melalui langganan Google AI Pro. Aplikasi Gemini, sebagai bagian dari Google AI Pro, akan terus tersedia di paket Google Workspace Business dan Education yang memenuhi syarat. Pelajari lebih lanjut: https://gemini.google/subscriptions/

Dapatkan manfaat terbaik dari aplikasi Gemini dengan upgrade ke paket Ultra yang memberikan akses penuh ke berbagai fitur terbaik dan eksklusif dari AI Google. Dapatkan akses maksimal ke model tercanggih dari Google, seperti 2.5 Pro, fitur-fitur seperti Deep Research dan pembuatan video dengan Veo 3.1, serta akses ke Gemini 2.5 Deep Think. Anda juga akan mendapatkan akses awal untuk mencoba inovasi AI terbaru kami begitu tersedia, termasuk Mode Agen.

Gemini di Google AI Ultra menyertakan berbagai manfaat tambahan melalui langganan Google AI Ultra. Google AI Ultra for Business tersedia sebagai add-on bagi pelanggan Google Workspace. Pelajari lebih lanjut: https://support.google.com/a/answer/16345165

Jika Anda memilih menggunakannya, aplikasi Gemini akan menggantikan Asisten Google Anda sebagai asisten utama di ponsel. Beberapa fitur suara Asisten Google belum tersedia di aplikasi Gemini. Anda dapat beralih kembali ke Asisten Google di setelan.

Tinjau Pemberitahuan Privasi Aplikasi Gemini:
https://support.google.com/gemini?p=privacy_notice
        `,
        iq: "160-170",
        rtt: "12+"
    },
    {
        id: "claude",
        element: cLaudeElement,
        icon: "asset/svg/Claude.svg",
        name: "Claude",
        link_dev: "https://play.google.com/store/apps/developer?id=Anthropic%20PBC",
        publisher: "Anthropic PBC",
        downloadcount: "5JT+",
        downloadlink: "https://play.google.com/store/apps/details?id=com.anthropic.claude",
        desk: `
Asisten AI yang berpikir bersama Anda - menulis, membuat kode, dan menyelesaikan tugas-tugas rumit

Tak pernah ada waktu yang lebih baik untuk menghadapi masalah. Temui Claude, pemecah masalah AI dan mitra berpikir Anda. Claude bekerja sama dengan Anda untuk menulis, meneliti, membuat kode, dan mengatasi masalah kompleks dengan mendalam dan presisi. Claude meningkatkan kemampuan berpikir Anda dan mengembangkan kemampuan Anda, langsung dari ponsel Anda.

ASISTEN PENULIS AI

Ubah ide mentah menjadi konten yang sempurna melalui penyempurnaan kolaboratif. Claude adalah asisten penulis AI dan editor konten Anda yang bekerja sama dengan Anda untuk mengembangkan postingan media sosial, email profesional, dan laporan kompleks. Bersama-sama, Anda akan mengeksplorasi nada, struktur, dan kejelasan—berulang hingga suara Anda terdengar jelas.

WAWASAN RISET DAN DATA

Gali lebih dalam pertanyaan-pertanyaan penting. Claude membantu Anda mengeksplorasi sudut pandang penelitian, menyusun temuan, dan menganalisis data untuk memunculkan wawasan yang bermakna. Telusuri di Google Drive, Gmail, Kalender, dan web dengan kutipan yang akurat. Baik Anda melakukan analisis bisnis, membuat laporan, atau menghasilkan ide, Claude adalah asisten peneliti AI yang memikirkan masalah bersama Anda—dari pertanyaan awal hingga penemuan terobosan.

BANTUAN PENGKODEAN DAN PEMROGRAMAN AI

Asisten pengodean AI kolaboratif Anda untuk membangun solusi yang lebih baik. Bekerja samalah dengan Claude untuk meninjau kode, men-debug masalah kompleks, dan menjelajahi bahasa pemrograman baru. Claude akan memandu Anda melalui konsep dan solusi, membantu Anda memahami "alasan" di balik kode tersebut—baik Anda menggunakan Python, JavaScript, React, atau puluhan bahasa pemrograman lainnya.

ANALISIS VISUAL

Unggah foto, PDF, atau tangkapan layar untuk menjelajahi konten visual bersama. Claude menyediakan analisis visual AI untuk membantu Anda mengekstrak teks, menerjemahkan bahasa, menginterpretasikan bagan dan grafik, serta mengevaluasi tata letak UI atau diagram teknis. Dapatkan umpan balik kolaboratif tentang desain aplikasi dan visualisasi data. Hasilkan kode SVG untuk grafik dan ilustrasi sederhana, yang bekerja secara iteratif untuk menyempurnakan solusi visual.

TIDAK PERLU MENGETIK

Berpikir lantang dengan suara. Gunakan Claude sebagai asisten suara AI Anda untuk mendikte dalam berbagai bahasa—sempurna untuk sesi curah pendapat atau menuangkan ide saat bepergian.

PERLUAS APA YANG BISA ANDA LAKUKAN

Tangani proyek di luar keahlian Anda saat ini. Baik Anda mempelajari keterampilan baru, menjelajahi bidang yang belum dikenal, atau menghadapi tantangan kompleks, Claude berkolaborasi dengan Anda untuk melampaui zona nyaman dan meraih kemampuan baru.

Claude membantu Anda:

▶ Mengembangkan dan menyempurnakan konten dengan penulisan AI
▶ Mengolah catatan rapat untuk mendapatkan wawasan utama
▶ Menyusun laporan dan konten pemasaran secara iteratif
▶ Menjelajahi soal matematika kompleks dengan penalaran langkah demi langkah
▶ Merencanakan proyek, menyusun ide, dan mengembangkan diagram alur bersama
▶ Menerjemahkan antar 100+ bahasa dengan nuansa dan konteks
▶ Menganalisis PDF, tangkapan layar, dan konten visual untuk pola yang lebih mendalam
▶ Memikirkan masalah secara handsfree dengan dikte suara

TERPERCAYA & HANDAL

Claude dirancang agar andal, akurat, dan kolaboratif. Dikembangkan oleh Anthropic, sebuah perusahaan riset AI yang didedikasikan untuk membangun perangkat AI yang aman dan andal. Didukung oleh Claude Opus 4.1 dan Sonnet 4.5, perangkat lunak ini menghadirkan penalaran tingkat lanjut, kreativitas, dan kemampuan pemecahan masalah untuk tantangan terpenting Anda.

COBA CLAUDE GRATIS. DIPERCAYA OLEH JUTAAN ORANG.

Bergabunglah dengan jutaan pengguna yang bekerja dengan Claude untuk mengatasi masalah-masalah penting. Baik Anda sedang membuat kode, menulis, meneliti, atau mengatasi tantangan bisnis, Claude membantu Anda berpikir lebih mendalam dan meraih lebih jauh.

Persyaratan Layanan: https://www.anthropic.com/legal/consumer-terms
Kebijakan Privasi: https://www.anthropic.com/legal/privacy
        `,
        iq: "155",
        rtt: "12+"
    },
    {
        id: "grok",
        element: gRokElement,
        icon: "asset/svg/Grok.svg",
        name: "Grok",
        link_dev: "https://play.google.com/store/apps/developer?id=xAI",
        publisher: "xAI",
        downloadcount: "50JT+",
        downloadlink: "https://play.google.com/store/apps/details?id=ai.x.grok",
        desk: `
Memahami alam semesta

Grok adalah asisten bertenaga AI, yang dikembangkan oleh xAI, didesain agar semaksimal mungkin jujur, bermanfaat, dan ingin tahu. Dapatkan jawaban atas pertanyaan apa pun, hasilkan gambar yang memukau, dan unggah gambar untuk memperoleh pemahaman lebih mendalam tentang dunia Anda. Dengan Grok, alam semesta ada di tangan Anda!
        `,
        iq: "155",
        rtt: "12+"
    },
    {
        id: "deepseek",
        element: deepSeekElement,
        icon: "asset/svg/DeepSeek.svg",
        name: "DeepSeek AI",
        link_dev: "https://play.google.com/store/apps/developer?id=DeepSeek",
        publisher: "DeepSeek",
        downloadcount: "50JT+",
        downloadlink: "https://play.google.com/store/apps/details?id=com.deepseek.chat",
        desk: `
Asisten AI Cerdas

Nikmati interaksi yang mulus dengan asisten AI resmi DeepSeek secara gratis!
Didukung oleh model flagship terbaru DeepSeek, memberikan respons lebih cepat dan fitur lebih kuat untuk membantu Anda menyelesaikan masalah dan hidup lebih efisien.

Hubungi kami:
Twitter: @deepseek_ai
Email: service@deepseek.com
        `,
        iq: "135",
        rtt: "12+"
    }
];

// Lihatkan list
function lihatkanList() {
    if (daftarApp) daftarApp.style.display = "flex";
    if (dEtail) dEtail.style.display = "none";
}

/**
 * @param {object} app
 */

// untuk detail
function lihatkanDetail(app) {
    if (daftarApp) daftarApp.style.display = "none";
    if (dEtail) {
        dEtail.style.display = "block";
        
        // Edit detail
        if (iCon && app.icon) iCon.src = app.icon;
        if (namaApp) namaApp.textContent = app.name;
        if (pUblisher) pUblisher.textContent = app.publisher;
        if (pUblisher) pUblisher.href = app.link_dev;
        if (downloadCount) downloadCount.textContent = app.downloadcount;
        if (downloadD) downloadD.href = app.downloadlink;
        if (detaillll) detaillll.textContent = app.desk;
        if (IQ) IQ.textContent = `IQ: ${app.iq}`;
        if (rTT) rTT.textContent = `Rating Rata-Rata ${app.rtt}`;
    }
}

// Tampilkan list
lihatkanList();

// Tambahkan event listener untuk edit item di detail
appData.forEach(app => {
    if (app.element) {
        app.element.addEventListener("click", () => lihatkanDetail(app));
    } else {
        console.error(`Error: click elemen '${app.name}(class ${app.id}) tidak ditemukan`);
    }
});

if (backBtn) {
    backBtn.addEventListener('click', lihatkanList);
} else {
    console.error(`Error tidak ada elemen 'backBtn'`);
}