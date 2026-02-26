// src/components/Modules.tsx
import React, { useEffect, useRef, useState } from "react"
import { Package, Wallet, FileText, Monitor, Smartphone, BarChart3 } from "lucide-react"

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

const modules = [
  {
    icon: Package,
    title: "Estoque e Compras",
    subtitle: "Controle de estoque rápido e organizado",
    description:
      "Cadastros, movimentações, entradas/saídas, depósitos e relatórios para evitar rupturas e excesso de mercadoria.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    subtitle: "Previsibilidade no caixa e na operação",
    description:
      "Contas a pagar/receber, controle e visão para tomada de decisão com menos “surpresa” no fim do mês.",
  },
  {
    icon: FileText,
    title: "Fiscal e Emissão de Notas",
    subtitle: "Emissão de nota fiscal sem burocracia",
    description:
      "Rotinas fiscais e emissão de documentos eletrônicos (conforme o pacote contratado/necessidade), com foco em produtividade e conformidade.",
  },
  {
    icon: Monitor,
    title: "PDV e Frente de Caixa",
    subtitle: "Vendas no balcão com velocidade e controle",
    description:
      "PDV com recursos de operação (e possibilidade de integrações como TEF, conforme cenário).",
  },
  {
    icon: Smartphone,
    title: "Mobilidade e Operação em Campo",
    subtitle: "Venda móvel / operação mobile",
    description:
      "Para equipes externas que precisam vender/consultar e manter a operação rodando fora do escritório.",
    badge: "Opcional",
  },
  {
    icon: BarChart3,
    title: "BI e Indicadores",
    subtitle: "Indicadores para decisão",
    description: "Dashboards/relatórios para gestão (conforme módulos).",
    badge: "Opcional",
  },
]

const Modules = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="modulos" className="py-24 bg-background">
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
            Módulos
          </span>

          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Organizados por resultado, não por “lista fria”
          </h2>

          <p
            className={[
              "text-muted-foreground max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Selecione o conjunto certo para sua operação e faça o ERP virar rotina
            com implantação orientada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={[
                "bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 110}ms` } : undefined}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {module.title}
                    </h3>
                    {module.badge && (
                      <span className="text-xs text-muted-foreground">
                        {module.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm font-medium text-foreground">
                {module.subtitle}
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
