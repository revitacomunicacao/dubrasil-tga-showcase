// src/components/VideoCarousel.tsx
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import banner2 from "@/assets/dubrasil-fullbanner.jpg.jpeg"
import banner3 from "@/assets/banners tga.png"

interface VideoSlide {
  id: number
  videoUrl: string // VÍDEO ou IMAGEM
  title: string
  subtitle: string
}

const isVideoUrl = (url: string) => {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

const slides: VideoSlide[] = [
  {
    id: 1,
    videoUrl:
      "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    title: "Controle Total do Seu Negócio",
    subtitle: "Gestão empresarial integrada em uma única plataforma",
  },
  {
    id: 2,
    videoUrl: banner2,
    title: "Decisões Baseadas em Dados",
    subtitle: "Relatórios e dashboards em tempo real",
  },
  {
    id: 3,
    videoUrl: banner3,
    title: "Automatize Seus Processos",
    subtitle: "Mais produtividade e menos trabalho manual",
  },
]

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const pointerDownX = useRef<number | null>(null)
  const pointerDownY = useRef<number | null>(null)
  const isPointerDown = useRef(false)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === currentSlide && isPlaying) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [currentSlide, isPlaying])

  useEffect(() => {
    if (!isPlaying) return
    const current = slides[currentSlide]
    const durationMs = isVideoUrl(current.videoUrl) ? 8000 : 6000

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, durationMs)

    return () => clearTimeout(timeout)
  }, [isPlaying, currentSlide])

  const togglePlay = () => setIsPlaying((v) => !v)

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/553433228500?text=Olá! Gostaria de saber mais sobre o ERP TGA.",
      "_blank"
    )
  }

  const onPointerDown = (clientX: number, clientY: number) => {
    pointerDownX.current = clientX
    pointerDownY.current = clientY
    isPointerDown.current = true
  }

  const onPointerMove = (clientX: number, clientY: number) => {
    if (!isPointerDown.current || pointerDownX.current == null || pointerDownY.current == null)
      return

    const dx = clientX - pointerDownX.current
    const dy = clientY - pointerDownY.current

    // se o gesto for mais vertical, não interferir (permite scroll)
    if (Math.abs(dy) > Math.abs(dx)) return
  }

  const onPointerUp = (clientX: number, clientY: number) => {
    if (!isPointerDown.current || pointerDownX.current == null || pointerDownY.current == null) {
      isPointerDown.current = false
      return
    }

    const dx = clientX - pointerDownX.current
    const dy = clientY - pointerDownY.current

    isPointerDown.current = false
    pointerDownX.current = null
    pointerDownY.current = null

    if (Math.abs(dy) > Math.abs(dx)) return

    const THRESHOLD = 60
    if (dx <= -THRESHOLD) nextSlide()
    if (dx >= THRESHOLD) prevSlide()
  }

  return (
    <section
      className="relative w-full overflow-hidden pt-16 h-[60vh] md:h-screen"
      style={{ maxWidth: "100vw" }}
    >
      {/* Swipe layer (evita overflow horizontal) */}
      <div
        className="absolute inset-0 z-20 overflow-hidden"
        style={{
          touchAction: "pan-y",
          maxWidth: "100vw",
        }}
        onTouchStart={(e) => {
          const t = e.touches[0]
          onPointerDown(t.clientX, t.clientY)
        }}
        onTouchMove={(e) => {
          const t = e.touches[0]
          onPointerMove(t.clientX, t.clientY)
        }}
        onTouchEnd={(e) => {
          const t = e.changedTouches[0]
          onPointerUp(t.clientX, t.clientY)
        }}
        onMouseDown={(e) => onPointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => {
          if (!isPointerDown.current) return
          onPointerMove(e.clientX, e.clientY)
        }}
        onMouseUp={(e) => onPointerUp(e.clientX, e.clientY)}
        onMouseLeave={(e) => {
          if (!isPointerDown.current) return
          onPointerUp(e.clientX, e.clientY)
        }}
        aria-hidden="true"
      />

      {/* Slides */}
      {slides.map((slide, index) => {
        const isVideo = isVideoUrl(slide.videoUrl)

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ width: "100%", maxWidth: "100vw" }}
          >
            {isVideo ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                src={slide.videoUrl}
                muted
                loop
                playsInline
              />
            ) : (
              <>
                {(videoRefs.current[index] = null)}
                <img
                  src={slide.videoUrl}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </>
            )}

            <div className="absolute inset-0 bg-primary/70" />

            <div className="relative z-30 h-full flex items-center overflow-hidden">
              <div className="container mx-auto px-4 max-w-full">
                <div className="max-w-3xl pointer-events-auto">
                  <h1
                    className={`text-3xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`text-base md:text-2xl text-primary-foreground/80 mb-6 md:mb-10 transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    className={`transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <Button
                      size="lg"
                      onClick={openWhatsApp}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Arrows (hidden on mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm rounded-full items-center justify-center transition-all group pointer-events-auto"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm rounded-full items-center justify-center transition-all group pointer-events-auto"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6 pointer-events-auto">
        <button
          onClick={togglePlay}
          className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
          )}
        </button>

        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-accent"
                  : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-40 hidden md:flex flex-col items-center gap-2 text-primary-foreground/60 pointer-events-none">
        <span className="text-xs uppercase tracking-wider rotate-90 origin-center translate-x-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-primary-foreground/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}

export default VideoCarousel
