import { Plane, MapPin, Users, FileText, Phone, Mail, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LogisticsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
            Logistics & Support
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know to prepare for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Getting There */}
          <div className="bg-white p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
              <Plane className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Getting There</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Nearest Airport:</strong> Kuantan Airport (KUA) - 45 mins drive
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Alternative:</strong> Kuala Lumpur (KUL) - 4 hours drive
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Transfers:</strong> Group airport transfers provided from Kuantan
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-white p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Retreat Venue:</strong> Luxury beachfront resort
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Address:</strong> Cherating Beach, Pahang, Malaysia
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Setting:</strong> Private beach access, tropical jungle surroundings
              </p>
            </div>
          </div>

          {/* Group Size */}
          <div className="bg-white p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Group Size</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Capacity:</strong> Limited to 20-25 participants
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Why small?</strong> Ensures personalized attention and intimate community
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Booking:</strong> First-come, first-served basis
              </p>
            </div>
          </div>

          {/* Visa Support */}
          <div className="bg-white p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Visa Assistance</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Tourist Visa:</strong> Most nationals get visa-free entry (30-90 days)
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Support:</strong> We provide invitation letters if required
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Process:</strong> Check your specific requirements with Malaysian embassy
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="https://wa.me/9810113654" className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                {/* <Phone className="w-4 h-4" /> */}
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +91-9810113654</span>
              </a>
              <a href="mailto:support@opdsure.com" className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                <Mail className="w-4 h-4" />
                <span>support@opdsure.com</span>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          {/* What to Bring */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-soft">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">What to Bring</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Comfortable yoga clothes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Swimwear & sun protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Light hiking shoes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Reusable water bottle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Personal toiletries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Open heart & adventurous spirit! ✨</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-foreground font-semibold mb-6">
            Need help planning your trip? We're here to make it easy!
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-6 shadow-medium hover:shadow-strong transition-all"
          >
            <a href="mailto:retreat@playoga.com">
              Get Travel Assistance
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
