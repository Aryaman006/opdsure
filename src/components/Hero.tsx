import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-beach-yoga.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Tropical beach yoga at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <p className="text-primary font-medium">Limited Spots Available</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Tropical Edge: Malaysia
            <span className="block text-secondary mt-2">Wellness & Adventure Retreat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Where the South China Sea meets the Rainforest Canopy. 
            Transform your body, mind, and spirit in paradise.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/95">
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">January 23-27, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Cherating Beach, Malaysia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-foreground text-lg px-8 py-6 shadow-strong"
            >
              Book Your Spot Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg px-8 py-6"
            >
              View Full Itinerary
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 pt-4">
            🌟 Early Bird Discount: Save up to 20% when you book before July 31st
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};