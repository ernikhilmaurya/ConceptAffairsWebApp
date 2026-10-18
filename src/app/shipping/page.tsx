import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping Policy — ConceptAffairs",
  description: "ConceptAffairs is a digital subscription — no physical goods are shipped.",
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Shipping Policy" updated="15 October 2026">
      <p>
        ConceptAffairs is a <strong>digital service</strong> — no physical goods are shipped.
      </p>
      <p>
        The free trial and all paid plans (1, 3, 6, and 12 months) grant access to digital
        content — current affairs, quizzes, syllabus mapping, and revision tools — delivered
        entirely through the ConceptAffairs mobile app. There is no physical product,
        packaging, or delivery involved in any purchase.
      </p>
      <p>
        Upon successful payment, your plan is activated on your account immediately, or
        within a few minutes in case of processing delays. If your plan is not activated within 24 hours of a successful payment, contact us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
