import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, ArrowRight, Waves, Sparkles, Sun } from "lucide-react";
import heroImage from "@/assets/hero-beach-yoga.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <Waves className="absolute top-1/4 right-10 w-16 h-16 text-primary/10 animate-wiggle" />
        <Sun className="absolute top-10 right-1/3 w-20 h-20 text-secondary/20 animate-bounce-slow" />
      </div>

      {/* Split Screen Layout */}
      <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-screen relative z-10">
        {/* Left: Content Side */}
        <div className="relative flex items-center px-6 md:px-12 lg:px-16 py-20 lg:py-0">
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-full shadow-soft animate-fade-in">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-bold text-foreground tracking-wide">Limited to 12 Amazing People!</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-foreground leading-[0.95] tracking-tight">
                TROPICAL
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-3">EDGE</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-gradient-to-r from-secondary via-primary to-accent rounded-full" />
                <p className="text-2xl md:text-3xl font-serif font-medium text-primary">Malaysia</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where ancient healing wisdom meets the vibrant beauty of Malaysia's tropical coastline! 
              <span className="block mt-4 text-foreground font-semibold text-xl">Five amazing days that transform a lifetime ✨</span>
            </p>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3 p-5 bg-white rounded-3xl border-2 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Dates</p>
                  <p className="text-base font-bold text-foreground">Jan 23–27, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 bg-white rounded-3xl border-2 border-accent/20 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base font-bold text-foreground">Cherating Beach</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg font-bold px-10 py-7 shadow-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Reserve Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white border-3 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold px-10 py-7 transition-all duration-300"
              >
                View Full Experience
              </Button>
            </div>

            {/* Early Bird Offer */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-secondary/30 via-secondary/20 to-primary/20 border-2 border-secondary/40 rounded-3xl shadow-soft animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-base text-foreground font-medium">
                <span className="font-bold text-secondary text-lg">Save 20%</span> — Early bird ends July 31st, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image Side */}
        <div className="relative min-h-[500px] lg:min-h-screen">
          {/* Main Image */}
          <div className="absolute inset-0 rounded-tl-[4rem] overflow-hidden">
            <img 
              src={heroImage} 
              alt="Serene beach yoga at sunset in tropical Malaysia" 
              className="w-full h-full object-cover"
            />
            {/* Colorful Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 lg:bg-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-3xl border-2 border-primary/30 shadow-strong max-w-xs animate-scale-in hidden lg:block">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-secondary" />
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Investment</p>
            </div>
            <p className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">From $1,850</p>
            <p className="text-base text-foreground font-semibold mb-4">All-inclusive transformative retreat</p>
            <div className="pt-4 border-t-2 border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Includes accommodation, all meals, activities & healing sessions ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Element */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-primary to-accent" />
    </section>
  );
};
