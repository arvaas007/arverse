import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="bg-secondary text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-300">
                        {siteConfig.description}
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg prose-red max-w-none font-serif text-gray-800">
                    <h3>Our Mission</h3>
                    <p>
                        ARVAAS JOURNAL is dedicated to providing critical analysis of the global economic system through the lens of Islamic political economy. We believe that the current financial order, built on debt and speculation, is unsustainable and unjust.
                    </p>
                    <p>
                        Our goal is to explore viable alternatives—from the Gold Dinar to Waqf-based social welfare systems—that can restore economic dignity and sovereignty to the Muslim world and beyond.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <h3>Editorial Policy</h3>
                    <p>
                        We define our journalism not by "neutrality" but by fairness and intellectual rigor. We are unapologetically critical of predatory capitalism and committed to the revival of Muamalah based on Sharia principles.
                    </p>

                    <h3>Contact</h3>
                    <p>
                        For inquiries, updated analysis, or to contribute, please contact us at:
                        <br />
                        <strong>Email:</strong> arvaathallah@gmail.com
                    </p>

                    <h3>Connect with the Editor</h3>
                    <p>
                        Follow Arva Athallah Susanto for more regular updates and discussions:
                    </p>
                    <ul className="not-prose list-none p-0 space-y-2">
                        <li>
                            <a href="https://www.linkedin.com/in/arva-athallah-s/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline font-medium">
                                <span>LinkedIn: Arva Athallah S</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@arva_as" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline font-medium">
                                <span>YouTube: @arva_as</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/arva_as" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline font-medium">
                                <span>Instagram: @arva_as</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    );
}
