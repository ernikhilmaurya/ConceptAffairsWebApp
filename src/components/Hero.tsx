"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Star } from "lucide-react";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 grid-fade" />
      <Hero3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07070a]/40 to-[#07070a] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/70 mb-6">
            <Star size={14} className="text-[#8bc34a]" fill="#8bc34a" />
            Built for UPSC Civil Services aspirants
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            Turn today&apos;s news into
            <br />
            <span className="text-gradient">tomorrow&apos;s exam answers.</span>
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-lg">
            ConceptAffairs reads the news for you, maps it to the UPSC syllabus, tests you with
            auto-generated quizzes, and brings back exactly what you&apos;re forgetting —
            before the exam does.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#fdb913] px-7 py-4 font-semibold text-black glow-orange hover:bg-[#ffc93d] transition-all"
            >
              <PlayCircle size={20} />
              Download for Android
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-4 font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Apple size={20} />
              Download for iOS
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Available exclusively as a mobile app · Free to start · No credit card required
          </p>
        </motion.div>

        {/* spacer column so 3D scene has room on desktop */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
