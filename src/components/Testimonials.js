"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, MonitorPlay, Layers } from "lucide-react";

const advantages = [
    {
        title: "Fast_Delivery",
        description: "Your store live in 15-20 business days.",
        icon: <Clock className="w-6 h-6 text-emerald-400" />,
        stat: "15-20 DAYS"
    },
    {
        title: "Transparency",
        description: "Standard project cost of ₹25,000.",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        stat: "₹25,000"
    },
    {
        title: "Expert_Training",
        description: "One-on-one online training session included before final handover.",
        icon: <MonitorPlay className="w-6 h-6 text-emerald-600" />,
        stat: "1:1 SESSION"
    },
    {
        title: "Proven_Process",
        description: "Up to 5 rounds of revisions to ensure your site is perfect.",
        icon: <Layers className="w-6 h-6 text-emerald-400" />,
        stat: "5 REVISIONS"
    }
];

export default function Testimonials() {
    return (
        <div className="flex flex-col items-center w-full px-4 text-white font-mono">
            <div className="text-center flex flex-col items-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                >
                    &lt;Why_Us /&gt;
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight tracking-tighter"
                >
                    The_Advantage.
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {advantages.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded border border-white/5 bg-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded bg-black/50 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] text-emerald-500 font-bold tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
                                    {item.stat}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Verified_Module</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
