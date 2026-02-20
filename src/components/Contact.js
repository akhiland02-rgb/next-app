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
                            <h2 className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                                <Terminal size={14} />
                                [ESTABLISH_CONNECTION]
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter mb-6 uppercase">
                                Ready to <span className="text-emerald-500 italic">Deploy?</span>
                            </h3>
                            <p className="text-zinc-400 font-sans leading-relaxed max-w-md">
                                Send us your project requirements and our architecture team will get back to you within 24 hours. No strings attached.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                        <motion.div variants={itemVariants} className="flex items-center gap-4 p-4 rounded border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                            <div className="text-emerald-500 group-hover:text-emerald-400">
                                <Phone size={18} />
                            </div>
                            <div className="text-left flex flex-col">
                                <span className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none mb-1">VOICE_CHANNEL_01</span>
                                <a href="tel:7892393901" className="text-lg font-bold hover:text-emerald-400 transition-colors">7892393901</a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4 p-4 rounded border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                            <div className="text-emerald-500 group-hover:text-emerald-400">
                                <Mail size={18} />
                            </div>
                            <div className="text-left flex flex-col">
                                <span className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none mb-1">SMTP_SERVER_MAIN</span>
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

                        {/* Terminal Bar */}
                        <div className="bg-zinc-900 border-b border-zinc-800 p-2 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="text-zinc-600 text-[10px] font-mono">user@enteecom:~/inquiry</div>
                            <div className="w-4" />
                        </div>

                        <div className="p-8 md:p-10 font-mono">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block">const client_name =</label>
                                    <input
                                        type="text"
                                        placeholder='"John Doe"'
                                        className="w-full bg-transparent border-b border-zinc-800 py-2 text-emerald-400 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block">const email_address =</label>
                                    <input
                                        type="email"
                                        placeholder='"john@example.com"'
                                        className="w-full bg-transparent border-b border-zinc-800 py-2 text-emerald-400 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block">let function request_details() &#123;</label>
                                    <textarea
                                        rows={3}
                                        placeholder="  return &quot;We need...&quot;"
                                        className="w-full bg-black/40 border border-white/10 rounded p-4 text-emerald-400 text-sm font-sans focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-zinc-700"
                                    />
                                    <label className="text-[10px] uppercase text-zinc-500 tracking-widest block">&#125;</label>
                                </div>

                                <div className="pt-6">
                                    <Magnetic>
                                        <button className="w-full py-5 bg-emerald-500 text-black font-mono font-bold rounded flex items-center justify-center gap-3 group hover:scale-[1.02] transition-all uppercase tracking-widest text-xs min-h-[56px] shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                            <span>Transmit_Request()</span>
                                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
