import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — ConceptAffairs",
  description: "How ConceptAffairs collects, uses, and protects your data.",
};

// Keep in sync with mobile/src/data/legalContent.js (PRIVACY_CONTENT). This
// page is the URL submitted in the Play Console, and the Data safety form must
// match it — every claim here has to describe what the app actually does.
export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="18 October 2026">
      <p>
        This Privacy Policy explains how ConceptAffairs (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;), based in Noida, India, collects, uses, shares, and protects
        information when you use the ConceptAffairs mobile app and the website
        conceptaffairs.com (together, the &quot;Service&quot;).
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account data</strong> — your mobile number (used to sign in with a one-time
          password), your name, and a profile avatar. Age and gender are optional and are only
          stored if you choose to provide them.
        </li>
        <li>
          <strong>Exam profile</strong> — your target attempt year, preparation stage, available
          study hours, and preparation mode, used to tailor your study plan.
        </li>
        <li>
          <strong>Study activity</strong> — articles read, bookmarks, quiz attempts and answers,
          topic and paper progress, revision sessions, and streaks, used to power features like
          the Readiness Score and spaced revision.
        </li>
        <li>
          <strong>Payment data</strong> — which plan you bought, the amount, and whether the
          transaction succeeded. Card, UPI, and banking details are entered directly with
          Google Play and never reach our servers.
        </li>
        <li>
          <strong>Notification token</strong> — a push token issued by Firebase Cloud Messaging,
          along with your platform (Android or iOS), so we can send study reminders.
        </li>
      </ul>
      <p>
        Our servers also process your IP address transiently to secure the Service and prevent
        abuse (for example, rate-limiting sign-in attempts). It is not stored with your account.
      </p>
      <p>
        We do not collect your email address, location, contacts, photos or files, or your
        device&apos;s advertising identifier. The app contains no advertising, analytics, or
        tracking SDKs.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and personalise the Service — spaced revision, syllabus progress, and readiness scoring.</li>
        <li>To sign you in and keep your account secure. Signing in on a new device signs you out of the previous one.</li>
        <li>To process your plan purchase and record the access it grants.</li>
        <li>To send study reminders and service-related notices, if you have allowed notifications.</li>
        <li>To fix bugs and improve the Service.</li>
      </ul>
      <p>
        We do not use your information for advertising, and we do not build advertising
        profiles.
      </p>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell your personal data and we do not share it with advertisers. We share
        information only with the service providers needed to run the Service, each limited to
        what it needs:
      </p>
      <ul>
        <li>
          <strong>MSG91</strong> — receives your mobile number to deliver your sign-in OTP by
          SMS.
        </li>
        <li>
          <strong>Google Play</strong> — processes payments. Its handling of your payment
          details is governed by{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Google Firebase Cloud Messaging</strong> — delivers push notifications using
          your device&apos;s notification token.
        </li>
        <li>
          <strong>Cloud hosting provider</strong> — stores our database and runs our servers.
        </li>
      </ul>
      <p>We may also disclose information where required by law or to protect our legal rights.</p>

      <h2>4. Data Security</h2>
      <p>
        All traffic between the app and our servers is encrypted in transit using HTTPS, and
        your session token is stored in your device&apos;s secure keystore. Access to our
        database is restricted. No method of transmission or storage is completely secure, so
        we cannot guarantee absolute security.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your account and study data for as long as your account is active. When your
        account is deleted, we delete your profile, exam profile, study activity, and
        notification tokens. We retain payment transaction records (plan, amount, date, and
        Google Play order reference) for up to 8 years where required for tax and accounting
        obligations under Indian law, after which they are deleted.
      </p>

      <h2>6. Your Rights &amp; Account Deletion</h2>
      <p>
        You can view your profile details in the app. To access, correct, or obtain a copy of
        your data, email us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>.
      </p>
      <p>
        You can request deletion of your account and associated data at any time. See{" "}
        <a href="/delete-account">conceptaffairs.com/delete-account</a> for the steps. We
        action deletion requests within 30 days and confirm by reply.
      </p>
      <p>
        You can turn off study reminders at any time from the reminder toggle in your profile
        or from your device&apos;s notification settings.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        The Service is intended for adults preparing for competitive examinations and is not
        directed at anyone under 18. We do not knowingly collect personal data from children.
        If you believe a child has provided us with data, contact us and we will delete it.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. The &quot;Last updated&quot; date above
        shows when it last changed, and material changes will be notified in the app before
        they take effect.
      </p>

      <h2>9. Contact</h2>
      <p>
        For privacy questions or data requests, contact us at{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a> (ConceptAffairs, Noida,
        Uttar Pradesh, India). See also our <a href="/contact">Contact Us</a> page.
      </p>
    </LegalLayout>
  );
}
