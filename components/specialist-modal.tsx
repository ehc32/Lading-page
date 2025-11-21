"use client"

import { X } from "lucide-react"

interface Specialist {
  img: string
  name: string
  specialty: string
  description: string
  fullDescription: string
}

interface SpecialistModalProps {
  isOpen: boolean
  specialist: Specialist | null
  onClose: () => void
}

export default function SpecialistModal({ isOpen, specialist, onClose }: SpecialistModalProps) {
  if (!isOpen || !specialist) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal centrado */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[85vh] flex flex-col">
          {/* Header (no scroll) */}
          <div className="bg-white px-6 sm:px-8 py-6 flex items-start justify-between gap-4 border-b border-gray-200">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{specialist.name}</h2>
              <span className="inline-block px-3 py-1 bg-[#104e64]/10 text-[#104e64] text-xs font-semibold rounded-full border border-[#104e64]/20">
                {specialist.specialty}
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X size={24} className="text-slate-600" />
            </button>
          </div>

          {/* Contenido (solo esto hace scroll si hay mucho texto) */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
              {/* Imagen */}
              <div className="mb-6 lg:mb-0 lg:w-5/12">
                <div className="rounded-xl overflow-hidden h-56 sm:h-64 lg:h-72 bg-gray-100 flex items-center justify-center">
                  <img
                    src={specialist.img || "/placeholder.svg"}
                    alt={specialist.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="lg:w-7/12 space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-base">
                    {specialist.fullDescription}
                  </p>
                </div>

                {/* Línea de acento */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#104e64]" />
                  <div className="w-2 h-2 rounded-full bg-[#104e64]" />
                  <div className="w-2 h-2 rounded-full bg-[#104e64]" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer (no scroll) */}
          <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#104e64] hover:bg-[#0d3a4d] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
