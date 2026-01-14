import Navbar from "@/components/NavbarNeraca";
import Footer from "@/components/Footer";
import { latestAnalysis } from "@/lib/data-neraca";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }: { params: { id: string } }) {
    // 1. Find the article in data-neraca
    const article = latestAnalysis.find((a) => a.id === params.id);

    // 2. Explicit Check: if not found, 404
    if (!article) {
        return notFound();
    }

    // Safety: at this point, 'article' is guaranteed to be defined.
    // However, to be extra safe for the compiler, we access properties from 'article'.

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <article className="flex-grow">
                {/* Header */}
                <header className="bg-paper py-16 px-4 border-b border-gray-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                            <span className="font-medium text-gray-900">{article.author}</span>
                            <span>•</span>
                            <span>{article.date || "Just now"}</span>
                        </div>
                    </div>
                </header>

                {/* NOTE: Image section removed as per user request for simplicity */}

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <div className="prose prose-lg prose-red max-w-none font-serif text-gray-800">
                        {/* Excerpt / Intro */}
                        {article.excerpt && (
                            <p className="text-xl leading-relaxed mb-8 font-sans text-gray-600 border-l-4 border-primary pl-6 italic">
                                {article.excerpt}
                            </p>
                        )}

                        {/* Main Content - Simple Text Rendering */}
                        {/* Splits text by double newlines and renders as simple paragraphs */}
                        {article.content.split(/\n\s*\n/).map((paragraph, index) => (
                            <p key={index} className="mb-6 leading-relaxed text-gray-800">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return latestAnalysis.map((article) => ({
        id: article.id,
    }));
}
