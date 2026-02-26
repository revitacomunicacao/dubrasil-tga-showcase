// src/components/CTA.tsx
import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const CTA = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  const openWhatsApp = () => {
    const message =
      "Oi! Quero organizar minha gestão com ERP (DuBrasil Sistemas).\n\nMinha prioridade é:\n( ) financeiro\n( ) estoque\n( ) emissão/NF\n( ) PDV\n( ) processos\n\nSegmento: ___ | Nº de usuários: ___"
    window.open(`https://wa.me/553433228500?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section ref={ref} id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-foreground mb-6",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Quer saber se o ERP certo resolve seu gargalo atual?
          </h2>

          <p
            className={[
              "text-muted-foreground text-lg mb-10 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Me chama no WhatsApp e eu te ajudo a mapear o que você precisa (sem
            complicar).
          </p>

          <div
            className={[
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 group"
            >
              <MessageCircle className="mr-2" />
              Quero organizar minha gestão
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p
            className={[
              "mt-6 text-muted-foreground text-sm",
              inView
                ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450"
                : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            Sem compromisso • Direcionamento rápido
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
