import { 
  BarChart3, 
  ShoppingCart, 
  Wallet, 
  Package, 
  FileText, 
  Users,
  TrendingUp,
  Shield
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Gestão de Vendas",
    description: "Controle completo do ciclo de vendas, desde orçamentos até faturamento, com acompanhamento em tempo real."
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description: "Gerencie seu inventário com precisão, controle de lotes, validade e movimentações automatizadas."
  },
  {
    icon: Wallet,
    title: "Financeiro Integrado",
    description: "Contas a pagar e receber, fluxo de caixa, conciliação bancária e relatórios financeiros completos."
  },
  {
    icon: FileText,
    title: "Emissão Fiscal",
    description: "NF-e, NFC-e, NFS-e e muito mais. Emissão automática com integração direta com a SEFAZ."
  },
  {
    icon: BarChart3,
    title: "Relatórios Gerenciais",
    description: "Dashboards e relatórios personalizados para tomada de decisão estratégica baseada em dados."
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "CRM integrado para gerenciar relacionamentos, histórico de compras e fidelização de clientes."
  },
  {
    icon: TrendingUp,
    title: "Compras e Fornecedores",
    description: "Automatize pedidos de compra, gerencie fornecedores e otimize sua cadeia de suprimentos."
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Backups automáticos, controle de acesso por usuário e criptografia para proteção total dos dados."
  }
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Tudo que você precisa para gerenciar seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O ERP TGA oferece uma suíte completa de ferramentas integradas para 
            otimizar todos os processos da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
