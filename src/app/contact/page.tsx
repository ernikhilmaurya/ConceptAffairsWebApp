import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Contact Us — ConceptAffairs",
  description: "Get in touch with the ConceptAffairs team.",
};

export default function ContactPage() {
  return (
    <LegalLayout title="Contact Us" updated="10 August 2026">
      <p>
        We&apos;re happy to help with account, billing, or product questions. Reach us through
        any of the channels below.
      </p>

      <div className="mt-8 space-y-4 not-prose">
        <a
          href="mailto:humblyprep@gmail.com"
          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
        >
          <Mail size={18} className="text-[#8bc34a]" />
          humblyprep@gmail.com
        </a>
        <div className="flex items-center gap-3 text-white/80">
          <MapPin size={18} className="text-[#8bc34a]" />
          Noida, Uttar Pradesh, India
        </div>
      </div>

      <p className="mt-8">
        We typically respond to emails within 1–2 business days. For urgent billing or refund
        queries, please include your registered email address and payment reference (if
        applicable).
      </p>
    </LegalLayout>
  );
}
