import React, { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import newMockups from "@/assets/new-mockups.png"

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

const WHATSAPP_PHONE = "553433228500"

function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}

const Hero = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, once: true })

  const openWhatsApp = () =>
    window.open(
      buildWhatsAppUrl(
        "Oi! Quero organizar minha gestão com ERP (DuBrasil Sistemas).\n\nMinha prioridade é:\n( ) financeiro\n( ) estoque\n( ) emissão/NF\n( ) PDV\n( ) processos\n\nSegmento: ___ | Nº de usuários: ___"
      ),
      "_blank"
    )

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative gear/network graphic */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="200" cy="80" r="30" fill="hsl(var(--primary))" />
          <circle cx="250" cy="150" r="20" fill="hsl(var(--primary))" />
          <circle cx="150" cy="50" r="15" fill="hsl(var(--primary))" />
          <circle cx="260" cy="60" r="25" fill="hsl(var(--primary))" />
          <line x1="200" y1="80" x2="250" y2="150" stroke="hsl(var(--primary))" strokeWidth="3" />
          <line x1="150" y1="50" x2="200" y2="80" stroke="hsl(var(--primary))" strokeWidth="3" />
          <line x1="260" y1="60" x2="200" y2="80" stroke="hsl(var(--primary))" strokeWidth="3" />
          {/* Gear shapes */}
          <path d="M180 120 L190 130 L185 145 L170 145 L165 130 Z" fill="hsl(var(--primary))" />
          <path d="M230 100 L245 105 L245 120 L230 125 L220 115 Z" fill="hsl(var(--primary))" />
          <path d="M270 180 L280 195 L275 210 L260 210 L255 195 Z" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p
            className={[
              "text-sm font-medium text-muted-foreground mb-4 tracking-wide",
              inView ? "animate-in fade-in slide-in-from-top-4 duration-700" : "opacity-0",
            ].join(" ")}
          >
            DuBrasil Sistemas
          </p>

          <h2
            className={[
              "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight",
              inView ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            ERPs simples, completos e prontos para organizar sua operação
          </h2>

          <p
            className={[
              "text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto",
              inView ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Controle estoques, financeiro, vendas e emissões fiscais em um só lugar,
            com implantação ágil e suporte para sua rotina com clareza e previsibilidade.
          </p>

          <div
            className={[
              inView ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 group"
            >
              Organizar minha gestão
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Devices mockup image */}
        <div
          className={[
            "max-w-5xl mx-auto",
            inView ? "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <img
            src={newMockups}
            alt="ERP DuBrasil em múltiplos dispositivos - desktop, notebook e smartphone"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
