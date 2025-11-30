import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import opdsureLogo from "@/assets/opdsure-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Health Partner Section */}
          <div className="text-center mb-12 pb-12 border-b border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60 mb-6">Health Partner</p>
            <div className="flex justify-center">
              <img 
                src={opdsureLogo} 
                alt="OPDsure - Assured Health Partner" 
                className="h-12 md:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Playoga</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Curating soulful, movement-led wellness experiences that 
                transform lives and reconnect you with your authentic self.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a href="mailto:retreat@playoga.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>retreat@playoga.com</span>
                </a>
                <a href="tel:+919810113654" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91-9810113654</span>
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>Noida, Uttar Pradesh - 201304</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
            <div className="text-center text-sm text-primary-foreground/80">
              <p className="font-semibold mb-2">Finlyt Solutions Pvt. Ltd.</p>
              <div className="space-y-1 text-primary-foreground/60">
                <p>GST No. 09AAECF8058N1ZY | COI No. U74999UP2021PTC155131</p>
                <p>Trade Mark No. 6246892, 6246893 | Certificate No. D1PP103946</p>
              </div>
            </div>
            <p className="text-center text-sm text-primary-foreground/60">
              &copy; 2025 Playoga Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};