"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  videoSrc?: string
  posterSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// @component: ProductTeaserCard
export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolume = "",
    dailyVolumeLabel = "Salud mental integral y humana",
    headline = "Bienvenidos a Corporación Admipsalud Consultores",
    subheadline = "Atención integral en salud mental con profesionales especializados en psicología, neuropsicología y psiquiatría. Brindamos un entorno cálido, humano y confidencial para ti y tu familia.",
    description = "",
    videoSrc = "",
    posterSrc = "/ima/doc1.jpg",
    primaryButtonText = "Ver servicios",
    primaryButtonHref = "",
    secondaryButtonHref = "",
  } = props

  return (
    <section className="w-full px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* CARD DE TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="col-span-12 lg:col-span-6 bg-[#f3f4f6] rounded-[32px] lg:rounded-[40px] p-8 lg:p-12 flex flex-col justify-center aspect-square lg:aspect-[4/3] overflow-hidden shadow-sm"
          >
            <a
              href={primaryButtonHref}
              onClick={(e) => e.preventDefault()}
              className="flex flex-col gap-1 text-[#6b7280] mb-4"
            >
              <motion.span
                initial={{ transform: "translateY(20px)", opacity: 0 }}
                animate={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.4,
                }}
                className="text-xs lg:text-sm uppercase tracking-[0.18em] font-mono flex items-center gap-1"
                style={{
                  fontFamily:
                    "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                }}
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.9em] h-[0.9em]" />
              </motion.span>
            </a>

            <h1
              className="text-[32px] leading-[1.1] lg:text-[44px] lg:leading-[1.1] tracking-tight text-[#111827] max-w-[520px] mb-4 lg:mb-6"
              style={{
                fontWeight: 600,
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {headline}
            </h1>

            <p
              className="text-base lg:text-lg leading-7 text-[#4b5563] max-w-[520px] mb-6 text-justify"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subheadline}
            </p>

            <div className="mt-4">
              <a
                href={primaryButtonHref}
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center cursor-pointer text-white rounded-full px-8 py-3 text-base leading-4 transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                style={{
                  background: "#156d95", // mismo color que tenías
                }}
              >
                {primaryButtonText}
              </a>

            </div>
          </motion.div>

          {/* CARD DE IMAGEN / ILUSTRACIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2,
            }}
            className="col-span-12 lg:col-span-6 rounded-[32px] lg:rounded-[40px] flex justify-center items-center aspect-square lg:aspect-[4/3] overflow-hidden bg-white shadow-sm"
            style={{
              backgroundImage: "url('/img/Imagen1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              className="block w-full h-full object-cover"
              style={{
                display: "none", // usamos solo la ilustración de fondo
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
