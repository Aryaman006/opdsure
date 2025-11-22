import { Waves, Mountain, Heart, Zap } from "lucide-react";
import tropicalImage from "@/assets/tropical-paradise.jpg";

export const AboutRetreat = () => {
  const features = [
    {
      icon: Waves,
      title: "Ocean & Rainforest",
      description: "Where crystal waters meet ancient jungle. Experience the duality of beach tranquility and rainforest adventure in perfect harmony."
    },
    {
      icon: Mountain,
      title: "Adventure Awakening",
      description: "Challenge your edges with rock climbing, flying trapeze, and water sports. Growth lives outside comfort zones."
    },
    {
      icon: Heart,
      title: "Deep Restoration",
      description: "Sound healing ceremonies, advanced pranayama, and guided meditation create profound inner shifts."
    },
    {
      icon: Zap,
      title: "Expert Guidance",
      description: "Led by 600+ hour certified instructor Bhavika, integrating yoga therapy and clinical nutrition wisdom."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">The Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight">
            More Than a Retreat.
            <span className="block text-primary mt-3">A Transformation.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This is where the South China Sea becomes your meditation hall, and the rainforest canopy your cathedral of growth.
          </p>
        </div>

        {/* Main Image with overlay text */}
        <div className="relative mb-20 group">
          <div className="rounded-3xl overflow-hidden shadow-strong">
            <img 
              src={tropicalImage} 
              alt="Lush tropical paradise setting" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          
          {/* Overlay quote */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground leading-tight max-w-3xl">
              "The cure for anything is salt water: sweat, tears, or the sea."
              <footer className="text-base md:text-lg text-muted-foreground mt-3 not-italic">— Isak Dinesen</footer>
            </blockquote>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 shadow-soft hover:shadow-medium"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-foreground">{feature.title}</h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
