import { FileText, Puzzle, Smartphone, Printer } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Material Completo em PDF",
    description: "150 atividades para crianças com TDAH organizadas e prontas para usar",
  },
  {
    icon: Puzzle,
    title: "Atividades Estruturadas",
    description: "Todas as atividades são baseadas em estudos científicos comprovados",
  },
  {
    icon: Smartphone,
    title: "Acesso Digital Completo",
    description: "Acesse por celular, tablet ou computador a qualquer hora e lugar",
  },
  {
    icon: Printer,
    title: "Pronto para Imprimir",
    description: "Material formatado para impressão e uso diário com seu filho",
  },
];

const Benefits = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            O Que Você Vai Receber
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
