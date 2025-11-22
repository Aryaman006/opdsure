import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-beach-yoga.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 mix-blend-overlay opacity-40">
        <img 
          src={heroImage} 
          alt="Tropical beach yoga at sunset" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/40">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <p className="text-background font-semibold text-sm tracking-wide">LIMITED TO 12 PARTICIPANTS</p>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-background leading-[0.95] tracking-tight">
              Tropical
              <span className="block italic text-secondary mt-2">Edge</span>
              <span className="block text-5xl md:text-6xl font-light mt-4">Malaysia</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-background/90 leading-relaxed font-light">
              Where ocean waves meet jungle rhythms. 
              <span className="block font-semibold mt-2">Transform in paradise.</span>
            </p>

            <div className="flex flex-col gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-background text-xl px-10 py-8 rounded-2xl shadow-glow font-semibold hover:scale-105 transition-all duration-300"
              >
                Secure Your Spot
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-background/95 backdrop-blur-sm border-2 border-background text-primary hover:bg-background text-xl px-10 py-8 rounded-2xl font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background/95 backdrop-blur-xl p-8 rounded-3xl shadow-strong border border-primary/10">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Dates</p>
                  <p className="text-3xl font-display font-bold text-foreground">January 23-27</p>
                  <p className="text-xl text-foreground/70 mt-1">2026</p>
                </div>
              </div>
            </div>

            <div className="bg-background/95 backdrop-blur-xl p-8 rounded-3xl shadow-strong border border-accent/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</p>
                  <p className="text-3xl font-display font-bold text-foreground">Cherating Beach</p>
                  <p className="text-xl text-foreground/70 mt-1">Malaysia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-orange-500 p-8 rounded-3xl shadow-strong text-background">
              <p className="text-sm font-bold uppercase tracking-wider mb-3">Early Bird Special</p>
              <p className="text-4xl font-display font-bold mb-2">Save 20%</p>
              <p className="text-lg opacity-90">Book before July 31st, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-background/60 rounded-full flex items-start justify-center p-2.5">
          <div className="w-1.5 h-4 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};