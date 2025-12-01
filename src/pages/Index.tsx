import { Hero } from "@/components/Hero";
import { WhyThisRetreat } from "@/components/WhyThisRetreat";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import { ItinerarySnapshot } from "@/components/ItinerarySnapshot";
import { InclusionsSection } from "@/components/InclusionsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LogisticsSection } from "@/components/LogisticsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { StickyCtaButton } from "@/components/StickyCtaButton";
import { Footer } from "@/components/Footer";
import OPDSureContact from "@/components/Footer2";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyThisRetreat />
      <ExperienceHighlights />
      <ItinerarySnapshot />
      <InclusionsSection />
      <InstructorSection />
      <PricingSection />
      <TestimonialsSection />
      <LogisticsSection />
      <FaqSection />
      <CtaSection />
      <StickyCtaButton />
      {/* <Footer /> */}
      <OPDSureContact/>
    </div>
  );
};

export default Index;