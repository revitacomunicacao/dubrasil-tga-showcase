// src/components/SobreDuBrasil.tsx
import Logo from "@/assets/logo.png"

export function SobreDuBrasil() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#032048] via-[#032048] to-[#0b3b7a]">
          {/* detalhes sutis */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:items-center md:gap-14 md:p-14">
            {/* Texto - esquerda */}
            <div className="text-white">
              <p className="text-sm font-medium text-white/70">
                DuBrasil Soluções
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Excelência em Soluções para Gestão de Controle Empresarial
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/80">
                Somos especialistas em sistemas de ponto e controle de acesso,
                com mais de 25 anos de experiência.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                Nosso diferencial é ter suporte humanizado, na implantação
                eficiente e no atendimento personalizado, garantindo que sua
                empresa tenha solução sob medida.
              </p>
            </div>

            {/* Logo - direita */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <img
                  src={Logo}
                  alt="DuBrasil Soluções"
                  className="h-16 w-auto md:h-20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
