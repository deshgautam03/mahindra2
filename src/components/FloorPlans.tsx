import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

interface FloorPlanCardProps {
    type: string;
    img: string;
    soldOut?: boolean;
    onViewPlan: () => void;
}

const FloorPlanCard: React.FC<FloorPlanCardProps> = ({ type, img, soldOut, onViewPlan }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative pt-6 group"
    >
        {/* Floating Label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-white/95 backdrop-blur-sm px-8 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100">
                <span className="text-gray-600 font-bold text-sm tracking-wide whitespace-nowrap uppercase">
                    {type}
                </span>
            </div>
        </div>

        {/* Card Body */}
        <div className="bg-white rounded-[2.5rem] p-4 h-[350px] relative overflow-hidden flex flex-col items-center justify-center shadow-2xl">
            {/* Blurred Floor Plan Background */}
            <div className="absolute inset-0 z-0 p-4">
                <img
                    src={img}
                    alt={type}
                    className="w-full h-full object-contain filter blur-md opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* View Plan Button */}
            <div className={`relative z-10 w-full flex justify-center ${soldOut ? 'blur-[1px]' : ''}`}>
                <button
                    disabled={soldOut}
                    onClick={onViewPlan}
                    className={`px-12 py-3 rounded-full font-bold transition-all border border-gray-300 shadow-sm ${soldOut
                            ? 'bg-gray-50/50 text-transparent border-transparent cursor-not-allowed opacity-0'
                            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border-gray-300'
                        }`}
                >
                    View Plan
                </button>
            </div>

            {/* SOLD OUT STAMP */}
            {soldOut && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, rotate: -15 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: -10 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="border-8 border-red-600 px-6 py-2 rounded-xl text-red-600 font-black text-4xl md:text-5xl uppercase tracking-tighter shadow-2xl bg-white/10 backdrop-blur-[2px]"
                        style={{ boxShadow: 'inset 0 0 10px rgba(220, 38, 38, 0.2)' }}
                    >
                        SOLD OUT
                    </motion.div>
                </div>
            )}
        </div>
    </motion.div>
);

interface FloorPlansProps {
    onViewPlan: (title: string) => void;
}

const FloorPlans: React.FC<FloorPlansProps> = ({ onViewPlan }) => {
    const plans = [
        { type: "MASTER PLAN", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
        { type: "2 BHK", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800", soldOut: true },
        { type: "2 BHK (Large)", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800", soldOut: true },
        { type: "3 BHK", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
        { type: "3.5 BHK", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
        { type: "4 BHK", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <section id="floor-plans" className="bg-[#E63946] py-24">
            <div className="section-container">
                {/* Custom Header Matching the Red Themed Image */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-playfair font-medium text-white mb-4"
                    >
                        Thoughtfully Designed Floor Plans
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xs md:text-sm tracking-[0.2em] text-white/90 uppercase font-medium italic mb-10"
                    >
                        SMART LAYOUTS THAT MAXIMIZE SPACE, LIGHT, AND EVERYDAY COMFORT.
                    </motion.p>

                    {/* Divider with Flowers */}
                    <div className="relative flex items-center justify-center">
                        <div className="h-[1px] w-full max-w-[800px] bg-white/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-[#E63946] px-4 flex items-center -space-x-1">
                                <FlowerMotif className="w-4 h-4 text-white rotate-[-15deg] opacity-60" />
                                <FlowerMotif className="w-7 h-7 text-white" />
                                <FlowerMotif className="w-4 h-4 text-white rotate-[15deg] opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
                    {plans.map((plan, index) => (
                        <FloorPlanCard
                            key={index}
                            {...plan}
                            onViewPlan={() => !plan.soldOut && onViewPlan(plan.type)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;
