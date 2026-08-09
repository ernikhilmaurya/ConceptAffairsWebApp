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

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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
