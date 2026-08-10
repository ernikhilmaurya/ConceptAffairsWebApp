import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-black tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-white/40">Last updated: {updated}</p>

          <div
            className="mt-10 space-y-6 text-sm leading-relaxed text-white/70
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3
            [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
            [&_a]:text-[#ffd966] [&_a]:hover:underline
            [&_strong]:text-white/90"
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
