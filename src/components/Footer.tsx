// src/components/Footer.tsx
import React, { useEffect, useRef, useState } from "react"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import logo from "@/assets/logo-dubrasil-sistemas.png"
import qrcode from "@/assets/qr code.png"

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

const FACEBOOK_URL = "https://web.facebook.com/dubrasil.solucoes"
const INSTAGRAM_URL = "https://www.instagram.com/dubrasilsolucoes/"
const LINKEDIN_URL = "https://www.linkedin.com/company/dubrasilsolu%C3%A7%C3%B5es"
const WHATSAPP_URL = "https://wa.me/553433228500"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })

  return (
    <footer
      ref={ref}
      className="relative border-t-4 border-primary text-white"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 100% 8%) 0%, hsl(210 100% 5%) 100%)",
      }}
    >
      {/* Top */}
      <div className="container mx-auto px-4 py-12 max-md:py-10">
        <div className="grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-12 md:gap-8">
          {/* Logo / brand */}
          <div
            className={[
              "items-center md:col-span-3 flex flex-col justify-center gap-5",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <img src={logo} alt="DuBrasil Soluções" width={219} height={60} decoding="async" />
            <img
              src={qrcode}
              alt="DuBrasil Soluções"
              className="w-[40%] max-w-[180px] max-md:w-1/2"
            />
          </div>

          {/* Contato */}
          <div
            className={[
              "md:col-span-4",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contato
            </p>

            <div className="mt-4 space-y-2 text-white/80">
              <a
                href="tel:+553433228500"
                className="block w-fit transition-colors hover:text-white"
              >
                +55 (34) 3322-8500
              </a>
              <a
                href="mailto:atendimento@dubrasilsolucoes.com.br"
                className="block max-w-full break-words text-left transition-colors hover:text-white max-md:break-all"
              >
                atendimento@dubrasilsolucoes.com.br
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div
            className={[
              "md:col-span-3",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Endereço
            </p>

            <div className="mt-4 space-y-1 leading-relaxed text-white/80">
              <p>Avenida Leopoldino de Oliveira, 4252</p>
              <p>1º e 2º pisos - Centro</p>
              <p>Uberaba (MG)</p>
              <p>CEP: 38.065-165</p>
            </div>
          </div>

          {/* Redes sociais */}
          <div
            className={[
              "md:col-span-2",
              inView
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Redes sociais
            </p>

            <div className="mt-4 space-y-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md py-1 text-white/80 transition-colors hover:text-white max-md:-mx-1 max-md:px-1 md:min-h-0 md:py-0"
              >
                <Facebook className="h-5 w-5 shrink-0" />
                <span>Facebook</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md py-1 text-white/80 transition-colors hover:text-white max-md:-mx-1 max-md:px-1 md:min-h-0 md:py-0"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md py-1 text-white/80 transition-colors hover:text-white max-md:-mx-1 max-md:px-1 md:min-h-0 md:py-0"
              >
                <Instagram className="h-5 w-5 shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md py-1 text-white/80 transition-colors hover:text-white max-md:-mx-1 max-md:px-1 md:min-h-0 md:py-0"
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70">
              © {currentYear} DuBrasil Soluções. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50">
              Distribuidor autorizado do ERP TGA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer