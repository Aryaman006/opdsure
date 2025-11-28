import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need prior yoga experience?",
      answer: "No prior yoga experience is required! Our retreat welcomes all levels, from complete beginners to experienced practitioners. Classes are designed to be accessible and modifications are provided for different abilities."
    },
    {
      question: "What about visa requirements for Malaysia?",
      answer: "Most nationalities can enter Malaysia visa-free for tourism purposes (typically 30-90 days). We provide invitation letters if needed for your visa application. Check with your local Malaysian embassy for specific requirements based on your nationality."
    },
    {
      question: "What fitness level is required for adventure activities?",
      answer: "Activities are designed for all fitness levels with proper guidance and safety measures. You can choose your level of participation - whether you want to push your limits or take it easy. All activities are optional and supervised by trained professionals."
    },
    {
      question: "What type of food is provided?",
      answer: "We serve delicious, nutritious vegetarian and plant-based meals using fresh, local ingredients. All meals, snacks, and refreshments are included. We can accommodate dietary restrictions and allergies - just let us know in advance."
    },
    {
      question: "Is travel insurance required?",
      answer: "While not mandatory, we strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and adventure activities. It provides peace of mind for your journey."
    },
    {
      question: "What's the cancellation and refund policy?",
      answer: "The $499 deposit is non-refundable to secure your spot. The remaining balance is refundable according to our cancellation policy: 30+ days before (80% refund), 15-29 days (50% refund), less than 14 days (no refund). You can transfer your booking to another person up to 14 days before the retreat."
    },
    {
      question: "How do I get to the retreat location?",
      answer: "The retreat is located in Cherating Beach, Pahang. The nearest airport is Kuantan Airport (45 mins) or Kuala Lumpur International Airport (4 hours). We provide group airport transfers from Kuantan. Detailed travel instructions will be sent upon booking."
    },
    {
      question: "Can I come alone or should I bring a friend?",
      answer: "Both are wonderful! Many participants come solo and find it a transformative experience for self-discovery and making new connections. If you're coming with a friend, you can share a room. Solo travelers are warmly welcomed into our supportive community."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before booking your spot
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 border-primary/10 rounded-xl px-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-foreground font-semibold mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:retreat@playoga.com" className="text-primary font-bold hover:underline">
              📧 retreat@playoga.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="https://wa.me/60123456789" className="text-primary font-bold hover:underline">
              📱 WhatsApp: +60 123-456-789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
