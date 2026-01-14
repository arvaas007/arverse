import Link from "next/link";
import { Mic, Eye, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-950 flex flex-col">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-900/20 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-2xl font-bold font-serif tracking-tight text-white">
                    AR<span className="text-emerald-500">VERSE</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
                    <Link href="#" className="hover:text-emerald-400 transition-colors">Features</Link>
                    <Link href="#" className="hover:text-emerald-400 transition-colors">Technology</Link>
                    <Link href="#" className="hover:text-emerald-400 transition-colors">About</Link>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                    Get Started
                </button>
            </nav>

            <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                        Series 3 • Future Intelligence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                        The Quran in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Augmented Reality
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the divine verses like never before. Combining advanced Voice AI with immersive AR visualization to deepen your connection with the Quran.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ar" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500">
                            <Eye className="mr-2 w-5 h-5" />
                            Try AR Mode
                        </Link>
                        <Link href="/ai" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-slate-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 hover:bg-slate-700 hover:text-emerald-400 border border-slate-700">
                            <Mic className="mr-2 w-5 h-5" />
                            Test Voice AI
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative z-10 py-20 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 text-emerald-500">
                                <Mic className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Smart Tarteel AI</h3>
                            <p className="text-slate-400 text-sm">Real-time pronunciation correction and verse recognition using advanced speech models.</p>
                        </div>
                        <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-500">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Immersive AR</h3>
                            <p className="text-slate-400 text-sm">Project verses into your physical space for focused reading and contemplation.</p>
                        </div>
                        <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-500">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Deep Study</h3>
                            <p className="text-slate-400 text-sm">Interactive Tafsir and translations linked directly to the AR/AI experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
