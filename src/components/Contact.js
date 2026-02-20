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
                    <motion.span variants={itemVariants} className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                        &lt;Communication_Channels /&gt;
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">
                        Initialize <br /><span className="text-emerald-500">Project_Sequence.</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-zinc-500 text-sm md:text-base mb-12 max-w-md leading-relaxed">
            // Ready to engineer your vision?
                        <br />
            // Connect with our dev team directly.
                    </motion.p>

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
                                        className="w-full bg-transparent border-b border-zinc-800 py-2 text-zinc-300 focus:outline-none focus:border-emerald-500 transition-all resize-none placeholder:text-zinc-700 leading-relaxed"
                                    ></textarea>
                                    <div className="text-zinc-600 text-sm">&#125;</div>
                                </div>

                                <div className="pt-6">
                                    <Magnetic>
                                        <button className="w-full py-4 bg-emerald-600/10 border border-emerald-500/20 text-emerald-500 font-bold hover:bg-emerald-500 hover:text-black transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 group">
                                            <span>Submit_Query()</span>
                                            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
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
