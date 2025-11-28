import { Check, X, Hotel, Utensils, Heart, Mountain, DollarSign, Plane, Sparkles, ShieldAlert } from "lucide-react";

export const InclusionsSection = () => {
  const inclusions = [
    { icon: Hotel, text: "4 Nights Luxury Accommodation" },
    { icon: Heart, text: "Daily Sunrise & Sunset Yoga Sessions" },
    { icon: Heart, text: "Ashtanga, Hatha, and Yin Yoga Practices" },
    { icon: Heart, text: "Sound Healing & Mandala Art Workshops" },
    { icon: Heart, text: "Guided Kriya & Yoga Philosophy" },
    { icon: Mountain, text: "All Adventure Activities (Water Sports, Rock Climbing, Flying Trapeze)" },
    { icon: Utensils, text: "Full-Board Vegetarian/Plant-Based Meals" },
    { icon: Utensils, text: "Daily Snacks & Refreshments" },
    { icon: Sparkles, text: "Yoga & Nutrition Therapy Counseling" },
    { icon: DollarSign, text: "Local Taxes & Tourism Fees" }
  ];

  const exclusions = [
    { icon: Plane, text: "International flights to/from Malaysia" },
    { icon: Sparkles, text: "Optional spa services and private lessons" },
    { icon: ShieldAlert, text: "Travel insurance & personal expenses" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
              What's Included & What's Not
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete transparency - know exactly what you're getting
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Included</h3>
              </div>
              <div className="space-y-4">
                {inclusions.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-soft">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border-2 border-muted">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Not Included</h3>
              </div>
              <div className="space-y-4">
                {exclusions.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${(index + 10) * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-soft">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-muted-foreground/20">
                <p className="text-sm text-muted-foreground font-semibold">
                  💡 Tip: We recommend booking flights early and getting comprehensive travel insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};