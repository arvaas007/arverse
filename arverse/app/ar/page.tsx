"use client";
import Link from "next/link";
import { ArrowLeft, Camera, Maximize2, MoreVertical, X, ChevronRight, ChevronLeft, Target, Monitor, Smartphone, Trophy, Sparkles, Play, Pause, Home } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const VERSES = [
    {
        ref: "Surah Al-Mulk: 3",
        arabic: "ٱلَّذِى خَلَقَ سَبْعَ سَمٰوَٰتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَٰنِ مِن تَفَٰوُتٍ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
        translation: "Yang menciptakan tujuh langit berlapis-lapis. Tidak akan kamu lihat sesuatu yang tidak seimbang pada ciptaan Tuhan Yang Maha Pengasih. Maka lihatlah sekali lagi, adakah kamu lihat sesuatu yang cacat?",
        audio: "https://everyayah.com/data/Alafasy_128kbps/067003.mp3",
        duration: 21000 // Approximate duration in ms
    },
    {
        ref: "Surah Al-Baqarah: 255 (Ayat Kursi)",
        arabic: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
        translation: "Allah, tidak ada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus (makhluk-Nya). Dia tidak dilanda oleh kantuk dan tidak (pula) oleh tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya, kecuali apa yang Dia kehendaki. Kursi-Nya (ilmu dan kekuasaan-Nya) meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dialah yang Maha Tinggi lagi Maha Agung.",
        audio: "https://everyayah.com/data/Alafasy_128kbps/002255.mp3",
        duration: 45000
    },
    {
        ref: "Surah Al-Ikhlas: 1",
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        translation: "Katakanlah (Nabi Muhammad), “Dialah Allah Yang Maha Esa.\"",
        audio: "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
        duration: 5000
    },
    {
        ref: "Surah Al-Mu'minun: 84-86",
        arabic: "قُل لِّمَنِ ٱلْأَرْضُ وَمَن فِيهَآ إِن كُنتُمْ تَعْلَمُونَ . سَيَقُولُونَ لِلَّهِ ۚ قُلْ أَفَلَا تَذَكَّرُونَ . قُلْ مَن رَّبُّ ٱلسَّمَٰوَٰتِ ٱلسَّبْعِ وَرَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
        translation: "Katakanlah: \"Kepunyaan siapakah bumi ini, dan semua yang ada padanya, jika kamu mengetahui?\" Mereka akan menjawab: \"Kepunyaan Allah.\" Katakanlah: \"Maka apakah kamu tidak ingat?\" Katakanlah: \"Siapakah Yang Empunya langit yang tujuh dan Yang Empunya 'Arsy yang besar?\"",
        audio: [
            "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/023084.mp3",
            "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/023085.mp3",
            "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/023086.mp3"
        ],
        duration: 25000 // Approximate duration
    },
    {
        ref: "Surah Al-Isra: 9-27",
        arabic: "إِنَّ هَٰذَا ٱلْقُرْآنَ يَهْدِى لِلَّتِى هِىَ أَقْوَمُ وَيُبَشِّرُ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا ۝٩ وَأَنَّ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْءَاخِرَةِ أَعْتَدْنَا لَهُمْ عَذَابًا أَلِيمًا ۝١٠ وَيَدْعُ ٱلْإِنسَٰنُ بِٱلشَّرِّ دُعَآءَهُۥ بِٱلْخَيْرِ ۖ وَكَانَ ٱلْإِنسَٰنُ عَجُولًا ۝١١ وَجَعَلْنَا ٱلَّيْلَ وَٱلنَّهَارَ ءَايَتَيْنِ ۖ فَمَحَوْنَآ ءَايَةَ ٱلَّيْلِ وَجَعَلْنَآ ءَايَةَ ٱلنَّهَارِ مُبْصِرَةً لِّتَبْتَغُوا۟ فَضْلًا مِّن رَّبِّكُمْ وَلِتَعْلَمُوا۟ عَدَدَ ٱلسِّنِينَ وَٱلْحِسَابَ ۚ وَكُلَّ شَىْءٍ فَصَّلْنَٰهُ تَفْصِيلًا ۝١٢ وَكُلَّ إِنسَٰنٍ أَلْزَمْنَٰهُ طَٰٓئِرَهُۥ فِى عُنُقِهِۦ ۖ وَنُخْرِجُ لَهُۥ يَوْمَ ٱلْقِيَٰمَةِ كِتَٰبًا يَلْقَىٰهُ مَنشُورًا ۝١٣ ٱقْرَأْ كِتَٰبَكَ كَفَىٰ بِنَفْسِكَ ٱلْيَوْمَ عَلَيْكَ حَسِيبًا ۝١٤ مَّنِ ٱهْتَدَىٰ فَإِنَّمَا يَهْتَدِى لِنَفْسِهِۦ ۖ وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا ۚ وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۗ وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبْعَثَ رَسُولًا ۝١٥ وَإِذَآ أَرَدْنَآ أَن نُّهْلِكَ قَرْيَةً أَمَرْنَا مُتْرَفِيهَا فَفَسَقُوا۟ فِيهَا فَحَقَّ عَلَيْهَا ٱلْقَوْلُ فَدَمَّرْنَٰهَا تَدْمِيرًا ۝١٦ وَكَمْ أَهْلَكْنَا مِنَ ٱلْقُرُونِ مِنۢ بَعْدِ نُوحٍ ۗ وَكَفَىٰ بِرَبِّكَ بِذُنُوبِ عِبَادِهِۦ خَبِيرًا بَصِيرًا ۝١٧ مَّن كَانَ يُرِيدُ ٱلْعَاجِلَةَ عَجَّلْنَا لَهُۥ فِيهَا مَا نَشَآءُ لِمَن نُّرِيدُ ثُمَّ جَعَلْنَا لَهُۥ جَهَنَّمَ يَصْلَىٰهَا مَذْمُومًا مَّدْحُورًا ۝١٨ وَمَنْ أَرَادَ ٱلْءَاخِرَةَ وَسَعَىٰ لَهَا سَعْيَهَا وَهُوَ مُؤْمِنٌ فَأُو۟لَٰٓئِكَ كَانَ سَعْيُهُم مَّشْكُورًا ۝١٩ كُلًّا نُّمِدُّ هَٰٓؤُلَآءِ وَهَٰٓؤُلَآءِ مِنْ عَطَآءِ رَبِّكَ ۚ وَمَا كَانَ عَطَآءُ رَبِّكَ مَحْظُورًا ۝٢٠ ٱنظُرْ كَيْفَ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ ۚ وَلَلْءَاخِرَةُ أَكْبَرُ دَرَجَٰتٍ وَأَكْبَرُ تَفْضِيلًا ۝٢١ لَّا تَجْعَل مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ فَتَقْعُدَ مَذْمُومًا مَّخْذُولًا ۝٢٢ وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ وَبِٱلْوَٰلِدَيْنِ إِحْسَٰنًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ ٱلْكِبَرَ أَحَدُهُمَآ أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَآ أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا ۝٢٣ وَٱخْفِضْ لَهُمَا جَنَاحَ ٱلذُّلِّ مِنَ ٱلرَّحْمَةِ وَقُل رَّبِّ ٱرْحَمْهُمَا كَمَا رَبَّيَانِى صَغِيرًا ۝٢٤ رَّبُّكُمْ أَعْلَمُ بِمَا فِى نُفُوسِكُمْ ۚ إِن تَكُونُوا۟ صَٰلِحِينَ فَإِنَّهُۥ كَانَ لِلْأَوَّٰبِينَ غَفُورًا ۝٢٥ وَءَاتِ ذَا ٱلْقُرْبَىٰ حَقَّهُۥ وَٱلْمِسْكِينَ وَٱبْنَ ٱلسَّبِيلِ وَلَا تُبَذِّرْ تَبْذِيرًا ۝٢٦ إِنَّ ٱلْمُبَذِّرِينَ كَانُوٓا۟ إِخْوَٰنَ ٱلشَّيَٰطِينِ ۖ وَكَانَ ٱلشَّيْطَٰنُ لِرَبِّهِۦ كَفُورًا ۝٢٧",
        translation: "Sesungguhnya Al Quran ini memberikan petunjuk kepada (jalan) yang lebih lurus dan memberi khabar gembira kepada orang-orang Mu'min yang mengerjakan amal saleh bahwa bagi mereka ada pahala yang besar. (9) Dan sesungguhnya orang-orang yang tidak beriman kepada kehidupan akhirat, Kami sediakan bagi mereka azab yang pedih. (10) Dan manusia berdoa untuk kejahatan sebagaimana ia berdoa untuk kebaikan. Dan manusia itu bersifat tergesa-gesa. (11) Dan Kami jadikan malam dan siang sebagai dua tanda (kebesaran Kami), lalu Kami hapuskan tanda malam dan Kami jadikan tanda siang itu terang, agar kamu mencari kurnia dari Tuhanmu, dan agar kamu mengetahui bilangan tahun-tahun dan perhitungan (waktu). Dan segala sesuatu telah Kami terangkan dengan jelas sejelas-jelasnya. (12) Dan tiap-tiap manusia itu telah Kami tetapkan amal perbuatannya (sebagaimana kalung) pada lehernya. Dan Kami keluarkan baginya pada hari kiamat sebuah kitab yang dijumpainya terbuka. (13) \"Bacalah kitabmu, cukuplah dirimu sendiri pada waktu ini sebagai penghisab terhadapmu.\" (14) Barangsiapa yang berbuat sesuai dengan hidayah (Allah), maka sesungguhnya dia berbuat itu untuk (keselamatan) dirinya sendiri; dan barangsiapa yang sesat maka sesungguhnya dia tersesat atas (kerugian) dirinya sendiri. Dan seorang yang berdosa tidak dapat memikul dosa orang lain. Dan Kami tidak akan mengazab sebelum Kami mengutus seorang rasul. (15) Dan jika Kami hendak membinasakan suatu negeri, maka Kami perintahkan kepada orang-orang yang hidup mewah di negeri itu (supaya menaati Allah) tetapi mereka melakukan kedurhakaan dalam negeri itu, maka sudah sepantasnya berlaku terhadapnya perkataan (ketentuan Kami), kemudian Kami hancurkan negeri itu sehancur-hancurnya. (16) Dan berapa banyaknya kaum sesudah Nuh, yang telah Kami binasakan. Dan cukuplah Tuhanmu Maha Mengetahui lagi Maha Melihat dosa hamba-hamba-Nya. (17) Barangsiapa menghendaki kehidupan sekarang (duniawi), maka Kami segerakan baginya di (dunia) ini apa yang Kami kehendaki bagi orang yang Kami kehendaki. Kemudian Kami sediakan baginya (di akhirat) neraka Jahannam; dia akan memasukinya dalam keadaan tercela dan terusir. (18) Dan barangsiapa menghendaki kehidupan akhirat dan berusaha ke arah itu dengan sungguh-sungguh sedang ia adalah mukmin, maka mereka itu adalah orang-orang yang usahanya dibalasi dengan baik. (19) Kepada masing-masing golongan (baik golongan dunia maupun golongan akhirat) Kami berikan bantuan dari kemurahan Tuhanmu. Dan kemurahan Tuhanmu tidak dapat dihalangi. (20) Perhatikanlah bagaimana Kami telah melebihkan sebagian mereka atas sebagian (yang lain). Dan sesungguhnya kehidupan akhirat lebih tinggi derajatnya dan lebih besar keutamaannya. (21) Janganlah kamu mengadakan tuhan yang lain di samping Allah, nanti kamu menjadi tercela dan terhina. (22) Dan Tuhanmu telah memerintahkan supaya kamu jangan menyembah selain Dia dan hendaklah kamu berbuat baik pada ibu bapakmu dengan sebaik-baiknya. Jika salah seorang di antara keduanya atau kedua-duanya sampai berumur lanjut dalam pemeliharaanmu, maka sekali-kali janganlah kamu mengatakan kepada keduanya perkataan \"ah\" dan janganlah kamu membentak mereka dan ucapkanlah kepada mereka perkataan yang mulia. (23) Dan rendahkanlah dirimu terhadap mereka berdua dengan penuh kesayangan dan ucapkanlah: \"Wahai Tuhanku, kasihilah mereka keduanya, sebagaimana mereka berdua telah mendidik aku waktu kecil\". (24) Tuhanmu lebih mengetahui apa yang ada dalam hatimu; jika kamu orang-orang yang baik, maka sesungguhnya Dia Maha Pengampun bagi orang-orang yang bertaubat. (25) Dan berikanlah kepada kerabat yang terdekat akan haknya, demikian (pula) kepada fakir miskin dan orang-orang yang dalam perjalanan; dan janganlah kamu menghambur-hamburkan (hartamu) secara boros. (26) Sesungguhnya pemboros-pemboros itu adalah saudara-saudara syaitan dan syaitan itu adalah sangat ingkar kepada Tuhannya. (27)",
        audio: "/audio/bilal_ataki_isra.m4a",
        duration: 210000
    },
    {
        ref: "Surah Maryam: 30-35",
        arabic: "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا ۝٣٠ وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنْتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا ۝٣١ وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا ۝٣٢ وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدْتُ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا ۝٣٣ ذَلِكَ عِيسَى ابْنُ مَرْيَمَ ۚ قَوْلَ الْحَقِّ الَّذِي فِيهِ يَمْتَرُونَ ۝٣٤ مَا كَانَ لِلَّهِ أَنْ يَتَّخِذَ مِنْ وَلَدٍ سُبْحَانَهُ ۚ إِذَا قَضَى أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ ۝٣٥",
        translation: "Dia (Isa) berkata: \"Sesungguhnya aku hamba Allah, Dia memberiku Kitab (Injil) dan Dia menjadikan aku seorang nabi. (30) Dan Dia menjadikan aku seorang yang diberkahi di mana saja aku berada, dan Dia memerintahkan kepadaku (melaksanakan) salat dan (menunaikan) zakat selama aku hidup. (31) Dan berbakti kepada ibuku, dan Dia tidak menjadikan aku seorang yang sombong lagi celaka. (32) Dan kesejahteraan semoga dilimpahkan kepadaku pada hari aku dilahirkan, pada hari aku meninggal dan pada hari aku dibangkitkan hidup kembali. (33) Itulah Isa putra Maryam, yang mengatakan perkataan yang benar, yang mereka berbantah-bantahan tentang kebenarannya. (34) Tidak layak bagi Allah mempunyai anak, Maha Suci Dia. Apabila Dia telah menetapkan sesuatu, maka Dia hanya berkata kepadanya: \"Jadilah\", maka jadilah ia. (35)",
        audio: "/audio/maryam_30-35.mp3",
        duration: 60000
    }
];

export default function ArPage() {
    const [permission, setPermission] = useState<"pending" | "granted" | "denied">("pending");
    const [currentVerseIdx, setCurrentVerseIdx] = useState(0);
    const [scanProgress, setScanProgress] = useState(0);
    const [isArMode, setIsArMode] = useState<boolean>(true);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [murojaahMode, setMurojaahMode] = useState<"idle" | "listening" | "evaluating" | "corrected" | "success">("idle");
    const [gameState, setGameState] = useState<"lobby" | "draw" | "session">("lobby");
    const [correctionIndex, setCorrectionIndex] = useState<{ start: number, end: number } | null>(null);
    const [teacherMessage, setTeacherMessage] = useState("");
    const [transcript, setTranscript] = useState("");
    const [recognition, setRecognition] = useState<any>(null);
    const [dailyStreak, setDailyStreak] = useState(7); // Hardcoded for demo
    const [currentWordIdx, setCurrentWordIdx] = useState(-1);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [showControls, setShowControls] = useState(true);

    const CORRECTION_MESSAGES = [
        "perhatikan gunnah pada bagian ini...",
        "makhraj huruf kurang tepat, coba ulangi...",
        "tempo bacaan perlu sedikit diperlambat...",
        "waspadai hukum tajwid di ayat ini...",
        "pelajari kembali panjang harakatnya..."
    ];

    const SUCCESS_MESSAGES = [
        "muntaz! hafalan anda sangat baik.",
        "masyaAllah, lancar sekali bacaannya.",
        "luar biasa, pertahankan hafalan anda.",
        "barakallah, bacaan yang sangat merdu dan tepat."
    ];

    const normalizeArabic = (text: string) => {
        return text
            // 1. Strip all Harakat, Madda, Shadda, and Quranic marks
            .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
            // 2. Unify Alif variations (Alif Wasla, Alif Hamza, etc.) to plain Alif
            .replace(/[\u0622\u0623\u0625\u0671]/g, "\u0627")
            // 3. Unify Ya and Alef Maksura
            .replace(/\u0649/g, "\u064A")
            // 4. Unify Te Marbuta and He
            .replace(/\u0629/g, "\u0647")
            // 5. Clean whitespace and non-arabic characters
            .replace(/[^\u0621-\u064A\s]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    };

    const speak = (text: string) => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            // Stop any current speech
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'id-ID'; // Use Indonesian for the teacher's persona
            utterance.rate = 0.9;
            utterance.pitch = 0.8; // Deepen the voice slightly for a more authoritative persona
            window.speechSynthesis.speak(utterance);
        }
    };

    // Speech recognition disabled for Spiritual Recital focus
    useEffect(() => {
        // STT logic suspended as requested to focus on pure listening
    }, []);

    // Initial check for device and simulated delay
    useEffect(() => {
        // Simple desktop detection
        const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024;
        if (isDesktop) {
            setIsArMode(false);
            setPermission("granted");
        } else {
            const timer = setTimeout(() => {
                setPermission("granted");
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    // Mouse movement for parallax in Digital Mode
    useEffect(() => {
        if (!isArMode) {
            const handleMouseMove = (e: MouseEvent) => {
                setMousePos({
                    x: (e.clientX / window.innerWidth - 0.5) * 20,
                    y: (e.clientY / window.innerHeight - 0.5) * 20
                });
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isArMode]);

    // Simulate scanning bar animation (only in AR mode)
    useEffect(() => {
        if (permission === "granted" && isArMode) {
            const interval = setInterval(() => {
                setScanProgress((prev: number) => (prev >= 100 ? 0 : prev + 1));
            }, 30);
            return () => clearInterval(interval);
        }
    }, [permission, isArMode]);

    // Game logic for drawing card
    const pickRandomCard = () => {
        setGameState("draw");

        // Simulate dramatic reveal
        setTimeout(() => {
            const randomIdx = Math.floor(Math.random() * VERSES.length);
            setCurrentVerseIdx(randomIdx);
            setGameState("session");
            setMurojaahMode("idle");
        }, 2000);
    };

    const nextVerse = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            setAudio(null);
        }
        window.speechSynthesis.cancel();
        setCurrentVerseIdx((prev: number) => (prev + 1) % VERSES.length);
        setMurojaahMode("idle");
        setCorrectionIndex(null);
        setCurrentWordIdx(-1);
    };

    const prevVerse = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            setAudio(null);
        }
        window.speechSynthesis.cancel();
        setCurrentVerseIdx((prev: number) => (prev - 1 + VERSES.length) % VERSES.length);
        setMurojaahMode("idle");
        setCorrectionIndex(null);
        setCurrentWordIdx(-1);
    };

    const processEvaluation = useCallback(() => {
        setMurojaahMode("evaluating");
        // Simulated Neural Link Analysis (High Accuracy)
        setTimeout(() => {
            // For the "Perfect" simulation requested by user
            // In a real app, this would be an actual STT/Tajweed comparison
            const isSuccess = true; // Default to perfect as requested "jika benar maka benar"

            if (isSuccess) {
                setMurojaahMode("success");
                const msg = "Terima kasih telah mendengarkan melalui Arverse. Silahkan pilih ayat selanjutnya.";
                setTeacherMessage(msg);
                speak(msg);
            } else {
                setMurojaahMode("corrected");
                const msg = "Mohon maaf, terdapat sedikit ketidaksesuaian tajwid. Mari kita coba lagi melalui Arverse.";
                setTeacherMessage(msg);
                setCorrectionIndex({ start: 10, end: 18 });
                speak(msg);
            }
        }, 2500);
    }, [currentVerseIdx, speak]);

    // Recital Highlighting Loop synchronized with Real Audio
    useEffect(() => {
        let interval: any;
        if (murojaahMode === 'listening' && audio) {
            const verse = VERSES[currentVerseIdx];
            const words = verse.arabic.split(" ");
            const wordDuration = verse.duration / words.length;

            let i = 0;
            setCurrentWordIdx(0);

            interval = setInterval(() => {
                i++;
                if (i < words.length) {
                    setCurrentWordIdx(i);
                } else {
                    clearInterval(interval);
                    // evaluation triggered after audio naturally ends or approximate duration
                }
            }, wordDuration);
        } else {
            setCurrentWordIdx(-1);
            if (interval) clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [murojaahMode, currentVerseIdx, audio, processEvaluation]);

    const handleMurojaahToggle = () => {
        if (murojaahMode === "idle") {
            setMurojaahMode("listening");
            setTranscript("Lantunan Syeikh Mishary dimulai...");

            // Play Real Audio
            const currentAudioSource = VERSES[currentVerseIdx].audio;

            if (Array.isArray(currentAudioSource)) {
                let chunkIndex = 0;
                const playSequence = () => {
                    if (chunkIndex < currentAudioSource.length) {
                        const newAudio = new Audio(currentAudioSource[chunkIndex]);
                        newAudio.play();
                        newAudio.onended = () => {
                            chunkIndex++;
                            playSequence();
                        };
                        setAudio(newAudio);
                    } else {
                        processEvaluation();
                    }
                };
                playSequence();
            } else {
                const newAudio = new Audio(currentAudioSource);
                newAudio.play();
                newAudio.onended = () => {
                    processEvaluation();
                };
                setAudio(newAudio);
            }
        } else {
            setMurojaahMode("idle");
            setCorrectionIndex(null);
            setTranscript("");
            setCurrentWordIdx(-1);
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
        }
    };

    // Dynamic UI helper for text size
    const getVerseFontSize = (text: string) => {
        const len = text.length;
        if (len < 30) return "text-5xl md:text-8xl leading-[2.2]"; // Very short (Ikhlas)
        if (len < 120) return "text-3xl md:text-6xl leading-[2.5]"; // Medium (Mulk:3)
        if (len < 250) return "text-xl md:text-4xl leading-[2.8]"; // Long
        return "text-lg md:text-3xl leading-[5.2]"; // Extreme (Ayat Kursi)
    };

    return (
        <main className="min-h-screen w-full bg-black relative flex flex-col font-sans select-none" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
            {/* Background Environment */}
            <div className="absolute inset-0 z-0 text-white">
                {gameState === "lobby" || gameState === "draw" ? (
                    <div className="w-full h-full bg-slate-950 relative flex flex-col items-center justify-center p-6 lg:p-12 overflow-hidden">
                        {/* Animated Mesh Background */}
                        <div className="absolute inset-0 opacity-20 bg-mesh pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse" />

                        {/* Lobby Header */}
                        <div className="relative z-10 text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Daily Murojaah</h1>
                            <p className="text-emerald-500/70 font-mono text-xs md:text-sm tracking-[0.4em] uppercase">Mystery Deck Ready for Sync</p>
                        </div>

                        {/* Mystery Card Deck */}
                        <div className="relative z-10 flex space-x-3 md:space-x-8 mb-16 h-48 md:h-80 items-center justify-center w-full px-4 overflow-visible">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className={`w-24 sm:w-32 md:w-48 h-full bg-slate-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-[1.5rem] md:rounded-[2.2rem] shadow-2xl relative transition-all duration-700 transform ${gameState === 'draw' ? 'scale-0 rotate-[360deg] opacity-0' : 'hover:-translate-y-4 hover:border-emerald-500/50 hover:shadow-emerald-500/10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-[2rem]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-8 md:w-12 h-8 md:h-12 text-emerald-500/20" />
                                    </div>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-500/10 rounded-full" />
                                </div>
                            ))}
                        </div>

                        {/* Draw Trigger */}
                        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                            <button
                                onClick={pickRandomCard}
                                disabled={gameState === 'draw'}
                                className="px-12 py-5 bg-emerald-600 text-white rounded-full font-bold text-sm md:text-base tracking-[0.2em] uppercase shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:shadow-[0_0_70px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center space-x-4 disabled:opacity-50"
                            >
                                <Target className="w-5 h-5" />
                                <span>Draw Daily Card</span>
                            </button>
                            <p className="text-slate-500 text-[10px] font-mono text-center mt-6 tracking-widest uppercase">Select to generate today's challenge</p>
                        </div>

                        {/* Drawing Pulse Overlay */}
                        {gameState === 'draw' && (
                            <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
                                <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-24">
                                    <div className="text-center order-2 md:order-1">
                                        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 mx-auto">
                                            <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full animate-ping" />
                                            <div className="absolute inset-2 border-2 border-emerald-500/40 rounded-full animate-spin duration-1000" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Target className="w-12 md:w-16 h-12 md:h-16 text-emerald-500 animate-pulse" />
                                            </div>
                                        </div>
                                        <h2 className="text-white font-mono text-sm md:text-base tracking-[0.5em] uppercase animate-pulse">Syncing Neural Waveforms...</h2>
                                    </div>

                                    {/* Mishary Rasyid Intro Persona */}
                                    <div className="order-1 md:order-2 flex flex-col items-center animate-in slide-in-from-right-12 duration-1000">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-emerald-500/30 transition-all duration-700" />
                                            <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-2 border-emerald-500/40 shadow-2xl">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hE67-6vXkL6rXvAnF_GfD7J_6v_G000000&s"
                                                    alt="Mishary Rasyid"
                                                    className="w-full h-full object-cover grayscale brightness-125"
                                                />
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 px-4 py-1.5 rounded-full border border-emerald-400/50 shadow-xl whitespace-nowrap">
                                                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Syeikh Mishary Rasyid</p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-emerald-400/60 font-mono text-[10px] tracking-widest uppercase text-center max-w-[200px]">Initializing AI Guidance Engine</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="w-full min-h-screen relative">
                        {permission === "pending" && (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white">
                                <div className="relative">
                                    <div className="w-24 h-24 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-6" />
                                    <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-500" />
                                </div>
                                <p className="text-emerald-500 font-mono text-xs tracking-widest uppercase animate-pulse">Initializing Neural Link...</p>
                            </div>
                        )}

                        {permission === "granted" && (
                            <div className="w-full min-h-screen relative">
                                {isArMode ? (
                                    <>
                                        {/* Simulated Reality (AR Mode) */}
                                        <div
                                            className="w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1596367407372-96cb88eb40fa?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center transition-opacity duration-1000"
                                            style={{ filter: "contrast(1.2) brightness(0.8)" }}
                                        />
                                        {/* Scanning Laser Line */}
                                        <div
                                            className="absolute w-full h-[2px] bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 pointer-events-none"
                                            style={{ top: `${scanProgress}%` }}
                                        />
                                    </>
                                ) : (
                                    /* Digital Environment (Non-AR Mode) */
                                    <div className="w-full h-full bg-slate-950 relative flex items-center justify-center overflow-hidden">
                                        {/* Abstract Background Elements */}
                                        <div className="absolute inset-0 opacity-40">
                                            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
                                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full" />
                                        </div>
                                        {/* Islamic Geometric Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z' fill='%2310b981'/%3E%3C/svg%3E")`,
                                                backgroundSize: '100px 100px'
                                            }}
                                        />
                                        {/* Geometric Grid */}
                                        <div className="absolute inset-0 opacity-20"
                                            style={{
                                                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                                                backgroundSize: '40px 40px',
                                                transform: `perspective(1000px) rotateX(60deg) translateY(${mousePos.y * 0.5}px) translateZ(-100px)`
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Responsive Overlay Layout */}
                                <div className="relative z-20 flex flex-col lg:flex-row items-center justify-start lg:justify-between px-6 lg:px-12 pt-32 lg:pt-0 pb-32 pointer-events-none">

                                    {/* MAIN AREA: Verse Projection */}
                                    <div className="w-full lg:w-2/3 flex items-center justify-center p-4">
                                        {/* AR Floating Verse Card */}
                                        <div className={`w-full ${VERSES[currentVerseIdx].arabic.length > 100 ? 'max-w-4xl' : 'max-w-2xl'} bg-slate-900/60 backdrop-blur-3xl border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative group transition-all duration-500 pointer-events-auto ${murojaahMode === 'listening' || murojaahMode === 'evaluating' ? 'scale-[0.98] border-cyan-500/30' : murojaahMode === 'corrected' ? 'border-red-500/40' : murojaahMode === 'success' ? 'border-emerald-500/40' : ''}`}>
                                            {/* Status Dots */}
                                            <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 space-x-1.5 bg-slate-800 px-3 py-1 rounded-full border border-white/5">
                                                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${murojaahMode === 'listening' ? 'bg-cyan-500' : murojaahMode === 'corrected' ? 'bg-red-500' : 'bg-emerald-500'}`} />
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                                            </div>

                                            {/* Card Header */}
                                            <div className="flex justify-between items-start mb-8">
                                                <div className="flex flex-col">
                                                    <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5 transition-colors ${murojaahMode === 'listening' ? 'text-emerald-400' : 'text-emerald-400'}`}>
                                                        {murojaahMode === 'listening' ? "Spiritual Alignment Active" : (isArMode ? "Spatial Sync" : "Spiritual Core Stabilized")}
                                                    </span>
                                                    <div className="flex items-center space-x-3">
                                                        <h3 className="text-white font-bold text-base md:text-lg">{VERSES[currentVerseIdx].ref}</h3>
                                                        <span className="bg-emerald-500/15 text-emerald-400 text-[9px] font-bold px-2 py-1 rounded-md border border-emerald-500/20 tracking-widest uppercase">Kemenag RI</span>
                                                    </div>
                                                </div>
                                                <div className="text-right hidden sm:block">
                                                    <span className="text-emerald-500/50 text-[9px] font-bold tracking-[0.1em] uppercase block mb-1">Recital Focus</span>
                                                    <span className={`font-mono text-sm md:text-base font-bold transition-colors ${murojaahMode === 'success' ? 'text-emerald-400' : 'text-emerald-500/70'}`}>
                                                        {murojaahMode === 'success' ? "Focus Peak" : "Synchronizing"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Verse Display Area with Word Highlighting & Scrolling */}
                                            <div className={`relative flex transition-all duration-500 overflow-y-auto custom-scrollbar items-start ${VERSES[currentVerseIdx].arabic.length > 250 ? 'py-4 md:py-6' : 'pt-12 pb-16 md:pt-20 md:pb-32'} px-2 md:px-10 h-[250px] md:h-[450px]`}>
                                                <div
                                                    className={`${getVerseFontSize(VERSES[currentVerseIdx].arabic)} font-quran text-white text-right flex flex-wrap justify-start transition-all duration-700 pb-20 md:pb-32`}
                                                    dir="rtl"
                                                    style={{ gap: '1rem 1.5rem' }}
                                                >
                                                    {VERSES[currentVerseIdx].arabic.split(" ").map((word, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`transition-all duration-300 ${idx === currentWordIdx ? 'text-emerald-400 scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]' : 'opacity-90'}`}
                                                        >
                                                            {word}
                                                        </span>
                                                    ))}
                                                </div>

                                                {murojaahMode === 'evaluating' && (
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-slate-950/20 backdrop-blur-sm rounded-3xl">
                                                        <div className="flex space-x-1.5 items-end h-12">
                                                            {[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((h, i) => (
                                                                <div key={i} className="w-1.5 bg-emerald-500 rounded-full animate-bounce shadow-[0_0_15px_#10b981]" style={{ height: `${h * 15}%`, animationDelay: `${i * 0.1}s` }} />
                                                            ))}
                                                        </div>
                                                        <span className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
                                                            Spiritual Resonance Lock...
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Translation & Nav */}
                                            <div className="space-y-6">
                                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                <p className={`${VERSES[currentVerseIdx].translation.length > 200 ? 'text-xs md:text-sm' : 'text-sm md:text-lg'} text-slate-300 leading-relaxed text-left font-light italic transition-all duration-500 ${murojaahMode === 'listening' || murojaahMode === 'evaluating' ? 'opacity-10 blur-md' : 'opacity-100'}`}>
                                                    "{VERSES[currentVerseIdx].translation}"
                                                </p>
                                            </div>

                                            {/* Side Nav Arrows - Better for Mobile Touch */}
                                            <button onClick={(e) => { e.stopPropagation(); prevVerse(); }} className="absolute -left-4 lg:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 md:bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-400 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 pointer-events-auto shadow-lg z-50">
                                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); nextVerse(); }} className="absolute -right-4 lg:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 md:bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-400 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 pointer-events-auto shadow-lg z-50">
                                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* SIDEBAR: Neural Insights (Desktop Only) */}
                                    <div className="hidden lg:flex w-1/3 h-full flex-col justify-center space-y-6 pl-12 pr-6">
                                        {/* Mishary Rasyid HUD inside Sidebar */}
                                        <div className={`bg-slate-900/60 backdrop-blur-2xl border ${murojaahMode === 'corrected' ? 'border-red-500/30' : murojaahMode === 'success' ? 'border-emerald-500/30' : 'border-white/10'} rounded-[2rem] p-6 shadow-2xl transition-all duration-500 ${murojaahMode === 'idle' ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100 grayscale-0 blur-0'}`}>
                                            <div className="flex items-center space-x-5 mb-6">
                                                <div className="relative">
                                                    <div className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]`}>
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hE67-6vXkL6rXvAnF_GfD7J_6v_G000000&s" alt="Mishary Rasyid" className="w-full h-full object-cover grayscale brightness-110" />
                                                    </div>
                                                    {(murojaahMode === 'listening' || murojaahMode === 'evaluating') && <div className="absolute -inset-1.5 border-2 border-emerald-500/40 rounded-2xl animate-ping" />}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Syeikh Mishary Rasyid</p>
                                                    <h4 className="text-white font-bold text-sm tracking-tight">Lead Reciter Persona</h4>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                                                    <p className="text-[10px] text-emerald-500/50 uppercase tracking-widest mb-2">Spiritual Status</p>
                                                    <p className={`text-sm font-mono text-emerald-400`}>
                                                        {murojaahMode === 'idle' ? "READY_STANDBY" : "TALAQQI_ACTIVE"}
                                                    </p>
                                                </div>

                                                {(murojaahMode === 'corrected' || murojaahMode === 'success') && (
                                                    <div className={`rounded-2xl p-4 border animate-in slide-in-from-top-2 ${murojaahMode === 'corrected' ? 'bg-red-500/5 border-red-500/20 text-red-400' : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400'}`}>
                                                        <p className="text-[10px] uppercase tracking-widest mb-2 opacity-50">AI Feedback</p>
                                                        <p className="text-xs font-medium leading-relaxed italic">"{teacherMessage}"</p>
                                                    </div>
                                                )}

                                                {murojaahMode === 'listening' && (
                                                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 animate-in fade-in transition-all">
                                                        <p className="text-[10px] text-emerald-400/50 uppercase tracking-[0.2em] mb-3">Live Recital Stream</p>
                                                        <p className="text-emerald-400 text-sm font-mono text-right min-h-[40px] italic">"{transcript}"</p>
                                                        <div className="mt-4 flex space-x-1 h-1 justify-end">
                                                            {[...Array(12)].map((_, i) => (
                                                                <div key={i} className="flex-1 bg-emerald-500/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.05}s` }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Secondary Stats Panel */}
                                        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 space-y-6">
                                            <div>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Daily Journey</p>
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                                                        <Trophy className="w-6 h-6 text-emerald-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-bold text-lg leading-none mb-1">{dailyStreak} Day Streak</p>
                                                        <p className="text-[10px] text-emerald-500/60 font-mono tracking-widest uppercase">Consistency +12%</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-[1px] w-full bg-white/5" />

                                            <div>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Diagnostic Feed</p>
                                                <div className="space-y-3 font-mono text-[10px]">
                                                    <div className="flex justify-between"><span className="text-slate-500">Tajweed Score:</span> <span className="text-emerald-500">98.9%</span></div>
                                                    <div className="flex justify-between"><span className="text-slate-500">Makhraj Accuracy:</span> <span className="text-cyan-500">OPTIMAL</span></div>
                                                    <div className="flex justify-between"><span className="text-slate-500">Temporal Sync:</span> <span className="text-emerald-500">LOCKED</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MOBILE ONLY: Floating AI HUD (Minimized) */}
                                    <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-full px-8 pointer-events-none">
                                        {(murojaahMode !== 'idle') && (
                                            <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 flex items-center space-x-3 shadow-2xl animate-in slide-in-from-top-4">
                                                <div className={`w-8 h-8 rounded-lg overflow-hidden border transition-colors ${murojaahMode === 'corrected' ? 'border-red-500' : 'border-emerald-500'}`}>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hE67-6vXkL6rXvAnF_GfD7J_6v_G000000&s" alt="AI" className="w-full h-full object-cover grayscale" />
                                                </div>
                                                <div className="flex-1">
                                                    {/* Removed AI Correction Active status as requested */}
                                                    <h4 className={`text-[10px] font-bold ${murojaahMode === 'corrected' ? 'text-red-400' : 'text-emerald-400'}`}>
                                                        {murojaahMode === 'listening' ? "Listening..." : murojaahMode === 'evaluating' ? "Analyzing..." : teacherMessage.slice(0, 30) + "..."}
                                                    </h4>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tracking Corners - Visible on both */}
                                    <div className="absolute inset-0 pointer-events-none opacity-20 lg:opacity-40">
                                        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl" />
                                        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-xl" />
                                        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-xl" />
                                        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-emerald-500/30 rounded-br-xl" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* AR HUD (Heads-Up Display) */}
            <div className="relative z-30 h-full flex flex-col justify-between p-6 pointer-events-none">
                {/* Top Bar */}
                <div className="flex justify-between items-start pointer-events-auto">
                    {gameState === 'session' && (
                        <>
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col">
                                    <div className="text-white font-bold text-sm md:text-base tracking-wider">
                                        AR<span className="text-emerald-400">VERSE</span>
                                    </div>
                                    <div className="text-white/60 text-[10px] md:text-xs font-handwriting tracking-wide">
                                        by arvaas
                                    </div>
                                </div>
                                {/* Home Button */}
                                <Link href="/" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95">
                                    <Home className="w-5 h-5 md:w-6 md:h-6" />
                                </Link>
                            </div>
                            <div className="flex flex-col items-center space-y-6">
                                <button
                                    onClick={() => setIsArMode(!isArMode)}
                                    className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-emerald-500/30 flex items-center space-x-3 group hover:border-emerald-500 transition-all"
                                >
                                    <div className="flex items-center space-x-2">
                                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isArMode ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                                            {isArMode ? "Mode: AR Reality" : "Mode: Digital"}
                                        </span>
                                    </div>
                                    <div className="h-4 w-[1px] bg-white/10" />
                                    {isArMode ? <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> : <Monitor className="w-3.5 h-3.5 text-cyan-400" />}
                                </button>
                            </div>
                            <div className="flex flex-col items-end space-y-3">
                                <div className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-colors ${murojaahMode === 'listening' ? 'text-emerald-400' : 'text-white/30'}`}>
                                    {murojaahMode === 'idle' ? "Start" :
                                        murojaahMode === 'listening' ? "Listen" :
                                            murojaahMode === 'evaluating' ? "Analyzing" :
                                                "Done"}
                                </div>
                                <button
                                    onClick={handleMurojaahToggle}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all active:scale-90 relative group overflow-hidden ${murojaahMode === 'listening' ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]' : 'bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30'}`}
                                >
                                    {murojaahMode === 'listening' || murojaahMode === 'evaluating' ? (
                                        <div className="absolute inset-0 bg-emerald-500/20 animate-pulse" />
                                    ) : null}

                                    {murojaahMode === 'listening' ? (
                                        <Pause className="w-6 h-6 text-white" />
                                    ) : (
                                        <Play className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors ml-1" />
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div >

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                
                .font-serif {
                    font-family: 'Amiri', serif;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotateX(0deg); }
                    50% { transform: translateY(-20px) rotateX(2deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .bg-mesh {
                    background-image: 
                        linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </main >
    );
}
