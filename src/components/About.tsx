"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "9", label: "GS subjects covered" },
  { value: "Daily", label: "fresh analysed articles" },
  { value: "4", label: "core app pillars" },
  { value: "AI", label: "powered spaced revision" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#8bc34a] uppercase">
            About ConceptAffairs
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Why we built this.
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            UPSC preparation has always meant juggling newspapers, coaching notes, static
            revision material, and quiz PDFs — none of them talking to each other. Aspirants
            spend more time organizing prep than actually learning.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            ConceptAffairs was built on one belief: <span className="text-white">every piece of
            daily news should automatically become a measurable, revisable, syllabus-linked
            unit of knowledge</span> — without the aspirant doing any manual filing. Read.
            Get tested. Get mapped. Get reminded. Repeat.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            The result is a single daily habit that compounds into real, trackable exam
            readiness — not a pile of unread bookmarks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-7 text-center">
              <div className="text-3xl font-black text-gradient">{s.value}</div>
              <div className="mt-2 text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
