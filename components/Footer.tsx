"use client"
import { Github, Twitter, Linkedin, Mail, Facebook } from "lucide-react"
import { motion } from "framer-motion"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type FooterProps = {
  companyName?: string
  tagline?: string
  sections?: FooterSection[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
    email?: string
    facebook?: string
  }
  copyrightText?: string
}

const defaultSections: FooterSection[] = [
  {
    title: "Corporación",
    links: [
      { label: "Quiénes somos", href: "#nosotros" },
      { label: "Misión y visión", href: "#mision-vision" },
      { label: "Equipo profesional", href: "#equipo" },
      { label: "Historia", href: "#historia" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Atención en salud mental", href: "#servicios" },
      { label: "Psicología", href: "#psicologia" },
      { label: "Neuropsicología", href: "#neuropsicologia" },
      { label: "Psiquiatría", href: "#psiquiatria" },
    ],
  },
  {
    title: "Atención al usuario",
    links: [
      { label: "Citas y agenda", href: "#citas" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Canales de contacto", href: "#contacto" },
      { label: "Peticiones, quejas y reclamos (PQR)", href: "#pqr" },
    ],
  },
  {
    title: "Información legal",
    links: [
      { label: "Política de privacidad", href: "#privacidad" },
      { label: "Términos y condiciones", href: "#terminos" },
      { label: "Tratamiento de datos", href: "#habeas-data" },
      { label: "Aviso legal", href: "#aviso-legal" },
    ],
  },
]

export const Footer = ({
  companyName = "Corporación Admipsalud Consultores",
  tagline = "Entidad privada que presta servicios de atención en salud mental con profesionales en psicología, neuropsicología y psiquiatría.",
  sections = defaultSections,
  socialLinks = {
    // Deja solo los que realmente uses en producción
    facebook: "https://www.facebook.com/corporacionadmisalud/",
    twitter: undefined,
    linkedin: undefined,
    github: undefined,
    email: undefined,
  },
  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const copyright =
    copyrightText ||
    `© ${currentYear} ${companyName}. Todos los derechos reservados.`

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Columna de marca e info básica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-4">
              <h3
                className="text-2xl font-semibold text-[#202020] mb-2"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {companyName}
              </h3>
              <p
                className="text-sm leading-5 text-[#666666] max-w-xs"
                style={{ fontFamily: "Figtree" }}
              >
                Sitio oficial de la Corporación Admipsalud. {tagline}
              </p>
            </div>

            {/* Dirección física */}
            <div className="mt-4 text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
              <p className="font-medium text-[#202020] mb-1">
                Dirección:
              </p>
              <p>
                Centro Comercial Metropolitano
                <br />
                Cra 5 No. 6-28 &mdash; Torre B Oficina 703
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Secciones de enlaces */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="col-span-1"
            >
              <h4
                className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                      style={{ fontFamily: "Figtree" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Barra inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm text-[#666666]"
              style={{ fontFamily: "Figtree" }}
            >
              {copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#mapa-del-sitio"
                className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Mapa del sitio
              </a>
              <a
                href="#contacto"
                className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
