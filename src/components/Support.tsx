"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Send, CheckCircle2 } from "lucide-react";
import { FAQS, SUPPORT_EMAIL } from "@/lib/site";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  // No backend for this form — it opens the visitor's email app with the
  // query pre-filled, addressed to the support inbox.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("type")}] Query from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
                    <h3 className="font-semibold text-sm">{f.q}</h3>
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
              <p className="font-semibold">Your email app should now be open.</p>
              <p className="text-sm text-white/50 mt-1">
                Hit send there to reach us. If nothing opened, email{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#ffd966] hover:underline">
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors"
                />
              </div>
              <select
                required
                name="type"
                aria-label="Query type"
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
                name="message"
                rows={4}
                aria-label="Your message"
                placeholder="Tell us what's up..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#fdb913]/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#fdb913] px-6 py-3.5 font-semibold text-black hover:bg-[#ffc93d] transition-colors disabled:opacity-60"
              >
                <Send size={16} />
                Email your query
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
