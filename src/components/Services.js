"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layout, Zap, Puzzle, ArrowRight, Terminal, Globe, Cpu } from "lucide-react";
import Magnetic from "./Magnetic";

const services = [
    {
        title: "Store Development",
        description: "Professional theme setup and mobile-responsive design tailored to your brand.",
        icon: <Layout className="w-8 h-8 text-emerald-400" />,
    },
    {
        title: "Product Catalog",
        description: "Complete setup for up to 30 products with optimized collections and filters.",
        icon: <Puzzle className="w-8 h-8 text-emerald-500" />,
    },
    {
        title: "Payments & Shipping",
        description: "Secure integration with major gateways plus custom shipping rules for your region.",
        icon: <Terminal className="w-8 h-8 text-emerald-600" />,
    },
    {
        title: "Marketing & Analytics",
        description: "Advanced setup for Meta Pixel, Google Analytics, and Merchant Center tracking.",
        icon: <Zap className="w-8 h-8 text-emerald-400" />,
    },
    {
        title: "SEO & Social Media",
        description: "Search engine optimization and direct Instagram/WhatsApp business integration.",
        icon: <Globe className="w-8 h-8 text-emerald-500" />,
    },
    {
        title: "Automation & Growth",
        description: "Abandoned cart recovery and automated email marketing setup to boost sales.",
        icon: <Cpu className="w-8 h-8 text-emerald-600" />,
    },
];

function TiltCard({ service }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    return (
        <motion.div
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set((e.clientX - rect.left) / rect.width - 0.5);
                y.set((e.clientY - rect.top) / rect.height - 0.5);
            }}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
            className="relative h-full w-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-8 flex flex-col justify-between backdrop-blur-md group hover:border-emerald-500/40 transition-all duration-300"
        >


            <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-4 rounded-lg bg-emerald-500/10 text-emerald-400">
                        {service.icon}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                    {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                    {service.description}
                </p>
            </div>

            <div style={{ transform: "translateZ(20px)" }} className="mt-8 border-t border-white/5 pt-4">
                <Magnetic>
                    <button className="text-[10px] font-bold text-zinc-400 hover:text-emerald-400 flex items-center justify-between w-full group/btn uppercase tracking-widest py-2">
                        <span>Learn More</span>
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </Magnetic>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <div className="flex flex-col items-center w-full px-4">
            <div className="text-center flex flex-col items-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Our Expertise
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-sans font-bold text-white max-w-2xl leading-tight tracking-tighter"
                >
                    Services We Provide
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <TiltCard service={service} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
