import React from "react"
import bannerTGA from "@/assets/banners tga solucoes.png"

export function SolucoesDuBrasil() {
  return (
    <section id="solucoes" className="w-full">
      <div className="relative w-full overflow-hidden md:leading-[0]">
        <img
          src={bannerTGA}
          alt="Soluções TGA"
          className="block w-full object-cover object-center md:h-auto max-md:h-[calc(100vw*800/1920*1.65)] max-md:min-h-[calc(100vw*800/1920*1.65)] max-md:max-h-[360px]"
        />
      </div>
    </section>
  )
}
