import { Hero } from "@/components/Hero";
import LazySection from "@/components/LazySection";
import { StickyCtaButton } from "@/components/StickyCtaButton";
import OPDSureContact from "@/components/Footer2";

// Lazy-loaded sections (performance boost 🚀)
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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Immediate Content */}
      <Hero />

      {/* Lazy-loaded below-the-fold components */}
      <LazySection><WhyThisRetreat /></LazySection>
      <LazySection><ExperienceHighlights /></LazySection>
      <LazySection><ItinerarySnapshot /></LazySection>
      <LazySection><InclusionsSection /></LazySection>
      <LazySection><InstructorSection /></LazySection>
      <LazySection><PricingSection /></LazySection>
      <LazySection><TestimonialsSection /></LazySection>
      <LazySection><LogisticsSection /></LazySection>
      <LazySection><FaqSection /></LazySection>
      <LazySection><CtaSection /></LazySection>

      {/* Floating CTA */}
      <StickyCtaButton />

      {/* Footer */}
      <OPDSureContact />
    </div>
  );
};

export default Index;
