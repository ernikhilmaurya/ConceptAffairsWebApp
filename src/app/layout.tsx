import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  // Google ignores the keywords tag; kept for Bing and other engines.
  keywords: [
    "ConceptAffairs",
    "Concept Affairs",
    "UPSC current affairs app",
    "daily current affairs for UPSC",
    "UPSC current affairs quiz",
    "UPSC Prelims MCQ",
    "UPSC Mains practice questions",
    "IAS preparation app",
    "civil services exam preparation",
    "UPSC syllabus mapped current affairs",
    "UPSC revision app",
    "UPSC CSE",
  ],
  category: "education",
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Turn daily news into exam-ready UPSC knowledge. Daily current affairs, syllabus mapping, Prelims & Mains quizzes and spaced revision — in one app.",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Daily UPSC current affairs, mapped to the GS syllabus, with Prelims MCQs, Mains questions and spaced revision.",
  },
  // Set GOOGLE_SITE_VERIFICATION to the token from Search Console
  // ("HTML tag" method) to verify ownership.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
