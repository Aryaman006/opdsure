import { Button } from "@/components/ui/button";
import { Calendar, Download, Sunrise, Heart, Palette, Brain, Plane } from "lucide-react";

export const ItinerarySnapshot = () => {
  const days = [
    {
      day: "Day 1",
      title: "Sea, Sun & Adventure",
      icon: Sunrise,
      activities: [
        "Arrival and welcome gathering",
        "Beach sunset yoga session",
        "Group dinner and orientation",
        "Evening sound healing introduction"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      day: "Day 2",
      title: "Flow, Healing & Deep Rest",
      icon: Heart,
      activities: [
        "Sunrise yoga on the beach",
        "Sound healing and Yoganidra session",
        "Water sports adventure (kayaking, paddleboarding)",
        "Evening meditation and community circle"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      day: "Day 3",
      title: "Cleansing, Art & Celebration",
      icon: Palette,
      activities: [
        "Morning breathwork and movement",
        "Mandala art workshop",
        "Rock climbing and flying trapeze",
        "Group celebration and cultural experience"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      day: "Day 4",
      title: "Integration, Learning & Reflection",
      icon: Brain,
      activities: [
        "Gentle morning yoga flow",
        "Jungle walk and nature immersion",
        "City tour and local exploration",
        "Integration session and journaling"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      day: "Day 5",
      title: "Recreation & Departure",
      icon: Plane,
      activities: [
        "Final sunrise yoga ceremony",
        "Closing circle and group sharing",
        "Free time for beach or relaxation",
        "Farewell brunch and departure"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">5-Day Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
            Your Daily Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully structured journey from arrival to transformation, blending yoga, healing, adventure, and reflection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
          {days.map((dayInfo, index) => (
            <div
              key={index}
              className={`group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-strong hover:-translate-y-2 animate-fade-in ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Day badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`px-4 py-2 bg-gradient-to-r ${dayInfo.color} rounded-full`}>
                  <p className="text-sm font-black text-white uppercase tracking-wide">{dayInfo.day}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${dayInfo.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <dayInfo.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {dayInfo.title}
              </h3>

              {/* Activities */}
              <ul className="space-y-3">
                {dayInfo.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 bg-gradient-to-br ${dayInfo.color} rounded-full mt-2 flex-shrink-0`} />
                    <p className="text-muted-foreground leading-relaxed">{activity}</p>
                  </li>
                ))}
              </ul>

              {/* Decorative gradient overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${dayInfo.color} rounded-full opacity-5 blur-2xl pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* CTA for detailed itinerary */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 p-8 rounded-2xl border-2 border-primary/20 inline-block">
            <p className="text-lg text-foreground font-semibold mb-6">
              Want the complete hour-by-hour schedule with all activities and meals?
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-6 shadow-medium hover:shadow-strong transition-all duration-300 group"
            >
              <a href="/logo.pdf" download="Tropical-Edge-Malaysia-Retreat-Itinerary.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Full Itinerary (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
