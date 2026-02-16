import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

const About = () => {
    return (
        <section id="about" className="relative bg-[#FFFBFA] overflow-hidden py-24">
            {/* Subtle background watermark/pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 transform translate-x-1/4 -translate-y-1/4">
                    <FlowerMotif className="w-full h-full text-primary" />
                </div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 transform -translate-x-1/4 translate-y-1/4 rotate-45">
                    <FlowerMotif className="w-full h-full text-primary" />
                </div>
            </div>

            <div className="section-container relative z-10">
                {/* Custom Header matching the image */}
                <div className="text-left mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
                            <span className="text-primary">About</span> <span className="text-gray-800">Mahindra Blossom</span>
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.3em] font-medium text-gray-500 uppercase mb-8">
                            PREMIUM APARTMENTS IN WHITEFIELD, BENGALURU
                        </p>

                        {/* Divider with Flower */}
                        <div className="flex items-center justify-start space-x-6">
                            <div className="flex items-center -space-x-1">
                                <FlowerMotif className="w-4 h-4 text-accent rotate-[-15deg]" />
                                <FlowerMotif className="w-6 h-6 text-accent z-10" />
                                <FlowerMotif className="w-4 h-4 text-accent rotate-[15deg]" />
                            </div>
                            <div className="h-[1px] w-32 md:w-48 bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content - Now consistently on the left as requested */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-gray-700 px-4 lg:pr-12"
                    >
                        <p className="text-base md:text-lg leading-relaxed">
                            <span className="font-bold">Mahindra Blossom</span> is a thoughtfully designed <span className="font-bold text-gray-900">premium residential apartment project in Whitefield, Bangalore</span>, developed by <span className="font-bold text-gray-900">Mahindra Lifespaces</span>, part of the trusted Mahindra Group. Known for quality construction, transparency, and sustainable development, Mahindra Lifespaces has delivered landmark residential communities across India.
                        </p>

                        <p className="text-base leading-relaxed">
                            Strategically located <span className="font-bold text-gray-900">near Hope Farm Junction, Whitefield</span>, Mahindra Blossom offers <span className="font-bold text-gray-900">2 BHK, 3 BHK, and 4 BHK luxury apartments</span> crafted for modern families, professionals, and long-term investors. The project blends <span className="font-bold text-gray-900">urban convenience with green living</span>, creating a calm, secure, and future-ready residential environment.
                        </p>

                        <p className="text-base leading-relaxed">
                            With excellent connectivity to <span className="font-bold text-gray-900">ITPL, major tech parks, schools, hospitals, shopping hubs, and and fully operational metro station</span>, Mahindra Blossom ensures everyday comfort while offering strong potential for <span className="font-bold text-gray-900">property appreciation and rental demand</span>.
                        </p>

                        <p className="text-lg md:text-xl font-playfair italic font-medium text-gray-800 border-l-4 border-primary pl-6 py-2">
                            "Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed by the reliability of a trusted developer."
                        </p>
                    </motion.div>

                    {/* Right Side: Stacked Animated Images based on user request */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[420px] lg:max-w-none lg:w-[450px]">
                            {/* Back Image (aboutmahindraback) peeking out */}
                            <motion.div
                                initial={{ rotate: -5, x: -20 }}
                                whileInView={{ rotate: -8, x: -30 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute top-4 left-4 w-full aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white shadow-lg"
                            >
                                <img
                                    src="/aboutmahindraback.png"
                                    alt="Background Architecture"
                                    className="w-full h-full object-cover grayscale-[0.2]"
                                />
                            </motion.div>

                            {/* Front Image (aboutmahindrafront) */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white bg-white"
                            >
                                <img
                                    src="/aboutmahindrafront.jpg"
                                    alt="Mahindra Blossom Landscape"
                                    className="w-full h-full object-cover"
                                />
                                {/* Soft gloss effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                            </motion.div>

                            {/* Stats card or subtle branding */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-3xl shadow-2xl border-t-4 border-primary z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <FlowerMotif className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 leading-none">8 Acres</p>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mt-1">Lush Greenery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
