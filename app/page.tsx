import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"
import SpecialistsGrid from "@/components/IntegrationCarousel"
import Index from "@/components/CaseStudiesCarousel"
import BlogSection from "@/components/blog-section"
import { EquipoSection } from "@/components/EquipoSection"

export default function Page() {
  return (
    <>
      <PortfolioNavbar />

      <main className="pt-20">
        {/* INICIO */}
        <section id="home" className="scroll-mt-24">
          <ProductTeaserCard />
        </section>

        {/* SOBRE NOSOTROS */}
        <section id="sobre-nosotros" className="scroll-mt-24">
          <BankingScaleHero />
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-24">
          {/* Puedes usar aquí la sección de servicios que prefieras */}
          <EquipoSection />
          {/* o también podrías añadir <PricingSection /> si aplica */}
        </section>

        {/* EXPERIENCIAS */}
        <section id="experiencias" className="scroll-mt-24">
          <Index />
          <SpecialistsGrid />
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section id="preguntas" className="scroll-mt-24">
          <FAQSection />
        </section>
      </main>

      <Footer />
    </>
  )
}
