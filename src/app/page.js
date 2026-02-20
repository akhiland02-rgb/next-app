"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Power, Terminal } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] relative cursor-crosshair selection:bg-emerald-500/30 overflow-x-hidden font-mono">
      <div className="mouse-glow md:block hidden" />
      <Header />

      <div className="relative z-10 flex flex-col w-full">
        {/* HERO */}
        <Hero />

        {/* SECTIONS */}
        <div className="content-container">
          <div id="services" className="section-gap">
            <Services />
          </div>
          <div id="pricing" className="section-gap">
            <Pricing />
          </div>
          <div id="portfolio" className="section-gap">
            <Testimonials />
          </div>
          <div id="contact" className="section-gap">
            <Contact />
          </div>
        </div>
      </div>

      {/* TECH FOOTER - NO BOTTOM SPACE */}
      <footer className="relative py-12 md:py-20 bg-[#050505] border-t border-white/5 overflow-hidden w-full flex flex-col items-center text-center font-mono">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
          {/* Tech Header */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded flex items-center justify-center text-emerald-500">
              <Terminal size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white tracking-tighter">ENTEECOM_SYSTEMS</h3>
              <p className="text-emerald-500 text-[9px] uppercase tracking-widest opacity-80 mt-1">v2.0.4 [STABLE_BUILD]</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-y border-white/5 py-8 mb-12">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-emerald-500"><Phone size={16} /></div>
              <span className="text-sm font-bold text-zinc-300">7892393901</span>
              <span className="text-[9px] text-zinc-600 uppercase">VOICE_LINK</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-emerald-500"><Mail size={16} /></div>
              <span className="text-sm font-bold text-zinc-300">shopify@enteecom.in</span>
              <span className="text-[9px] text-zinc-600 uppercase">MAIL_SERVER</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-emerald-500"><MapPin size={16} /></div>
              <span className="text-sm font-bold text-zinc-300">Kannur, KL_IN</span>
              <span className="text-[9px] text-zinc-600 uppercase">PHYSICAL_NODE</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 text-[10px] text-zinc-500 uppercase tracking-widest">
            <div className="flex gap-6">
              <a href="#home" className="hover:text-emerald-400 transition-colors">/home</a>
              <a href="#services" className="hover:text-emerald-400 transition-colors">/modules</a>
              <a href="#portfolio" className="hover:text-emerald-400 transition-colors">/logs</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">/connect</a>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEM_OPERATIONAL</span>
            </div>
          </div>

          <div className="mt-12 text-[9px] text-zinc-700 uppercase tracking-widest">
            © {new Date().getFullYear()} ENTEECOM_LTD. ALL_PROCESSES_RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}
