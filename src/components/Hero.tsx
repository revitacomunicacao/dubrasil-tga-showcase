// src/components/Hero.tsx
import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25, once: true })

  const openWhatsAppOrganizar = () =>
    window.open(
      buildWhatsAppUrl(
        "Oi! Quero organizar minha gestão com ERP (DuBrasil Sistemas).\n\nMinha prioridade é:\n( ) financeiro\n( ) estoque\n( ) emissão/NF\n( ) PDV\n( ) processos\n\nSegmento: ___ | Nº de usuários: ___"
      ),
      "_blank"
    )

  const openWhatsAppModulo = () =>
    window.open(
      buildWhatsAppUrl(
        "Oi! Quero entender qual módulo preciso no ERP (DuBrasil Sistemas).\n\nMinha prioridade é:\n( ) financeiro\n( ) estoque\n( ) emissão/NF\n( ) PDV\n( ) processos\n\nSegmento: ___ | Nº de usuários: ___"
      ),
      "_blank"
    )

  return (
    <section
      ref={ref}
      className="pt-[80px] md:pt-[20px] relative min-h-[92svh] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={[
              "inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8",
              inView
                ? "animate-in fade-in slide-in-from-top-4 duration-700"
                : "opacity-0 translate-y-[-8px]",
            ].join(" ")}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Resposta rápida • Implantação orientada • Suporte humanizado
            </span>
          </div>

          {/* Título */}
          <h1
            className={[
              "text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            DuBrasil Sistemas
          </h1>

          <h2
            className={[
              "text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/95 mb-6 leading-snug",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            ERP simples, completo e pronto para organizar sua operação
          </h2>

          {/* Descrição */}
          <p
            className={[
              "text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Controle estoque, financeiro, vendas e emissão fiscal em um só lugar,
            com implantação assistida e suporte para sua rotina rodar com clareza
            e previsibilidade.
          </p>

          {/* CTAs */}
          <div
            className={[
              "flex flex-col sm:flex-row gap-4 justify-center",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <Button
              size="lg"
              onClick={openWhatsAppOrganizar}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
            >
              Quero organizar minha gestão
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 text-lg px-8 py-6"
              onClick={openWhatsAppModulo}
            >
              <Play className="mr-2" size={20} />
              Quero entender qual módulo preciso
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
