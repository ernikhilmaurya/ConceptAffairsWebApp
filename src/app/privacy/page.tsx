import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — ConceptAffairs",
  description: "How ConceptAffairs collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="10 August 2026">
      <p>
        This Privacy Policy explains how ConceptAffairs (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) collects, uses, and protects information when you use our app and
        website (the &quot;Service&quot;).
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account data</strong> — name, email address, and phone number (if provided)
          used to create and manage your account.
        </li>
        <li>
          <strong>Payment data</strong> — subscription plan and transaction status. Card and
          UPI details are handled directly by our payment processor, Razorpay, and are never
          stored on our servers.
        </li>
        <li>
          <strong>Usage data</strong> — quiz attempts, progress, streaks, and app interactions,
          used to power features like the Readiness Score and AI revision.
        </li>
        <li>
          <strong>Device data</strong> — device type, OS version, and app diagnostics for
          crash-reporting and performance.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, operate, and personalise the Service (e.g. spaced revision, analytics).</li>
        <li>To process subscription payments and manage your account.</li>
        <li>To send service-related communications (e.g. renewal reminders, product updates).</li>
        <li>To improve the Service, fix bugs, and develop new features.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell your personal data. We share information only with service providers
        necessary to operate the Service — such as our payment processor (Razorpay), cloud
        hosting, and analytics providers — under confidentiality obligations, or where required
        by law.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain account and usage data for as long as your account is active, and for a
        reasonable period afterward to comply with legal, tax, or accounting requirements.
      </p>

      <h2>5. Your Choices</h2>
      <p>
        You can access, update, or request deletion of your account data by contacting us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>. You may also
        delete your account directly from within the app.
      </p>

      <h2>6. Security</h2>
      <p>
        We use industry-standard technical and organisational measures to protect your
        information. No method of transmission or storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        The Service is intended for users preparing for competitive exams and is not directed
        at children under 13. We do not knowingly collect data from children under 13.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Material changes will be notified
        in-app or via email.
      </p>

      <h2>9. Contact</h2>
      <p>
        For privacy-related questions, contact{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>. See also our{" "}
        <a href="/contact">Contact Us</a> page.
      </p>
    </LegalLayout>
  );
}
