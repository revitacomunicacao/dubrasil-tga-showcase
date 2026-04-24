import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqBg from "@/assets/background_faq.jpeg"

const faqs = [
  {
    question: "O que a DuBrasil Sistemas resolve na Gestão da minha empresa?",
    answer: (
      <>
        <p>
          A DuBrasil Sistemas estrutura os principais pilares operacionais da
          empresa - financeiro, fiscal, estoque e vendas - em um ambiente
          integrado, seguro e alinhado às melhores práticas de gestão.
        </p>
        <p className="mt-4">
          A solução permite que os líderes tenham visibilidade real do
          desempenho do negócio, reduzam incertezas e apoiem decisões com dados
          consistentes.
        </p>
        <p className="mt-4 text-[20px] font-medium text-foreground/80">
          Gestão empresarial com clareza e maturidade.
        </p>
      </>
    ),
  },
  {
    question: "Como a DuBrasil Sistemas conduz a implantação estratégica?",
    answer: (
      <>
        <p>Nossa implantação é guiada por metodologia própria:</p>
        <ol className="mt-4 list-decimal pl-5 space-y-1">
          <li>Mapeamento de processos</li>
          <li>Diagnóstico da operação</li>
          <li>Estruturação de rotinas</li>
          <li>Configuração alinhada às regras fiscais</li>
          <li>Testes e homologação</li>
          <li>Acompanhamento pós-implantação</li>
        </ol>
        <p className="mt-4">
          Essa abordagem assegura que a tecnologia seja absorvida de forma
          eficaz, reduzindo riscos de retrabalho e assimilando o sistema à
          realidade da operação.
        </p>
        <p className="mt-4 text-[20px] font-medium text-foreground/80">
          Implantação com método. Resultados com consistência.
        </p>
      </>
    ),
  },
  {
    question: "De que forma a solução contribui para conformidade e segurança fiscal?",
    answer: (
      <>
        <p>
          A DuBrasil Sistemas organiza emissões fiscais, controles contábeis e
          integrações tributárias, reduzindo falhas operacionais e melhorando a
          aderência às exigências legais.
        </p>
        <p className="mt-4">
          Com processos estruturados e dados auditáveis, sua empresa opera com
          mais segurança jurídica e menor exposição a contingências.
        </p>
        <p className="mt-4 text-[20px] font-medium text-foreground/80">
          Conformidade que protege o negócio.
        </p>
      </>
    ),
  },
  {
    question: "Como o sistema apoia a inteligência gerencial da empresa?",
    answer: (
      <>
        <p>
          Por meio de dados consolidados, dashboards e relatórios configurados
          conforme os indicadores estratégicos da empresa.
        </p>
        <p className="mt-4">
          A inteligência da operação deixa de estar distribuída em planilhas e
          passa a ser fruto de análises consistentes, tempestivas e alinhadas à
          tomada de decisão executiva.
        </p>
        <p className="mt-4 text-[20px] font-medium text-foreground/80">
          Informação estruturada, decisão estratégica.
        </p>
      </>
    ),
  },
  {
    question: "Qual é o diferencial competitivo da DuBrasil Sistemas?",
    answer: (
      <>
        <p>
          Nosso diferencial não está apenas no software, e sim na forma como o
          entregamos e o utilizamos em conjunto com nossos clientes:
        </p>
        <ul className="mt-4 space-y-1">
          <li>✔ Diagnóstico consultivo inicial</li>
          <li>✔ Parametrização alinhada às regras internas do cliente</li>
          <li>✔ Metodologia própria de implantação</li>
          <li>✔ Acompanhamento pós-entrada em operação</li>
          <li>✔ Suporte consultivo e humano</li>
          <li>✔ Ajustes de acordo com o crescimento do cliente</li>
        </ul>
        <p className="mt-4">
          Esses elementos transformam a tecnologia em Organização da gestão e
          inteligência.
        </p>
        <p className="mt-4 text-[20px] font-medium text-foreground/80">
          Mais que sistema - parceiro estratégico para crescimento sustentável.
        </p>
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${faqBg})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/90" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[60px] text-white">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-[20px] text-white max-w-2xl mx-auto">
            Respostas rápidas sobre gestão, implantação e conformidade para você
            evoluir com segurança.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[20px] hover:no-underline text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-[20px] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-10 text-center text-[20px] text-white/80 max-w-4xl mx-auto">
          A DuBrasil Sistemas não apenas organiza processos - ela eleva a gestão
          da sua empresa a um novo patamar de controle, inteligência e
          previsibilidade.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
