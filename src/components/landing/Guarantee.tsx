import { Lock } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-center text-primary-foreground">
                <span className="text-3xl font-bold">7</span>
                <p className="text-xs font-semibold uppercase">Dias</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Garantia de 7 Dias
            </h2>

            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Teste o material por 7 dias. Se não ficar satisfeito, devolvemos
              seu dinheiro sem complicação.
            </p>

            <a href="#planos">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110">
                <Lock className="w-5 h-5" />
                COMPRAR COM SEGURANÇA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
