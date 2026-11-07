import type { Metadata } from "next";
import CursorFX from "@/components/CursorFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pillars from "@/components/Pillars";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Support from "@/components/Support";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

// Canonical is set per page: a value in the root layout would be inherited
// by every route and point them all at the homepage.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <StructuredData />
      <CursorFX />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pillars />
        <Audience />
        <Pricing />
        <About />
        <Support />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
