import React from "react"
import bannerTGA from "@/assets/banners tga solucoes.png"

export function SolucoesDuBrasil() {
  return (
    <section id="solucoes" className="w-full">
      {/* Banner TGA image */}
      <div>
        <img
          src={bannerTGA}
          alt="Soluções TGA"
          className="w-full h-auto object-cover object-center max-md:object-[center_30%]"
        />
      </div>
    </section>
  )
}
