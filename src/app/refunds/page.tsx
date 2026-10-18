import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cancellation and Refunds — ConceptAffairs",
  description: "Cancellation and refund policy for ConceptAffairs plans.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Cancellation and Refunds" updated="18 October 2026">
      <h2>No Auto-Renewal, Nothing to Cancel</h2>
      <p>
        ConceptAffairs plans are one-time prepaid terms of 1, 3, 6, or 12 months. They do not
        auto-renew, so you are never charged again unless you choose to buy another plan.
        There is no subscription to cancel.
      </p>
      <p>
        Your access runs until the end of the term you paid for and then simply stops. Your
        progress, streaks, and syllabus health stay saved, and you can buy another plan at any
        time to continue.
      </p>

      <h2>Free Trial</h2>
      <p>
        New users get a one-time 7-day free trial with full access. No payment is taken for the
        trial, and it does not convert into a paid plan automatically.
      </p>

      <h2>Refunds</h2>
      <p>
        Plans are <strong>non-refundable</strong>. Because the Service is a digital product
        delivered instantly and consumed on access, we do not offer refunds or credits for:
      </p>
      <ul>
        <li>Unused days remaining in a plan.</li>
        <li>Unused features within a plan.</li>
        <li>Change of mind after a successful payment.</li>
      </ul>

      <h2>Exceptions</h2>
      <p>
        We review refund requests case by case for genuine issues such as a duplicate charge, an
        unauthorised transaction, or a payment that was successfully debited but did not
        activate your plan. To request a review, email{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a> within 7 days of the
        charge, including your registered mobile number and the Google Play order ID (it starts with
        &quot;GPA.&quot; and is in your Google Play receipt email).
        Approved refunds are returned to the original payment method.
      </p>

      <h2>Contact</h2>
      <p>
        For billing help, see our <a href="/contact">Contact Us</a> page or email{" "}
        <a href="mailto:humblyprep@gmail.com">humblyprep@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
