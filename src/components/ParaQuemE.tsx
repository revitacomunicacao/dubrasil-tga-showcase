import React, { useEffect, useRef, useState } from "react"
import { ShoppingCart, Store, BriefcaseBusiness, Layers } from "lucide-react"

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

export default function ParaQuemE() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="para-quem-e" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className={[
              "text-2xl md:text-3xl font-bold text-foreground mb-10 text-center italic",
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
