import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <Button
        size="lg"
        asChild
        className="group bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold px-8 py-6 shadow-strong hover:shadow-glow transition-all duration-300 rounded-full border-3 border-white/20"
      >
        <a href="https://rzp.io/rzp/bkUYcyDH" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2">
            Book Your Spot Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </Button>
    </div>
  );
};
