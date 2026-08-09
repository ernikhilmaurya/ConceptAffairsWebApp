"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    tagline: "Try the daily loop, no card needed.",
    features: [
      "Today's UPSC-analysed news feed",
      "Basic Prelims quizzes",
      "Syllabus browser (read-only)",
      "Daily streak tracking",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro Monthly",
    price: "₹299",
    period: "/ month",
    tagline: "Full loop, billed monthly.",
    features: [
      "Everything in Free",
      "Full quiz suite (easy/medium/hard)",
      "Progress analytics & Readiness Score",
      "AI Blind-Spot Coach",
      "AI-powered spaced revision",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Pro Yearly",
    price: "₹1,999",
    period: "/ year",
    tagline: "Best value for a full attempt cycle.",
    features: [
      "Everything in Pro Monthly",
      "~45% cheaper than monthly",
      "Priority AI revision generation",
      "Early access to new features",
    ],
    cta: "Go Yearly",
    highlight: false,
  },
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
            <span className="text-gradient">Cancel anytime, in-app.</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm">
            Indicative pricing shown below — final plans, offers & regional pricing are set inside
            the app at checkout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white/80">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-white/40 text-sm mb-1">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/50">{plan.tagline}</p>

              <ul className="mt-7 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check size={16} className="text-[#8bc34a] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#fdb913] text-black hover:bg-[#ffc93d]"
                    : "glass text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
