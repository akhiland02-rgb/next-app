"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Terminal, Package, ShoppingBag, Zap, Smartphone, WifiOff } from "lucide-react";
import Magnetic from "./Magnetic";

const plans = [
    {
        name: "BASIC_INIT",
        price: "₹25,000",
        description: "// perfect for startups",
        features: [
            "Shopify Theme Setup",
            "30 Products Upload",
            "Payment & Shipping Config",
            "Basic SEO & GA4 Setup",
            "15-20 Days Delivery"
        ],
        highlight: false,
        cmd: "npm start basic"
    },
    {
        name: "ADVANCED_CORE",
        price: "₹35,000",
        description: "// for growing brands",
        features: [
            "Everything in Basic",
            "Premium Theme Support",
            "Advanced SEO Setup",
            "Meta CAPI Integration",
            "Priority Support Channel"
        ],
        highlight: true,
        cmd: "npm run deploy:adv"
    },
    {
        name: "HYBRID_PWA",
        price: "₹55,000",
        description: "// native app-like ux",
        features: [
            "Everything in Advanced",
            "Progressive Web App (PWA)",
            "Offline Access & Push Alerts",
            "Home Screen Installation",
            "Blazing Fast Page Speeds",
            "Enhanced Mobile Performance"
        ],
        highlight: false,
        cmd: "npx create-pwa"
    }
];

export default function Pricing() {
    return (
        <div className="flex flex-col items-center w-full px-4 text-white font-mono py-20 relative">
            <div className="text-center flex flex-col items-center mb-16 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                >
                    &lt;Investment_Plans /&gt;
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight tracking-tighter"
                >
                    Select_Module.
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`relative p-8 rounded-lg border flex flex-col h-full bg-[#0a0a0a] backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-300 ${plan.highlight ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-white/10 hover:border-emerald-500/30'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Recommended_Build
                            </div>
                        )}

                        <div className="mb-8 border-b border-white/5 pb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                    {plan.name}
                                </div>
                                <Terminal size={14} className="text-zinc-600" />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter">{plan.price}</h3>
                            <p className="text-emerald-500 text-xs italic font-mono uppercase tracking-widest">{plan.description}</p>
                        </div>

                        <ul className="flex-1 space-y-4 mb-10">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-sans leading-relaxed">
                                    <Check size={16} className={`mt-1 shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-zinc-600'}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Magnetic>
                            <button className={`w-full py-5 border rounded text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn min-h-[56px] ${plan.highlight ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-transparent text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10'}`}>
                                <span>{plan.cmd}</span>
                                <div className="w-1.5 h-3 bg-current animate-pulse ml-1 opacity-50" />
                            </button>
                        </Magnetic>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}
