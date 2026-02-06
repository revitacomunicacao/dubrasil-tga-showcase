// src/components/SolucoesDuBrasil.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  Store,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import bannerTGA from "@/assets/banners tga solucoes.png";

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = {
    threshold: 0.25,
    once: true,
  },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once !== false) observer.unobserve(el);
      } else if (options.once === false) {
        setInView(false);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

type Solution = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Sistema de Gestão (ERP)",
    description:
      "Conheça nossa solução ERP para controle das atividades operacionais e estratégicas. Integre as áreas da empresa em uma base robusta e segura, com visão completa e decisões mais confiáveis.",
    icon: LayoutGrid,
  },
  {
    title: "Frente de Caixa (PDV)",
    description:
      "Realize e monitore vendas de forma rápida e prática. Gerencie promoções, descontos, condições de pagamento e emissão de documentos fiscais (NFC-e) no ponto de venda, com suporte a off-line e contingência.",
    icon: Store,
  },
  {
    title: "Venda Móvel (App)",
    description:
      "Ferramenta multiplataforma para celular e tablet, ideal para agilizar o atendimento. Navegação intuitiva com acesso a funções essenciais, pesquisa de produtos e consulta de preço e estoque com facilidade.",
    icon: Smartphone,
  },
  {
    title: "Inteligência de Negócios (BI)",
    description:
      "Business Intelligence para apoiar decisões estratégicas com agilidade. Monte relatórios dinâmicos, selecione dimensões, crie visões e análises exploratórias para enxergar oportunidades com clareza.",
    icon: BarChart3,
  },
];

const WHATSAPP_URL =
  "https://wa.me/553433228500?text=Olá!%20Quero%20conhecer%20as%20soluções%20da%20DuBrasil%20(TGA).";

export function SolucoesDuBrasil() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.2,
    once: true,
  });

  return (
    <section ref={ref} id="solucoes" className="w-full py-8">
      
      <div className="w-full">
        <img src={bannerTGA} className="w-full" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Cards (4 soluções) */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
          {SOLUTIONS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className={[
                  "h-full border bg-background hover:shadow-sm transition-shadow",
                  inView
                    ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
                style={
                  inView
                    ? { animationDelay: `${150 + idx * 120}ms` }
                    : undefined
                }
              >
                <CardContent className="flex h-full flex-col gap-4 p-7 md:p-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={[
                        "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10",
                        inView
                          ? "animate-in zoom-in-95 duration-700"
                          : "opacity-0 scale-[0.98]",
                      ].join(" ")}
                      style={
                        inView
                          ? { animationDelay: `${200 + idx * 120}ms` }
                          : undefined
                      }
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      onClick={() => window.open(WHATSAPP_URL, "_blank")}
                      type="button"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
