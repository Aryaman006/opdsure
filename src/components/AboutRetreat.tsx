import { Sparkles, Heart, Users, Mountain, Waves, Sun } from "lucide-react";
import tropicalImage from "@/assets/beach-yoga-splits.jpg";

export const AboutRetreat = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-background via-accent/5 to-secondary/10 overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-bounce-slow" />
        <Waves className="absolute top-1/3 left-10 w-24 h-24 text-primary/5 animate-wiggle" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-20 h-1.5 bg-gradient-to-r from-secondary via-primary to-accent rounded-full" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">The Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-8 leading-tight">
            A Journey Beyond
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-3">the Ordinary</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            This isn't just another yoga retreat. It's a carefully crafted experience that weaves together ancient wisdom, modern healing practices, and the vibrant beauty of Malaysia's coast! 🌴
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image with Quote Overlay */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-strong animate-scale-in order-2 lg:order-1">
            <img 
              src={tropicalImage} 
              alt="Yoga practitioner performing splits pose on tropical beach at sunset" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-medium border-2 border-primary/30">
                <Sun className="w-10 h-10 text-secondary mb-4" />
                <blockquote className="space-y-4">
                  <p className="text-xl md:text-2xl font-serif font-semibold text-foreground leading-relaxed">
                    "In the stillness between waves, we find the rhythm of our truest selves."
                  </p>
                  <footer className="text-sm text-muted-foreground font-bold">— Ancient Malay Wisdom</footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-fade-in-up order-1 lg:order-2">
            {[
              {
                icon: Sparkles,
                color: "primary",
                title: "Holistic Transformation",
                description: "A carefully curated blend of yoga, meditation, breathwork, and energy healing designed to rejuvenate body, mind, and spirit! ✨"
              },
              {
                icon: Heart,
                color: "secondary",
                title: "Intimate Connection",
                description: "With only 12 participants, you'll experience genuine connection and personalized attention in a close-knit, supportive community. 💕"
              },
              {
                icon: Users,
                color: "accent",
                title: "Expert Guidance",
                description: "Learn from seasoned practitioners who bring decades of combined experience in yoga, healing modalities, and transformational work. 🙏"
              },
              {
                icon: Mountain,
                color: "primary",
                title: "Natural Beauty",
                description: "Practice on pristine beaches, surrounded by lush tropical forests and the soothing sounds of the ocean—nature as your sanctuary. 🏝️"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group flex gap-5 p-6 bg-white rounded-3xl border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-medium hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
