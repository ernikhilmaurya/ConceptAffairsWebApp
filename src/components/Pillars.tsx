"use client";

import { motion } from "framer-motion";
import { Newspaper, ListTree, LineChart, BrainCircuit, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Newspaper,
    tag: "Feed",
    title: "Read",
    desc: "Daily UPSC-analysed news, curated and ranked by relevance.",
  },
  {
    icon: ListTree,
    tag: "Syllabus",
    title: "Map",
    desc: "Auto-mapped to the exact GS concept in the syllabus tree.",
  },
  {
    icon: LineChart,
    tag: "Progress",
    title: "Verify",
    desc: "Quizzes confirm what you retained. Analytics track mastery.",
  },
  {
    icon: BrainCircuit,
    tag: "RevCoach",
    title: "Reinforce",
    desc: "Blind spots surfaced. Spaced revision brings it all back.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-semibold tracking-widest text-[#ffd966] uppercase">
            The ConceptAffairs Loop — Our USP
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            UPSC prep is chaotic.
            <br />
            <span className="text-gradient">We turned it into a loop.</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            News, notes, quizzes and the syllabus usually live in scattered places. ConceptAffairs is
            the only app that closes the loop end-to-end — from a single news article to a
            measurable, revisable unit of exam knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-14 relative">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative glass rounded-2xl p-7 flex flex-col"
            >
              <span className="text-xs font-semibold text-[#8bc34a] mb-4">{p.tag}</span>
              <div className="h-12 w-12 rounded-xl bg-[#fdb913]/15 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-[#ffd966]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>

              {i < PILLARS.length - 1 && (
                <ArrowRight
                  size={20}
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 z-10"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-white/40">
          …and the loop repeats daily, compounding into real exam readiness.
        </div>
      </div>
    </section>
  );
}
