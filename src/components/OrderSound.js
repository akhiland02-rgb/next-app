"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Terminal, Play, CheckCircle2 } from "lucide-react";
import Magnetic from "./Magnetic";

export default function OrderSound() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Preload audio on mount
        audioRef.current = new Audio("/assets/chaching.mp3");
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(err => console.error("Playback failed:", err));
            setIsPlaying(true);
            setShowSuccess(true);
            setTimeout(() => setIsPlaying(false), 1000);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    return (
        <section className="w-full py-20 bg-emerald-500/[0.02] border-y border-emerald-500/10 relative overflow-hidden">
            {/* Removed the <audio> tag as we're using new Audio() */}

            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 font-sans text-[8px] text-emerald-500 uppercase tracking-widest">
                    Ready to test
                </div>
                <div className="absolute bottom-10 right-10 font-sans text-[8px] text-emerald-500 uppercase tracking-widest text-right">
                    Verified Checkout Experience
                </div>
            </div>

            <div className="content-container flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-sans font-bold uppercase tracking-widest mb-6">
                        Test the Experience
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter mb-6 uppercase">
                        The sound your business <br />
                        <span className="text-emerald-500 italic font-mono">will start hearing everyday.</span>
                    </h2>
                    <p className="text-zinc-500 font-sans max-w-xl mx-auto leading-relaxed">
                        Every successful deployment comes with the peace of mind that your infrastructure is optimized for conversions.
                        Test the standard Shopify order notification below.
                    </p>
                </motion.div>

                <div className="relative group">
                    <AnimatePresence>
                        {showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: -60, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute left-1/2 -translate-x-1/2 z-30 bg-[#1a1a1a] border border-emerald-500/50 text-emerald-400 text-[11px] font-mono px-6 py-3 rounded shadow-[0_10px_40px_rgba(16,185,129,0.2)] flex items-center gap-3 whitespace-nowrap uppercase tracking-wider"
                            >
                                <CheckCircle2 size={16} />
                                <span className="border-l border-white/10 pl-3">NEW_ORDER_RECEIVED!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Magnetic>
                        <button
                            onClick={playSound}
                            className={`relative flex items-center justify-center gap-4 px-12 py-6 rounded font-mono font-bold uppercase tracking-widest text-sm transition-all duration-300 min-w-[280px] min-h-[64px] ${isPlaying
                                ? 'bg-emerald-400 text-black scale-95'
                                : 'bg-transparent text-emerald-500 border-2 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                                }`}
                        >
                            <Play size={18} fill={isPlaying ? "currentColor" : "none"} />
                            <span>Play Checkout Sound</span>

                            {/* Scanning effect line */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/50 overflow-hidden">
                                <motion.div
                                    animate={{ left: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-emerald-400 shadow-[0_0_10px_#10b981]"
                                />
                            </div>
                        </button>
                    </Magnetic>
                </div>

                <div className="mt-12 flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="text-[10px] font-sans text-zinc-500 uppercase tracking-[0.3em]">
                        High Fidelity Audio
                    </div>
                    <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    <div className="text-[10px] font-sans text-zinc-500 uppercase tracking-[0.3em]">
                        Shopify Standard Release
                    </div>
                </div>
            </div>
        </section>
    );
}
