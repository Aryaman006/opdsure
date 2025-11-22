import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Singapore",
      text: "This retreat completely transformed my relationship with yoga and myself. The combination of adventure and deep healing was exactly what I needed. Bhavika's guidance is truly exceptional.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Hong Kong",
      text: "I've been to many wellness retreats, but this one stands out. The location is breathtaking, the activities are perfectly balanced, and the entire experience exceeded my expectations.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "Australia",
      text: "From the sunrise yoga sessions to the flying trapeze adventures, every moment was magical. I left feeling rejuvenated, empowered, and deeply connected to nature and myself.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-tropical">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transformative Experiences
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from those who've embarked on this journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};