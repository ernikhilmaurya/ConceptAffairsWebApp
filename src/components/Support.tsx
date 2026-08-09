"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Send, CheckCircle2 } from "lucide-react";

const FAQS = [
  {
    q: "Which platforms is ConceptAffairs available on?",
    a: "ConceptAffairs is a mobile-only app, available for Android and iOS. There is no desktop app — this website exists only to help you find and install it.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. You can use the daily news feed, basic quizzes, and syllabus browser for free. Pro unlocks full analytics, AI Blind-Spot Coach, and AI-powered spaced revision.",
  },
  {
    q: "How is content updated?",
    a: "The Feed refreshes with newly analysed articles every day, so there's always something fresh mapped to the syllabus.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, subscriptions are managed through the Play Store / App Store and can be cancelled anytime from your device's subscription settings.",
  },
  {
    q: "I found a bug or have feedback — where do I report it?",
    a: "Use the query form below or email our support team — we read every message.",
  },
];

export default function Support() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section id="support" className="relative py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
        {/* FAQ */}
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#8bc34a] uppercase">
            Support
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight mb-8">
            Questions, answered.
          </h2>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#ffd966] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{f.q}</h4>
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Query form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 h-fit"
        >
          <h3 className="text-xl font-bold mb-1">Still stuck? Ask us directly.</h3>
          <p className="text-sm text-white/50 mb-7">
            We typically respond within 24–48 hours.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-14">
              <CheckCircle2 size={44} className="text-[#8bc34a] mb-4" />
              <p className="font-semibold">Query received!</p>
              <p className="text-sm text-white/50 mt-1">
                Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors"
                />
              </div>
              <select
                required
                defaultValue=""
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors text-white/70"
              >
                <option value="" disabled>
                  Query type
                </option>
                <option>General question</option>
                <option>Bug report</option>
                <option>Subscription / billing</option>
                <option>Feature request</option>
                <option>Other</option>
              </select>
              <textarea
                required
                rows={4}
                placeholder="Tell us what's up..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#fdb913] px-6 py-3.5 font-semibold text-black hover:bg-[#ffc93d] transition-colors disabled:opacity-60"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Submit Query
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
