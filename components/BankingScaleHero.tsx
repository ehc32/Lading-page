"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const BankingScaleHero = () => {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-8 py-24 pt-16">
        {/* md:items-center = centra verticalmente las dos columnas */}
        <div className="grid grid-cols-12 gap-5 gap-y-16 md:items-center">
          {/* COLUMNA TEXTO */}
          <div className="col-span-12 md:col-span-6 relative z-10">
            <div
              className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-[#167E6C] mb-12 px-2"
              style={{
                fontFamily:
                  "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              }}
            >
              <div className="flex items-center gap-0.5 overflow-hidden">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block whitespace-nowrap overflow-hidden text-[#167E6C] relative z-10"
                  style={{ color: "#146e96" }}
                >
                  Corporación Admipsalud ConsultoresS
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: typingComplete ? [1, 0, 1, 0] : 0 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="block w-1.5 h-3 bg-[#167E6C] ml-0.5 relative z-10 rounded-sm"
                  style={{ color: "#146e96" }}
                />
              </div>
            </div>

            {/* Misión */}
            <h2
              className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontSize: "40px",
                fontWeight: "400",
              }}
            >
              Misión
            </h2>

            <p
              className="text-lg leading-6 text-[#111A4A] opacity-60 mt-0 mb-6 text-justify"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                textAlign: "justify",
              }}
            >
              La Corporación Admipsalud Consultores tiene como misión promover el
              desarrollo integral de individuos y comunidades mediante
              intervenciones psicosociales, programas de prevención de atención en
              salud mental, capacitación, asesoría y consultoría técnica, basados
              en la calidad, el enfoque humano y la solidaridad, buscando el
              fortalecimiento social y la mejora de la calidad de vida.
            </p>

            {/* Visión */}
            <h2
              className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontSize: "40px",
                fontWeight: "400",
              }}
            >
              Visión
            </h2>

            <p
              className="text-lg leading-6 text-[#111A4A] opacity-60 mt-0 mb-6 text-justify"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                textAlign: "justify",
              }}
            >
              Ser una corporación líder en la promoción, prevención y atención
              integral de la salud mental, reconocida por su compromiso con el
              bienestar emocional de la población, la formación de profesionales
              competentes y la implementación de estrategias innovadoras que
              fortalezcan el equilibrio psicológico y social de las comunidades a
              nivel regional y nacional.
            </p>
          </div>

          {/* COLUMNA DERECHA – IMAGEN CENTRADA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2,
            }}
            className="col-span-12 md:col-span-6 flex justify-center md:justify-end md:self-center"
          >
            <div className="w-full md:w-[480px] lg:w-[520px]">
              <img
                src="/img/Imagen.jpg" // ajusta la ruta si hace falta
                alt="Recepción de Corporación Admipsalud Consultores"
                className="w-full h-auto rounded-[32px] lg:rounded-[40px] object-cover shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
