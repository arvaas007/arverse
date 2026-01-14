"use client";

import Link from "next/link";
import { ArrowLeft, Camera, Maximize2, MoreVertical, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ArPage() {
    const [permission, setPermission] = useState<"pending" | "granted" | "denied">("pending");

    // Simulate camera permission delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setPermission("granted");
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="h-screen w-full bg-black relative overflow-hidden flex flex-col">

            {/* Camera Feed Simulator */}
            <div className="absolute inset-0 z-0">
                {permission === "pending" && (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white">
                        <Camera className="w-12 h-12 text-slate-500 mb-4 animate-pulse" />
                        <p>Initializing AR Camera...</p>
                    </div>
                )}
                {permission === "granted" && (
                    <div className="w-full h-full bg-slate-800 relative">
                        {/* Simulated Reality (Placeholder Image or Pattern) */}
                        <div
                            className="w-full h-full opacity-30 bg-[url('https://images.unsplash.com/photo-1596367407372-96cb88eb40fa?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"
                            style={{ filter: "grayscale(50%)" }}
                        />

                        {/* AR Overlay Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
                            {/* AR Floating Verse Card */}
                            <div className="w-full max-w-md mx-auto bg-slate-900/60 backdrop-blur-xl border border-emerald-500/30 p-8 rounded-3xl shadow-2xl transform transition-all hover:scale-105 duration-500">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-900/50 px-2 py-1 rounded">Surah Al-Mulk: 3</span>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                </div>
                                <p className="text-3xl font-serif text-white leading-loose text-right mb-6" dir="rtl">
                                    ٱلَّذِى خَلَقَ سَبْعَ سَمَـٰوَٰتٍۢ طِبَاقًۭا ۖ مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَـٰنِ مِن تَفَـٰوُتٍۢ ۖ
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed text-left">
                                    "He who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency..."
                                </p>
                            </div>

                            {/* AR Tracking Points (Decor) */}
                            <div className="absolute top-[-50px] left-10 w-4 h-4 border-t-2 border-l-2 border-white/50" />
                            <div className="absolute top-[-50px] right-10 w-4 h-4 border-t-2 border-r-2 border-white/50" />
                            <div className="absolute bottom-[-50px] left-10 w-4 h-4 border-b-2 border-l-2 border-white/50" />
                            <div className="absolute bottom-[-50px] right-10 w-4 h-4 border-b-2 border-r-2 border-white/50" />
                        </div>
                    </div>
                )}
            </div>

            {/* AR HUD (Heads-Up Display) */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 pointer-events-none">

                {/* Top Bar */}
                <div className="flex justify-between items-center pointer-events-auto">
                    <Link href="/" className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/20">
                        AR MODE: ACTIVE
                    </div>
                    <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center items-center gap-8 pointer-events-auto pb-8">
                    <button className="p-4 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 backdrop-blur-md">
                        <X className="w-6 h-6" />
                    </button>
                    <button className="w-20 h-20 rounded-full border-4 border-white/80 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full" />
                    </button>
                    <button className="p-4 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 backdrop-blur-md">
                        <Maximize2 className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </main>
    );
}
