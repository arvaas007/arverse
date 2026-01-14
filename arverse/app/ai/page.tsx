"use client";

import Link from "next/link";
import { Mic, ArrowLeft, Activity, Play, Settings } from "lucide-react";
import { useState } from "react";

export default function AiPage() {
    const [isListening, setIsListening] = useState(false);

    return (
        <main className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/30 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Header */}
            <header className="relative z-10 p-6 flex justify-between items-center max-w-5xl mx-auto w-full">
                <Link href="/" className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-xl font-serif font-bold tracking-wide">SMART TARTEEL AI</h1>
                <button className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                    <Settings className="w-6 h-6" />
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
                                    className="w-3 bg-emerald-500 rounded-full animate-bounce"
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
                            <p className="text-slate-500 text-lg">Tap microphone to start reciting</p>
                            <div className="text-slate-700 font-mono text-sm">Waiting for audio input...</div>
                        </div>
                    )}
                </div>

                {/* Text Area (Result) */}
                <div className="w-full max-w-2xl bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-slate-800 min-h-[200px] text-center flex flex-col justify-center mb-12">
                    {isListening ? (
                        <p className="text-2xl font-serif text-emerald-100 leading-loose animate-pulse">
                            "...Bismillahi r-rahmani r-rahim..."
                        </p>
                    ) : (
                        <p className="text-slate-600 italic">
                            "Recite any verse, and I will identify it and correct your pronunciation."
                        </p>
                    )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => setIsListening(!isListening)}
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] ${isListening ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                    >
                        {isListening ? (
                            <div className="w-8 h-8 bg-white rounded-md" /> // Stop Icon
                        ) : (
                            <Mic className="w-8 h-8 text-white" />
                        )}
                    </button>
                </div>

                <p className="mt-8 text-slate-500 text-sm font-medium">Powered by Arverse Neural Engine v1.0</p>
            </div>
        </main>
    );
}
