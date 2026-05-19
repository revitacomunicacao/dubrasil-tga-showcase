import type { HomePageContent } from "@/types/cms"
import heroImage from "@/assets/mockuptga.png"
import moduleEstoque from "@/assets/Estoque e Compras.jpg.jpeg"
import moduleFinanceiro from "@/assets/Financeiro.jpg.jpeg"
import moduleFiscal from "@/assets/Fiscal e Emissao de Notas.jpg.jpeg"
import modulePdv from "@/assets/PDV e Frente de Caixa.jpg.jpeg"
import moduleMobilidade from "@/assets/Mobilidade.jpeg"
import moduleBi from "@/assets/BI e Indicadores.jpg.jpeg"
import backgroundRotinas from "@/assets/background_controle-rotinas.jpg.jpeg"
import iconMercado from "@/assets/mercado.png"
import iconComercio from "@/assets/comercio.png"
import iconPrestadores from "@/assets/prestadores.png"
import iconOperacoes from "@/assets/operacoes.png"
import tgaBG from "@/assets/tgaBG.jpeg"
import faqBg from "@/assets/background_faq.jpeg"

/** Conteúdo estático atual — usado enquanto o CMS carrega ou em caso de falha. */
export const FALLBACK_HOME_CONTENT: HomePageContent = {
  hero: {
    title: "Menos planilhas. Menos retrabalho.\r\nMais controle.",
    description:
      'O ERP é para empresas que querem parar de "apagar incêndio" e passar a ter rotina: compras, vendas, estoque, financeiro e fiscal funcionando com integração e visibilidade para decisão.',
    imageUrl: heroImage,
  },
  modules: [
    {
      title: "Estoque e Compras",
      subtitle: "Controle de estoque rápido e organizado",
      description:
        "Cadastros, movimentações, entradas/saídas, depósitos e relatórios para evitar rupturas e excesso de mercadoria.",
      imageUrl: moduleEstoque,
    },
    {
      title: "Financeiro",
      subtitle: "Previsibilidade no caixa e na operação",
      description:
        'Contas a pagar/receber, controle e visão para tomada de decisão com menos "surpresa" no fim do mês.',
      imageUrl: moduleFinanceiro,
    },
    {
      title: "Fiscal e Emissão de Notas",
      subtitle: "Emissão de nota fiscal sem burocracia",
      description:
        "Rotinas fiscais e emissão de documentos eletrônicos (conforme o pacote contratado/necessidade), com foco em produtividade e conformidade.",
      imageUrl: moduleFiscal,
    },
    {
      title: "PDV e Frente de Caixa",
      subtitle: "Vendas no balcão com velocidade e controle",
      description:
        "PDV com recursos de operação (e possibilidade de integrações como TEF, conforme cenário).",
      imageUrl: modulePdv,
    },
    {
      title: "Mobilidade e Operação em Campo",
      subtitle: "Venda móvel / operação mobile",
      description:
        "Para equipes externas que precisam vender/consultar e manter a operação rodando fora do escritório.",
      imageUrl: moduleMobilidade,
    },
    {
      title: "BI e Indicadores",
      subtitle: "Indicadores para decisão",
      description: "Dashboards/relatórios para gestão (conforme módulos).",
      imageUrl: moduleBi,
    },
  ],
  paraQuemE: {
    title: "Ideal para empresas que precisam de controle e rotina",
    backgroundUrl: backgroundRotinas,
    items: [
      { label: "Mercados e operações com alto giro", iconUrl: iconMercado },
      { label: "Comércio varejista / lojas", iconUrl: iconComercio },
      { label: "Prestadores de serviço e pequenas empresas", iconUrl: iconPrestadores },
      {
        label: "Operações que precisam integrar financeiro + estoque + emissão",
        iconUrl: iconOperacoes,
      },
    ],
  },
  benefits: {
    title: "ERP funciona quando é bem implantado",
    description:
      "Não é só “instalar sistema”. A DuBrasil entra para garantir que o ERP vire rotina real.",
    backgroundUrl: tgaBG,
    steps: [
      { title: "Diagnóstico do processo", description: "Como vocês trabalham hoje." },
      { title: "Parametrização e organização", description: "Cadastros, regras e fluxos." },
      { title: "Treinamento por perfil", description: "Quem lança, quem confere, quem decide." },
      { title: "Acompanhamento até estabilizar", description: "Primeiro ciclo rodando sem dor." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    subtitle:
      "Respostas rápidas sobre gestão, implantação e conformidade para você evoluir com segurança.",
    backgroundUrl: faqBg,
    footerText:
      "A DuBrasil Sistemas não apenas organiza processos - ela eleva a gestão da sua empresa a um novo patamar de controle, inteligência e previsibilidade.",
    items: [
      {
        question: "O que a DuBrasil Sistemas resolve na Gestão da minha empresa?",
        answer:
          "A DuBrasil Sistemas estrutura os principais pilares operacionais da empresa - financeiro, fiscal, estoque e vendas - em um ambiente integrado, seguro e alinhado às melhores práticas de gestão.\r\n\r\nA solução permite que os líderes tenham visibilidade real do desempenho do negócio, reduzam incertezas e apoiem decisões com dados consistentes.\r\n\r\nGestão empresarial com clareza e maturidade.",
      },
      {
        question: "Como a DuBrasil Sistemas conduz a implantação estratégica?",
        answer:
          "Nossa implantação é guiada por metodologia própria:\r\n\r\nMapeamento de processos\r\nDiagnóstico da operação\r\nEstruturação de rotinas\r\nConfiguração alinhada às regras fiscais\r\nTestes e homologação\r\nAcompanhamento pós-implantação\r\nEssa abordagem assegura que a tecnologia seja absorvida de forma eficaz, reduzindo riscos de retrabalho e assimilando o sistema à realidade da operação.\r\n\r\nImplantação com método. Resultados com consistência.",
      },
      {
        question: "De que forma a solução contribui para conformidade e segurança fiscal?",
        answer:
          "A DuBrasil Sistemas organiza emissões fiscais, controles contábeis e integrações tributárias, reduzindo falhas operacionais e melhorando a aderência às exigências legais.\r\n\r\nCom processos estruturados e dados auditáveis, sua empresa opera com mais segurança jurídica e menor exposição a contingências.\r\n\r\nConformidade que protege o negócio.",
      },
      {
        question: "Como o sistema apoia a inteligência gerencial da empresa?",
        answer:
          "Por meio de dados consolidados, dashboards e relatórios configurados conforme os indicadores estratégicos da empresa.\r\n\r\nA inteligência da operação deixa de estar distribuída em planilhas e passa a ser fruto de análises consistentes, tempestivas e alinhadas à tomada de decisão executiva.\r\n\r\nInformação estruturada, decisão estratégica.",
      },
      {
        question: "Qual é o diferencial competitivo da DuBrasil Sistemas?",
        answer:
          "Nosso diferencial não está apenas no software, e sim na forma como o entregamos e o utilizamos em conjunto com nossos clientes:\r\n\r\n✔ Diagnóstico consultivo inicial\r\n✔ Parametrização alinhada às regras internas do cliente\r\n✔ Metodologia própria de implantação\r\n✔ Acompanhamento pós-entrada em operação\r\n✔ Suporte consultivo e humano\r\n✔ Ajustes de acordo com o crescimento do cliente\r\nEsses elementos transformam a tecnologia em Organização da gestão e inteligência.\r\n\r\nMais que sistema - parceiro estratégico para crescimento sustentável.",
      },
    ],
  },
}
