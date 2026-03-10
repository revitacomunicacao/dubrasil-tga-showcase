import React, { useEffect, useRef, useState } from "react"

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

export default function ErpResolve() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section ref={ref} id="o-que-resolve" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-foreground mb-4",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Menos planilha. Menos retrabalho.{" "}
            <span className="text-primary">Mais controle.</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full" />

          <h3
            className={[
              "text-xl md:text-2xl font-semibold text-foreground mb-4",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            O ERP é para quem quer parar de "apagar incêndio" e passar a ter controle sobre:
          </h3>

          <div
            className={[
              "flex flex-wrap justify-center gap-3 mt-6",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            {["compras", "vendas", "estoque", "financeiro e fiscal"].map((item, idx) => (
              <span
                key={item}
                className="bg-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-medium border border-border"
                style={inView ? { animationDelay: `${200 + idx * 80}ms` } : undefined}
              >
                {item}
              </span>
            ))}
          </div>

          <p
            className={[
              "text-muted-foreground text-base md:text-lg leading-relaxed mt-8",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Com integração e visibilidade para a decisão.
          </p>
        </div>
      </div>
    </section>
  )
}
