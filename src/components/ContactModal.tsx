import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Download Brochure & Get Pricing" }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="bg-primary p-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <h3 className="text-2xl font-playfair font-bold mb-2 pr-8">{title}</h3>
                            <p className="text-white/80 text-sm italic">"Join the community of positive energy at Mahindra Blossom."</p>
                        </div>

                        <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! Our team will contact you shortly.'); onClose(); }}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-4 text-center flex items-center justify-center space-x-2"
                            >
                                <Send size={18} />
                                <span>Submit Expression of Interest</span>
                            </button>

                            <div className="text-[10px] text-gray-400 text-center leading-relaxed">
                                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and authorize our representatives to contact you regarding your interest.
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
