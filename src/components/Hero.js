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
                    className="text-sm md:text-lg text-zinc-400 mb-12 max-w-2xl leading-relaxed font-mono px-4"
                >
          // Partner with Akhil Anand and the team at Enteecom to build your high-converting eCommerce store.
                </motion.p>

                {/* Stats Row */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 w-full font-mono">
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">20+</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2">[PROJECTS_DEPLOYED]</div>
                    </div>
                    <div className="hidden sm:block text-emerald-900/50">|</div>
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">2Cr+</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2">[REVENUE_GENERATED]</div>
                    </div>
                    <div className="hidden sm:block text-emerald-900/50">|</div>
                    <div className="flex flex-col items-center group">
                        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">100%</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2">[SUCCESS_RATE]</div>
                    </div>
                </motion.div>

                {/* BUTTONS */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-32 w-full">
                    <Magnetic>
                        <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600/10 text-emerald-400 font-mono font-bold rounded border border-emerald-500/50 overflow-hidden transition-all hover:bg-emerald-500 hover:text-black shadow-[0_0_20px_rgba(16,185,129,0.2)] uppercase tracking-widest text-xs">
                            <span className="mr-2">&gt;</span>
                            <span>Initialize_Launch()</span>
                            <div className="w-2 h-4 bg-emerald-400 ml-2 animate-pulse" />
                        </button>
                    </Magnetic>

                    <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-zinc-400 font-mono font-bold rounded border border-white/10 hover:border-white/30 hover:text-white transition-all uppercase tracking-widest text-xs">
                        <span>view_source_code</span>
                        <span className="text-[10px] opacity-50">(portfolio)</span>
                    </button>
                </motion.div>

                {/* Shopify Logo Section */}
                <motion.div
                    style={{ scale: logoScale, opacity: logoOpacity, y: logoY }}
                    className="relative z-10 flex flex-col items-center pb-20 w-full mt-12"
                >
                    <div className="text-zinc-600 text-[9px] font-mono uppercase tracking-[0.2em] mb-10 opacity-40">/* OFFICIAL_PARTNER_DETECTED */</div>

                    <div className="relative flex flex-col items-center">
                        <AnimatePresence>
                            {revealed && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                                    animate={{ opacity: 1, y: -40, scale: 1 }}
                                    className="absolute top-0 z-30 bg-[#0a0a0a] border border-emerald-500/30 text-emerald-500 text-[10px] font-mono px-4 py-2 rounded flex items-center gap-3 shadow-2xl whitespace-nowrap uppercase"
                                >
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    <span>NEW_ORDER_RECEIVED: #{1000 + orders}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            animate={{
                                filter: revealed ? "grayscale(0%) brightness(1.1)" : "grayscale(100%) brightness(50%)",
                                scale: revealed ? 1.05 : 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                                alt="Shopify Logo"
                                width={220}
                                height={60}
                                className="w-[140px] md:w-[200px] h-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
