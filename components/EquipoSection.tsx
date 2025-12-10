"use client"

import Image from "next/image"

export function EquipoSection() {
  return (
    <section
      id="equipo"
      className="w-full bg-background py-20 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:gap-16 md:grid-cols-2 items-center">
        {/* TEXTO */}
        <div>
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">
            Nuestro equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Equipo Interdisciplinario
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 text-justify">
            La Corporación Admipsalud Consultores cuenta con un equipo humano
            altamente calificado y comprometido con la promoción, prevención y
            atención integral de la salud mental.
          </p>

          <ul className="list-disc space-y-2 pl-5 text-base text-foreground">
            <li>Psicólogos clínicos y comunitarios</li>
            <li>Trabajadores sociales</li>
            <li>Terapeutas ocupacionales</li>
            <li>Orientadores familiares</li>
            <li>Personal administrativo</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-border bg-card">
            <Image
              src="/img/Imagen2.png" // pon aquí la foto
              alt="Equipo interdisciplinario de la Corporación Admipsalud Consultores"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 380px, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
