"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  Brain,
  Heart,
  Users,
  Shield,
  Compass,
  AlertCircle,
  Briefcase,
  Monitor,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react"

type Service = {
  id: string
  title: string
  description: string
  audience: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: "consulta-individual",
    title: "Consulta Psicológica Clínica Individual",
    description:
      "Evaluación, diagnóstico e intervención psicológica dirigida a personas que presentan alteraciones emocionales, conductuales o del pensamiento.",
    audience: "Niños, adolescentes, adultos y adultos mayores",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "terapia-pareja",
    title: "Terapia de Pareja y Familiar",
    description:
      "Intervención psicológica orientada a mejorar la comunicación, resolver conflictos, reconstruir vínculos afectivos y fortalecer la convivencia.",
    audience: "Parejas en conflicto, familias con dificultades relacionales",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: "atencion-comunitaria",
    title: "Atención Psicosocial y Comunitaria",
    description:
      "Actividades de intervención comunitaria que promueven la salud mental, la resiliencia y el fortalecimiento de redes de apoyo.",
    audience: "Comunidades educativas, organizaciones sociales, instituciones",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "prevencion",
    title: "Prevención y Promoción de la Salud Mental",
    description:
      "Estrategias educativas, talleres, charlas y campañas orientadas a la prevención del suicidio, la violencia, el consumo de sustancias y los trastornos emocionales.",
    audience: "Instituciones educativas, empresas, entidades públicas",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "orientacion-vocacional",
    title: "Orientación Vocacional y Acompañamiento Psicoeducativo",
    description:
      "Evaluación de intereses, aptitudes y habilidades personales para orientar decisiones académicas y laborales.",
    audience: "Estudiantes de secundaria y educación superior",
    icon: <Compass className="w-8 h-8" />,
  },
  {
    id: "intervencion-crisis",
    title: "Intervención en Crisis",
    description:
      "Atención inmediata a personas en riesgo psicosocial o con crisis emocional aguda (intentos suicidas, duelo, trauma, violencia).",
    audience: "Población en situación de emergencia psicológica",
    icon: <AlertCircle className="w-8 h-8" />,
  },
  {
    id: "salud-laboral",
    title: "Programas de Salud Mental Laboral",
    description:
      "Evaluaciones psicológicas, acompañamiento emocional y programas de promoción del bienestar para entornos laborales.",
    audience: "Empresas y entidades públicas o privadas",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    id: "telepsicologia",
    title: "Telepsicología y Teleorientación",
    description:
      "Atención psicológica virtual bajo los lineamientos del Ministerio de Salud, garantizando confidencialidad y calidad del servicio.",
    audience: "Población general a nivel nacional",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    id: "formacion",
    title: "Formación y Capacitación en Salud Mental",
    description:
      "Talleres, diplomados y jornadas de capacitación sobre bienestar emocional, primeros auxilios psicológicos, comunicación asertiva, manejo del estrés y liderazgo emocional.",
    audience: "Profesionales, docentes y líderes comunitarios",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    id: "evaluacion",
    title: "Evaluación Psicológica y Psicométrica",
    description:
      "Aplicación e interpretación de pruebas psicológicas clínicas, educativas, organizacionales y de personalidad.",
    audience: "Individuos, instituciones educativas y organizaciones",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const currentService = services[currentIndex]

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 6000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isAutoPlaying, currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Nuestros Servicios
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Conoce a nuestro equipo de profesionales altamente capacitados en diversas áreas de la salud, comprometidos
            con tu bienestar integral.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Service Details */}
          <div className="space-y-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentService.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="space-y-6"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-lg"
                  style={{ backgroundColor: "#104e64" }}
                >
                  {currentService.icon}
                </motion.div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                  {currentService.title}
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {currentService.description}
                </p>

                {/* Audience Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-sm">
                  <Users className="w-4 h-4" style={{ color: "#104e64" }} />
                  <span className="text-sm font-medium text-card-foreground">{currentService.audience}</span>
                </div>

                {/* Service Number */}
                <div className="text-sm font-semibold text-muted-foreground">
                  Servicio {currentIndex + 1} de {services.length}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              {/* Dots */}
              <div className="flex gap-2 flex-wrap">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    style={{
                      backgroundColor: idx === currentIndex ? "#104e64" : undefined,
                    }}
                    aria-label={`Ir al servicio ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-2 sm:ml-auto">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-xl border border-border bg-card hover:bg-accent transition-colors shadow-sm"
                  aria-label="Servicio anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-xl border border-border bg-card hover:bg-accent transition-colors shadow-sm"
                  aria-label="Siguiente servicio"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="w-full max-w-md"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-xl overflow-hidden shadow-lg border border-border bg-card">
                  {/* Decorative circles */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: "#104e64" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#104e64" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: "#104e64" }}
                    >
                      {currentService.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-card-foreground">{currentService.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentService.description.substring(0, 120)}...
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#104e64" }} />
                        <span>Servicio profesional certificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
