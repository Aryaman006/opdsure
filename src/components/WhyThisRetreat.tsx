import { Heart, Sparkles, Mountain, Users, Compass, Sunrise } from "lucide-react";

export const WhyThisRetreat = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Why This Retreat Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
              Why This Retreat?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform stress into vitality with a perfect blend of wellness and adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Break Free from Burnout",
                description: "Release chronic stress and exhaustion through daily yoga, meditation, and healing practices designed for busy professionals.",
                delay: "0s"
              },
              {
                icon: Sparkles,
                title: "Reset Mind & Body",
                description: "Disconnect from daily demands and reconnect with yourself through sound healing, Yoganidra, and mindful movement.",
                delay: "0.1s"
              },
              {
                icon: Mountain,
                title: "Adventure Meets Wellness",
                description: "Experience the unique combination of calming yoga practice with exhilarating activities like rock climbing and water sports.",
                delay: "0.2s"
              },
              {
                icon: Sunrise,
                title: "Nature as Your Teacher",
                description: "Practice on tropical beaches, explore lush jungles, and find inspiration in Malaysia's breathtaking natural beauty.",
                delay: "0.3s"
              },
              {
                icon: Users,
                title: "Community Connection",
                description: "Share this transformative journey with like-minded individuals in a supportive, judgment-free environment.",
                delay: "0.4s"
              },
              {
                icon: Compass,
                title: "Holistic Transformation",
                description: "Return home with practical tools, renewed energy, and a clear path forward for sustainable wellbeing.",
                delay: "0.5s"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-primary/10"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Is This For Section */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
              Who Is This For?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This retreat welcomes everyone seeking transformation and adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Working Professionals",
                description: "Seeking stress relief, work-life balance, and a meaningful reset from demanding careers"
              },
              {
                title: "Yoga Practitioners (All Levels)",
                description: "From curious beginners to experienced yogis wanting to deepen their practice in a stunning setting"
              },
              {
                title: "Wellness Seekers",
                description: "Ready to explore holistic healing through yoga, meditation, sound therapy, and mindful movement"
              },
              {
                title: "Adventure Enthusiasts",
                description: "Looking to combine physical challenges with inner work and personal growth"
              },
              {
                title: "Solo Travelers",
                description: "Open to connecting with a supportive community while embarking on a personal journey"
              },
              {
                title: "Anyone Needing a Reset",
                description: "Feeling stuck, overwhelmed, or simply ready for a transformative experience in paradise"
              }
            ].map((audience, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-medium"
              >
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground font-semibold bg-secondary/10 inline-block px-8 py-4 rounded-full border-2 border-secondary/30">
              ✨ No prior yoga experience required • All fitness levels welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
