"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PlayCircle, Star } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site";
import AppStoreButton from "./AppStoreButton";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  // The 3D scene (three.js) is the heaviest script on the page. Start it only
  // once the browser is idle so it never delays the headline from painting.
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    const start = () => setShow3D(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 grid-fade" />
      {show3D && (
        <div className="absolute inset-0 hero-fade-in">
          <Hero3D />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07070a]/40 to-[#07070a] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* CSS entrance, not framer-motion: the headline is the LCP element and
            must not stay invisible until JavaScript hydrates. */}
        <div className="hero-enter">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/70 mb-6">
            <Star size={14} className="text-[#8bc34a]" fill="#8bc34a" />
            Built for UPSC Civil Services aspirants
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block mb-4 text-base md:text-lg font-semibold tracking-normal text-white/70">
              ConceptAffairs — the UPSC Current Affairs App
            </span>
            Turn today&apos;s news into
            <br />
            <span className="text-gradient">tomorrow&apos;s exam answers.</span>
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-lg">
            ConceptAffairs reads the daily news for you, maps every story to the UPSC GS
            syllabus, tests you with Prelims MCQs and Mains questions, and brings back exactly
            what you&apos;re forgetting — before the exam does.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={PLAY_STORE_URL || "#download"}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#fdb913] px-7 py-4 font-semibold text-black glow-orange hover:bg-[#ffc93d] transition-all"
            >
              <PlayCircle size={20} />
              Download for Android
            </a>
            <AppStoreButton
              label="Download for iOS"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-4 font-semibold text-white transition-all"
            />
          </div>

          <p className="mt-4 text-xs text-white/40">
            Available exclusively as a mobile app · 7-day free trial · No card needed to start
          </p>
        </div>

        {/* spacer column so 3D scene has room on desktop */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
