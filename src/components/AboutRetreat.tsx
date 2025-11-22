import { Waves, Mountain, Heart, Zap } from "lucide-react";
import tropicalImage from "@/assets/tropical-paradise.jpg";

export const AboutRetreat = () => {
  const features = [
    {
      icon: Waves,
      title: "Ocean & Jungle",
      description: "Experience the perfect blend of beach serenity and rainforest adventure"
    },
    {
      icon: Mountain,
      title: "Adventure Activities",
      description: "Rock climbing, flying trapeze, and water sports to challenge your limits"
    },
    {
      icon: Heart,
      title: "Deep Healing",
      description: "Sound healing, pranayama, and meditation for inner transformation"
    },
    {
      icon: Zap,
      title: "Expert Guidance",
      description: "600+ hours certified yoga instructor with clinical nutrition expertise"
    }
  ];

  return (
    <section className="py-24 bg-gradient-tropical">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Malaysian Sanctuary Awaits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Travel can change your scenery. But the right kind of travel can change you. 
              This retreat combines spiritual depth with exhilarating adventure in Malaysia's lush tropical paradise.
            </p>
          </div>

          {/* Image */}
          <div className="mb-16 animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={tropicalImage} 
                alt="Aerial view of tropical beach and rainforest" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};