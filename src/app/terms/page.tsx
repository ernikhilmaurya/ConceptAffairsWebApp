import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — ConceptAffairs",
  description: "Terms & Conditions for using the ConceptAffairs app and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="10 August 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the
        ConceptAffairs mobile application and website (together, the &quot;Service&quot;),
        operated by ConceptAffairs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By creating an
        account or using the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        ConceptAffairs is a digital subscription service that provides UPSC exam-preparation
        content, including daily current affairs, syllabus mapping, quizzes, and AI-powered
        revision tools. The Service is provided entirely digitally through our mobile apps
        (Android & iOS) and website.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You must provide accurate information when creating an account and are responsible for
        maintaining the confidentiality of your login credentials and for all activity under
        your account.
      </p>

      <h2>3. Subscriptions & Payment</h2>
      <p>
        Paid plans (Pro Monthly, Pro Yearly) are billed in advance on a recurring basis until
        cancelled. Prices are as shown in-app at checkout and may vary by region or promotional
        offer. Payments are processed by our third-party payment provider (Razorpay); we do not
        store your card or payment credentials.
      </p>

      <h2>4. Cancellation & Refunds</h2>
      <p>
        You may cancel your subscription at any time from within the app. See our{" "}
        <a href="/refunds">Cancellation and Refunds</a> page for full details.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>
        You agree not to misuse the Service, including by attempting to access it using a method
        other than the interface we provide, scraping or reselling content, or interfering with
        the Service&apos;s normal operation.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, trademarks, and materials made available through the Service are owned by
        or licensed to ConceptAffairs and are protected by applicable intellectual property
        laws. You may use the content only for your personal, non-commercial exam preparation.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        Content is provided for exam-preparation purposes on an &quot;as is&quot; basis. While we
        take care to keep information accurate and current, ConceptAffairs does not guarantee
        exam results and is not liable for decisions made based on the Service&apos;s content.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, ConceptAffairs shall not be liable for any
        indirect, incidental, or consequential damages arising from your use of the Service.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Service after changes
        take effect constitutes acceptance of the revised Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, and disputes shall be subject to the
        exclusive jurisdiction of the courts of Noida, Uttar Pradesh.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>. See also our{" "}
        <a href="/contact">Contact Us</a> page.
      </p>
    </LegalLayout>
  );
}
