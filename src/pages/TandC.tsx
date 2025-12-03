import { Info } from "lucide-react";
import { Footer } from "@/components/Footer";
import OPDSureFooter from "@/components/Footer2";

export default function TermsPage() {
  return (
    <>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="flex items-center gap-3 mb-10">
          <Info className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-8 text-foreground leading-relaxed">

          {/* 1 Booking & Payment */}
          <div>
            <h2 className="font-semibold text-xl mb-3">1. Booking &amp; Payment</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>A non-refundable full deposit ₹89,999 or $1,000 per participant is required to reserve a spot.</li>
              <li>A booking is confirmed only after receiving full payment and written confirmation.</li>
              <li>Promotional and early-bird offers are valid until Dec 20, 2025, or until sold out.</li>
              <li>Participation is strictly on a first-come, first-served basis.</li>
            </ul>
          </div>

          {/* 2 Cancellation & Refund Policy */}
          <div>
            <h2 className="font-semibold text-xl mb-3">2. Cancellation &amp; Refund Policy</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>All booking deposits are strictly non-refundable.</li>
              <li>Cancellations after Dec 25, 2025 receive no refund.</li>
              <li>Bookings on or after Dec 25, 2025 are non-refundable.</li>
              <li>Transfer of booking allowed as per retreat policy.</li>
            </ul>
          </div>

          {/* 5 Health & Safety */}
          <div>
            <h2 className="font-semibold text-xl mb-3">5. Health &amp; Safety</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>Participants must disclose medical conditions beforehand.</li>
              <li>All activities are voluntary and at the participant’s own risk.</li>
              <li>Participants must evaluate their physical capability.</li>
              <li>Organizers are not liable for injuries, illnesses, or incidents.</li>
            </ul>
          </div>

          {/* 6 Travel Responsibility */}
          <div>
            <h2 className="font-semibold text-xl mb-3">6. Travel Responsibility</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>Participants must arrange travel documents, flights, and insurance.</li>
              <li>Organizer is not liable for travel delays or missed connections.</li>
              <li>No refunds for missed sessions due to travel issues.</li>
            </ul>
          </div>

          {/* 7 Code of Conduct */}
          <div>
            <h2 className="font-semibold text-xl mb-3">7. Code of Conduct</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>Respectful behaviour is mandatory.</li>
              <li>Misconduct or illegal substances lead to removal without refund.</li>
            </ul>
          </div>

          {/* 8 Force Majeure */}
          <div>
            <h2 className="font-semibold text-xl mb-3">8. Force Majeure</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>Organizer is not responsible for uncontrollable events.</li>
              <li>Payments may be moved as credit for a future retreat.</li>
            </ul>
          </div>

          {/* 9 Waiver of Liability */}
          <div>
            <h2 className="font-semibold text-xl mb-3">9. Waiver of Liability</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>Participants release Finlyt Solutions Pvt. Ltd. from liability.</li>
              <li>Covers all retreat activities.</li>
              <li>Participants take full responsibility for personal well-being.</li>
            </ul>
          </div>

          {/* 10 Jurisdiction */}
          <div>
            <h2 className="font-semibold text-xl mb-3">10. Jurisdiction</h2>
            <ul className="space-y-2 list-decimal pl-6">
              <li>These terms follow Indian law.</li>
              <li>Disputes fall under Delhi courts.</li>
              <li>Retreat is operated by Finlyt Solutions Pvt. Ltd.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
<OPDSureFooter/>
    </>
  );
}
