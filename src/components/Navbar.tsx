"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#pillars", label: "How It Works" },
  { href: "/#audience", label: "Who It's For" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Image
            src="/logo.png"
            alt="ConceptAffairs logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            priority
          />
          ConceptAffairs
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#download"
          className="hidden md:inline-flex items-center rounded-full bg-[#fdb913] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#ffc93d] transition-colors"
        >
          Get the App
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mx-4 mt-3 rounded-2xl p-5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#fdb913] px-5 py-2.5 text-sm font-semibold text-black text-center"
          >
            Get the App
          </Link>
        </div>
      )}
    </header>
  );
}
