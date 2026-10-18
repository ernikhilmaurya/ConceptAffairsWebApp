import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConceptAffairs — UPSC Prep App | Daily News to Exam-Ready Knowledge",
  description:
    "ConceptAffairs turns daily current affairs into syllabus-mapped UPSC knowledge — verified by quizzes, reinforced by spaced revision. Available on Android & iOS.",
  keywords: [
    "UPSC app",
    "UPSC preparation",
    "civil services exam",
    "current affairs UPSC",
    "UPSC current affairs app",
    "UPSC syllabus tracker",
    "UPSC quiz app",
  ],
  openGraph: {
    title: "ConceptAffairs — UPSC Prep App",
    description:
      "Turn daily news into exam-ready UPSC knowledge. Daily current affairs, syllabus mapping, quizzes & revision — in one app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
