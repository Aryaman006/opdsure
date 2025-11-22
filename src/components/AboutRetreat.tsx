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
    <section className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-depth" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 lg:mb-28 space-y-8 animate-gentle-fade">
            <div className="inline-block px-5 py-2 bg-primary/5 rounded-full border border-primary/10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">The Experience</p>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-foreground leading-tight max-w-4xl mx-auto text-balance">
              Where adventure meets
              <span className="block font-normal italic text-primary mt-3">inner peace</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light text-balance">
              This isn't just a retreat. It's a transformative journey where the South China Sea becomes your meditation hall and the rainforest your sanctuary.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-20 animate-gentle-fade" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-strong group">
              <img 
                src={tropicalImage} 
                alt="Tropical paradise yoga setting" 
                className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-soft border border-primary/5 hover:shadow-medium hover:border-primary/10 transition-all duration-500 hover:-translate-y-2 animate-gentle-fade"
                  style={{ animationDelay: `${0.1 * (index + 3)}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
