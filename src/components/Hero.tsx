import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-beach-yoga.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-tropical">
      {/* Soft floating orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Image - subtle overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Tropical beach yoga at sunset" 
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Main Content */}
            <div className="lg:col-span-7 space-y-10 animate-gentle-fade">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-primary/10 shadow-soft">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-foreground tracking-wide">Limited to 12 Guests</p>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-foreground leading-[1.05] text-balance">
                  Tropical Edge
                  <span className="block font-normal italic text-primary mt-2">Malaysia</span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-2xl text-balance">
                Where ancient practices meet tropical paradise. 
                <span className="block mt-3 text-foreground font-normal">A journey of body, mind & spirit.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-[1.02]"
                >
                  Reserve Your Space
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/80 backdrop-blur-sm border-2 border-foreground/10 text-foreground hover:bg-white hover:border-primary/30 text-lg px-10 py-7 rounded-2xl transition-all duration-500"
                >
                  View Itinerary
                </Button>
              </div>

              {/* Early Bird Notice */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 backdrop-blur-sm rounded-2xl border border-secondary/20">
                <div className="flex -space-x-1">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <p className="text-sm text-foreground/80">
                  <span className="font-semibold text-secondary">Early Bird:</span> Save 20% before July 31st
                </p>
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="lg:col-span-5 space-y-6 animate-gentle-fade" style={{ animationDelay: '0.2s' }}>
              {/* Date Card */}
              <div className="bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-medium border border-primary/5 hover:shadow-strong transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">When</p>
                    <p className="text-3xl lg:text-4xl font-display font-medium text-foreground">January 23–27</p>
                    <p className="text-lg text-muted-foreground mt-1.5">2026</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-medium border border-accent/5 hover:shadow-strong transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Where</p>
                    <p className="text-3xl lg:text-4xl font-display font-medium text-foreground">Cherating Beach</p>
                    <p className="text-lg text-muted-foreground mt-1.5">Malaysia</p>
                  </div>
                </div>
              </div>

              {/* Investment Highlight */}
              <div className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 p-8 lg:p-10 rounded-3xl shadow-soft border border-secondary/20">
                <div className="relative z-10">
                  <p className="text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-3">Investment</p>
                  <p className="text-2xl font-display text-foreground mb-1">From $1,850</p>
                  <p className="text-sm text-muted-foreground">All-inclusive experience</p>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};
