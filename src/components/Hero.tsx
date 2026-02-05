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

const WHATSAPP_URL =
  "https://wa.me/553433228500?text=Olá! Gostaria de saber mais sobre o ERP TGA."

const Hero = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25, once: true })

  const openWhatsApp = () => window.open(WHATSAPP_URL, "_blank")

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
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
              Sistema de Gestão Empresarial Completo
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
            Gerencie toda sua empresa em um{" "}
            <span className="text-accent">único lugar</span>
          </h1>

          {/* Descrição */}
          <p
            className={[
              "text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            O ERP TGA é a solução completa para gestão empresarial. Controle
            vendas, estoque, finanças e muito mais com eficiência e simplicidade.
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
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("recursos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="mr-2" size={20} />
              Conhecer Recursos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-primary-foreground/10">
            {[
              { value: "25+", label: "Anos de Experiência", delay: "delay-150" },
              { value: "1000+", label: "Clientes Ativos", delay: "delay-250" },
              { value: "15+", label: "Módulos Integrados", delay: "delay-350" },
              { value: "99.9%", label: "Uptime Garantido", delay: "delay-450" },
            ].map((stat, index) => (
              <div
                key={index}
                className={[
                  "text-center",
                  inView
                    ? `animate-in fade-in slide-in-from-bottom-4 duration-700 ${stat.delay}`
                    : "opacity-0 translate-y-3",
                ].join(" ")}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
