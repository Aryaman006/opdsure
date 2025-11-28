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
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary via-accent to-secondary backdrop-blur-sm border-2 border-secondary shadow-glow rounded-full animate-pulse">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span className="text-sm font-extrabold text-white tracking-wide">🔥 ONLY 12 SPOTS AVAILABLE</span>
            </div>

            {/* Main Headline - Sharp & Clear */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight">
                <span className="block text-primary animate-fade-in font-black">Tropical Edge:</span>
                <span
                  className="block text-foreground animate-fade-in mt-2"
                  style={{ animationDelay: "0.1s" }}
                >
                  Malaysia Wellness &
                </span>
                <span
                  className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-fade-in font-black"
                  style={{ animationDelay: "0.15s", backgroundSize: "200%" }}
                >
                  Adventure Retreat
                </span>
              </h1>
            </div>

            {/* Key Info Upfront - Dates & Location */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                <span>January 23–27, 2026 (5 Days / 4 Nights)</span>
              </div>
              <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Cherating Beach, Pahang, Malaysia</span>
              </div>
            </div>

            {/* Value Proposition */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in font-medium"
              style={{ animationDelay: "0.4s" }}
            >
              Yoga • Healing • Adventure • Nature. Transform stress into vitality with sunrise yoga, sound healing, water sports & jungle exploration.
            </p>

            {/* Strong Primary CTA */}
            <div className="space-y-4 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button
                size="lg"
                asChild
                className="group relative w-full sm:w-auto bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white text-xl font-extrabold px-16 py-10 shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300 overflow-hidden border-3 border-white/20"
              >
                <a href="https://rzp.io/rzp/bkUYcyDH" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-3">
                    Book Your Spot Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-white border-2 border-primary/50 text-primary hover:bg-primary/5 text-base font-bold px-10 py-6"
              >
                <a href="/logo.pdf" download="Tropical-Edge-Malaysia-Retreat-Itinerary.pdf">
                  Download Full Itinerary (PDF)
                </a>
              </Button>
            </div>

            {/* Urgent Early Bird Offer */}
            <div
              className="relative inline-flex items-start gap-4 px-8 py-6 bg-white border-4 border-primary rounded-2xl shadow-strong animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-bounce-slow flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-xl font-black text-primary mb-1">🎯 Early Bird: Save USD 200!</p>
                <p className="text-base text-foreground font-semibold">Offer ends July 31st, 2025 • Limited spots remaining</p>
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

            {/* Floating Price Card - Conversion Optimized */}
            <div
              className="absolute -bottom-6 -left-6 bg-white p-7 rounded-3xl border-4 border-primary shadow-strong max-w-[300px] animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-primary rounded-full">
                  <p className="text-xs text-white font-black uppercase tracking-widest">Early Bird</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-display font-black text-primary">
                  $1,850
                </p>
                <p className="text-lg text-muted-foreground line-through">$2,050</p>
              </div>
              <p className="text-sm text-foreground font-bold mb-4">All-inclusive twin sharing</p>
              <div className="pt-3 border-t-2 border-primary/20 space-y-1">
                <p className="text-xs text-foreground font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Accommodation & meals
                </p>
                <p className="text-xs text-foreground font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  All yoga & healing sessions
                </p>
                <p className="text-xs text-foreground font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Adventure activities included
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
