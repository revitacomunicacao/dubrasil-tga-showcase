// src/components/Benefits.tsx
import React, { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

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
    <section ref={ref} id="diferencial" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={[
              "text-accent font-semibold text-sm uppercase tracking-wider inline-block",
              inView
                ? "animate-in fade-in slide-in-from-top-4 duration-700"
                : "opacity-0 -translate-y-2",
            ].join(" ")}
          >
            Diferencial DuBrasil
          </span>

          <h2
            className={[
              "text-3xl md:text-4xl font-bold mt-2 mb-4",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            ERP funciona quando é bem implantado
          </h2>

          <p
            className={[
              "text-primary-foreground/70 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Não é só “instalar sistema”. A DuBrasil entra para garantir que o ERP
            vire rotina real.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={[
                "rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 110}ms` } : undefined}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">
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
