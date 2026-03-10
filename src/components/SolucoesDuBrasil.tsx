import React, { useEffect, useRef, useState } from "react"
import {
  LayoutGrid,
  Store,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import logoTga from "@/assets/logo tga.png"

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

const SOLUTIONS = [
  {
    title: "Sistema de Gestão (ERP)",
    description:
      "Ferramenta multiplataforma para acelerar o conhecimento nas áreas controladas. Realize monitoramento de vendas de forma ágil e ideal para agilizar o atendimento.",
    icon: LayoutGrid,
  },
  {
    title: "Frente de Caixa (PDV)",
    description:
      "Gerencie promoções, descontos, condições de pagamento e emissão de documentos fiscais (NFC-e) no ponto de venda, com suporte ao offline e contingência.",
    icon: Store,
  },
  {
    title: "Venda Móvel (App)",
    description:
      "Na gestão de vendas, pesquise produtos e consulte estoques com facilidade. Com suporte ao offline e inteligência.",
    icon: Smartphone,
  },
  {
    title: "Inteligência de Negócios (BI)",
    description:
      "Business Intelligence para apoiar decisões estratégicas com agilidade. Monte relatórios dinâmicos, selecione dimensões, crie visões e análises exploratórias para enxergar oportunidades com clareza.",
    icon: BarChart3,
  },
]

const WHATSAPP_URL =
  "https://wa.me/553433228500?text=Olá!%20Quero%20conhecer%20as%20soluções%20da%20DuBrasil%20(TGA)."

export function SolucoesDuBrasil() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, once: true })

  return (
    <section ref={ref} id="solucoes" className="w-full">
      {/* Mind-map style section with dark blue background */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/95 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            {/* Top label */}
            <div
              className={[
                "mb-8",
                inView ? "animate-in fade-in duration-700" : "opacity-0",
              ].join(" ")}
            >
              <span className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium px-5 py-2 rounded-full border border-primary-foreground/20">
                Sistema de gestão (ERP)
              </span>
            </div>

            {/* Center TGA logo */}
            <div
              className={[
                "w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-foreground flex items-center justify-center shadow-2xl mb-8",
                inView ? "animate-in fade-in zoom-in-95 duration-700 delay-150" : "opacity-0 scale-95",
              ].join(" ")}
            >
              <img src={logoTga} alt="TGA" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>

            {/* Connected labels */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Frente de caixa (PDV)", "Venda móvel (APP)", "Inteligência de negócios (BI)"].map((label, idx) => (
                <span
                  key={label}
                  className={[
                    "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium px-5 py-2 rounded-full border border-primary-foreground/20",
                    inView ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0 translate-y-2",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${200 + idx * 100}ms` } : undefined}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solution cards */}
      <div className="py-16 bg-background">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, idx) => {
              const Icon = s.icon
              return (
                <Card
                  key={s.title}
                  className={[
                    "h-full border bg-card hover:shadow-lg transition-all duration-300",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                      : "opacity-0 translate-y-3",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${300 + idx * 120}ms` } : undefined}
                >
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {s.description}
                    </p>
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-auto"
                      onClick={() => window.open(WHATSAPP_URL, "_blank")}
                      type="button"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
