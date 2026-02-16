import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

const Location = () => {
    const highlights = [
        { title: "Metro Proximity", desc: "Abutting Hopefarm Channasandra Metro Station" },
        { title: "Transport Hubs", desc: "Key terminals within 13km radius (KR Puram, Whitefield Railway)" },
        { title: "IT Corridors", desc: "Major IT parks within 2.5km (ITPL, Bagmane Tech Park)" },
        { title: "Modern Life", desc: "Social infrastructure within 3km (Nexus Shantiniketan, Manipal Hospital)" }
    ];

    return (
        <section id="location" className="bg-secondary/20">
            <div className="section-container">
                <SectionHeader
                    title="A Perfect Location"
                    subtitle="EVERYTHING YOU NEED, JUST MINUTES AWAY"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border-t-2 border-accent">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <FlowerMotif className="w-5 h-5 text-accent" />
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-primary rounded-3xl text-white shadow-xl shadow-red-100">
                            <h3 className="text-xl font-bold mb-2">Hopefarm Junction</h3>
                            <p className="text-white/80 text-sm italic">"The emerging heart of Whitefield, perfectly balancing work and wellness."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <img
                            src="/map.png"
                            alt="Location Map"
                            className="w-full h-full object-cover"
                        />
                        {/* Map Marker Placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute opacity-20"></div>
                            <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow-xl mt-2 font-bold text-primary text-sm whitespace-nowrap">
                                Mahindra Blossom
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Video Tour Section */}
                <div className="relative rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl shadow-red-100/30">
                    <img
                        src="/take the virtual toor.png"
                        alt="Project Aerial View"
                        className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-12">
                        <h3 className="text-white text-4xl md:text-5xl font-playfair font-bold tracking-wide">Take The Virtual Tour</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
