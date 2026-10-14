import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import {
  InstagramGlyph,
  XGlyph,
  YoutubeGlyph,
  LinkedinGlyph,
} from "./SocialGlyphs";

const SOCIALS = [
  { icon: InstagramGlyph, href: "#", label: "Instagram" },
  { icon: XGlyph, href: "#", label: "X / Twitter" },
  { icon: YoutubeGlyph, href: "#", label: "YouTube" },
  { icon: LinkedinGlyph, href: "#", label: "LinkedIn" },
];

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#pillars" },
      { label: "Pricing", href: "#pricing" },
      { label: "Who It's For", href: "#audience" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Support / FAQ", href: "#support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cancellation & Refunds", href: "/refunds" },
      { label: "Shipping Policy", href: "/shipping" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 pb-14 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#ffd966] uppercase">
              Contact
            </span>
            <h3 className="mt-3 text-3xl font-black tracking-tight">
              Let&apos;s talk.
            </h3>
            <div className="mt-6 space-y-3 text-sm text-white/60">
              <a
                href="mailto:humblyprep@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-[#8bc34a]" />
                humblyprep@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#8bc34a]" />
                Noida, India
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-[#fdb913]/20 hover:text-[#ffd966] transition-colors"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2 font-semibold text-white/60">
            <Image
              src="/logo.png"
              alt="ConceptAffairs logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            ConceptAffairs
          </div>
          <p>
            © {new Date().getFullYear()} ConceptAffairs. All rights reserved.
          </p>
          <p>Available on Android & iOS only.</p>
        </div>
      </div>
    </footer>
  );
}
