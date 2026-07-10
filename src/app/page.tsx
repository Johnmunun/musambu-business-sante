import { HeroSection } from "@/components/sections/hero-section";
import { MarketplaceSection } from "@/components/marketplace/marketplace-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketplaceSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationsSection />
      <CTASection />
    </>
  );
}
