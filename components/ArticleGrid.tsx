import Link from "next/link";
import { Article } from "@/lib/data";

export default function ArticleGrid({ articles }: { articles: Article[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <article
                    key={article.id}
                    className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full"
                >
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                {article.category}
                            </span>
                        </div>
                        <Link href={`/article/${article.id}`}>
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                            {article.content.substring(0, 120)}...
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                            <span className="text-xs font-medium text-gray-900">
                                {article.author}
                            </span>
                            <span className="text-xs text-gray-500">
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
