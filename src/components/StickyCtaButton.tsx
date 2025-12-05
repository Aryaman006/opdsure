import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import PayPalModal from "./PayPal";

export const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPayOpen, setIsPayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
        <Button
          size="lg"
          onClick={() => setIsPayOpen(true)}
          className="group bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold px-8 py-6 shadow-strong hover:shadow-glow transition-all duration-300 rounded-full border-3 border-white/20"
        >
          <span className="flex items-center gap-2">
            Book Your Spot Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>

      {/* Payment Modal Mount */}
      <PayPalModal isOpen={isPayOpen} onClose={() => setIsPayOpen(false)} />
    </>
  );
};
