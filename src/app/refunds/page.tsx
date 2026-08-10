import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cancellation and Refunds — ConceptAffairs",
  description: "Cancellation and refund policy for ConceptAffairs subscriptions.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Cancellation and Refunds" updated="10 August 2026">
      <h2>Cancellation</h2>
      <p>
        You can cancel your ConceptAffairs subscription (Pro Monthly or Pro Yearly) at any time
        from within the app. Cancellation stops future renewals — it does not end your current
        billing period early.
      </p>
      <p>
        When you cancel, you retain full access to your paid plan&apos;s features until the end
        of the billing period you&apos;ve already paid for. After that, your account
        automatically moves to the Free plan.
      </p>

      <h2>Refunds</h2>
      <p>
        ConceptAffairs subscriptions are <strong>non-refundable</strong>. Because the Service is
        a digital product delivered instantly and consumed on access, we do not offer refunds
        or credits for:
      </p>
      <ul>
        <li>Partial subscription periods after cancellation.</li>
        <li>Unused features within a plan.</li>
        <li>Change of mind after a successful payment.</li>
        <li>Automatic renewal charges, unless required by law.</li>
      </ul>

      <h2>Exceptions</h2>
      <p>
        We will review refund requests on a case-by-case basis for genuine issues such as a
        duplicate charge, an unauthorised transaction, or a payment that was successfully
        debited but did not activate your subscription. To request a review, email{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a> within 7 days
        of the charge, including your registered email and payment reference ID.
      </p>

      <h2>How to Cancel</h2>
      <p>Open the ConceptAffairs app → Profile → Subscription → Cancel Subscription.</p>

      <h2>Contact</h2>
      <p>
        For billing or cancellation help, see our <a href="/contact">Contact Us</a> page or
        email <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
