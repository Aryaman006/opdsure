import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock } from "lucide-react";
import groupYogaImage from "@/assets/group-yoga.jpg";
import PayPalModal from "./PayPal";

export const CtaSection = () => {
  const [isPayOpen, setIsPayOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={groupYogaImage} 
          alt="Group yoga session at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Your Transformation Begins Here
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Limited spots available for an intimate, life-changing experience. 
              Don't miss this opportunity to reconnect with yourself in paradise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            {[
              { icon: Calendar, label: "5 Days / 4 Nights", value: "Jan 27-31, 2026" },
              { icon: Users, label: "Limited to", value: "Only 12 Spots" },
              { icon: Clock, label: "Early Bird Ends", value: "Dec 20th, 2025" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm text-primary-foreground/80 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-primary-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up">
            
            {/* UPDATED: PayPal Button */}
            <Button 
              size="lg"
              onClick={() => setIsPayOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-foreground text-lg px-10 py-6 shadow-strong"
            >
              Secure Your Spot Today
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg px-10 py-6"
            >
              <a href="/logo.pdf" download="Malaysia-Wellness-Retreat-2026.pdf">
                Download Brochure
              </a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 pt-4">
            Questions? Email us at support@opdsure.com or call +91-98201-04856
          </p>
        </div>
      </div>

      {/* PayPal Modal Mount */}
      <PayPalModal isOpen={isPayOpen} onClose={() => setIsPayOpen(false)} />

    </section>
  );
};
