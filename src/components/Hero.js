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

            {/* Code Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden font-mono text-[10px] text-emerald-900/40 select-none whitespace-pre p-4">
                {`{% if shop.enabled %}
  {% assign stress = 0 %}
  {% assign revenue = "unlimited" %}
  
  {% for competitor in competitors %}
     {{ competitor | remove: "market_share" }}
  {% endfor %}

  {% render 'enteecom-magic' %}
{% endif %}`}
            </div>

            <motion.div
                className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-mono border rounded border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm text-emerald-400 uppercase tracking-widest"
                >
                    <Terminal size={12} />
                    <span>SYS_STATUS: OPTIMAL_PARTNER</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-mono"
                >
                    Enteecom: Kerala&apos;s No.1 <br />
                    <span className="text-emerald-500 italic">Shopify Development Experts</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-sans px-4"
                >
                    Partner with Akhil Anand and the team at Enteecom to build your high-converting eCommerce store.
                </motion.p>

                {/* Stats Row */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 w-full font-mono">
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">20+</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">[PROJECTS_DEPLOYED]</div>
                    </div>
                    <div className="hidden sm:block text-emerald-900/50 opacity-30">|</div>
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">2Cr+</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">[REVENUE_GENERATED]</div>
                    </div>
                    <div className="hidden sm:block text-emerald-900/50 opacity-30">|</div>
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">100%</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 px-2 py-0.5 border border-white/5 rounded">[SUCCESS_RATE]</div>
                    </div>
                </motion.div>

                {/* BUTTONS */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-36 w-full">
                    <Magnetic>
                        <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-emerald-500 text-black font-mono font-bold rounded shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs min-h-[56px] min-w-[240px]">
                            <span>Initialize_Launch()</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Magnetic>

                    <button className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-white font-mono font-bold rounded border border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all uppercase tracking-widest text-xs min-h-[56px] min-w-[240px]">
                        <span>view_source_code</span>
                        <Terminal size={14} className="opacity-50" />
                    </button>
                </motion.div>

                {/* Shopify Logo Section */}
                <motion.div
                    style={{ scale: logoScale, opacity: logoOpacity, y: logoY }}
                    className="relative z-10 flex flex-col items-center pb-24 w-full mt-16"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.2em]">Official_Shopify_Partner_Verified</span>
                    </div>

                    <div className="relative flex flex-col items-center">
                        <AnimatePresence>
                            {revealed && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                                    animate={{ opacity: 1, y: -50, scale: 1 }}
                                    className="absolute top-0 z-30 bg-[#1a1a1a] border border-emerald-500/50 text-emerald-400 text-[11px] font-mono px-5 py-2.5 rounded shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 whitespace-nowrap uppercase tracking-wider"
                                >
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    </div>
                                    <span className="border-l border-white/10 pl-3">NEW_ORDER: #{1000 + orders}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            animate={{
                                filter: revealed ? "grayscale(0%) brightness(1.2)" : "grayscale(100%) brightness(50%)",
                                scale: revealed ? 1.1 : 1
                            }}
                            transition={{ duration: 0.8 }}
                            className="relative px-12 py-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm"
                        >
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                                alt="Shopify Logo"
                                width={220}
                                height={60}
                                className="w-[160px] md:w-[220px] h-auto transition-all"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
