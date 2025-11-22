import { Check } from "lucide-react";

export const InclusionsSection = () => {
  const inclusions = [
    "4 Nights Luxury Accommodation (Twin Sharing)",
    "Daily Sunrise & Sunset Yoga Sessions",
    "Ashtanga, Hatha, and Yin Yoga Practices",
    "Guided Kriya Practices (Jal Neti, Kapal Bhati)",
    "Sound Healing & Mandala Art Workshops",
    "Nada Yoga & Yoga Philosophy Sessions",
    "All Adventure Activities (Water Sports, Rock Climbing, Flying Trapeze)",
    "Full-Board Vegetarian/Plant-Based Meals",
    "Daily Snacks & Refreshments",
    "Yoga & Nutrition Therapy Counseling",
    "Local Taxes & Tourism Fees Included"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need, All Included
            </h2>
            <p className="text-xl text-muted-foreground">
              Your complete wellness journey, thoughtfully curated with no hidden costs
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
            <div className="grid md:grid-cols-2 gap-6">
              {inclusions.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-muted rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">Not Included:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• International flights to/from Malaysia</li>
              <li>• Optional spa services and private lessons</li>
              <li>• Travel insurance & personal expenses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};