import React, { useEffect, useRef, useState } from "react"
import moduleEstoque from "@/assets/module-estoque.png"
import moduleFinanceiro from "@/assets/module-financeiro.png"
import moduleFiscal from "@/assets/module-fiscal.png"
import modulePdv from "@/assets/module-pdv.png"
import moduleMobilidade from "@/assets/module-mobilidade.png"
import moduleBi from "@/assets/module-bi.png"

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

const modules = [
  {
    image: moduleEstoque,
    title: "Estoque e Compras",
    subtitle: "Controle de estoque rápido e organizado",
    description:
      "Cadastros, movimentações, entradas/saídas, depósitos e relatórios para evitar rupturas e excesso de mercadoria.",
  },
  {
    image: moduleFinanceiro,
    title: "Financeiro",
    subtitle: "Previsibilidade no caixa e na operação",
    description:
      "Contas a pagar/receber, controle e visão para tomada de decisão com menos \"surpresa\" no fim do mês.",
  },
  {
    image: moduleFiscal,
    title: "Fiscal e Emissão de Notas",
    subtitle: "Emissão de nota fiscal sem burocracia",
    description:
      "Rotinas fiscais e emissão de documentos eletrônicos (conforme o pacote contratado/necessidade), com foco em produtividade e conformidade.",
  },
  {
    image: modulePdv,
    title: "PDV e Frente de Caixa",
    subtitle: "Vendas no balcão com velocidade e controle",
    description:
      "PDV com recursos de operação (e possibilidade de integrações como TEF, conforme cenário).",
  },
  {
    image: moduleMobilidade,
    title: "Mobilidade e Operação em Campo",
    subtitle: "Venda móvel / operação mobile",
    description:
      "Para equipes externas que precisam vender/consultar e manter a operação rodando fora do escritório.",
  },
  {
    image: moduleBi,
    title: "BI e Indicadores",
    subtitle: "Indicadores para decisão",
    description:
      "Dashboards/relatórios para gestão (conforme módulos).",
  },
]

const Modules = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.05, once: true })

  return (
    <section ref={ref} id="modulos" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className={[
                "bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 100}ms` } : undefined}
            >
              {/* Text on top */}
              <div className="p-5 pb-2">
                <h3 className="text-3xl font-bold text-foreground mb-1 py-4 h-[100px]">
                  {module.title}
                </h3>
                <p className="text-base font-semibold text-primary mb-1">
                  {module.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Image on bottom - contain fully, no cropping */}
              <div className="flex">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
