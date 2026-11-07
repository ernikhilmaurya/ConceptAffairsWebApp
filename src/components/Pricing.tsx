"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/site";

const INCLUDED = [
  "Daily UPSC-analysed news feed",
  "Golden Syllabus mapping & Topic Health",
  "Prelims MCQs (easy/medium/hard) & Mains practice",
  "RevCoach spaced revision on weak concepts",
  "Progress analytics & Readiness Score",
  "Keyword glossary & study reminders",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-[#ffd966] uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Simple pricing.
            <br />
            <span className="text-gradient">No auto-renewal.</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm">
            Start with a one-time 7-day free trial. Then pick a prepaid plan — you pay once, and
            you&apos;re never charged again unless you buy another plan. Prices shown are
            indicative; the final price is shown in the app at checkout.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#fdb913]/15 to-transparent border-2 border-[#fdb913]/50 glow-orange"
                  : "glass"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#fdb913] px-4 py-1 text-xs font-bold text-black">
                  Best Value
                </span>
              )}
              <h3 className="text-lg font-bold text-white/80">{plan.name}</h3>
              <div className="mt-3 text-4xl font-black">{plan.price}</div>
              <p className="mt-1 text-sm text-white/40">{plan.perMonth}</p>
              <p className="mt-4 text-sm text-white/60 flex-1">{plan.tagline}</p>

              <a
                href="#download"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#fdb913] text-black hover:bg-[#ffc93d]"
                    : "glass text-white hover:bg-white/10"
                }`}
              >
                Get the app
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto glass rounded-3xl p-8">
          <h3 className="text-lg font-bold text-white/80">Every plan and the free trial include</h3>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {INCLUDED.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                <Check size={16} className="text-[#8bc34a] mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
