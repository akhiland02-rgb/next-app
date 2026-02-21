"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, ShoppingCart } from "lucide-react";
import Magnetic from "./Magnetic";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef(null);
    const [orderCount, setOrderCount] = useState(12431);
    const [showSale, setShowSale] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Scroll-driven transforms for the centered logo
    const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5]);
    const logoOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 0]);
    const logoY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    // Grayscale to color transition
    // logoFilter will map from grayscale(100%) at the start to grayscale(0%) as we scroll
    const logoGrayscale = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
    const logoFilter = useTransform(logoGrayscale, (value) => `grayscale(${value}%) brightness(1.2)`);

    // Live order simulation
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setOrderCount(prev => prev + 1);
                setShowSale(true);
                setTimeout(() => setShowSale(false), 4000);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section ref={containerRef} className="relative min-h-screen w-full text-white pt-64 pb-12 overflow-hidden flex flex-col items-center">
            {/* Tech-Layer: Minimal Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
            />

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-emerald-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <motion.div
                className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 mb-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Bold Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] text-white"
                >
                    We Build <br />
                    <span className="text-emerald-500">High-Converting</span> <br />
                    Shopify Stores
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-zinc-400 mb-14 max-w-3xl leading-relaxed font-sans font-light"
                >
                    Custom Store Setup, Theme Customization & Ecommerce Growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-10 w-full">
                    <Magnetic tabIndex={0}>
                        <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-emerald-500 text-black font-sans font-bold rounded-full shadow-[0_20px_40px_rgba(16,185,129,0.25)] hover:bg-white transition-all text-base min-w-[240px]">
                            <span>Get a Quote</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Magnetic>

                    <button className="flex items-center justify-center gap-3 px-12 py-6 bg-transparent text-white font-sans font-semibold rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-base min-w-[240px]">
                        <span>Call Now</span>
                        <ChevronRight size={20} className="opacity-40" />
                    </button>
                </motion.div>

                {/* Subtle Note */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-3 opacity-30 grayscale"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">Official Shopify Partner</span>
                </motion.div>
            </motion.div>

            {/* Shopify Section - Centered (Restored Animation Style) */}
            <div className="relative flex flex-col items-center justify-center w-full mt-6 px-6">

                {/* Sale Notification (OLX Style) - Adjusted for Centered Layout */}
                <AnimatePresence>
                    {showSale && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: -240 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 min-w-[280px]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <ShoppingCart size={24} />
                            </div>
                            <div className="flex flex-col text-left">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">LIVE_ACTION</span>
                                </div>
                                <span className="text-white font-bold text-sm tracking-tight">New Sale Received!</span>
                                <span className="text-[10px] text-zinc-500 font-mono mt-0.5">Order #{orderCount} verified</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Verified Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-3 px-4 py-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm mb-12"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">Verified Shopify Expert Partner</span>
                </motion.div>

                {/* Animating Logo with Color Shift */}
                <motion.div
                    style={{
                        scale: logoScale,
                        opacity: logoOpacity,
                        y: logoY,
                        filter: logoFilter
                    }}
                    className="relative z-10 flex items-center justify-center p-12 transition-all duration-300 transform-gpu"
                >
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                        alt="Shopify Logo"
                        width={400}
                        height={120}
                        className="w-[200px] md:w-[350px] h-auto brightness-125"
                    />
                </motion.div>
            </div>
        </section>
    );
}
