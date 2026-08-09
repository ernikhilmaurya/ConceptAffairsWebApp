"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  ListTree,
  BarChart3,
  Sparkles,
  BrainCircuit,
  Trophy,
  Flame,
  BookMarked,
} from "lucide-react";

const FEATURES = [
  {
    icon: Newspaper,
    title: "Daily UPSC-Analysed News",
    desc: "Every article comes pre-digested: summary, why it matters, core concepts, prelims facts, and a mains practice question — no more reading 5 newspapers.",
  },
  {
    icon: ListTree,
    title: "Golden Syllabus Mapping",
    desc: "Every article auto-maps to the exact GS syllabus concept it belongs to, so current affairs stop feeling random and start feeling structured.",
  },
  {
    icon: Sparkles,
    title: "Auto-Generated Quizzes",
    desc: "Prelims-style MCQs (easy/medium/hard) and mains questions generated for every article to instantly verify what you actually retained.",
  },
  {
    icon: BarChart3,
    title: "Deep Progress Analytics",
    desc: "Streaks, quiz accuracy, syllabus coverage, and a composite Readiness Score — know exactly how exam-ready you are, at any moment.",
  },
  {
    icon: BrainCircuit,
    title: "AI Blind-Spot Detection",
    desc: "The app quietly watches your wrong answers and flags concepts you keep getting wrong — before they cost you marks in the real exam.",
  },
  {
    icon: BookMarked,
    title: "AI-Powered Spaced Revision",
    desc: "Claude-generated fact-grids and fresh MCQs bring back exactly the concepts you're forgetting, scheduled at the scientifically right moment.",
  },
  {
    icon: Flame,
    title: "Streaks that Build Discipline",
    desc: "Daily activity, XP, and levels (Beginner → Expert) turn the grind of daily current affairs into a habit you actually keep.",
  },
  {
    icon: Trophy,
    title: "Full GS Syllabus, Visually Tracked",
    desc: "Browse all 9 GS subjects as a color-coded knowledge tree — mastered, in-progress, weak, or not started — at a glance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8bc34a] uppercase">
            Features
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Everything UPSC prep needed,
            <br />
            <span className="text-gradient">finally in one loop.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative glass rounded-2xl p-6 hover:-translate-y-1.5 hover:border-[#fdb913]/40 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#fdb913]/20 to-[#8bc34a]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon size={22} className="text-[#ffd966]" />
              </div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
