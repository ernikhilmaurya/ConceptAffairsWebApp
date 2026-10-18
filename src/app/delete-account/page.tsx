import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete Your Account — ConceptAffairs",
  description: "How to request deletion of your ConceptAffairs account and data.",
};

// This is the "Delete account URL" submitted in the Play Console Data safety
// form. Keep the retention details in sync with /privacy.
export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Account" updated="18 October 2026">
      <p>
        This page explains how to delete your account in the <strong>ConceptAffairs</strong>{" "}
        app (developer: ConceptAffairs) and what happens to your data.
      </p>

      <h2>How to request deletion</h2>
      <ul>
        <li>
          Send an email to{" "}
          <a href="mailto:humblyprep@gmail.com?subject=Account%20deletion%20request">
            humblyprep@gmail.com
          </a>{" "}
          with the subject <strong>&quot;Account deletion request&quot;</strong>.
        </li>
        <li>Include the mobile number registered with your ConceptAffairs account.</li>
        <li>
          We may send a verification step to that number to confirm the request is yours.
        </li>
        <li>We delete your account within 30 days and confirm by reply.</li>
      </ul>

      <h2>Data that is deleted</h2>
      <ul>
        <li>Account data — mobile number, name, avatar, age, and gender.</li>
        <li>Exam profile — attempt year, preparation stage, study hours, and preparation mode.</li>
        <li>
          Study activity — articles read, bookmarks, quiz attempts and answers, progress,
          revision sessions, and streaks.
        </li>
        <li>Notification tokens registered from your devices.</li>
      </ul>

      <h2>Data that is retained</h2>
      <p>
        Payment transaction records (plan, amount, date, and Google Play order reference) are
        kept for up to 8 years where required for tax and accounting obligations under Indian
        law, and then deleted. They are not used for any other purpose.
      </p>
      <p>
        Deleting your account does not refund an active plan. See our{" "}
        <a href="/refunds">Cancellation &amp; Refunds</a> policy.
      </p>

      <h2>Questions</h2>
      <p>
        Contact <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>. Read our full{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
