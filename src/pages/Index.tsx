import { Hero } from "@/components/Hero";
import { AboutRetreat } from "@/components/AboutRetreat";
import { InclusionsSection } from "@/components/InclusionsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutRetreat />
      <InclusionsSection />
      <InstructorSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;