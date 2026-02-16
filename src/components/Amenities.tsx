import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

const amenities = [
    { name: "Aromatic Garden", img: "/aromatic garden.jpg", span: "lg:col-span-1 lg:row-span-2" },
    { name: "Spacious Kitchen", img: "/spacious kitchen.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Party Lawn", img: "/party lawn.png", span: "lg:col-span-2 lg:row-span-1" },
    { name: "Multipurpose Court", img: "/multipurpose court.png", span: "lg:col-span-2 lg:row-span-1" },
    { name: "Modern Bedroom", img: "/modern bedroom.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Gym", img: "/gym.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Cricket Nets", img: "/cricket nets.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "1/2 Olympic Pool", img: "/olympic size pool.png", span: "lg:col-span-2 lg:row-span-1" },
    { name: "Landscaped Gardens", img: "/landscaped gardens.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Ventilated Flats", img: "/ventilated flats.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Large Balcony", img: "/large balcony.png", span: "lg:col-span-1 lg:row-span-1" },
    { name: "Jogging Track", img: "/jogging track.png", span: "lg:col-span-1 lg:row-span-1" }
];

const Amenities = () => {
    return (
        <section id="amenities" className="bg-white py-24">
            <div className="section-container px-4">
                {/* Custom Header Matching the Uploaded Image */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                            <span className="text-primary">Amenities</span> <span className="text-gray-800">for Every Age, Every Mood</span>
                        </h2>
                        <p className="text-xs md:text-sm tracking-[0.2em] font-medium text-gray-500 uppercase italic">
                            PREMIUM AMENITIES THAT TRANSFORM YOUR HOME INTO A PRIVATE RETREAT.
                        </p>

                        {/* Floral Divider - 3 flowers */}
                        <div className="flex items-center justify-center mt-10 relative">
                            <div className="h-[1px] w-full max-w-4xl bg-gray-200"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white px-4 flex items-center -space-x-1">
                                    <FlowerMotif className="w-4 h-4 text-accent rotate-[-15deg] opacity-60" />
                                    <FlowerMotif className="w-7 h-7 text-accent" />
                                    <FlowerMotif className="w-4 h-4 text-accent rotate-[15deg] opacity-60" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Custom Asymmetric Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] lg:auto-rows-[280px]">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`relative group overflow-hidden rounded-[2.5rem] shadow-lg ${amenity.span}`}
                        >
                            <img
                                src={amenity.img}
                                alt={amenity.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay matching the image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                            {/* Text label at bottom center as per request image */}
                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <p className="text-white font-bold text-sm md:text-base tracking-wide px-4">
                                    {amenity.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Amenities;
