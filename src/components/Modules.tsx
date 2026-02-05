// src/components/Modules.tsx
import React, { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

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
    title: "Módulo Comercial",
    items: [
      "Orçamentos e Pedidos de Venda",
      "Controle de Comissões",
      "Tabelas de Preços Flexíveis",
      "Gestão de Representantes",
    ],
  },
  {
    title: "Módulo Fiscal",
    items: [
      "NF-e e NFC-e Automáticas",
      "SPED Fiscal e Contribuições",
      "Escrituração Contábil Digital",
      "Integração Contábil",
    ],
  },
  {
    title: "Módulo Industrial",
    items: [
      "Ordem de Produção",
      "Ficha Técnica de Produtos",
      "Controle de Insumos",
      "Apontamento de Produção",
    ],
  },
  {
    title: "Módulo Financeiro",
    items: [
      "Contas a Pagar e Receber",
      "Conciliação Bancária",
      "Fluxo de Caixa",
      "Centro de Custos",
    ],
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
            Soluções para cada área da sua empresa
          </h2>

          <p
            className={[
              "text-muted-foreground max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Módulos integrados que trabalham em conjunto para uma gestão
            empresarial completa e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={[
                "bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300",
                inView
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={inView ? { animationDelay: `${index * 110}ms` } : undefined}
            >
              <h3
                className={[
                  "text-xl font-bold text-foreground mb-6 pb-4 border-b border-border",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
                style={inView ? { animationDelay: `${80 + index * 110}ms` } : undefined}
              >
                {module.title}
              </h3>

              <ul className="space-y-3">
                {module.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={[
                      "flex items-start gap-3",
                      inView
                        ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                        : "opacity-0 translate-y-2",
                    ].join(" ")}
                    style={
                      inView
                        ? { animationDelay: `${140 + index * 110 + itemIndex * 70}ms` }
                        : undefined
                    }
                  >
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
