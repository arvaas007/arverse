import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
    variable: "--font-merriweather"
});

export const metadata: Metadata = {
    title: "Arverse - Augmented Reality Quran",
    description: "Experience the Quran in a new dimension with AI and Augmented Reality.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
                {children}
            </body>
        </html>
    );
}
