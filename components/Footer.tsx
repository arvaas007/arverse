import { siteConfig } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                            <a href="https://arva-journal.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                {siteConfig.name}
                            </a>
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">
                            Subscribe to our newsletter
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                            {siteConfig.footerText}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-primary border border-transparent py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
