
import Navbar from "@/components/NavbarNeraca";
import KpiCard from "@/components/KpiCard";
import SimpleBarChart from "@/components/SimpleBarChart";
import { zakatData, financeData, indeksData, latestAnalysis, socialFinanceData } from "@/lib/data-neraca";
import Link from "next/link";
import { ArrowRight, BarChart3, PieChart, Users } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-paper font-sans text-gray-900 selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200 py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Jurnalisme Data Ekonomi Umat
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tigher">
                        Bicara Data, <br /><span className="text-primary">Bukan Sekadar Narasi.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Neraca Ummah menyajikan fakta ekonomi Islam melalui data Zakat, Keuangan Syariah, dan Indeks Kesejahteraan umat secara transparan dan akurat.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#zakat" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Lihat Data Zakat
                        </a>
                        <a href="#indeks" className="px-6 py-3 bg-white text-gray-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition">
                            Indeks Umat
                        </a>
                    </div>
                </div>
            </section>

            {/* Zakat Watch */}
            <section id="zakat" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-3 mb-10">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold font-serif">Zakat Watch</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: KPIs */}
                    <div className="space-y-4">
                        {zakatData.metrics.map((metric, idx) => (
                            <KpiCard key={idx} metric={metric} />
                        ))}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <p className="text-emerald-800 text-sm leading-relaxed italic">
                                "{zakatData.narrative}"
                            </p>
                        </div>
                    </div>
                    {/* Right: Chart */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <SimpleBarChart data={zakatData.chart} title="Potensi vs Realisasi (Triliun Rupiah)" />
                    </div>
                </div>
            </section>

            {/* Social Finance (Wakaf & Infak) */}
            <section id="social-finance" className="py-20 bg-slate-50 border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-10">
                        <Users className="w-8 h-8 text-emerald-600" />
                        <div>
                            <h2 className="text-3xl font-bold font-serif">{socialFinanceData.title}</h2>
                            <p className="text-gray-500">{socialFinanceData.subtitle}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Wakaf Stats */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-emerald-500 mr-3 rounded-full"></span>
                                Aset Wakaf Nasional
                            </h3>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <KpiCard metric={socialFinanceData.metrics[0]} />
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
                                    <span className="text-sm text-gray-500 mb-1">Produktifitas Lahan</span>
                                    <span className="text-2xl font-bold text-gray-900">56%</span>
                                    <span className="text-xs text-emerald-600 font-medium">Butuh Inkubasi ▲</span>
                                </div>
                            </div>
                            <SimpleBarChart data={socialFinanceData.chart} title="Status Tanah Wakaf" />
                        </div>

                        {/* Infak Stats */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></span>
                                Tren Infak Digital
                            </h3>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <KpiCard metric={socialFinanceData.metrics[1]} />
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
                                    <span className="text-sm text-gray-500 mb-1">User Aktif</span>
                                    <span className="text-2xl font-bold text-gray-900">12.5 Jt</span>
                                    <span className="text-xs text-blue-600 font-medium">Gen-Z Dominant ▲</span>
                                </div>
                            </div>
                            <SimpleBarChart data={socialFinanceData.chart2} title="Metode Penyaluran Infak" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Islamic Finance */}
            <section id="finance" className="py-20 bg-white border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-10">
                        <PieChart className="w-8 h-8 text-secondary" />
                        <h2 className="text-3xl font-bold font-serif">Islamic Finance Monitor</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg text-gray-600">
                            <p className="text-xl font-light leading-relaxed">
                                Perbankan syariah Indonesia menghadapi tantangan stagnasi market share. Meski aset tumbuh, dominasi bank konvensional masih sangat kuat di angka 93%.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {financeData.metrics.map((metric, idx) => (
                                    <KpiCard key={idx} metric={metric} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-6">Distribusi Aset Perbankan</h4>
                            <SimpleBarChart
                                data={[
                                    { label: "Konvensional", value: 93, displayValue: "93%", color: "bg-slate-400" },
                                    { label: "Syariah", value: 7, displayValue: "7% (Stagnan)", color: "bg-primary" }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Indeks Umat */}
            <section id="indeks" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-3 mb-10">
                    <Users className="w-8 h-8 text-accent" />
                    <h2 className="text-3xl font-bold font-serif">Indeks Umat</h2>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <SimpleBarChart data={indeksData.items} title="Tingkat Kemiskinan & Literasi (%)" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <blockquote className="text-2xl font-serif font-bold text-gray-900 leading-snug mb-6">
                                "Literasi adalah benteng pertahanan ekonomi umat yang paling rapuh saat ini."
                            </blockquote>
                            <p className="text-gray-600 mb-6">
                                {indeksData.narrative}
                            </p>
                            <Link href="/article/2" className="self-start text-primary font-bold hover:text-primary-dark flex items-center group">
                                Baca Laporan Lengkap <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Analysis */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-serif mb-12 border-b border-slate-700 pb-6">
                        <a href="https://arva-journal.vercel.app/" target="_blank" className="hover:text-red-500 transition-colors">
                            ANALISIS TERBARU & JURNAL
                        </a>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestAnalysis.map((item) => (
                            <Link key={item.id} href={`/article/${item.id}`} className="group">
                                <article className="h-full flex flex-col">
                                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-3 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-gray-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <span className="text-gray-500 text-xs">{item.date}</span>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-white py-12 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <span className="font-bold text-gray-900 tracking-tight text-xl">NERACA<span className="text-primary">UMMAH</span></span>
                    <p className="text-gray-500 text-sm mt-4">
                        © 2026 Neraca Ummah. Data untuk Kemaslahatan. by <a href="https://arva-journal.vercel.app/" target="_blank" className="font-bold text-black hover:text-red-600 transition-colors">ARVAAS</a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
