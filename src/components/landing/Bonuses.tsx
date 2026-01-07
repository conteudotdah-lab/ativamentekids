import { Gift, Gamepad2, Calendar, Lightbulb } from "lucide-react";

const bonuses = [
  {
    icon: Gamepad2,
    title: "15 Jogos Rápidos Para Estimular Atenção",
    value: "R$37",
    description: "Jogos simples e eficazes para trabalhar a concentração diariamente",
  },
  {
    icon: Calendar,
    title: "Tabela de Organização Semanal",
    value: "R$27",
    description: "Planeje as atividades da semana e acompanhe o progresso do seu filho",
  },
  {
    icon: Lightbulb,
    title: "15 Dicas para Estimular Interesse",
    value: "R$33",
    description: "Estratégias práticas para manter seu filho engajado nas atividades",
  },
];

const Bonuses = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
            🎁 Leve Agora 3 Bônus Exclusivos Avaliados em R$97 –{" "}
            <span className="text-accent">100% GRÁTIS Só Hoje!</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border-2 border-accent/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <bonus.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-center mb-2">{bonus.title}</h3>
              <p className="text-primary font-bold text-center line-through text-lg mb-2">
                {bonus.value}
              </p>
              <p className="text-muted-foreground text-sm text-center">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#planos">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110">
              <Gift className="w-5 h-5" />
              Total em Bônus: R$97 GRÁTIS HOJE!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
