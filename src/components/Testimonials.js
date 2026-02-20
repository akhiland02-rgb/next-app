"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, MonitorPlay, Layers, Terminal } from "lucide-react";

const advantages = [
    {
        title: "Fast_Delivery",
        description: "Your high-converting store will be live in 15-20 business days. We prioritize speed without compromising on code quality.",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        stat: "15-20 DAYS"
    },
    {
        title: "Transparency",
        description: "Fixed standard project cost of ₹25,000 for theme setup. No hidden fees or unexpected infrastructure costs.",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        stat: "₹25,000"
    },
    {
        title: "Expert_Training",
        description: "Includes a comprehensive 1:1 online training session to ensure you can manage your inventory and orders with ease.",
        icon: <MonitorPlay className="w-6 h-6 text-emerald-600" />,
        stat: "1:1 SESSION"
    },
    {
        title: "Proven_Process",
        description: "Up to 5 rounds of revisions included to ensure your store matches your brand identity perfectly.",
        icon: <Layers className="w-6 h-6 text-emerald-400" />,
        stat: "5 REVISIONS"
    }
];

export default function Testimonials() {
    return (
        <section className="flex flex-col items-center w-full py-12 text-white">
            <div className="text-center flex flex-col items-center mb-16 px-4">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 text-[10px] font-mono font-bold tracking-[0.4em] uppercase mb-6"
                >
                    [SYSTEM_ADVANTAGES]
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-mono font-bold max-w-2xl leading-tight tracking-tighter uppercase"
                >
                    Engineered for <span className="text-emerald-500 italic">Success.</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-6">
                {advantages.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col justify-between h-full backdrop-blur-sm"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-lg bg-black/40 border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20">
                                    {item.stat}
                                </span>
                            </div>

                            <h3 className="text-lg font-mono font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-medium">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono font-bold uppercase tracking-widest">
                                <Terminal size={12} className="text-emerald-500/50" />
                                <span>Module_Verified</span>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
