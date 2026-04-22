import React, { useEffect, useRef, useState } from "react"
import {
  BarChart3,
  BriefcaseBusiness,
  Layers,
  LayoutGrid,
  ShoppingCart,
  Smartphone,
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

export default function ParaQuemE() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section
      ref={ref}
      id="para-quem-e"
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundRotinas})` }}
    >
      <div className="py-12 bg-transparent">
        <div className="w-full px-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, idx) => {
              return (
                <div
                  key={s.title}
                  className={[
                    "bg-card rounded-2xl overflow-hidden p-6 flex flex-col gap-3 hover:shadow-xl transition-all duration-300",
                    inView
                      ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                      : "opacity-0 translate-y-3",
                  ].join(" ")}
                  style={inView ? { animationDelay: `${idx * 120}ms` } : undefined}
                >
                  <h3 className="text-2xl font-bold text-foreground leading-tight bg-[#E5E8EC] -mx-6 -mt-6 px-6 rounded-t-2xl h-[96px] flex items-center overflow-hidden">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className={[
              "text-2xl md:text-3xl text-foreground mb-10 text-center",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <span className="font-light">Ideal para empresas que precisam de </span>
            <span className="font-extrabold text-primary">controle</span>
            <span className="font-light"> e rotina</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ label, Icon }, idx) => (
              <div
                key={label}
                className={[
                  "bg-card rounded-2xl p-5 flex flex-col items-center text-center gap-4",
                  inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
