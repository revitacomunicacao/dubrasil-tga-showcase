import React, { useEffect, useRef, useState } from "react"
import { parseParaQuemTitle } from "@/lib/cms"
import type { HomePageContent } from "@/types/cms"

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

type ParaQuemEProps = {
  content: HomePageContent["paraQuemE"]
}

export default function ParaQuemE({ content }: ParaQuemEProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true })
  const { prefixBeforeBreak, prefixAfterBreak, accent } = parseParaQuemTitle(content.title)

  return (
    <section
      ref={ref}
      id="para-quem-e"
      className="relative flex min-h-[70vh] max-md:py-14 md:min-h-[850px] items-center bg-cover bg-[center_30%] md:bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${content.backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-[#05244a]/80 max-md:bg-[#05244a]/88" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <h2
            className={[
              "whitespace-pre-line font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold leading-[1.08] tracking-tight text-center max-md:text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]",
              inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <span className="font-light text-white">
              {prefixBeforeBreak}
              {prefixAfterBreak ? (
                <>
                  <br />
                  {prefixAfterBreak}{" "}
                </>
              ) : null}
            </span>
            {accent ? (
              <>
                <br />
                <span className="font-extrabold text-[#2b8efa]">{accent}</span>
              </>
            ) : null}
          </h2>

          <div className="mt-8 max-md:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {content.items.map(({ label, iconUrl }, idx) => (
              <div
                key={label}
                className={[
                  "bg-[#2b8efa]/80 rounded-2xl p-4 max-md:p-4 md:p-5 flex flex-col items-center text-center gap-3 max-md:gap-3 md:gap-4",
                  inView ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                <div className="w-14 h-14 rounded-xl bg-[#08284f] flex items-center justify-center">
                  <img
                    src={iconUrl}
                    alt=""
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-base max-md:text-base md:text-[20px] font-medium text-white leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
