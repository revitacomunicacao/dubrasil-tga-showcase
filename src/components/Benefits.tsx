import { Zap, Clock, TrendingUp, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Aumento de Produtividade",
    description: "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa.",
    stat: "40%",
    statLabel: "mais eficiência"
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Reduza o tempo gasto com tarefas manuais através de integrações e automações inteligentes.",
    stat: "10h",
    statLabel: "economizadas por semana"
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Tome decisões baseadas em dados precisos e acompanhe o crescimento do seu negócio.",
    stat: "25%",
    statLabel: "aumento em vendas"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Especializado",
    description: "Conte com uma equipe técnica dedicada para ajudar você em cada etapa da jornada.",
    stat: "24/7",
    statLabel: "suporte disponível"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Por que escolher o ERP TGA?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Transforme a gestão da sua empresa e alcance resultados 
            extraordinários com nossa solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-1">
                {benefit.stat}
              </div>
              <div className="text-sm text-primary-foreground/60 mb-4">
                {benefit.statLabel}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
