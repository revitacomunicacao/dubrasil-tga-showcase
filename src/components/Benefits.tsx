// src/components/Benefits.tsx
import React, { useEffect, useRef, useState } from "react"
import { Zap, Clock, TrendingUp, HeadphonesIcon } from "lucide-react"

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

const benefits = [
  {
    icon: Zap,
    title: "Aumento de Produtividade",
    description:
      "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa.",
    stat: "40%",
    statLabel: "mais eficiência",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description:
      "Reduza o tempo gasto com tarefas manuais através de integrações e automações inteligentes.",
    stat: "10h",
    statLabel: "economizadas por semana",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description:
      "Tome decisões baseadas em dados precisos e acompanhe o crescimento do seu negócio.",
    stat: "25%",
    statLabel: "aumento em vendas",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Especializado",
    description:
      "Conte com uma equipe técnica dedicada para ajudar você em cada etapa da jornada.",
    stat: "24/7",
    statLabel: "suporte disponível",
  },
]

const Benefits = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section
      ref={ref}
      id="beneficios"
      className="py-24 bg-primary text-primary-foreground"
    >
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
            Benefícios
          </span>

          <h2
            className={[
              "text-3xl md:text-4xl font-bold mt-2 mb-4",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Por que escolher o ERP TGA?
          </h2>

          <p
            className={[
              "text-primary-foreground/70 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Transforme a gestão da sua empresa e alcance resultados extraordinários
            com nossa solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={[
                  "text-center group",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${index * 120}ms` } : undefined}
              >
                <div
                  className={[
                    "w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    "group-hover:bg-accent/30 transition-colors",
                    inView
                      ? "animate-in zoom-in-95 duration-700"
                      : "opacity-0 scale-[0.98]",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${80 + index * 120}ms` } : undefined}
                >
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                <div
                  className={[
                    "text-4xl font-bold text-accent mb-1",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                      : "opacity-0 translate-y-2",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${120 + index * 120}ms` } : undefined}
                >
                  {benefit.stat}
                </div>

                <div
                  className={[
                    "text-sm text-primary-foreground/60 mb-4",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                      : "opacity-0 translate-y-2",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${160 + index * 120}ms` } : undefined}
                >
                  {benefit.statLabel}
                </div>

                <h3
                  className={[
                    "text-xl font-semibold mb-3",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                      : "opacity-0 translate-y-2",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${200 + index * 120}ms` } : undefined}
                >
                  {benefit.title}
                </h3>

                <p
                  className={[
                    "text-primary-foreground/70 text-sm",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                      : "opacity-0 translate-y-2",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${240 + index * 120}ms` } : undefined}
                >
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
