"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, TrendingUp, Bell, Terminal, ChevronRight } from "lucide-react";
import Magnetic from "./Magnetic";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const audioRef = useRef(null);
    const [revealed, setRevealed] = useState(false);
    const [orders, setOrders] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const logoScale = useTransform(scrollYProgress, [0.4, 0.9], [1, 20]);
    const logoOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
    const logoY = useTransform(scrollYProgress, [0.4, 0.9], [0, 500]);

    useEffect(() => {
        const handleReveal = () => {
            if (!revealed && window.scrollY > 100) {
                setRevealed(true);
                if (audioRef.current) {
                    audioRef.current.volume = 0.5;
                    audioRef.current.play().catch(e => console.log("Sound interaction required"));
                }
                let count = 0;
                const interval = setInterval(() => {
                    count += 1;
                    setOrders(count);
                    if (count >= 1) clearInterval(interval);
                }, 600);
            }
        };
        window.addEventListener("scroll", handleReveal);
        return () => window.removeEventListener("scroll", handleReveal);
    }, [revealed]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section ref={containerRef} className="relative flex-center min-h-screen w-full text-white pt-32 pb-12 overflow-hidden">
            <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2021/08/04/audio_341b18cc3b.mp3" preload="auto" />

            {/* Tech-Layer: Matrix/Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Simple Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

            <motion.div
                className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center">
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-0 py-1.5 mb-8 text-[10px] font-sans text-emerald-400 uppercase tracking-widest mt-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Official Shopify Expert Partner</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-white"
                    >
                        We Build High-Converting <br />
                        <span className="text-emerald-500 italic font-sans">Shopify Stores</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-sans px-4"
                    >
                        Custom Store Setup, Theme Customization & Ecommerce Growth Solutions.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-6 mb-12 opacity-40 grayscale hover:grayscale-0 transition-all"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500">Trusted_By:</span>
                        <div className="flex gap-4 items-center">
                            <span className="text-[10px] font-bold text-zinc-400">50+ BRANDS</span>
                            <div className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span className="text-[10px] font-bold text-zinc-400">100% SUCCESS</span>
                        </div>
                    </motion.div>

                    {/* Stats Row - Centered */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 w-full font-mono">
                        <div className="flex flex-col items-center group">
                            <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">20+</div>
                            <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">Successful_Stores</div>
                        </div>
                        <div className="hidden sm:block text-emerald-900/50 opacity-30">|</div>
                        <div className="flex flex-col items-center group">
                            <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">2Cr+</div>
                            <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">Sales_Generated</div>
                        </div>
                        <div className="hidden sm:block text-emerald-900/50 opacity-30">|</div>
                        <div className="flex flex-col items-center group">
                            <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">100%</div>
                            <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">Client_Retention</div>
                        </div>
                    </motion.div>

                    {/* MODERN AGENCY CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-24 w-full">
                        <Magnetic>
                            <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-emerald-500 text-black font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all text-sm min-h-[60px] min-w-[220px]">
                                <span>Get a Quote</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Magnetic>

                        <button className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-white font-sans font-bold rounded-lg border border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-sm min-h-[60px] min-w-[220px]">
                            <span>Call Now</span>
                            <ChevronRight size={18} className="opacity-50" />
                        </button>
                    </motion.div>
                </div>

                {/* Shopify Logo Section - Centered Below Text */}
                <motion.div
                    style={{ scale: logoScale, opacity: logoOpacity, y: logoY }}
                    className="relative z-10 flex flex-col items-center pb-24 w-full mt-12"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/5 rounded-full mb-12 bg-white/5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">Verified Shopify Expert Partner</span>
                    </div>

                    <div className="relative flex flex-col items-center">
                        <AnimatePresence>
                            {revealed && (
                                <motion.div
                                    initial={{ opacity: 0, y: -15, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 100, scale: 1 }}
                                    className="absolute bottom-0 z-30 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono px-5 py-2.5 rounded backdrop-blur-md flex items-center gap-3 whitespace-nowrap uppercase tracking-wider shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                    </div>
                                    <span className="border-l border-white/10 pl-3">Order Received!</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            animate={{
                                filter: revealed ? "grayscale(0%) brightness(1.2)" : "grayscale(100%) brightness(50%)",
                                opacity: 0.4
                            }}
                            className="relative opacity-30"
                        >
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                                alt="Shopify Logo"
                                width={220}
                                height={60}
                                className="w-[140px] md:w-[200px] h-auto transition-all grayscale brightness-[0.4]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
