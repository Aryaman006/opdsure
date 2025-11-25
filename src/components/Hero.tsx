import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, ArrowRight, Waves, Sparkles, Sun } from "lucide-react";
import heroImage from "@/assets/meditation-beach-real.jpg";
import opdsureLogo from "@/assets/opdsure-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Tropical beach paradise backdrop" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-60 right-32 w-56 h-56 bg-secondary/15 rounded-full blur-3xl animate-bounce-slow"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.7s" }}
        />
        <Waves className="absolute top-1/3 right-20 w-20 h-20 text-primary/10 animate-wiggle" />
        <Sparkles className="absolute bottom-1/4 left-20 w-16 h-16 text-secondary/10 animate-pulse" />
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Health Partner Logo - Top */}
        <div className="absolute top-6 right-6 animate-fade-in z-20">
          <div className="bg-white backdrop-blur-sm px-8 py-4 rounded-2xl shadow-strong border-3 border-primary/40 hover:shadow-glow hover:scale-105 transition-all duration-300">
            <p className="text-sm text-primary font-bold mb-3 text-center tracking-wide">HEALTH PARTNER</p>
            <img src={opdsureLogo} alt="OPDsure - Assured Health Partner" className="h-12 md:h-16 object-contain" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm border-2 border-primary/30 rounded-full shadow-soft">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-sm font-bold text-foreground tracking-wide">✨ Limited to 12 Amazing Souls</span>
            </div>

            {/* Main Headline - More Playful */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display leading-[0.9] tracking-tight">
                <span className="block text-primary animate-fade-in">TROPICAL</span>
                <span
                  className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-fade-in"
                  style={{ animationDelay: "0.1s", backgroundSize: "200%" }}
                >
                  EDGE
                </span>
                <span
                  className="block text-foreground text-3xl md:text-4xl font-serif font-medium mt-4 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Malaysia 🌴
                </span>
              </h1>
              <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="h-2 w-24 bg-gradient-to-r from-secondary via-primary to-accent rounded-full" />
                <Sun className="w-8 h-8 text-secondary animate-bounce-slow" />
              </div>
            </div>

            {/* Description - More Engaging */}
            <p
              className="text-xl md:text-2xl text-foreground leading-relaxed font-medium max-w-xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Where ancient healing wisdom meets Malaysia's vibrant tropical magic! ✨
            </p>
            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Five transformative days of sun, sea, and soul restoration on Cherating's golden shores.
            </p>

            {/* Key Details Grid - Enhanced */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="group relative p-6 bg-white rounded-3xl border-2 border-primary/30 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">When</p>
                <p className="text-xl font-bold text-foreground">Jan 23–27</p>
                <p className="text-sm text-muted-foreground mt-1">2026</p>
              </div>

              <div className="group relative p-6 bg-white rounded-3xl border-2 border-accent/30 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">Where</p>
                <p className="text-xl font-bold text-foreground">Cherating</p>
                <p className="text-sm text-muted-foreground mt-1">Beach Paradise</p>
              </div>
            </div>

            {/* CTA Buttons - More Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Button
                size="lg"
                asChild
                className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg font-bold px-12 py-8 shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <a href="https://rzp.io/rzp/bkUYcyDH" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    Reserve Your Spot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-3 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold px-12 py-8 hover:scale-105 transition-all duration-300"
              >
                Explore Details
              </Button>
            </div>

            {/* Early Bird - More Eye-catching */}
            <div
              className="relative inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-secondary/30 via-accent/20 to-primary/30 border-3 border-secondary/50 rounded-full shadow-medium animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center animate-bounce-slow">
                <Award className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-lg font-bold text-secondary">Save 20% Early Bird!</p>
                <p className="text-sm text-foreground font-medium">Offer ends July 31st, 2025</p>
              </div>
            </div>
          </div>

          {/* Right: Image with Floating Cards */}
          <div className="relative h-[600px] lg:h-[700px] animate-scale-in" style={{ animationDelay: "0.3s" }}>
            {/* Main Image Card */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-strong border-4 border-white">
              <img
                src={heroImage}
                alt="Vibrant cartoon illustration of beach yoga retreat in tropical Malaysia paradise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Floating Price Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-6 rounded-3xl border-3 border-primary/40 shadow-strong max-w-[280px] animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Investment</p>
              </div>
              <p className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                $1,850
              </p>
              <p className="text-sm text-foreground font-semibold mb-3">All-inclusive retreat</p>
              <div className="pt-3 border-t-2 border-primary/20">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ✨ Accommodation, meals, activities & healing sessions
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-medium rotate-12 animate-bounce-slow">
              <p className="text-sm font-bold">5 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-3 bg-gradient-to-r from-secondary via-primary to-accent" />
        <Waves className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 text-primary/5" />
      </div>
    </section>
  );
};
