import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — ConceptAffairs",
  description: "Terms & Conditions for using the ConceptAffairs app and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="18 October 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the
        ConceptAffairs mobile application and website (together, the &quot;Service&quot;),
        operated by ConceptAffairs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By creating an
        account or using the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        ConceptAffairs provides UPSC exam-preparation content, including daily current affairs,
        syllabus mapping, quizzes, and revision tools. The Service is delivered entirely
        digitally through our mobile app and website.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You create an account with your mobile number, verified by a one-time password (OTP).
        You are responsible for keeping access to that number secure and for all activity under
        your account. Signing in on a new device signs you out of the previous one.
      </p>

      <h2>3. Plans & Payment</h2>
      <p>
        New users get a one-time 7-day free trial. Paid access is sold as fixed prepaid terms —
        1 month, 3 months, 6 months, or 12 months — paid in full at the time of purchase.
      </p>
      <p>
        These plans do not auto-renew. Nothing is charged to you again unless you choose to buy
        another term, so there is no recurring billing to cancel. Prices are shown in the app at
        checkout and may change for future purchases; a change never affects a term you have
        already paid for.
      </p>
      <p>
        Payments are processed by Google Play under Google&apos;s terms. We never receive or
        store your card, UPI, or banking credentials.
      </p>

      <h2>4. Access, Cancellation & Refunds</h2>
      <p>
        Your access runs until the end of the term you purchased and then simply stops. Because
        plans do not auto-renew, no cancellation step is required. Refund eligibility is set out
        on our <a href="/refunds">Cancellation and Refunds</a> page.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>
        You agree not to misuse the Service, including by attempting to access it using a method
        other than the interface we provide, scraping or reselling content, sharing your account with others, or interfering with
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
      <p>
        ConceptAffairs is an independent educational service. It is not affiliated with,
        endorsed by, or connected to the Union Public Service Commission (UPSC) or any
        government entity. Current affairs content is compiled and analysed from publicly
        available sources.
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
