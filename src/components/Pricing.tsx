import React from 'react';
import { motion } from 'framer-motion';
import FlowerMotif from './FlowerMotif';

interface PricingCardProps {
    type: string;
    size: string;
    price: string;
    soldOut?: boolean;
    onGetQuote: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ type, size, price, soldOut, onGetQuote }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="relative group h-full"
    >
        {/* Card Body */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col items-center text-center h-full min-h-[350px]">
            {/* Geometric Background Pattern - Inspired by the image */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className={`relative z-10 w-full flex flex-col items-center h-full ${soldOut ? 'filter blur-[1px]' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">{type}</h3>
                <p className="text-gray-600 font-medium mb-4 text-sm md:text-base">{size}</p>

                <div className="mt-auto mb-10">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">{price}</span>
                </div>

                <button
                    disabled={soldOut}
                    onClick={onGetQuote}
                    className={`px-12 py-3 rounded-full font-bold transition-all border border-gray-300 shadow-sm ${soldOut
                        ? 'bg-gray-100 text-gray-400 opacity-0'
                        : 'bg-[#f0f0f0] text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    Get Quote
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

interface PricingProps {
    onGetQuote: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGetQuote }) => {
    return (
        <section id="pricing" className="bg-[#E63946] pt-24 pb-32">
            <div className="section-container">
                {/* Custom Header to match the image exactly */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-playfair font-medium text-white mb-4"
                    >
                        Unlock the Door to Affordable Luxury
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xs md:text-sm tracking-[0.2em] text-white/90 uppercase font-medium italic mb-10"
                    >
                        EXPLORE APARTMENT OPTIONS AND PRICING DETAILS TAILORED TO YOUR NEEDS
                    </motion.p>

                    {/* Divider matching the image */}
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

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-20">
                    <PricingCard
                        type="2 BHK"
                        size="1200-1350 sq.ft."
                        price="₹1.88cr Onwards"
                        soldOut
                        onGetQuote={onGetQuote}
                    />
                    <PricingCard
                        type="3 BHK"
                        size="1800-1850 sq.ft."
                        price="₹2.18cr Onwards"
                        onGetQuote={onGetQuote}
                    />
                    <PricingCard
                        type="4 BHK"
                        size="2200-2350 sq.ft."
                        price="₹2.88cr Onwards"
                        onGetQuote={onGetQuote}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
