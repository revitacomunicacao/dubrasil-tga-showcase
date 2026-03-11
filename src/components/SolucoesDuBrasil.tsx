import React, { useEffect, useRef, useState } from "react"
import {
  LayoutGrid,
  Store,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react"
import bannerTGA from "@/assets/banners tga solucoes.png"

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = { threshold: 0.1, once: true }
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
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.05, once: true })

  return (
    <section ref={ref} id="solucoes" className="w-full">
      {/* Banner TGA image */}
      <div>
        <img src={bannerTGA} alt="Soluções TGA" className="w-full h-auto object-cover" />
      </div>

      {/* Solution cards on dark background */}
      <div className="py-12 bg-primary">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, idx) => {
              return (
                <div
                  key={s.title}
                  className={[
                    "bg-card rounded-2xl p-6 flex flex-col gap-3 hover:shadow-xl transition-all duration-300",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                      : "opacity-0 translate-y-3",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${idx * 120}ms` } : undefined}
                >
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground flex-1">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
