import { Award, Heart, Sparkles } from "lucide-react";
import instructorImage from "@/assets/instructor-portrait.jpg";

export const InstructorSection = () => {
  const credentials = [
    { icon: Award, text: "E-RYT® 200, RYT® 500 Certified" },
    { icon: Heart, text: "600+ Hours of Advanced Training" },
    { icon: Sparkles, text: "Certified Sound Healing Facilitator" }
  ];

  return (
    <section className="py-24 bg-gradient-tropical">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Retreat Leader
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience transformative guidance from an expert in holistic wellness
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={instructorImage} 
                  alt="Ms Bhavika Choradia - Yoga Instructor" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground">
                    Ms Bhavika Choradia
                  </h3>
                  <p className="text-primary-foreground/90 mt-2">
                    Founder of Playyoga Wellness
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <p className="text-lg text-foreground leading-relaxed">
                Bhavika is a yoga expert, Clinical Nutritionist, retreat facilitator, 
                and founder of Playyoga — a wellness brand that curates soulful, 
                movement-led experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Her approach is grounded and heart-led, blending discipline with 
                softness and ancient yogic wisdom with modern, accessible practices. 
                With specializations in Hatha, Vinyasa, Yin, Ashtanga, and Prenatal 
                Yoga, she brings a comprehensive understanding of yoga as a holistic 
                healing practice.
              </p>

              <div className="space-y-4 pt-4">
                {credentials.map((cred, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                      <cred.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{cred.text}</p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-muted-foreground">
                "My mission is to create spaces where people can pause, breathe, 
                and return to what truly matters — their authentic selves."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};