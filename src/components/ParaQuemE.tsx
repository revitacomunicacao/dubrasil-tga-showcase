import React, { useEffect, useRef, useState } from "react"
import {
  BriefcaseBusiness,
  Layers,
  ShoppingCart,
  Store,
} from "lucide-react"
import backgroundRotinas from "@/assets/background bloco rotinas.jpeg"

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = { threshold: 0.2, once: true }
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
      } else if (options.once === false) setInView(false)
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ref, inView }
}

const items = [
  { label: "Mercados e operações com alto giro", Icon: ShoppingCart },
  { label: "Comércio varejista / lojas", Icon: Store },
  { label: "Prestadores de serviço e pequenas empresas", Icon: BriefcaseBusiness },
  { label: "Operações que precisam integrar financeiro + estoque + emissão", Icon: Layers },
] as const

export default function ParaQuemE() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section
      ref={ref}
      id="para-quem-e"
      className="relative flex min-h-[850px] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundRotinas})` }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <h2
            className={[
              "whitespace-pre-line font-display text-4xl font-extrabold leading-[1.08] tracking-tight max-md:text-balance md:text-6xl lg:text-8xl text-brand-support text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <span className="font-light text-[#08284f]">Ideal para empresas <br />que precisam de </span>
            <br /><span className="font-extrabold text-[#2b8efa]">controle e rotina</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ label, Icon }, idx) => (
              <div
                key={label}
                className={[
                  "bg-[#2b8efa]/80 rounded-2xl p-5 flex flex-col items-center text-center gap-4",
                  inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                <div className="w-14 h-14 rounded-xl bg-[#08284f] flex items-center justify-center">
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <span className="text-[20px] font-medium text-white leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
