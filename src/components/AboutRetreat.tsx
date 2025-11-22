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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-tropical" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">The Experience</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
              Adventure meets
              <span className="block text-gradient-primary italic mt-2">Serenity</span>
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            This isn't just a retreat—it's a transformative journey where the South China Sea becomes your meditation hall and the rainforest your sanctuary.
          </p>
        </div>

        {/* Image with overlapping feature cards */}
        <div className="relative mb-20">
          <div className="rounded-3xl overflow-hidden shadow-strong animate-scale-in">
            <img 
              src={tropicalImage} 
              alt="Tropical paradise yoga setting" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          {/* Overlapping feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-80px] relative z-10 px-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-background/95 backdrop-blur-xl p-8 rounded-2xl shadow-strong border border-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};