import moduleEstoque from "@/assets/Estoque e Compras.jpg.jpeg"
import moduleFinanceiro from "@/assets/Financeiro.jpg.jpeg"
import moduleFiscal from "@/assets/Fiscal e Emissao de Notas.jpg.jpeg"
import modulePdv from "@/assets/PDV e Frente de Caixa.jpg.jpeg"
import moduleMobilidade from "@/assets/Mobilidade.jpeg"
import moduleBi from "@/assets/BI e Indicadores.jpg.jpeg"

const cards = [
  {
    image: moduleEstoque,
    title: "Estoque e Compras",
    subtitle: "Controle de estoque rápido e organizado",
    description:
      "Cadastros, movimentações, entradas/saídas, depósitos e relatórios para evitar rupturas e excesso de mercadoria.",
  },
  {
    image: moduleFinanceiro,
    title: "Financeiro",
    subtitle: "Previsibilidade no caixa e na operação",
    description:
      'Contas a pagar/receber, controle e visão para tomada de decisão com menos "surpresa" no fim do mês.',
  },
  {
    image: moduleFiscal,
    title: "Fiscal e Emissão de Notas",
    subtitle: "Emissão de nota fiscal sem burocracia",
    description:
      "Rotinas fiscais e emissão de documentos eletrônicos (conforme o pacote contratado/necessidade), com foco em produtividade e conformidade.",
  },
  {
    image: modulePdv,
    title: "PDV e Frente de Caixa",
    subtitle: "Vendas no balcão com velocidade e controle",
    description:
      "PDV com recursos de operação (e possibilidade de integrações como TEF, conforme cenário).",
  },
  {
    image: moduleMobilidade,
    title: "Mobilidade e Operação em Campo",
    subtitle: "Venda móvel / operação mobile",
    description:
      "Para equipes externas que precisam vender/consultar e manter a operação rodando fora do escritório.",
  },
  {
    image: moduleBi,
    title: "BI e Indicadores",
    subtitle: "Indicadores para decisão",
    description: "Dashboards/relatórios para gestão (conforme módulos).",
  },
]

const ModulesMock = () => {
  return (
    <section id="modulos-mock" className="w-full bg-white max-md:py-12 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {cards.map((card, i) => (
          <article
            key={i}
            className="relative w-full max-md:aspect-square md:aspect-[16/10] overflow-hidden group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover object-center max-md:object-[center_30%] md:object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Escurece a foto no celular para legibilidade do texto */}
            <div
              className="absolute inset-0 bg-[#05244a]/60 max-md:block md:hidden"
              aria-hidden="true"
            />
            <div className="absolute inset-0 z-10 flex max-w-[92%] mx-auto flex-col items-center justify-center gap-1 px-5 py-4 text-center md:relative md:inset-auto md:mx-0 md:max-w-none md:min-h-full md:justify-start md:gap-0 md:px-6 md:pt-8 md:pb-0">
              <h3 className="font-poppins font-bold text-lg leading-tight text-primary max-md:text-white md:text-4xl max-md:mb-0.5 md:mb-2">
                {card.title}
              </h3>
              <p className="font-poppins text-base leading-snug text-foreground/90 max-md:text-white/95 md:text-2xl max-md:mb-0.5 md:mb-3">
                {card.subtitle}
              </p>
              <p className="font-poppins text-sm leading-snug text-foreground/75 max-md:text-white/85 md:text-base max-w-xl max-md:line-clamp-3 md:leading-relaxed">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ModulesMock
