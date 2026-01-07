import { Users, Smile, RefreshCw, Star } from "lucide-react";

const exclusiveBenefits = [
  {
    icon: Users,
    title: "Para Todas as Idades",
    description: "Atividades adaptadas para crianças de 3 a 12 anos com TDAH",
  },
  {
    icon: Smile,
    title: "Diversão Garantida",
    description: "Atividades testadas e aprovadas por milhares de crianças",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Mensais",
    description: "Novas atividades adicionadas todo mês sem custo extra",
  },
  {
    icon: Star,
    title: "Desenvolvimento Efetivo",
    description: "Ajude seu filho a desenvolver foco e atenção de forma divertida",
  },
];

const ExclusiveBenefits = () => {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Benefícios Exclusivos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {exclusiveBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <benefit.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBenefits;
