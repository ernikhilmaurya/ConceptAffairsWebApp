import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping Policy — ConceptAffairs",
  description: "ConceptAffairs is a digital subscription — no physical goods are shipped.",
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Shipping Policy" updated="10 August 2026">
      <p>
        ConceptAffairs is a <strong>digital service</strong> — no physical goods are shipped.
      </p>
      <p>
        All plans (Free, Pro Monthly, Pro Yearly) grant access to digital content — current
        affairs, quizzes, syllabus mapping, and AI-powered revision tools — delivered entirely
        through the ConceptAffairs mobile app and website. There is no physical product,
        packaging, or delivery involved in any purchase.
      </p>
      <p>
        Upon successful payment, access to paid features is activated on your account
        immediately, or within a few minutes in case of processing delays. If your subscription
        is not activated within 24 hours of a successful payment, contact us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
