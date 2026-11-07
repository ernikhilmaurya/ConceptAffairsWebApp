import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const LEGAL_PAGES = ["/contact", "/privacy", "/terms", "/refunds", "/shipping", "/delete-account"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...LEGAL_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
