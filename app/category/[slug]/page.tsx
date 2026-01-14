import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleGrid from "@/components/ArticleGrid";
import { recentArticles, navLinks, featuredArticle } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
    // Find category name from slug
    const categoryLink = navLinks.find((link) => link.href.includes(params.slug));
    const categoryName = categoryLink ? categoryLink.name : params.slug.replace(/-/g, " ");

    // Filter articles
    // Check both recent and featured to populate the category
    const categoryArticles = [featuredArticle, ...recentArticles].filter((article) => {
        return article.category === categoryName;

    });

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <div className="bg-secondary text-white py-16 px-4 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">{categoryName}</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Archives and analysis regarding {categoryName.toLowerCase()}.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                <ArticleGrid articles={categoryArticles} />
            </div>

            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return navLinks
        .filter(link => link.href.startsWith("/category/"))
        .map((link) => ({
            slug: link.href.replace("/category/", ""),
        }));
}
