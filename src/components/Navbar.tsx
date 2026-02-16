import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Features', to: 'features' },
        { name: 'Pricing', to: 'pricing' },
        { name: 'Amenities', to: 'amenities' },
        { name: 'Floor Plans', to: 'floor-plans' },
        { name: 'Location', to: 'location' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-glass shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        M
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-playfair font-bold text-xl leading-none ${isScrolled ? 'text-gray-900' : 'text-white md:text-gray-900'}`}>
                            Mahindra
                        </span>
                        <span className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-primary' : 'text-white'}`}>
                            Lifespaces
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-primary font-semibold"
                            className={`cursor-pointer font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:+919901717349"
                        className="btn-primary flex items-center space-x-2 py-2 px-5 text-sm"
                    >
                        <Phone size={16} />
                        <span>+91 9901717349</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+919901717349"
                                className="flex items-center space-x-2 w-full btn-primary mt-4"
                            >
                                <Phone size={18} />
                                <span>+91 9901717349</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
