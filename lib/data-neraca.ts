
export interface KpiMetric {
    label: string;
    value: string;
    trend?: string;
    trendUp?: boolean; // true = green/good, false = red/bad
    description?: string;
}

export interface BarData {
    label: string;
    value: number; // percentage or raw value for scaling
    displayValue: string;
    color?: string;
}

export const zakatData = {
    title: "Zakat Watch",
    subtitle: "Realisasi vs Potensi Zakat Nasional",
    metrics: [
        { label: "Potensi Zakat", value: "IDR 327 T", trend: "Estimasi BAZNAS", trendUp: true } as KpiMetric,
        { label: "Realisasi Terkumpul", value: "IDR 33 T", trend: "10% dari Potensi", trendUp: false } as KpiMetric,
    ],
    chart: [
        { label: "Potensi", value: 100, displayValue: "Rp 327 Triliun", color: "bg-slate-200" } as BarData,
        { label: "Realisasi", value: 10, displayValue: "Rp 33 Triliun", color: "bg-emerald-600" } as BarData,
    ],
    narrative: "Jurang (Gap) antara potensi dan realisasi masih sangat lebar. Digitalisasi dan literasi menjadi kunci untuk membuka gembok 90% potensi yang belum tergarap."
};

export const financeData = {
    title: "Islamic Finance Monitor",
    subtitle: "Market Share Perbankan Syariah",
    metrics: [
        { label: "Market Share", value: "7.03%", trend: "Stagnan < 10%", trendUp: false } as KpiMetric,
        { label: "Aset Total", value: "IDR 868 T", trend: "▲ 9.2% YoY", trendUp: true } as KpiMetric,
    ]
};

export const indeksData = {
    title: "Indeks Umat",
    subtitle: "Kesejahteraan & Literasi",
    items: [
        { label: "Tingkat Kemiskinan Umat", value: 9.5, displayValue: "9.5% Penduduk", color: "bg-rose-500" } as BarData,
        { label: "Literasi Keuangan Syariah", value: 9.1, displayValue: "9.1% (Rendah)", color: "bg-amber-500" } as BarData,
        { label: "Literasi Keuangan Umum", value: 49.6, displayValue: "49.6% Nasional", color: "bg-slate-400" } as BarData,
    ],
    narrative: "Ironi besar: Populasi Muslim mayoritas, namun literasi keuangan syariahnya jauh tertinggal dibandingkan literasi keuangan konvensional."
};

export const latestAnalysis = [
    {
        id: "1",
        title: "Mengapa Share Bank Syariah Susah Tembus 10%?",
        date: "14 Jan 2026",
        category: "ANALISIS DATA",
        author: "Tim Riset Neraca",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070",
        excerpt: "Bukan hanya soal 'kurang religius', data menunjukkan masalah struktural pada pricing dan aksesibilitas.",
        content: `Narasi yang sering beredar adalah masyarakat belum memilih bank syariah karena kurangnya literasi agama. Namun, data menunjukkan realitas yang lebih pragmatis: Pricing (harga/bagi hasil) dan Accessibility (kemudahan akses).

Biaya dana (Cost of Funds) perbankan syariah di Indonesia relatif lebih tinggi dibandingkan konvensional. Hal ini memaksa bank syariah untuk mematok marjin pembiayaan yang lebih tinggi agar tetap profit. Akibatnya, bagi konsumen rasional—terlepas dari preferensi religiusnya—cicilan KPR atau pembiayaan modal kerja di bank syariah seringkali jatuh lebih mahal.

Data OJK menunjukkan bahwa Net Interest Margin (NIM) bank konvensional dan Net Imbalan (NI) bank syariah memiliki gap yang konsisten. Efisiensi operasional menjadi PR besar. Bank Syariah Indonesia (BSI) sebagai market leader mulai menunjukkan perbaikan efisiensi sejak merger, namun pemain lapis kedua masih berjuang dengan skala ekonomi (economies of scale).

Solusinya bukan sekadar kampanye "Hijrah ke Bank Syariah", melainkan reformasi struktural: insentif pajak dari pemerintah untuk deposito syariah, digitalisasi agresif untuk memangkas biaya operasional, dan fokus pada produk diferensiasi (seperti Gadai Emas yang terbukti sukses) daripada sekadar menjadi cermin (mirroring) produk konvensional.`
    },
    {
        id: "2",
        title: "Peta Kantong Kemiskinan di Basis Pesantren",
        date: "12 Jan 2026",
        category: "INDEKS UMAT",
        author: "Divisi Sosial",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2013",
        excerpt: "Korelasi antara wilayah basis tradisional dengan indeks pembangunan manusia (IPM) yang rendah.",
        content: `Sebuah paradoks pembangunan terjadi di kantong-kantong demografi santri. Data BPS yang disandingkan dengan sebaran Pesantren dari Kemenag menunjukkan korelasi spasial yang mengkhawatirkan: wilayah dengan densitas pesantren tinggi seringkali beririsan dengan wilayah berkategori "Indeks Pembangunan Manusia (IPM) Menengah-Bawah".

Faktor penyebabnya multidimensi. Pertama, akses pendidikan formal di wilayah ini seringkali tertinggal. Kedua, rendahnya akses permodalan formal. Pesantren mandiri secara ekonomi, namun masyarakat sekitarnya seringkali tidak terintegrasi dalam rantai pasok ekonomi modern.

Program "Ekonomi Umat" yang digulirkan pemerintah seringkali bersifat top-down (bantuan langsung) dan bukan bottom-up (pemberdayaan rantai nilai). Data menunjukkan bahwa program Bank Wakaf Mikro (BWM) cukup efektif memberikan akses modal, namun skalanya masih terlalu kecil untuk menggeser angka kemiskinan secara agregat di tingkat kabupaten/kota.`
    },
    {
        id: "3",
        title: "Sukuk Ritel: Instrumen Penyelamat APBN?",
        date: "10 Jan 2026",
        category: "FINANCE",
        excerpt: "Data kepemilikan Sukuk Negara didominasi oleh investor individu, membuktikan likuiditas umat yang tinggi.",
        author: "Market Analyst",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2070",
        content: `Setiap kali pemerintah menerbitkan Sukuk Ritel (SR) atau Sukuk Tabungan (ST), kuota pemesanan hampir selalu habis sebelum masa penawaran berakhir. Fenomena ini membuktikan dua hal: Pertama, likuiditas di tangan investor ritel (umat) sangat besar. Kedua, ada kelaparan (appetite) yang tinggi terhadap instrumen investasi yang aman dan sesuai syariah.

Hingga akhir kuartal lalu, total outstanding Surat Berharga Syariah Negara (SBSN) terus mendominasi proporsi pembiayaan proyek infrastruktur. Mulai dari jembatan, gedung universitas Islam, hingga rel kereta api, banyak yang dibiayai oleh uang umat melalui Sukuk.

Namun, tantangannya adalah pasar sekunder. Data transaksi menunjukkan bahwa sebagian besar investor ritel memegang sukuk hingga jatuh tempo (hold to maturity). Ini bagus untuk stabilitas, namun kurang bagus untuk pendalaman pasar keuangan (financial deepening).`
    }
];

export const socialFinanceData = {
    title: "Social Finance Pulse",
    subtitle: "Wakaf & Infak Digital (Realtime)",
    metrics: [
        { label: "Akumulasi Wakaf Uang", value: "IDR 1.4 T", trend: "▲ 15% YoY", trendUp: true } as KpiMetric,
        { label: "Infak Digital/Bulan", value: "IDR 89 M", trend: "Platform Online", trendUp: true } as KpiMetric,
    ],
    chart: [
        { label: "Wakaf Tanah (Ha)", value: 65, displayValue: "56rb Ha (Produktif)", color: "bg-emerald-500" },
        { label: "Wakaf Tanah (Ha)", value: 35, displayValue: "30rb Ha (Non-Prod)", color: "bg-slate-300" },
    ],
    chart2: [
        { label: "Infak Via QRIS", value: 72, displayValue: "72% Digital", color: "bg-blue-600" },
        { label: "Infak Via Kotak", value: 28, displayValue: "28% Tunai", color: "bg-slate-400" },
    ]
};
