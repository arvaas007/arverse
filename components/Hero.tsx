import Link from "next/link";
import { Article } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Hero({ article }: { article: Article }) {
    return (
        <section className="relative bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8 mb-12 overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl">
                    <div className="flex items-center space-x-2 text-primary-300 mb-6">
                        <span className="uppercase tracking-widest text-xs font-bold text-red-500">
                            Featured Analysis
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-xs">{article.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                        {article.title}
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-4">
                        <Link
                            href={`/article/${article.id}`}
                            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 font-medium hover:bg-opacity-90 transition-all group"
                        >
                            <span>Read Analysis</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-sm text-gray-400">
                            by <span className="text-white font-medium">{article.author}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
