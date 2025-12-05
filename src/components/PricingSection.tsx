import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Info } from "lucide-react";
import PayPalModal from "./PayPal";

export const PricingSection = () => {
  const [isPayOpen, setIsPayOpen] = useState(false);

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
    }
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 place-items-center max-w-2xl mx-auto">
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
                  <h3 className="text-2xl font-bold mb-4">
                    {pkg.type}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-primary-foreground">
                        {pkg.earlyBird}
                      </span>
                      <span className="text-primary-foreground/80">/person</span>
                    </div>
                    <p className="text-sm line-through text-primary-foreground/70">
                      Regular: {pkg.regular}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-foreground" />
                      <span className="text-primary-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Updated PayPal trigger */}
                <Button
                  className="w-full bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
                  size="lg"
                  onClick={() => setIsPayOpen(true)}
                >
                  Reserve Your Spot
                </Button>
              </div>
            ))}
          </div>

          {/* Booking Conditions */}
          {/* (unchanged section below) */}
          ...
        </div>
      </div>

      {/* PayPal Modal Mount */}
      <PayPalModal isOpen={isPayOpen} onClose={() => setIsPayOpen(false)} />
    </section>
  );
};
