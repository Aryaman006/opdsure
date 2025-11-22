import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-beach-yoga.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden bg-background">
      {/* Split Screen Layout */}
      <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Left: Content Side */}
        <div className="relative z-20 flex items-center px-6 md:px-12 lg:px-16 py-20 lg:py-0 bg-background">
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-card border border-primary/20 rounded-full animate-fade-in">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-widest">Limited to 12 Souls</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-foreground leading-[0.95] tracking-tight">
                TROPICAL
                <span className="block text-primary mt-2">EDGE</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-secondary to-primary" />
                <p className="text-xl md:text-2xl font-serif italic text-muted-foreground">Malaysia</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where ancient healing wisdom meets the raw beauty of Malaysia's coastline. 
              <span className="block mt-3 text-foreground font-medium">Five days that transform a lifetime.</span>
            </p>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Dates</p>
                  <p className="text-base font-semibold text-foreground">Jan 23–27, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base font-semibold text-foreground">Cherating Beach</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-background text-base font-semibold px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-500"
              >
                Reserve Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-border text-foreground hover:bg-card hover:border-primary/40 text-base font-semibold px-8 py-6 rounded-xl transition-all duration-500"
              >
                View Full Experience
              </Button>
            </div>

            {/* Early Bird Offer */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Award className="w-5 h-5 text-secondary" />
              <p className="text-sm text-foreground">
                <span className="font-bold text-secondary">Save 20%</span> — Early bird ends July 31st, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image Side */}
        <div className="relative min-h-[500px] lg:min-h-screen">
          {/* Main Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Serene beach yoga at sunset in tropical Malaysia" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay - creates depth and readability */}
            <div className="absolute inset-0 bg-gradient-overlay lg:bg-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-strong max-w-xs animate-scale-in hidden lg:block">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Investment</p>
            <p className="text-3xl font-display font-semibold text-foreground mb-2">From $1,850</p>
            <p className="text-sm text-muted-foreground">All-inclusive transformative retreat</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Includes accommodation, all meals, activities & healing sessions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
