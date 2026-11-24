// Shared site data. Lives outside any "use client" module so server code
// (metadata, sitemap, JSON-LD) and client components read the same values.

export const SITE_URL = "https://conceptaffairs.com";
export const SITE_NAME = "ConceptAffairs";
export const SUPPORT_EMAIL = "humblyprep@gmail.com";

export const SITE_TITLE = "ConceptAffairs — UPSC Current Affairs App with Daily Quiz & Revision";
export const SITE_DESCRIPTION =
  "ConceptAffairs is a UPSC current affairs app for IAS / civil services aspirants: daily news analysis mapped to the GS syllabus, Prelims MCQs, Mains practice questions and spaced revision. 7-day free trial on Android and iPhone.";

// Store listings. Leave empty until the listing is public — an empty value
// keeps buttons pointing at the on-page #download section and keeps the URL
// out of structured data.
export const PLAY_STORE_URL: string = "https://play.google.com/store/apps/details?id=com.conceptaffairs.app";
export const APP_STORE_URL: string = "https://apps.apple.com/in/app/conceptaffairs/id6833510223";

// Social profiles. Fill in as they go live; non-empty ones are added to the
// Organization `sameAs` so Google can tie them to the brand.
export const SOCIALS: Record<"instagram" | "x" | "youtube" | "linkedin", string> = {
  instagram: "",
  x: "",
  youtube: "",
  linkedin: "",
};

export const GS_SUBJECTS = [
  "Polity & Governance",
  "Economy",
  "History & Culture",
  "Geography",
  "Environment & Ecology",
  "Science & Technology",
  "International Relations",
  "Social Justice",
  "Security & Disaster Management",
];

// Mirrors the subscription_plans seed in backend/src/migrations.js. Plans are
// one-time prepaid terms — nothing auto-renews — so never describe them as
// "billed monthly" or "cancel anytime".
export const PLANS = [
  { name: "1 Month", amount: 299, price: "₹299", perMonth: "₹299 / month", tagline: "Billed once", highlight: false },
  { name: "3 Months", amount: 799, price: "₹799", perMonth: "≈ ₹266 / month", tagline: "Save vs monthly", highlight: false },
  { name: "6 Months", amount: 1499, price: "₹1,499", perMonth: "≈ ₹250 / month", tagline: "Best value", highlight: true },
  { name: "12 Months", amount: 2999, price: "₹2,999", perMonth: "≈ ₹250 / month", tagline: "Lowest per-month cost", highlight: false },
];

export const FAQS = [
  {
    q: "What is ConceptAffairs?",
    a: "ConceptAffairs (Concept Affairs) is a UPSC current affairs app. Every day it publishes UPSC-analysed news articles, maps each one to the exact GS syllabus topic, tests you with Prelims MCQs and Mains questions, and schedules spaced revision of the concepts you keep getting wrong.",
  },
  {
    q: "Is ConceptAffairs useful for both UPSC Prelims and Mains?",
    a: "Yes. Each article includes prelims facts and easy/medium/hard Prelims-style MCQs, plus a Mains practice question linked to the relevant GS paper, so the same daily current affairs reading serves both stages of the civil services exam.",
  },
  {
    q: "Which GS subjects does the app cover?",
    a: `All 9 GS subjects: ${GS_SUBJECTS.join(", ")}. Your progress in each is tracked as a colour-coded syllabus tree.`,
  },
  {
    q: "Which platforms is ConceptAffairs available on?",
    a: "ConceptAffairs is a mobile-only app, available on Android via Google Play and on iPhone via the App Store. There is no desktop app — this website exists only to help you find and install it.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. New users get a one-time 7-day free trial with full access. After that, you need a prepaid plan (1, 3, 6, or 12 months) to keep using the daily feed and quizzes. Your progress stays saved either way.",
  },
  {
    q: "How is content updated?",
    a: "The Feed refreshes with newly analysed articles every day, so there's always something fresh mapped to the syllabus.",
  },
  {
    q: "Will I be charged again automatically?",
    a: "No. Plans are paid once, in the app, through Google Play on Android or the App Store on iPhone, and do not auto-renew. Your access simply ends when your plan does, so there is nothing to cancel. See our Cancellation & Refunds policy for refunds.",
  },
  {
    q: "Is ConceptAffairs an official UPSC app?",
    a: "No. ConceptAffairs is an independent educational app and is not affiliated with, endorsed by, or connected to the Union Public Service Commission (UPSC) or any government entity.",
  },
  {
    q: "I found a bug or have feedback — where do I report it?",
    a: `Use the query form or email ${SUPPORT_EMAIL} — we read every message.`,
  },
];
