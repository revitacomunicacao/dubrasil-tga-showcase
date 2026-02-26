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

const items = [
  { label: "Comércio varejista / lojas", Icon: Store },
  { label: "Mercados e operações com alto giro", Icon: ShoppingBasket },
  { label: "Prestadores de serviço e pequenas empresas", Icon: BriefcaseBusiness },
  { label: "Operações que precisam integrar financeiro + estoque + emissão", Icon: Layers },
] as const

export default function ParaQuemE() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="para-quem-e" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-foreground mb-6",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Ideal para empresas que precisam de controle e rotina
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map(({ label, Icon }, idx) => (
              <li
                key={label}
                className={[
                  "rounded-2xl border border-border bg-card p-6 text-foreground",
                  "min-h-[120px] flex flex-col justify-start items-center text-center",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                {/* Azul mais escuro (ajuste para o token/cor exata do seu tema, se preferir) */}
                <Icon className="h-14 w-14 mb-4 text-[#062A4E]" aria-hidden="true" />
                <span className="text-sm font-medium leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}