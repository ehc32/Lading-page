"use client"

import { useState, useEffect, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigationLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Nosotros", href: "#pricing" },
  { name: "Servicios", href: "#solutions" },
  { name: "Experiencias", href: "#resources" },
  { name: "Blog", href: "#blog" },
] as any[]

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Modal contacto
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Estado envío
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [sendOk, setSendOk] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = (href: string) => {
    closeMobileMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openContactModal = () => {
    setIsContactOpen(true)
    closeMobileMenu()
  }

  const closeContactModal = () => {
    setIsContactOpen(false)
    setSendError(null)
    setSendOk(false)
  }

  // Envío real del formulario
  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSendError(null)
    setSendOk(false)
    setIsSending(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Error al enviar el formulario")
      }

      setSendOk(true)
      form.reset()
      // si quieres cerrar el modal automáticamente:
      // closeContactModal()
    } catch (err: any) {
      console.error(err)
      setSendError(err.message || "Error inesperado")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO + NOMBRE */}
            <button
              onClick={() => handleLinkClick("#home")}
              className="flex items-center gap-3 text-left group"
            >
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <Image
                  src="/img/logo.jpeg"
                  alt="Logo Corporación Admipsalud Consultores"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span
                  className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: 700 }}
                >
                  Corporación
                </span>
                <span
                  className="text-xs md:text-sm text-foreground/70 group-hover:text-primary/80 transition-colors"
                  style={{ fontFamily: "Figtree", fontWeight: 500 }}
                >
                  Admipsalud Consultores
                </span>
              </div>
            </button>

            {/* LINKS DESKTOP */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <span>{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* BOTÓN CONTACTO DESKTOP */}
            <div className="hidden md:block">
              <button
                onClick={openContactModal}
                className="bg-[#156d95] text-white px-[18px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 hover:rounded-2xl shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-[15px]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <span style={{ fontFamily: "Figtree", fontWeight: 500 }}>
                  Contáctenos
                </span>
              </button>
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MENÚ MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="px-6 py-6 space-y-4">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <span>{link.name}</span>
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  {/* BOTÓN CONTACTO MOBILE */}
                  <button
                    onClick={openContactModal}
                    className="w-full bg-[#156d95] text-white px-[18px] py-[15px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    <span>Contáctenos</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CONTACT MODAL / DIALOG */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
          >
            {/* panel */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-6 md:p-8 relative"
            >
              {/* botón cerrar */}
              <button
                onClick={closeContactModal}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
                aria-label="Cerrar formulario de contacto"
              >
                <X size={20} />
              </button>

              <div className="grid gap-8 md:grid-cols-2">
                {/* FORMULARIO (mismo diseño + names) */}
                <div>
                  <h2
                    className="text-xl md:text-2xl font-semibold mb-2 text-[#111A4A]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Contáctenos
                  </h2>
                  <p
                    className="text-sm text-gray-600 mb-6"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Déjenos sus datos y nos pondremos en contacto con usted para
                    brindarle más información sobre nuestros servicios en salud mental.
                  </p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#156d95] focus:border-[#156d95]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Correo electrónico
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#156d95] focus:border-[#156d95]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono / Celular
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#156d95] focus:border-[#156d95]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#156d95] focus:border-[#156d95]"
                        placeholder="Cuéntenos brevemente en qué podemos ayudarle..."
                      />
                    </div>

                    <div className="flex flex-col items-end gap-2 pt-2">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={closeContactModal}
                          className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          disabled={isSending}
                          className="px-5 py-2 text-sm rounded-full bg-[#156d95] text-white font-semibold hover:bg-[#156d95]/90 disabled:opacity-60"
                        >
                          {isSending ? "Enviando..." : "Enviar"}
                        </button>
                      </div>
                      {sendError && (
                        <p className="text-xs text-red-600 text-right">
                          {sendError}
                        </p>
                      )}
                      {sendOk && (
                        <p className="text-xs text-green-600 text-right">
                          ¡Gracias! Hemos recibido su mensaje.
                        </p>
                      )}
                    </div>
                  </form>
                </div>

                {/* MAPA + DIRECCIÓN */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      Nuestra sede
                    </h3>
                    <p className="text-sm text-gray-600">
                      Centro Comercial Metropolitano
                      <br />
                      Cra 5 No. 6-28 — Torre B Oficina 703
                    </p>
                  </div>

                  <div className="relative w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <iframe
                      title="Mapa Corporación Admipsalud Consultores"
                      src={
                        "https://www.google.com/maps?q=Centro%20Comercial%20Metropolitano%20Cra%205%20No.%206-28%20Torre%20B%20Oficina%20703&output=embed"
                      }
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
