import { Sunrise, Music, Waves, Mountain, Compass, Users, Palette, Sparkles } from "lucide-react";

export const ExperienceHighlights = () => {
  const experiences = [
    {
      icon: Sunrise,
      title: "Sunrise & Sunset Yoga",
      description: "Begin and end each day with transformative yoga sessions on pristine beaches, connecting breath with movement as the sun paints the sky.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Music,
      title: "Sound Healing",
      description: "Experience deep relaxation through therapeutic sound vibrations using singing bowls, gongs, and other healing instruments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Yoganidra & Meditation",
      description: "Journey into profound rest with guided Yoganidra (yogic sleep) and meditation practices that restore and rejuvenate.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "Mandala Art",
      description: "Express your inner journey through the meditative practice of creating sacred mandala art in a peaceful setting.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Waves,
      title: "Water Sports",
      description: "Dive into adventure with kayaking, paddleboarding, and swimming in crystal-clear tropical waters.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mountain,
      title: "Rock Climbing & Flying Trapeze",
      description: "Challenge yourself physically and mentally with guided rock climbing and exhilarating flying trapeze experiences.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Compass,
      title: "Jungle Walk & City Tour",
      description: "Explore lush rainforest trails and discover local culture through guided jungle walks and authentic city experiences.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Experiences",
      description: "Connect deeply with fellow retreat-goers through shared meals, group activities, and meaningful conversations.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
            What You'll Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated blend of yoga, healing, adventure, and nature designed to transform your mind, body, and spirit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white to-muted/30 p-6 md:p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-strong hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                <experience.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {experience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>

              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${experience.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full border-2 border-primary/20">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-lg font-bold text-foreground">
              All activities are guided by experienced instructors in a safe, supportive environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
