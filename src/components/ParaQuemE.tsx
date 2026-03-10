import React, { useEffect, useRef, useState } from "react"
import { Store, ShoppingBasket, BriefcaseBusiness, Layers } from "lucide-react"

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
      } else if (options.once === false) setInView(false)
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ref, inView }
}

const items = [
  { label: "Comercial, varejo, lojas", Icon: Store },
  { label: "Operações que precisam de mais agilidade nas operações", Icon: ShoppingBasket },
  { label: "Prestadores de serviços, pequenas empresas", Icon: BriefcaseBusiness },
  { label: "Integrar financeiro + estoque com agilidade", Icon: Layers },
] as const

export default function ParaQuemE() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="para-quem-e" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-foreground mb-10 text-center",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Ideal para empresas que precisam de controle e rotina
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ label, Icon }, idx) => (
              <div
                key={label}
                className={[
                  "flex flex-col items-center text-center gap-4",
                  inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
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
