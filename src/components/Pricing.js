"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Terminal, Package, ShoppingBag, Zap, Smartphone, WifiOff, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

const plans = [
    {
        name: "Starter",
        price: "₹25,000",
        description: "Perfect for new businesses",
        features: [
            "Shopify Store Setup",
            "Up to 30 Products",
            "Payment Gateway setup",
            "Basic SEO configuration",
            "15-20 Days Delivery"
        ],
        highlight: false,
        btnLabel: "Get Started"
    },
    {
        name: "Professional",
        price: "₹35,000",
        description: "Ideal for growing brands",
        features: [
            "Everything in Starter",
            "Premium Theme Customization",
            "Advanced SEO Optimization",
            "Full Analytics Integration",
            "Priority Support Channel"
        ],
        highlight: true,
        btnLabel: "Choose Growth"
    },
    {
        name: "Enterprise PWA",
        price: "₹55,000",
        description: "Mobile App-like Experience",
        features: [
            "Everything in Professional",
            "Progressive Web App (PWA)",
            "Offline Access & Push Notifications",
            "Direct App Icon on Mobile",
            "Fastest Loading Speeds",
            "Enhanced Mobile Performance"
        ],
        highlight: false,
        btnLabel: "Go Enterprise"
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
                    className="text-emerald-500 text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Transparent Pricing
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-sans font-bold max-w-2xl leading-tight tracking-tighter"
                >
                    Choose Your Growth Plan
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
                                Most Popular Plan
                            </div>
                        )}

                        <div className="mb-8 border-b border-white/5 pb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="px-3 py-1 rounded bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest">
                                    {plan.name}
                                </div>
                            </div>
                            <h3 className="text-4xl font-sans font-bold text-white mb-2 tracking-tighter">{plan.price}</h3>
                            <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-widest">{plan.description}</p>
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
                            <button className={`w-full py-5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn min-h-[60px] ${plan.highlight ? 'bg-emerald-500 text-black shadow-[0_10px_20px_rgba(16,185,129,0.2)]' : 'bg-transparent text-white border border-white/20 hover:border-emerald-500 hover:text-emerald-400'}`}>
                                <span>{plan.btnLabel}</span>
                                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </Magnetic>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}
