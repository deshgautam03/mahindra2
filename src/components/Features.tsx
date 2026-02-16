import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

const Features = () => {
    const featureList = [
        {
            title: "PRIME AND WELL CONNECTED LOCATION",
            description: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value."
        },
        {
            title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
            description: "Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families, work-from-home needs, and everyday comfort."
        },
        {
            title: "WAKE UP TO GREEN, CALM LIVING",
            description: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park"
        },
        {
            title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
            description: "Offering 97,000 sq. ft. of amenities and clubhouse spaces, including Bougainvillea canopies, half-Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more."
        },
        {
            title: "SUSTAINABLE LIVING",
            description: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living"
        },
        {
            title: "75+ YEARS OF MAHINDRA TRUST",
            description: "Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, & a proven track record of timely delivery."
        }
    ];

    return (
        <section id="features" className="relative bg-white overflow-hidden py-24">
            {/* Background elements to match the delicate floraly feel */}
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#FFFBFA] to-transparent pointer-events-none"></div>

            <div className="section-container relative z-10">
                {/* Header Pattern consistent with About section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
                            <span className="text-gray-800">Features &</span> <span className="text-primary">Highlights</span>
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.3em] font-medium text-gray-500 uppercase mb-8 italic">
                            WHY BUY A HOME AT MAHINDRA BLOSSOM
                        </p>

                        {/* Divider with Flower */}
                        <div className="flex items-center justify-center space-x-6">
                            <div className="h-[1px] w-24 md:w-40 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                            <div className="flex items-center -space-x-1">
                                <FlowerMotif className="w-4 h-4 text-accent rotate-[-15deg]" />
                                <FlowerMotif className="w-6 h-6 text-accent z-10" />
                                <FlowerMotif className="w-4 h-4 text-accent rotate-[15deg]" />
                            </div>
                            <div className="h-[1px] w-24 md:w-40 bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Image (as requested) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white bg-white">
                            <img
                                src="/featureandhiglight.png"
                                alt="Mahindra Blossom Balcony View"
                                className="w-full h-[650px] object-cover"
                            />
                        </div>
                        {/* Decorative bloom element peeking out */}
                        <div className="absolute -bottom-10 -right-10 opacity-10 blur-sm -z-10">
                            <FlowerMotif className="w-64 h-64 text-primary" />
                        </div>
                    </motion.div>

                    {/* Right Side: Features List (as requested) */}
                    <div className="lg:col-span-7 space-y-8 pt-4">
                        {featureList.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex items-start space-x-6 group"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <FlowerMotif className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom red border-like element from image */}
            <div className="absolute bottom-0 inset-x-0 h-2 bg-primary"></div>
        </section>
    );
};

export default Features;
