import Link from "next/link";
import { Mic, Eye, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
            {/* Background Gradients - Light Mode */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/60 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-100/60 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold font-serif tracking-tight text-slate-800 leading-none">
                        AR<span className="text-emerald-600">VERSE</span>
                    </div>
                    <span className="text-[10px] text-emerald-600/80 font-serif italic tracking-wider self-end mt-0.5">by arvaas</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
                    <Link href="#" className="hover:text-emerald-600 transition-colors">Features</Link>
                    <Link href="#" className="hover:text-emerald-600 transition-colors">Technology</Link>
                    <Link href="#" className="hover:text-emerald-600 transition-colors">About</Link>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 px-5 py-2 rounded-full text-sm font-medium transition-colors">
                    Get Started
                </button>
            </nav>

            <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center mt-8">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wider uppercase shadow-sm">
                        Series 3 • Future Intelligence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight text-slate-900">
                        The Quran in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            Augmented Reality
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the divine verses like never before. Combining advanced Voice AI with immersive AR visualization to deepen your connection with the Quran.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ar" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-emerald-600 shadow-xl shadow-emerald-600/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5">
                            <Eye className="mr-2 w-5 h-5" />
                            Try AR Mode
                        </Link>
                        <Link href="/ai" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-emerald-700 transition-all duration-200 bg-white shadow-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-100 hover:bg-slate-50 hover:text-emerald-600 hover:-translate-y-0.5">
                            <Mic className="mr-2 w-5 h-5" />
                            Test Voice AI
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative z-10 py-20 bg-white mt-12 border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-inner">
                                <Mic className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Tarteel AI</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Real-time pronunciation correction and verse recognition using advanced speech models.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 shadow-inner">
                                <Eye className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Immersive AR</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Project verses into your physical space for focused reading and contemplation.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 shadow-inner">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Deep Study</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Interactive Tafsir and translations linked directly to the AR/AI experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Products Links */}
            <div className="relative z-10 py-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                        <a
                            href="https://arva-as.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-emerald-600 font-bold tracking-widest text-sm transition-colors uppercase"
                        >
                            NERACA-UMMAH
                        </a>
                        <span className="hidden sm:inline-block text-slate-300 mx-2">•</span>
                        <a
                            href="https://arva-jurnal.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-emerald-600 font-bold tracking-widest text-sm transition-colors uppercase"
                        >
                            ARVAAS JURNAL
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
