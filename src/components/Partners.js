"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Zap, Cpu, Award, ZapOff } from "lucide-react";

const partners = [
    { name: "Shopify Plus", icon: <Award className="w-8 h-8" /> },
    { name: "Global Commerce", icon: <Globe className="w-8 h-8" /> },
    { name: "Secure Pay", icon: <ShieldCheck className="w-8 h-8" /> },
    { name: "Fast Stack", icon: <Zap className="w-8 h-8" /> },
    { name: "Neural Ops", icon: <Cpu className="w-8 h-8" /> },
];

export default function Partners() {
    return (
        <section className="w-full py-20 bg-white/[0.02] border-y border-white/5 overflow-hidden">
            <div className="content-container mb-12 text-center">
                <h2 className="text-[10px] font-sans font-bold text-emerald-500 uppercase tracking-[0.4em] mb-4">
                    Our Trusted Partners
                </h2>
                <p className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tighter">
                    Built for the world&apos;s leading brands
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 mx-12 text-zinc-600 grayscale hover:grayscale-0 hover:text-emerald-500 transition-all duration-500 cursor-default group">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:border-emerald-500/30">
                                {partner.icon}
                            </div>
                            <span className="text-xl font-mono font-bold uppercase tracking-widest">{partner.name}</span>
                        </div>
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1117] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d1117] to-transparent z-10" />
            </div>

            <style jsx>{`
                .animate-marquee {
                    display: inline-flex;
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </section>
    );
}
