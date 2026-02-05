// src/components/SolucoesDuBrasil.tsx
import {
  LayoutGrid,
  Store,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Solution = {
  title: string
  description: string
  icon: React.ElementType
}

const SOLUTIONS: Solution[] = [
  {
    title: "Sistema de Gestão (ERP)",
    description:
      "Conheça nossa solução ERP para controle das atividades operacionais e estratégicas. Integre as áreas da empresa em uma base robusta e segura, com visão completa e decisões mais confiáveis.",
    icon: LayoutGrid,
  },
  {
    title: "Frente de Caixa (PDV)",
    description:
      "Realize e monitore vendas de forma rápida e prática. Gerencie promoções, descontos, condições de pagamento e emissão de documentos fiscais (NFC-e) no ponto de venda, com suporte a off-line e contingência.",
    icon: Store,
  },
  {
    title: "Venda Móvel (App)",
    description:
      "Ferramenta multiplataforma para celular e tablet, ideal para agilizar o atendimento. Navegação intuitiva com acesso a funções essenciais, pesquisa de produtos e consulta de preço e estoque com facilidade.",
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
  return (
    <section id="solucoes" className="w-full py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Faixa superior (referência dos prints) */}
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#032048] via-[#032048] to-[#0b3b7a] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Soluções DuBrasil
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
              Um ecossistema completo para gestão, vendas e tomada de decisão —
              do operacional ao estratégico, com implantação e suporte
              humanizados.
            </p>

            <div className="mt-6">
              <Button
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
              >
                Falar com a DuBrasil <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Cards (4 soluções) */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.title}
                className="h-full border bg-background hover:shadow-sm transition-shadow"
              >
                <CardContent className="flex h-full flex-col gap-4 p-7 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      onClick={() => window.open(WHATSAPP_URL, "_blank")}
                      type="button"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
