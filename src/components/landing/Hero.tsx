import { Gift } from "lucide-react";
import childActivities from "@/assets/child-activities.jpg";

const Hero = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            <span className="text-primary">150 Atividades</span> para Crianças com{" "}
            <span className="text-primary">TDAH</span> Baseadas em{" "}
            <span className="text-accent">Estudos Reais</span>{" "}
            <span className="text-primary">+Bônus</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tenha acesso a atividades <strong>estruturadas</strong>,{" "}
            <strong>educativas</strong> e <strong>divertidas</strong> para ajudar seu
            filho a desenvolver foco, atenção e habilidades essenciais.
          </p>

          {/* Imagem principal */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="aspect-video rounded-2xl border-4 border-primary shadow-card overflow-hidden">
              <img 
                src={childActivities} 
                alt="Criança fazendo atividades"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a href="#planos">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110">
              <Gift className="w-5 h-5" />
              QUERO AGORA!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
