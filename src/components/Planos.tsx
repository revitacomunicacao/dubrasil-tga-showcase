// src/components/Planos.tsx
import React, { useEffect, useRef, useState } from "react"
import { Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

type Plan = {
  name: string
  price: string
  subtitle: string
  highlight?: boolean
  badge?: string
  features: string[]
}

const WHATSAPP_URL =
  "https://wa.me/553433228500?text=Olá!%20Quero%20conhecer%20os%20planos%20do%20ERP%20TGA."

const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 297/mês",
    subtitle: "Para começar com controle e organização.",
    features: [
      "Cadastro de clientes e fornecedores",
      "Financeiro básico (contas a pagar/receber)",
      "Relatórios essenciais",
      "1 usuário administrativo",
      "Suporte padrão (horário comercial)",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 597/mês",
    subtitle: "Para operar com mais velocidade e previsibilidade.",
    highlight: true,
    badge: "Mais contratado",
    features: [
      "Tudo do Essencial",
      "Gestão de estoque e movimentações",
      "Dashboards de desempenho",
      "Até 5 usuários",
      "Automação de rotinas (alertas e lembretes)",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    subtitle: "Para times maiores e operações com alta demanda.",
    badge: "Personalizável",
    features: [
      "Tudo do Profissional",
      "Múltiplas unidades e permissões avançadas",
      "Integrações sob demanda (API/serviços)",
      "Treinamento e onboarding dedicado",
      "SLA e atendimento especializado",
      "Ambiente e regras sob medida",
    ],
  },
]

// Ajustes de alinhamento visual (mesmas alturas entre cards)
const TITLE_MIN_H = "min-h-[32px]" // 1 linha
const SUBTITLE_MIN_H = "min-h-[48px]" // ~2 linhas
const PRICE_MIN_H = "min-h-[52px]" // 1 linha grande
const BADGE_MIN_H = "min-h-[32px]" // reserva espaço do badge
const FEATURES_MIN_H = "min-h-[260px]" // equaliza área de lista
const CTA_MIN_H = "min-h-[88px]" // botão + texto de apoio

export function Planos() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="planos" className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 md:mb-14">
          <div
            className={[
              "flex items-center gap-2",
              inView
                ? "animate-in fade-in slide-in-from-top-4 duration-700"
                : "opacity-0 -translate-y-2",
            ].join(" ")}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-[20px] font-medium text-muted-foreground">
              Planos de contratação
            </p>
          </div>

          <h2
            className={[
              "text-3xl font-semibold tracking-tight md:text-4xl",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Escolha o plano certo para o seu ritmo de operação
          </h2>

          <p
            className={[
              "max-w-2xl text-[20px] leading-relaxed text-muted-foreground",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Valores e benefícios demonstrativos (fictícios). O objetivo é você
            visualizar os níveis de entrega e comparar rapidamente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch">
          {PLANS.map((plan, idx) => (
            <Card
              key={plan.name}
              className={[
                "relative h-full overflow-hidden border bg-background flex flex-col",
                plan.highlight
                  ? "ring-1 ring-primary/35 shadow-sm"
                  : "hover:shadow-sm transition-shadow",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${idx * 120}ms` } : undefined}
            >
              {plan.highlight ? (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
              ) : null}

              {/* HEADER COM ALTURAS PADRONIZADAS */}
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className={`text-xl ${TITLE_MIN_H}`}>
                      {plan.name}
                    </CardTitle>
                    <p
                      className={`mt-1 text-[20px] text-muted-foreground ${SUBTITLE_MIN_H}`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Reserva de espaço mesmo quando não tiver badge */}
                  <div className={`${BADGE_MIN_H} flex items-start justify-end`}>
                    {plan.badge ? (
                      <Badge
                        variant={plan.highlight ? "default" : "secondary"}
                        className={plan.highlight ? "" : "bg-muted"}
                      >
                        {plan.badge}
                      </Badge>
                    ) : (
                      <span className="invisible select-none">placeholder</span>
                    )}
                  </div>
                </div>

                <div className={`flex items-baseline gap-2 ${PRICE_MIN_H}`}>
                  <span className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                </div>
              </CardHeader>

              {/* CONTENT COM ÁREA DE LISTA + CTA PADRONIZADAS */}
              <CardContent className="flex-1 flex flex-col gap-6">
                <div className={`${FEATURES_MIN_H}`}>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-[20px] leading-relaxed text-muted-foreground">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-auto flex flex-col gap-3 ${CTA_MIN_H}`}>
                  <Button
                    className={plan.highlight ? "" : "bg-primary/90 hover:bg-primary"}
                    onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  >
                    Falar no WhatsApp
                  </Button>

                  <p className="text-[20px] text-muted-foreground">
                    Ajustamos o plano conforme número de usuários, módulos e
                    integrações.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
