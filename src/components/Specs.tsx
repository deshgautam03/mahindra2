import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const specifications = [
    {
        title: "DOORS, WINDOWS & RAILINGS",
        img: "/doors,windows and railings.png",
        details: [
            "High-quality uPVC windows for noise reduction",
            "Balcony featuring SS railing with toughened glass",
            "Main door with teak wood frame and premium laminates",
            "Branded hardware and security locks"
        ]
    },
    {
        title: "WALLS & PAINT",
        img: "/walls.png",
        details: [
            "Plastic emulsion paint for all internal walls",
            "Weather-proof exterior grade emulsion paint",
            "POP punning for smooth finish in living/dining",
            "Designer tiles for toilet walls up to 7ft height"
        ]
    },
    {
        title: "CP & SANITARY FITTINGS",
        img: "/cp & sanitary fitting.png",
        details: [
            "Premium Kohler/Jaquar chromium plated fittings",
            "Wall-mounted EWC with concealed flush tank",
            "Wash basins with granite counters",
            "Provision for geyser and exhaust fan"
        ]
    },
    {
        title: "FLOOR FINISHES",
        img: "/floor finishes.png",
        details: [
            "Large sized vitrified tiles in living/dining/bedroom",
            "Anti-skid ceramic tiles in balconies and toilets",
            "Laminated wooden flooring in master bedroom",
            "Granite flooring for lift lobby and common areas"
        ]
    }
];

const Specs = () => {
    return (
        <section id="specs" className="bg-white">
            <div className="section-container">
                <SectionHeader
                    title="Smart Specifications"
                    subtitle="WHERE QUALITY MEETS FUNCTIONALITY"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {specifications.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/20 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-40 overflow-hidden">
                                <img src={spec.img} alt={spec.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 h-10 flex items-center">
                                    {spec.title}
                                </h3>
                                <ul className="space-y-3">
                                    {spec.details.map((detail, i) => (
                                        <li key={i} className="flex items-start text-xs text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1 mr-2 flex-shrink-0"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
