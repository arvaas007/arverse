import React from 'react';
import Navbar from '@/components/NavbarNeraca';
import Footer from '@/components/Footer';
import { Send, UploadCloud } from 'lucide-react';

export default function KirimDataPage() {
    return (
        <main className="min-h-screen bg-paper flex flex-col">
            <Navbar />

            <section className="flex-grow py-20 px-4">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            Partisipasi Publik
                        </span>
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Kirim Data Ekonomi Umat</h1>
                        <p className="text-gray-500">
                            Punya data riset, laporan lapangan, atau statistik yang relevan?
                            Kirimkan kepada kami untuk dikurasi dan dipublikasikan.
                        </p>
                    </div>

                    <form
                        action="https://formspree.io/f/mbddjvlg"
                        method="POST"
                        encType="multipart/form-data"
                        className="space-y-6"
                    >

                        {/* Identitas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                    placeholder="Abdullah..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Kontak</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                    placeholder="nama@instansi.com"
                                />
                            </div>
                        </div>

                        {/* Instansi */}
                        <div className="space-y-2">
                            <label htmlFor="organization" className="text-sm font-medium text-gray-700">Instansi / Organisasi (Opsional)</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="Contoh: BAZNAS Kota Bandung, LAZISMU..."
                            />
                        </div>

                        {/* Judul & Pesan */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Judul Data</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="Contoh: Laporan Penyaluran Zakat Q4 2025"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Keterangan Tambahan</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                placeholder="Jelaskan sedikit tentang metodologi atau konteks data ini..."
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="space-y-2">
                            <label htmlFor="file" className="text-sm font-medium text-gray-700 block">Upload Dokumen (PDF/Excel)</label>
                            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition text-center cursor-pointer group">
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                                <span className="text-sm text-gray-500 group-hover:text-gray-700">
                                    Klik atau seret file ke sini
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition transform active:scale-95 flex items-center justify-center space-x-2"
                        >
                            <Send className="w-5 h-5" />
                            <span>Kirim Data Sekarang</span>
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-gray-100 pt-6">
                        <p className="text-sm text-gray-500 mb-2">Atau kirim manual melalui email:</p>
                        <a href="mailto:bankdatanu@gmail.com" className="text-primary font-bold hover:underline text-lg">
                            bankdatanu@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
