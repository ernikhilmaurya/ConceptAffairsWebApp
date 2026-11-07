import {
  APP_STORE_URL,
  FAQS,
  GS_SUBJECTS,
  PLANS,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  SUPPORT_EMAIL,
} from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;

const sameAs = [PLAY_STORE_URL, APP_STORE_URL, ...Object.values(SOCIALS)].filter(Boolean);

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "Concept Affairs",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: SUPPORT_EMAIL,
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: ["Concept Affairs", "ConceptAffairs UPSC"],
      url: SITE_URL,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      alternateName: "Concept Affairs",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      operatingSystem: "Android, iOS",
      applicationCategory: "EducationalApplication",
      inLanguage: "en-IN",
      audience: { "@type": "EducationalAudience", educationalRole: "UPSC civil services aspirant" },
      about: GS_SUBJECTS,
      publisher: { "@id": ORG_ID },
      ...(PLAY_STORE_URL ? { installUrl: PLAY_STORE_URL } : {}),
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: `${p.name} plan`,
        price: p.amount,
        priceCurrency: "INR",
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string in the payload can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
