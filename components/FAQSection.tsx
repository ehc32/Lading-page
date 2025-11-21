"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    question: "¿Qué es la Corporación Admipsalud Consultores?",
    answer:
      "La Corporación Admipsalud Consultores es una entidad privada dedicada a la promoción, prevención y atención integral de la salud mental. Contamos con un equipo interdisciplinario de psicólogos clínicos y comunitarios, trabajadores sociales, terapeutas ocupacionales, orientadores familiares y personal administrativo, orientados al bienestar emocional de individuos, familias y comunidades."
  },
  {
    question: "¿Cuál es la misión y visión de Admipsalud?",
    answer:
      "Nuestra misión es promover el desarrollo integral de individuos y comunidades mediante intervenciones psicosociales, programas de prevención, atención en salud mental, capacitación, asesoría y consultoría técnica, basados en la calidad, el enfoque humano y la solidaridad. Nuestra visión es ser una corporación líder en la promoción, prevención y atención integral de la salud mental, reconocida por su compromiso con el bienestar emocional, la formación de profesionales competentes y la implementación de estrategias innovadoras a nivel regional y nacional."
  },
  {
    question: "¿Dónde están ubicados y cómo podemos encontrarlos?",
    answer:
      "Nos encontramos en el Centro Comercial Metropolitano, Cra 5 No. 6-28, Torre B Oficina 703. Desde allí prestamos nuestros servicios de atención en salud mental y acompañamiento psicosocial a niños, niñas, adolescentes, adultos, familias y comunidades."
  },
 /*  {
    question: "¿Qué tipos de servicios en salud mental ofrece Admipsalud?",
    answer:
      "Ofrecemos consulta psicológica clínica individual, terapia de pareja y familiar, atención psicosocial y comunitaria, programas de prevención y promoción de la salud mental, orientación vocacional y acompañamiento psicoeducativo, intervención en crisis, programas de salud mental laboral, formación y capacitación en salud mental, y evaluación psicológica y psicométrica para contextos clínicos, educativos y organizacionales."
  },
  {
    question: "¿Atienden de manera virtual (telepsicología y teleorientación)?",
    answer:
      "Sí. Contamos con servicios de telepsicología y teleorientación, bajo los lineamientos del Ministerio de Salud, garantizando confidencialidad y calidad en la atención. Estos servicios permiten ampliar la cobertura a personas que se encuentran en zonas rurales, de difícil acceso o que prefieren la atención remota."
  },
  {
    question: "¿Cómo puedo agendar una cita psicológica?",
    answer:
      "Puedes agendar una cita comunicándote con la Corporación Admipsalud Consultores a través de nuestros canales de contacto (teléfono, correo o redes sociales) o de manera presencial en nuestra sede en el Centro Comercial Metropolitano, Cra 5 No. 6-28, Torre B Oficina 703. Allí te orientaremos sobre disponibilidad, profesional asignado y tipo de servicio que mejor se ajusta a tu necesidad."
  },
  {
    question: "¿A qué población va dirigido el servicio de Admipsalud?",
    answer:
      "Nuestros servicios están dirigidos a niños, niñas, adolescentes, adultos, adultos mayores, familias, empresas, instituciones educativas, organizaciones sociales, comunidades rurales y población en situación de vulnerabilidad o riesgo psicosocial. Trabajamos tanto a nivel individual como familiar, grupal y comunitario."
  },
  {
    question: "¿Con qué tipo de profesionales cuenta la Corporación?",
    answer:
      "Contamos con profesionales especializados en psicología clínica, comunitaria y social, como la gerente Yamileth Rojas Puentes (Magíster en Psicología Comunitaria), la Dra. Yureny Martínez Quiñones, la Dra. Alba Constanza Flores y la psicóloga social comunitaria Adriana Paola Sánchez, además de un equipo interdisciplinario conformado por trabajadores sociales, terapeutas ocupacionales, orientadores familiares y personal administrativo."
  } */
]

export const FAQSection = ({
  title = "Preguntas frecuentes",
  faqs = defaultFAQs
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Columna izquierda - Título */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px"
              }}
            >
              {title}
            </h2>
          </div>

          {/* Columna derecha - Items FAQ */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400"
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree"
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
