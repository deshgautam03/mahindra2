const Footer = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                                M
                            </div>
                            <div className="flex flex-col">
                                <span className="font-playfair font-bold text-xl leading-none">Mahindra Blossom</span>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Lifespaces</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-md">
                            Mahindra Blossom is a premium residential development in Whitefield, Bangalore,
                            designed to offer a harmonious blend of nature and modern luxury through the inspiration
                            of bougainvillea blooms.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><a href="#about" className="hover:text-white transition-colors">About Project</a></li>
                            <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                            <li><a href="#floor-plans" className="hover:text-white transition-colors">Floor Plans</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Legal & RERA</h4>
                        <ul className="space-y-2 text-[10px] text-white/50">
                            <li>Project RERA: PRM/KA/RERA/1251/446/PR/210312/004000</li>
                            <li>Agent RERA: PRM/KA/RERA/1251/446/AG/190207/001300</li>
                            <li className="mt-4 pt-4 border-t border-white/10 text-white/70 italic text-xs">
                                "Authorized channel partner of Mahindra Blossom by Mahindra Lifespaces"
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors">DISCLAIMER</a>
                        <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                    </div>
                    <p>©2025 Mahindra Blossom. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
