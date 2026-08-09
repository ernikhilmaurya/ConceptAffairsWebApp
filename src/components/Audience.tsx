"use client";

import { motion } from "framer-motion";
import { GraduationCap, Repeat, Briefcase, Clock } from "lucide-react";

const PERSONAS = [
  {
    icon: GraduationCap,
    title: "First-Time Aspirants",
    desc: "Overwhelmed by where to even start? ConceptAffairs gives you a single daily loop instead of ten scattered sources.",
  },
  {
    icon: Repeat,
    title: "Repeat Attempt Candidates",
    desc: "Know the syllabus, still losing marks in current affairs? Blind-spot detection finds exactly what's leaking.",
  },
  {
    icon: Clock,
    title: "Working Professionals",
    desc: "Only an hour a day? Get UPSC-analysed news in minutes instead of hours of raw newspaper reading.",
  },
  {
    icon: Briefcase,
    title: "Mains-Stage Aspirants",
    desc: "Need current affairs tied to GS papers with mains-style practice questions, not just Prelims trivia.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#8bc34a] uppercase">
            Who It&apos;s For
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Built for every stage
            <br />
            <span className="text-gradient">of the UPSC journey.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 hover:border-[#8bc34a]/40 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-[#8bc34a]/15 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-[#8bc34a]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
