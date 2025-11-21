import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { ProductTeaserCard } from "@/components/ProductTeaserCard";
import { BankingScaleHero } from "@/components/BankingScaleHero";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import SpecialistsGrid from "@/components/IntegrationCarousel";
import Index from "@/components/CaseStudiesCarousel";
import BlogSection from "@/components/blog-section";
import { EquipoSection } from "@/components/EquipoSection";



export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <ProductTeaserCard />
      <BankingScaleHero />
            <EquipoSection />

      <Index />
      <SpecialistsGrid />


      <FAQSection />
      <Footer />
    </>
  );
}
