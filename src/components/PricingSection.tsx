import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Info } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      type: "Twin Sharing",
      earlyBird: "$1,850",
      regular: "$2,050",
      features: [
        "4 Nights Luxury Accommodation",
        "All Meals & Snacks Included",
        "All Yoga & Healing Sessions",
        "All Adventure Activities",
        "Airport Transfers Included"
      ],
      popular: true
    },
    {
      type: "Single Occupancy",
      earlyBird: "$2,450",
      regular: "$2,650",
      features: [
        "Private Room for Solo Travelers",
        "All Meals & Snacks Included",
        "All Yoga & Healing Sessions",
        "All Adventure Activities",
        "Airport Transfers Included"
      ],
      popular: false
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Deposit:</strong> USD $499 non-refundable to secure your spot
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Balance Due:</strong> 30 days before retreat starts
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Early Bird:</strong> Book before Jan 5th, 2026 to save $200
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Transfers:</strong> Can transfer to another person up to 14 days before
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Cancellation:</strong> Deposit non-refundable, balance refundable per policy
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Payment Plans:</strong> Available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};