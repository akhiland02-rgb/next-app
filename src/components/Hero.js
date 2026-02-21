"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section ref={containerRef} className="relative flex items-center justify-center min-h-[90vh] w-full text-white pt-40 pb-20 overflow-hidden">
            {/* Tech-Layer: Minimal Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
            />

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-emerald-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <motion.div
                className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6"
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
        </section>
    );
}
