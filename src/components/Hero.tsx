import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, ArrowRight, Waves, Sparkles, Sun } from "lucide-react";
import heroImage from "@/assets/meditation-beach-real.webp";
// import opdsureLogo from "@/assets/opdsure-logo.png";
import PayPalModal from "./PayPal";

export const Hero = () => {

  const [isPayOpen, setIsPayOpen] = useState(false);

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
        <div className="absolute top-60 right-32 w-56 h-56 bg-secondary/15 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.7s" }} />
        <Waves className="absolute top-1/3 right-20 w-20 h-20 text-primary/10 animate-wiggle" />
        <Sparkles className="absolute bottom-1/4 left-20 w-16 h-16 text-secondary/10 animate-pulse" />
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Health Partner Logo */}
        {/* <div className="absolute top-4 right-4 md:top-6 md:right-6 animate-fade-in z-20">
          <div className="bg-white backdrop-blur-sm px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-strong border-2 md:border-3 border-primary/40 hover:shadow-glow hover:scale-105 transition-all duration-300">
            <p className="text-xs md:text-sm text-primary font-bold mb-1 md:mb-3 text-center tracking-wide">HEALTH PARTNER</p>
            <img src={opdsureLogo} alt="OPDsure - Assured Health Partner" className="h-8 md:h-16 object-contain" />
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 md:py-20 pt-32">

          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">

            {/* Urgency Badge */}
            {/* <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-secondary via-accent to-secondary backdrop-blur-sm border-2 border-secondary shadow-glow rounded-full animate-pulse">
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-white animate-pulse" />
              <span className="text-xs md:text-sm font-extrabold text-white tracking-wide">🔥 ONLY 12 SPOTS AVAILABLE</span>
            </div> */}

            {/* Main Heading */}
           <div className="space-y-2">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">

    {/* Logo */}
    <span className="block animate-fade-in">
     <img
  src="/logo.jpg"
  alt="OPDsure Logo"
  className="
    w-auto
    h-32 sm:h-40 md:h-48 lg:h-56
    object-contain
    mx-auto
  "
/>

    </span>

    <span 
      className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-fade-in font-semibold font-serif"
      style={{ animationDelay: "0.1s", backgroundSize: '200%' }}
    >
      Present
    </span>

    <span 
  className="block text-primary font-serif animate-fade-in font-semibold"
  style={{ animationDelay: "0.2s" }}
>
  Malaysia Wellness <span className="font-serif">&amp;</span> Adventure Retreat
</span>

  </h1>
</div>


            {/* Date & Location */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                <span>January 27–31, 2026 (5 Days / 4 Nights)</span>
              </div>

              <div className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Cherating Beach, Pahang, Malaysia</span>
              </div>
            </div>

            {/* Value Content */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in font-medium" style={{ animationDelay: "0.4s" }}>
              Yoga • Healing • Adventure • Nature. Transform stress into vitality with sunrise yoga, sound healing, water sports & jungle exploration.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button
  size="lg"
  onClick={() => setIsPayOpen(true)}
  className="group relative w-full sm:w-auto bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white text-xl font-extrabold px-16 py-10 shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300 overflow-hidden border-3 border-white/20"
>
  <span className="relative z-10 flex items-center gap-3">
    Book Your Spot Now
    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>

              
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-white border-2 border-primary/50 text-primary hover:bg-primary/5 text-base font-bold px-10 py-6">
                <a href="/logo.pdf" download="Malaysia-Wellness-Retreat-2026.pdf">
                  Download Full Itinerary (PDF)
                </a>
              </Button>
            </div>

            {/* Early Bird */}
            <div className="relative flex items-start gap-3 md:gap-4 px-4 md:px-8 py-4 md:py-6 bg-white border-3 md:border-4 border-primary rounded-2xl shadow-strong animate-fade-in hover:scale-105 transition-transform w-full md:inline-flex md:w-auto" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center animate-bounce-slow flex-shrink-0">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <p className="text-base md:text-xl font-black text-primary mb-1">🎯 Early Bird: Save USD 500!</p>
                <p className="text-sm md:text-base text-foreground font-semibold">Offer ends Dec 20th, 2025 • Limited spots remaining</p>
              </div>
            </div>
          </div>

          {/* Right Image + Pricing */}
          <div className="relative h-[600px] lg:h-[700px] animate-scale-in" style={{ animationDelay: "0.3s" }}>

            {/* Image */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-strong border-4 border-white">
              <img src={heroImage} alt="Vibrant cartoon illustration of beach yoga retreat in tropical Malaysia paradise" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Floating Price Card */}
            <div className="absolute -bottom-6 left-4 right-4 md:left-auto md:right-auto md:-left-6 bg-white p-5 md:p-7 rounded-3xl border-4 border-primary shadow-strong md:max-w-[300px] animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: "0.9s" }}>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-primary rounded-full">
                  <p className="text-xs text-white font-black uppercase tracking-widest">Early Bird</p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-display font-black text-primary">$1,000</p>
                <p className="text-lg text-muted-foreground line-through">$1,500</p>
              </div>

              <p className="text-sm text-foreground font-bold mb-4">All-inclusive twin sharing</p>

              {/* ⭐ Newly Added Pay Now Button */}
              <Button 
                size="lg"
                onClick={() => setIsPayOpen(true)}
                className="w-full bg-primary text-white font-bold py-4 mt-1 hover:bg-primary/90 transition-all duration-300"
              >
                Pay Now
              </Button>

              {/* Benefits List */}
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

            {/* Modal Mount */}
            <PayPalModal isOpen={isPayOpen} onClose={() => setIsPayOpen(false)} />

            {/* Badge */}
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
