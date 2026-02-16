import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

interface HeroProps {
    onGetQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
    const [doorStage, setDoorStage] = useState(1);

    const highlights = [
        "8 Acres | 1 Towers | 6 Wings | 733 Units",
        "Make it yours at just 7.5% down payment",
        "Abutting Hopefarm metro station",
        "IGBC Gold rated green home",
        "75+ Years of Mahindra Trust"
    ];

    // Door animation sequence: Stage 1 -> 2 -> 3
    useEffect(() => {
        const timer1 = setTimeout(() => setDoorStage(2), 2000);
        const timer2 = setTimeout(() => setDoorStage(3), 3500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const doorImages = {
        1: "/door1.png",
        2: "/door2.png",
        3: "/door3.png"
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/homepagebg.jpg"
                    alt="Mahindra Blossom Tower"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24">
                {/* Left Column: Content */}
                <div className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-xl"
                    >
                        {/* Title Section - Refined smaller font size */}
                        <div className="mb-6 flex flex-col items-center lg:items-start">
                            <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-bold font-playfair mb-2 leading-none whitespace-nowrap">
                                <span className="text-[#E63946]">Mahindra</span> <span className="text-white">Blossom</span>
                            </h1>
                            <p className="tracking-[0.4em] text-[10px] md:text-xs font-medium text-white/90 uppercase mt-2">
                                HOME OF POSITIVE ENERGY
                            </p>

                            {/* Flower Divider */}
                            <div className="flex items-center justify-center lg:justify-start w-full mt-4 space-x-6">
                                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-accent/40"></div>
                                <FlowerMotif className="w-5 h-5 text-accent" />
                                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-accent/40"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg font-medium text-white/90 mb-8 max-w-sm mx-auto lg:mx-0 leading-relaxed italic">
                            2, 3 & 4BHK premium homes in Hopefarm Jn., Whitefield,
                        </p>

                        {/* Price Tag Box */}
                        <div className="relative inline-block mb-10 group cursor-pointer" onClick={onGetQuote}>
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-8 shadow-2xl flex items-center justify-center">
                                <span className="text-xl md:text-3xl font-bold font-playfair text-white italic tracking-wider">
                                    ₹1.88cr <span className="text-base font-normal not-italic text-white/60 ml-2">Onwards</span>
                                </span>
                                <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5 skew-x-[25deg]"></div>
                            </div>
                        </div>

                        {/* Feature List */}
                        <ul className="space-y-3.5 mb-10 flex flex-col items-center lg:items-start">
                            {highlights.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center space-x-4 text-white/80 w-full justify-center lg:justify-start"
                                >
                                    <FlowerMotif className="w-4 h-4 text-accent flex-shrink-0" />
                                    <span className="text-xs md:text-sm font-medium tracking-wide">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <button
                            onClick={onGetQuote}
                            className="btn-primary text-sm px-10 py-3.5 shadow-2xl shadow-red-900/20 group hover:scale-105 transition-all"
                        >
                            Get Pricing Details
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Sequential Door Image Transition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hidden lg:flex justify-end relative"
                >
                    {/* Reduced container size for a more compact look */}
                    <div className="relative w-full max-w-[380px] aspect-[10/14] bg-white rounded-t-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border-[12px] border-white">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={doorStage}
                                src={doorImages[doorStage as keyof typeof doorImages]}
                                alt={`Entryway Stage ${doorStage}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none"></div>
                        {/* Gloss effect on arch */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none"></div>
                    </div>
                    {/* Subtle glow behind arch */}
                    <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
                </motion.div>
            </div>

            {/* Decorative floating flower */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 opacity-20 pointer-events-none"
            >
                <FlowerMotif className="w-24 h-24 text-accent" />
            </motion.div>
        </section>
    );
};

export default Hero;
