"use client";

import Link from "next/link";
import { Mic, ArrowLeft, Activity, Play, Settings } from "lucide-react";
import { useState } from "react";

export default function AiPage() {
    const [isListening, setIsListening] = useState(false);

    return (
        <main className="min-h-screen bg-white text-slate-800 flex flex-col relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Header */}
            <header className="relative z-10 p-6 flex justify-between items-center max-w-5xl mx-auto w-full">
                <Link href="/" className="p-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-500 hover:text-emerald-600 shadow-sm">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-xl font-serif font-bold tracking-wide text-slate-900">SMART TARTEEL AI</h1>
                <button className="p-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-500 hover:text-emerald-600 shadow-sm">
                    <Settings className="w-5 h-5" />
                </button>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">

                {/* Visualizer Area */}
                <div className="w-full max-w-md h-64 flex items-center justify-center mb-12">
                    {isListening ? (
                        <div className="flex items-center space-x-1 h-32">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-3 bg-emerald-500 rounded-full animate-bounce shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    style={{
                                        height: `${Math.random() * 100}%`,
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '0.8s'
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center space-y-4">
                            <p className="text-slate-500 text-lg font-medium">Tap microphone to start reciting</p>
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">Waiting for input</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Text Area (Result) */}
                <div className={`w-full max-w-2xl backdrop-blur-xl rounded-[2rem] p-8 border min-h-[200px] text-center flex flex-col justify-center mb-12 shadow-2xl transition-all duration-500 ${isListening ? 'bg-white/80 border-emerald-200 shadow-emerald-500/10' : 'bg-slate-50/80 border-slate-200 shadow-slate-200/50'}`}>
                    {isListening ? (
                        <p className="text-2xl md:text-3xl font-serif text-emerald-800 leading-loose animate-pulse font-medium">
                            "...Bismillahi r-rahmani r-rahim..."
                        </p>
                    ) : (
                        <p className="text-slate-500 italic text-lg opacity-80 font-serif">
                            "Recite any verse, and I will identify it and correct your pronunciation."
                        </p>
                    )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => setIsListening(!isListening)}
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${isListening ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30 ring-4 ring-rose-50' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30 hover:-translate-y-1'}`}
                    >
                        {isListening ? (
                            <div className="w-6 h-6 bg-white rounded-md transition-all scale-110" /> // Stop Icon
                        ) : (
                            <Mic className="w-8 h-8 text-white" />
                        )}
                    </button>
                </div>

                <p className="mt-12 px-4 py-1.5 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-100 text-xs font-semibold tracking-wider uppercase">
                    Powered by Arverse Neural Engine v1.0
                </p>
            </div>
        </main>
    );
}
