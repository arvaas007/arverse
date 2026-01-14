"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Brand */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-serif font-bold text-lg">N</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">NERACA<span className="text-primary">UMMAH</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <Link href="/#zakat" className="hover:text-primary transition-colors">Zakat Watch</Link>
                        <Link href="/#social-finance" className="hover:text-primary transition-colors">Social Finance Pulse</Link>
                        <Link href="/#finance" className="hover:text-primary transition-colors">Islamic Finance</Link>
                        <Link href="/#indeks" className="hover:text-primary transition-colors">Indeks Umat</Link>
                    </div>

                    {/* Desktop Action */}
                    <div className="hidden md:block">
                        <Link href="/kirim-data" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                            Kirim Data
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 shadow-lg">
                    <div className="flex flex-col space-y-4 mt-2">
                        <Link href="/#zakat" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary font-medium">Zakat Watch</Link>
                        <Link href="/#social-finance" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary font-medium">Social Finance Pulse</Link>
                        <Link href="/#finance" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary font-medium">Islamic Finance</Link>
                        <Link href="/#indeks" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary font-medium">Indeks Umat</Link>
                        <div className="pt-2">
                            <Link href="/kirim-data" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                                Kirim Data
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
