// src/components/SobreDuBrasil.tsx
import React, { useEffect, useRef, useState } from "react"
import Logo from "@/assets/Logo Sobre.png"

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = { threshold: 0.25, once: true }
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.once !== false) observer.unobserve(el)
      } else if (options.once === false) {
        setInView(false)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}

export function SobreDuBrasil() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="sobrenos" className="w-full py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={[
            "relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#032048] via-[#032048] to-[#0b3b7a]",
            // estado inicial sem "piscadas" + transição suave
            inView ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700",
          ].join(" ")}
        >
          {/* detalhes sutis */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:items-center md:gap-14 md:p-14">
            {/* Texto - esquerda */}
            <div className="text-white">
              <p
                className={[
                  "text-[20px] font-medium text-white/70",
                  inView
                    ? "animate-in fade-in slide-in-from-top-3 duration-700"
                    : "opacity-0 -translate-y-2",
                ].join(" ")}
              >
                DuBrasil Soluções
              </p>

              <h2
                className={[
                  "mt-3 text-3xl font-semibold tracking-tight md:text-4xl",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
              >
                Excelência em Soluções para Gestão de Controle Empresarial
              </h2>

              <p
                className={[
                  "mt-5 text-[20px] leading-relaxed text-white/80",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
              >
                Somos especialistas em sistemas de ponto e controle de acesso,
                com mais de 25 anos de experiência.
              </p>

              <p
                className={[
                  "mt-4 text-[20px] leading-relaxed text-white/80",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-450"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
              >
                Nosso diferencial é ter suporte humanizado, na implantação
                eficiente e no atendimento personalizado, garantindo que sua
                empresa tenha solução sob medida.
              </p>
            </div>

            {/* Logo - direita */}
            <div
              className={[
                "flex items-center justify-center md:justify-end",
                inView
                  ? "animate-in fade-in slide-in-from-right-6 duration-700 delay-250"
                  : "opacity-0 translate-x-3",
              ].join(" ")}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <img
                  src={Logo}
                  alt="DuBrasil Soluções"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
