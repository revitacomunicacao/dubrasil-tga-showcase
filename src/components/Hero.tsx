import React, { useEffect, useRef, useState } from "react"
import newMockups from "@/assets/TGA - Menos planilha.jpeg"

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

const Hero = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1, once: true })

  return (
    <section ref={ref} className="pt-8 pb-7 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Devices mockup image */}
        <div
          className={[
            "max-w-3xl mx-auto",
            inView ? "animate-in fade-in slide-in-from-bottom-8 duration-1000" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <img
            src={newMockups}
            alt="ERP DuBrasil em múltiplos dispositivos - desktop, notebook e smartphone"
            className="pt-6 w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Text card overlapping bottom */}
        <div
          className={[
            "mx-auto bg-background rounded-3xl shadow-lg px-8 md:px-12 py-10 text-center -mt-4 relative z-10",
            inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            <span className="font-light">Menos planilha. Menos retrabalho. </span>
            <span className="font-extrabold text-primary">Mais controle.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            O ERP é para empresas que querem parar de "apagar incêndio" e passar a ter rotina: compras,
            vendas, estoque, financeiro e fiscal funcionando com integração e visibilidade para decisão.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
