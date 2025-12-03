import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Info } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      type: "Twin Sharing",
      earlyBird: "$1,000",
      regular: "$1,500",
      features: [
        "4 Nights Luxury Accommodation",
        "All Meals & Snacks Included",
        "All Yoga & Healing Sessions",
        "All Adventure Activities",
        "Airport Transfers Included"
      ],
      popular: true
    },
    // {
    //   type: "Single Occupancy",
    //   earlyBird: "$2,450",
    //   regular: "$2,650",
    //   features: [
    //     "Private Room for Solo Travelers",
    //     "All Meals & Snacks Included",
    //     "All Yoga & Healing Sessions",
    //     "All Adventure Activities",
    //     "Airport Transfers Included"
    //   ],
    //   popular: false
    // }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Investment in Your Transformation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              All-inclusive 5-day retreat packages
            </p>
            
            <div className="inline-flex items-center gap-2 bg-secondary/20 border-2 border-secondary px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-foreground">
                Early Bird Special: Book before Jan 5th & Save 20%
              </span>
            </div>
          </div>
<div className="grid grid-cols-1 place-items-center max-w-2xl mx-auto">
          {/* <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> */}
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 animate-fade-in-up ${
                  pkg.popular 
                    ? 'bg-gradient-hero text-primary-foreground shadow-strong scale-105' 
                    : 'bg-card shadow-medium hover:shadow-strong'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-foreground">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {pkg.type}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className={`text-5xl font-bold ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                        {pkg.earlyBird}
                      </span>
                      <span className={pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                        /person
                      </span>
                    </div>
                    <p className={`text-sm line-through ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      Regular: {pkg.regular}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span className={pkg.popular ? 'text-primary-foreground' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  Reserve Your Spot
                </Button>
              </div>
            ))}
          </div>

          {/* Booking Conditions */}
          <div className="mt-16 max-w-4xl mx-auto">
  <div className="bg-muted/50 border-2 border-primary/20 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <Info className="w-6 h-6 text-primary" />
      <h3 className="text-2xl font-bold text-foreground">Booking Conditions</h3>
    </div>

    <div className="space-y-6 text-foreground">

      <div>
        <h4 className="font-semibold mb-2">Booking & Payment Terms</h4>
        <p>A non-refundable full deposit of $1,000 (₹89,999) is required to secure your spot.</p>
        <p>Booking is confirmed only after full payment and written confirmation.</p>
        <p>Early-bird discount is valid until December 20, 2025.</p>
        <p>All bookings made on or after December 25, 2025, are non-refundable.</p>
        <p>Failure to complete payment by December 20, 2025, results in automatic cancellation without refund.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Cancellation & Refund Policy</h4>
        <p>All deposits are strictly non-refundable under any circumstances.</p>
        <p>No refunds for cancellations after December 25, 2025, no-shows, early departures, missed activities, or travel delays.</p>
        <p>If you cannot attend, the booking may be transferred to another person until January 5, 2026, with prior written approval.</p>
        <p>If the retreat is cancelled by the organizer, a 100% refund will be provided. No additional claims will be accepted.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Program & Activity Changes</h4>
        <p>Activities, workshops, and schedules may change due to weather, safety, instructor availability, or unforeseen circumstances.</p>
        <p>Snorkelling/water activities depend on tides and weather. Alternate activities may be arranged but are not guaranteed.</p>
        <p>No refunds for substituted or modified activities.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Health, Safety & Liability</h4>
        <p>Participants must disclose any medical conditions before the retreat.</p>
        <p>All yoga, wellness, and adventure activities are voluntary and undertaken at your own risk.</p>
        <p>Organizers, instructors, and partners are not liable for injuries, illness, accidents, loss, or damages.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Travel Responsibility</h4>
        <p>Participants are responsible for travel documents, visas, flights, and insurance.</p>
        <p>No compensation for missed sessions or delays due to travel issues.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Photography & Media Release</h4>
        <p>Participants may be photographed or recorded during the retreat.</p>
        <p>Media may be used for promotional purposes.</p>
        <p>If you do not want to appear in media, submit a written request before the retreat.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Code of Conduct</h4>
        <p>Respectful behavior is mandatory.</p>
        <p>Misconduct or illegal substance use results in immediate removal without refund.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Force Majeure</h4>
        <p>Organizers are not liable for delays or cancellations due to events beyond control (weather, natural disasters, government restrictions, epidemics).</p>
        <p>Payments may be moved as credit toward a future retreat; refunds are not guaranteed.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Legal & Jurisdiction</h4>
        <p>By booking, participants agree to the Terms & Conditions and accept all risks.</p>
        <p>Jurisdiction: Delhi, India.</p>
        <p>Organizer: Finlyt Solutions Pvt. Ltd.</p>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};