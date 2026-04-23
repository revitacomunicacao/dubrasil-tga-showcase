// src/components/Benefits.tsx
import React, { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import tgaBG from "@/assets/tgaBG.jpeg"

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

const steps = [
  {
    title: "Diagnóstico do processo",
    description: "Como vocês trabalham hoje.",
  },
  {
    title: "Parametrização e organização",
    description: "Cadastros, regras e fluxos.",
  },
  {
    title: "Treinamento por perfil",
    description: "Quem lança, quem confere, quem decide.",
  },
  {
    title: "Acompanhamento até estabilizar",
    description: "Primeiro ciclo rodando sem dor.",
  },
]

const Benefits = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section
      ref={ref}
      id="diferencial"
      className="relative overflow-hidden section-pad text-primary-foreground bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${tgaBG})` }}
    >
      <div className="absolute inset-0" />
      <div className="container mx-auto px-4">
        <div className="relative text-center mb-16">
          <h2
            className={[
              "mt-2 mb-4 text-4xl leading-[1.05] tracking-tight max-md:text-balance md:text-5xl lg:text-6xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <span className="font-light">ERP funciona quando é </span>
            <span className="font-extrabold text-[#2b8efa]">bem implantado</span>
          </h2>

          <p
            className={[
              "text-[20px] max-w-3xl mx-auto leading-relaxed",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Não é só “instalar sistema”. A DuBrasil entra para garantir que o ERP
            vire rotina real.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={[
                "rounded-2xl border border-[#2b8efa]/20 bg-[#2b8efa]/30 backdrop-blur-sm transition-colors hover:bg-[#2b8efa]/15 hover:border-[#2b8efa]/30 p-5 md:p-6",
                index >= 2 ? "md:translate-x-10" : "",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 110}ms` } : undefined}
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="text-[20px] font-semibold">{step.title}</h3>
                  <p className="text-[20px] text-brand-support mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
