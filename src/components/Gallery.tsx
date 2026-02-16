import { useState } from 'react';
import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

const row1 = [
    "/party lawn.png",
    "/modern bedroom.png",
    "/multipurpose court.png",
    "/aromatic garden.jpg",
    "/party lawn.png",
    "/modern bedroom.png",
    "/multipurpose court.png",
    "/aromatic garden.jpg"
];

const row2 = [
    "/ventilated flats.png",
    "/large balcony.png",
    "/landscaped gardens.png",
    "/modern bedroom.png",
    "/gym.png",
    "/ventilated flats.png",
    "/large balcony.png",
    "/landscaped gardens.png"
];

const row3 = [
    "/spacious kitchen.png",
    "/cricket nets.png",
    "/olympic size pool.png",
    "/homepagebg.jpg",
    "/spacious kitchen.png",
    "/cricket nets.png",
    "/olympic size pool.png",
    "/homepagebg.jpg"
];

const ScrollingRow = ({ images, direction, isHovered }: { images: string[], direction: 'left' | 'right', isHovered: boolean }) => {
    return (
        <div className="flex overflow-hidden py-2 select-none">
            <motion.div
                className="flex flex-nowrap gap-4"
                animate={isHovered ? {
                    x: direction === 'left' ? [0, -1000] : [-1000, 0],
                } : {
                    x: direction === 'left' ? 0 : -1000
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 10, // Fast speed
                        ease: "linear",
                    },
                }}
            >
                {/* Render images twice for seamless loop */}
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className="w-[280px] md:w-[400px] aspect-video flex-shrink-0 rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white bg-white"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Gallery = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="gallery"
            className="bg-[#FFFBFA] py-24 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="section-container mb-12">
                {/* Design-Matched Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                            <span className="text-gray-800">A</span> <span className="text-primary">Glimpse</span> <span className="text-gray-800">of Life at Mahindra Blossom</span>
                        </h2>
                        <p className="text-xs md:text-sm tracking-[0.2em] font-medium text-gray-500 uppercase italic mb-10">
                            VIEW IMAGES OF HOMES, AMENITIES, AND THE SURROUNDING ENVIRONMENT.
                        </p>

                        {/* Floral Divider */}
                        <div className="flex items-center justify-center relative">
                            <div className="h-[1px] w-full max-w-4xl bg-gray-200"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#FFFBFA] px-4 flex items-center -space-x-1">
                                    <FlowerMotif className="w-4 h-4 text-accent rotate-[-15deg] opacity-60" />
                                    <FlowerMotif className="w-7 h-7 text-accent" />
                                    <FlowerMotif className="w-4 h-4 text-accent rotate-[15deg] opacity-60" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Moving Rows triggered by section hover */}
            <div className="space-y-2">
                <ScrollingRow images={row1} direction="right" isHovered={isHovered} />
                <ScrollingRow images={row2} direction="left" isHovered={isHovered} />
                <ScrollingRow images={row3} direction="right" isHovered={isHovered} />
            </div>


        </section>
    );
};

export default Gallery;
