"use client"

import { useState } from "react"
import SpecialistModal from "./specialist-modal"

interface Specialist {
  img: string
  name: string
  specialty: string
  description: string
  fullDescription: string
}

const specialistsData: Specialist[] = [
  {
    img: "/img/doc1.jpg",
    name: "Yamileth Rojas Puentes",
    specialty: "Gerente de Empresa",
    description:
      "Especialista en Gerencia en Salud y Magíster en Psicología Comunitaria. Ejerce funciones de dirección, planeación y supervisión de procesos administrativos orientados al fortalecimiento institucional.",
    fullDescription: `Gerente de la empresa ADMIPSALUD CONSULTORES, Especialista en Gerencia en Salud y Magíster en Psicología Comunitaria, ejerce funciones de dirección, planeación y supervisión de los procesos administrativos, técnicos y de talento humano, orientados al fortalecimiento institucional y a la implementación de estrategias de promoción y prevención en salud mental. Asimismo, lidera proyectos interinstitucionales encaminados al bienestar psicológico y al desarrollo comunitario.`,
  },
  {
    img: "/img/doc2.jpg",
    name: "Dra. Yureny Martínez Quiñones",
    specialty: "Psicóloga Clínica",
    description:
      "Psicóloga con experiencia en acompañamiento psicológico infantil y familiar. Mi labor se centra en el fortalecimiento emocional, orientación e intervención tanto a nivel individual como grupal.",
    fullDescription: `Soy Psicóloga con experiencia en acompañamiento psicológico y apoyo psicosocial a niños, niñas y padres de familia. Mi labor se centra en el fortalecimiento emocional, la orientación y la intervención tanto a nivel individual como grupal, promoviendo el bienestar integral desde una perspectiva humana y preventiva. He desarrollado procesos de evaluación psicológica, entrevistas clínicas, diseño e implementación de estrategias psicoeducativas, y elaboración de informes enfocados en la promoción y prevención de la salud mental, especialmente en poblaciones vulnerables.`,
  },
  {
    img: "/img/doc3.jpg",
    name: "Dra. Alba Constanza Flores",
    specialty: "Psicóloga Humanista",
    description:
      "Psicóloga con enfoque humanista especializada en intervención clínica con parejas. Orienta al fortalecimiento de la salud mental desde una perspectiva integral y empática.",
    fullDescription: `Alba Constanza Flores es psicóloga con enfoque humanista y énfasis en intervención clínica con parejas, orientada al fortalecimiento de la salud mental y emocional desde una perspectiva integral. Su ejercicio profesional se fundamenta en los principios de la psicología humanista, priorizando la comprensión empática, la autenticidad y la aceptación incondicional como ejes del proceso terapéutico.

Cuenta con experiencia en evaluación, orientación y acompañamiento psicológico a parejas, abordando problemáticas relacionadas con la comunicación disfuncional, los conflictos recurrentes, la pérdida de confianza, la ruptura emocional y la reconstrucción del vínculo afectivo. Su intervención clínica promueve el reconocimiento de las necesidades individuales y compartidas, el desarrollo de habilidades relacionales y la resolución saludable de los conflictos.

Integra herramientas de la terapia centrada en la persona, la terapia de pareja de orientación humanista-experiencial y estrategias de regulación emocional, favoreciendo procesos terapéuticos efectivos que fortalecen el bienestar psicológico y la conexión afectiva.

Su práctica se caracteriza por una postura ética, empática y profesional, orientada a crear espacios seguros donde las parejas puedan explorar sus experiencias, resignificar sus dinámicas relacionales y construir alternativas saludables para su convivencia y crecimiento mutuo.`,
  },
  {
    img: "/img/doc4.jpg",
    name: "Adriana Paola Sánchez",
    specialty: "Psicóloga Social Comunitaria",
    description:
      "Especializada en diseño e implementación de procesos psicosociales orientados al fortalecimiento individual, familiar y comunitario en poblaciones vulnerables.",
    fullDescription: `Psicóloga social comunitaria, especializada en el diseño, implementación y evaluación de procesos psicosociales orientados al fortalecimiento individual, familiar y comunitario. Su ejercicio profesional se fundamenta en el enfoque de derechos, la participación ciudadana, la transformación social y la construcción colectiva del bienestar.

Cuenta con sólida experiencia en intervención comunitaria, acompañamiento psicosocial, gestión de proyectos sociales, prevención de problemáticas psicosociales y promoción de entornos protectores, especialmente en poblaciones vulnerables, víctimas del conflicto armado, comunidades rurales, grupos juveniles y familias en riesgo psicosocial.

Su práctica se caracteriza por un enfoque integral que articula elementos clínicos, sociales y comunitarios, permitiendo abordar situaciones como violencia intrafamiliar, duelo, desplazamiento, consumo de sustancias, dificultades relacionales y afectivas, entre otras. Integra herramientas de la psicología social, la intervención en crisis, el acompañamiento emocional, el trabajo grupal y la movilización comunitaria.

Desarrolla programas orientados a prevención del suicidio, promoción de la salud mental, prevención de violencias, liderazgo comunitario, intervenciones colectivas, orientación familiar, habilidades para la vida y fortalecimiento de redes de apoyo. Asimismo, lidera espacios de formación, talleres psicoeducativos, acciones intersectoriales y procesos de incidencia comunitaria.

Adriana Paola Sánchez se distingue por su capacidad para generar vínculos de confianza, su sensibilidad social, su compromiso ético y su enfoque centrado en la dignidad humana. Su labor busca contribuir al desarrollo de comunidades resilientes, participativas y emocionalmente fortalecidas, promoviendo entornos más seguros, cohesionados y saludables.`,
  },
]

export default function SpecialistsSection() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Nuestros Profesionales </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Conoce a nuestro equipo de profesionales altamente capacitados en diversas áreas de la salud, comprometidos
            con tu bienestar integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialistsData.map((specialist, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group"
              style={{ minHeight: "520px" }}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-muted overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src={specialist.img || "/placeholder.svg"}
                  alt={specialist.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="flex-1 flex flex-col p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 h-14 flex items-start">
                  {specialist.name}
                </h3>

                {/* Specialty Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-chart-3/10 text-chart-3 text-xs font-semibold rounded-full border border-chart-3/20">
                    {specialist.specialty}
                  </span>
                </div>

                {/* Description - Fixed height */}
                <p className="text-foreground/60 text-sm leading-relaxed flex-1 h-32 overflow-hidden">
                  {specialist.description}
                </p>

                <div className="mt-auto pt-4 border-t border-border flex-shrink-0">
                  <button
                    onClick={() => setSelectedSpecialist(index)}
                    className="w-full px-4 py-2 bg-[#104e64] hover:bg-[#0d3a4a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-md active:scale-95 mt-2"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SpecialistModal
        isOpen={selectedSpecialist !== null}
        specialist={selectedSpecialist !== null ? specialistsData[selectedSpecialist] : null}
        onClose={() => setSelectedSpecialist(null)}
      />
    </section>
  )
}
