import React from 'react';
import FlowerMotif from './FlowerMotif';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => {
    return (
        <div className="flex flex-col items-center text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-3xl md:text-5xl font-playfair font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-sm md:text-base tracking-[0.2em] uppercase font-medium ${light ? 'text-white/80' : 'text-gray-500'}`}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flower-divider"
            >
                <FlowerMotif className="w-8 h-8 text-accent" />
            </motion.div>
        </div>
    );
};

export default SectionHeader;
