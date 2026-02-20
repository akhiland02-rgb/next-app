"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layout, Zap, Puzzle, ArrowRight, Terminal, Globe, Cpu } from "lucide-react";
import Magnetic from "./Magnetic";

const services = [
    {
        title: "Custom_Dev",
        description: "Professional theme setup and mobile-responsive design.",
        icon: <Layout className="w-8 h-8 text-emerald-400" />,
        cmd: "npm run build:theme"
    },
    {
        title: "Inventory_Setup",
        description: "Initial catalog setup for up to 30 products with optimized collections.",
        icon: <Puzzle className="w-8 h-8 text-emerald-500" />,
        cmd: "import_catalog.csv"
    },
    {
        title: "Payment_Logic",
        description: "Secure integration with Razorpay, PayU, or Cashfree, plus custom shipping rules.",
        icon: <Terminal className="w-8 h-8 text-emerald-600" />,
        cmd: "api.connect(gateway)"
    },
    {
        title: "Pixel_Track",
        description: "Advanced setup for Meta Pixel (CAPI), Google Analytics (GA4), and Merchant Center.",
        icon: <Zap className="w-8 h-8 text-emerald-400" />,
        cmd: "analytics.init()"
    },
    {
        title: "SEO_Socials",
        description: "Basic SEO optimization, sitemap submission, and Instagram/WhatsApp integration.",
        icon: <Globe className="w-8 h-8 text-emerald-500" />,
        cmd: "seo.optimize()"
    },
    {
        title: "Auto_Mation",
        description: "Abandoned cart recovery and email marketing app configurations.",
        icon: <Cpu className="w-8 h-8 text-emerald-600" />,
        cmd: "cron.schedule()"
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
            className="relative h-full w-full bg-[#0a0a0a]/80 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md group hover:border-emerald-500/40 transition-all duration-300 font-mono"
        >
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 w-full h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>

            <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-4 mt-8">
                <div className="flex items-center justify-between mb-2">
                    <div className="p-3 w-fit rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {service.icon}
                    </div>
                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest">{service.cmd}</span>
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
                    className="text-emerald-500 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-4"
                >
                    &lt;Capabilities /&gt;
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-mono font-bold text-white max-w-2xl leading-tight tracking-tighter"
                >
                    Core_Modules
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
