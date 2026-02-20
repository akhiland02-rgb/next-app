"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight, Terminal, Globe } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
    { name: "// Home", href: "#home" },
    { name: "// Services", href: "#services" },
    { name: "// Results", href: "#portfolio" },
    { name: "// Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <header
            className={`fixed top-4 left-0 right-0 z-[100] transition-all duration-500 w-full px-4 md:px-6`}
        >
            <div className={`max-w-5xl mx-auto rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-black/80 py-3 shadow-2xl' : 'bg-transparent py-4'}`}>
                <div className="px-6 flex items-center justify-between">

                    {/* Logo - Tech Style */}
                    <div
                        className="flex items-center gap-3 group cursor-pointer"
                        onClick={() => {
                            window.location.href = "#home";
                            setMobileMenuOpen(false);
                        }}
                    >
                        <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                            <Terminal size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-mono font-bold tracking-tighter text-white leading-none">
                                ENTEECOM<span className="text-emerald-500">_</span>
                            </h1>
                            <span className="text-[9px] font-sans text-zinc-500 tracking-wider uppercase mt-1">Shopify Development Architecture</span>
                        </div>
                    </div>

                    {/* Desktop Nav - Centered & Programming Style */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-mono text-zinc-400 hover:text-emerald-400 transition-colors relative group tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Contact info + Action (Desktop Only) */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="tel:7892393901" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono text-[10px]">
                            <Phone size={12} className="text-emerald-500" />
                            7892393901
                        </a>
                        <Magnetic>
                            <button className="px-5 py-2 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded hover:bg-emerald-500 hover:text-black transition-all uppercase tracking-widest">
                                Init_Project()
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 relative z-[101]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Terminal Style */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 top-0 w-full h-screen bg-[#050505] z-[90] flex flex-col p-8 pt-32 gap-6 overflow-y-auto"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                        {navLinks.map((link, i) => (
                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-mono text-zinc-300 flex items-center gap-4 group hover:text-emerald-400 transition-all border-b border-white/5 pb-4"
                            >
                                <span className="text-emerald-500/50 text-sm opacity-50 group-hover:opacity-100">0{i + 1}</span>
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-auto pb-8 flex flex-col gap-6"
                        >
                            <div className="p-6 border border-white/10 rounded-lg bg-white/5 font-mono text-sm text-zinc-400">
                                <p className="mb-2 text-emerald-500">$ connecting_to_server...</p>
                                <p>STATUS: ONLINE</p>
                                <p>REGION: KANNUR_KERALA</p>
                            </div>
                            <a href="tel:7892393901" className="w-full py-4 bg-emerald-600 text-white font-mono text-center rounded text-sm hover:bg-emerald-500 transition-all uppercase tracking-widest">
                                Execute_Call()
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
