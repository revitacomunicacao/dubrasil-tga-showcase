import { Check } from "lucide-react";

const modules = [
  {
    title: "Módulo Comercial",
    items: [
      "Orçamentos e Pedidos de Venda",
      "Controle de Comissões",
      "Tabelas de Preços Flexíveis",
      "Gestão de Representantes"
    ]
  },
  {
    title: "Módulo Fiscal",
    items: [
      "NF-e e NFC-e Automáticas",
      "SPED Fiscal e Contribuições",
      "Escrituração Contábil Digital",
      "Integração Contábil"
    ]
  },
  {
    title: "Módulo Industrial",
    items: [
      "Ordem de Produção",
      "Ficha Técnica de Produtos",
      "Controle de Insumos",
      "Apontamento de Produção"
    ]
  },
  {
    title: "Módulo Financeiro",
    items: [
      "Contas a Pagar e Receber",
      "Conciliação Bancária",
      "Fluxo de Caixa",
      "Centro de Custos"
    ]
  }
];

const Modules = () => {
  return (
    <section id="modulos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Módulos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluções para cada área da sua empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Módulos integrados que trabalham em conjunto para uma gestão 
            empresarial completa e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {module.title}
              </h3>
              <ul className="space-y-3">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
