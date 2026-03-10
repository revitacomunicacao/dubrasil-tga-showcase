import React, { useEffect, useRef, useState } from "react"
import moduleEstoque from "@/assets/module-bi.png"
import moduleFinanceiro from "@/assets/module-financeiro.png"
import moduleFiscal from "@/assets/module-fiscal.png"
import modulePdv from "@/assets/module-pdv.png"
import moduleMobilidade from "@/assets/module-mobilidade.png"
import moduleBi from "@/assets/module-bi.png"

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = { threshold: 0.15, once: true }
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

const modules = [
  {
    image: moduleEstoque,
    title: "Estoque e Compras",
    subtitle: "Controle de estoque rápido e organizado",
    description:
      "Cadastros, movimentações, entradas/saídas, e relatórios para evitar rupturas e excessos de mercadoria.",
  },
  {
    image: moduleFinanceiro,
    title: "Financeiro",
    subtitle: "Previsibilidade no caixa e na operação",
    description:
      "Contas a pagar/receber, controle e visão para tomadas de decisão com menos \"surpresa\" na hora de fechar.",
  },
  {
    image: moduleFiscal,
    title: "Fiscal e Emissão de Notas",
    subtitle: "Emissão de nota fiscal sem burocracia",
    description:
      "Rotinas fiscais e emissão de documentos eletrônicos (conforme o contrato tratado/necessidade), com foco em produtividade e economia.",
  },
  {
    image: modulePdv,
    title: "PDV e Frente de Caixa",
    subtitle: "Vendas com velocidade e controle",
    description:
      "PDV com recursos de operação (conforme módulos) possibilidade de integração com TEF, na forma de venda ideal para agilizar o atendimento.",
  },
  {
    image: moduleMobilidade,
    title: "Mobilidade e Operação em Campo",
    subtitle: "Venda móvel para equipes externas",
    description:
      "Para equipes externas que precisam vender/consultar em tempo real e de forma ágil.",
  },
  {
    image: moduleBi,
    title: "BI e Indicadores",
    subtitle: "Indicadores para decisão",
    description:
      "Dashboards/relatórios para gestão. Business Intelligence para apoiar decisões estratégicas com agilidade.",
  },
]

const Modules = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1, once: true })

  return (
    <section ref={ref} id="modulos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={[
                "bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 100}ms` } : undefined}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-secondary">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {module.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {module.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
