"use client";

import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-60" />
      <div
        className="cursor-parallax absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#fdb913]/20 blur-[120px]"
        style={{ ["--parallax-strength" as string]: "24px" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Your Prelims doesn&apos;t care
          <br />
          <span className="text-gradient">how many tabs you have open.</span>
        </h2>
        <p className="mt-6 text-white/60 text-lg">
          One app. One daily loop. Real, trackable readiness. Available only on your phone —
          get it now.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fdb913] px-8 py-4 font-semibold text-black glow-orange hover:bg-[#ffc93d] transition-all"
          >
            <PlayCircle size={20} />
            Get it on Google Play
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
          >
            <Apple size={20} />
            Download on the App Store
          </a>
        </div>
      </motion.div>
    </section>
  );
}
