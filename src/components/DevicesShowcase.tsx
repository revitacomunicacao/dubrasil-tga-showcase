// src/components/DevicesShowcase.tsx
import React, { useEffect, useRef, useState } from "react"
import { Package, TrendingUp, Wallet, FileText, BarChart3 } from "lucide-react"
import devicesMockup from "@/assets/devices.png"

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

const features = [
  { icon: TrendingUp, label: "Gestão comercial", position: "top-[10%] left-[5%]" },
  { icon: Wallet, label: "Gestão financeira", position: "top-[5%] right-[10%]" },
  { icon: Package, label: "Controle de estoque", position: "bottom-[25%] left-[0%]" },
  { icon: FileText, label: "Documentos fiscais", position: "top-[40%] right-[0%]" },
  { icon: BarChart3, label: "Dashboard de análise", position: "bottom-[10%] right-[15%]" },
]

const DevicesShowcase = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={[
              "text-accent font-semibold text-sm uppercase tracking-wider inline-block",
              inView
                ? "animate-in fade-in slide-in-from-top-4 duration-700"
                : "opacity-0 -translate-y-2",
            ].join(" ")}
          >
            Multiplataforma
          </span>

          <h2
            className={[
              "text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Acesse de qualquer dispositivo
          </h2>

          <p
            className={[
              "text-primary-foreground/70 max-w-2xl mx-auto",
              inView
                ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            O ERP TGA funciona perfeitamente em computadores, tablets e smartphones.
            Gerencie seu negócio de onde você estiver.
          </p>
        </div>

        {/* Devices with floating cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Floating feature cards (desktop) */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={[
                  "absolute",
                  feature.position,
                  "z-20 hidden md:flex items-center gap-2 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-border/50",
                  inView
                    ? "animate-in fade-in zoom-in-95 slide-in-from-bottom-3 duration-700"
                    : "opacity-0 translate-y-2 scale-[0.98]",
                ].join(" ")}
                style={inView ? { animationDelay: `${index * 120}ms` } : undefined}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm whitespace-nowrap">
                  {feature.label}
                </span>
              </div>
            )
          })}

          {/* Main devices image */}
          <div
            className={[
              "relative z-10 px-8 md:px-16",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <img
              src={devicesMockup}
              alt="ERP TGA em múltiplos dispositivos - notebook, tablet e smartphone"
              className="w-full h-auto drop-shadow-2xl px-20"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile feature list (visible on small screens) */}
        <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={[
                  "flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-lg px-3 py-2",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                    : "opacity-0 translate-y-2",
                ].join(" ")}
                style={inView ? { animationDelay: `${index * 90}ms` } : undefined}
              >
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm">
                  {feature.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DevicesShowcase
