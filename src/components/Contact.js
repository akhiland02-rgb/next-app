"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Terminal } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="flex flex-col items-center w-full px-4 text-white font-mono">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Contact Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h2 className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                                Contact Us
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                                Ready to <span className="text-emerald-500 italic">Get Started?</span>
                            </h3>
                            <p className="text-zinc-400 font-sans leading-relaxed max-w-md">
                                Send us your project requirements and our architecture team will get back to you within 24 hours. No strings attached.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                        <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Phone size={20} />
                            </div>
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none mb-1">Phone</span>
                                <a href="tel:7892393901" className="text-lg font-bold hover:text-emerald-400 transition-colors">7892393901</a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Mail size={20} />
                            </div>
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none mb-1">Email</span>
                                <a href="mailto:shopify@enteecom.in" className="text-lg font-bold hover:text-emerald-400 transition-colors">shopify@enteecom.in</a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* TERMINAL FORM AREA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full"
                >
                    <div className="relative w-full rounded bg-[#0a0a0a] border border-zinc-800 shadow-2xl overflow-hidden">

                        {/* Card Header */}
                        <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Inquiry Form</div>
                        </div>

                        <div className="p-8 md:p-10">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block font-bold">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block font-bold">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block font-bold">Project Details</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project or business needs..."
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-5 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="pt-6">
                                    <Magnetic>
                                        <button className="w-full py-5 bg-emerald-500 text-black font-bold rounded-lg flex items-center justify-center gap-3 group hover:scale-[1.02] transition-all uppercase tracking-widest text-xs min-h-[60px] shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                                            <span>Send Message</span>
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </Magnetic>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
