
export interface Article {
    id: string;
    title: string;
    author: string;
    date?: string;
    category?: string;
    excerpt?: string;
    content: string; // Placeholder for full content
    image?: string; // Placeholder if we had images
}

// Navigation Data
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Moneter & Kekuasaan", href: "/category/moneter-kekuasaan" },
    { name: "ZISWAF & Negara", href: "/category/ziswaf-negara" },
    { name: "Kapitalisme & Kritik Islam", href: "/category/kapitalisme-kritik" },
    { name: "Dunia Islam Global", href: "/category/dunia-islam-global" },
    { name: "About", href: "/about" },
];

export const featuredArticle: Article = {
    id: "featured-1",
    title: "Reimagining Zakat as a Primary Fiscal Instrument",
    author: "Arva Athallah Susanto",
    date: "January 12, 2026",
    category: "ZISWAF & Negara",
    excerpt: "Moving beyond charity: How Zakat can function as a powerful tool for wealth redistribution and economic stability at the state level.",
    content: "Zakat is often reduced to mere charity in the modern imagination. However, historically and structurally, it functions as a wealth tax designed to prevent the accumulation of capital in few hands. By reimagining Zakat as a state-level fiscal instrument, we can propose a model of economic stability that does not rely on perpetual debt but on the constant circulation of wealth.",
};

export const recentArticles: Article[] = [
    {
        id: "1",
        title: "The Fall of Fiat and the Rise of the Gold Dinar",
        author: "Arva Athallah Susanto",
        category: "Moneter & Kekuasaan",
        content: "The modern fiat monetary system is built on debt and infinite expansion, leading to inevitable cycles of inflation and crash. The Gold Dinar represents a return to intrinsic value—money that cannot be printed at will by central banks. This analysis explores the geopolitical implications of a shift away from the petrodollar towards asset-backed currencies.",
    },
    {
        id: "5",
        title: "Central Bank Digital Currencies (CBDC): An Islamic Economic Perspective",
        author: "Arva Athallah Susanto",
        category: "Moneter & Kekuasaan",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2555&auto=format&fit=crop",
        excerpt: "As central banks race to issue digital currencies, what are the implications for privacy, monetary sovereignty, and Islamic finance?",
        content: `The race for Central Bank Digital Currencies (CBDCs) marks the most significant shift in the monetary landscape since the abandonment of the gold standard. While proponents argue that CBDCs offer efficiency, financial inclusion, and better monetary transmission, a critical Islamic Economic perspective reveals deep concerns regarding state surveillance, centralization of power, and the nature of money itself.

The Nature of Digital Fiat

From an Islamic standpoint, money must possess intrinsic value (Mal mutaqawwam) or be a reliable store of value that guarantees justice in exchange. Fiat currency has long been criticized by Islamic scholars for its detached nature from real assets. CBDCs do not solve this fundamental flaw; they merely digitize it. A digital Rupiah or Dollar is still a liability of the central bank, backed by nothing but state decree.

Surveillance and Privacy (Hifz al-Mal)

One of the Maqasid al-Sharia is the preservation of wealth (Hifz al-Mal). CBDCs act as programmable money, allowing the issuer to track every transaction. This raises the specter of total state surveillance, where financial privacy—a key component of economic freedom—is obliterated. In extreme cases, programmable money could be set to 'expire' or be restricted for certain purchases, effectively removing the owner's full possession (Milkiyah Tammah) over their wealth.

Centralization vs. Decentralization

Islamic economic history favors decentralized market mechanisms (the Souq) over centralized state control. The intense centralization inherent in CBDCs opposes the distributed nature of the Gold Dinar or Silver Dirham economies of the past. It places the central bank as the ultimate arbiter of who can transact, potentially marginalizing those who dissent from state policies.

The Way Forward

Muslim nations must be cautious. Instead of blindly adopting CBDC architectures designed by the West or China, we should explore hybrid models or truly asset-backed digital currencies (Gold-backed tokens) that align with Sharia principles of fairness and intrinsic value. The future of money is digital, but it must not come at the cost of liberty and justice.`
    },
    {
        id: "2",
        title: "Degrowth and the Maqasid al-Sharia",
        author: "Arva Athallah Susanto",
        category: "Kapitalisme & Kritik",
        content: "Capitalism demands infinite growth on a finite planet. The concept of 'Degrowth' aligns surprisingly well with Maqasid al-Sharia (Objectives of Islamic Law), specifically the preservation of life and lineage (environmental sustainability). We argue for an economy that prioritizes well-being and sufficiency over GDP maximization.",
    },
    {
        id: "3",
        title: "BRICS+ and the Search for an Islamic Financial Pole",
        author: "Arva Athallah Susanto",
        category: "Dunia Islam Global",
        content: "As the world moves towards multipolarity, Muslim nations find themselves at a crossroads. The BRICS+ alliance offers an alternative to Western financial hegemony. This piece examines whether an 'Islamic Financial Pole' can emerge within this new bloc to champion interest-free trade mechanisms.",
    },
    {
        id: "4",
        title: "Waqf-Based Housing: A Solution to Urban Crisis?",
        author: "Arva Athallah Susanto",
        category: "ZISWAF & Negara",
        content: "Urban housing has become a speculative asset rather than a basic right. By utilizing Waqf (endownment) land for cooperative housing projects, we can de-commodify shelter. This model eliminates the land cost component, making housing affordable for the urban poor without relying on predatory mortgage systems.",
    }
];

export const siteConfig = {
    name: "ARVAAS-NERACA UMMAH",
    description: "Jurnalisme kritis ekonomi Islam & tatanan dunia. Analisis mendalam dari perspektif Islamic political economy.",
    footerText: "Weekly analysis delivered to your inbox."
};
