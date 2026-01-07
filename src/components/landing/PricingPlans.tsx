import { useState } from "react";
import { Check, X, Gift, Users } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import UpsellModal from "./UpsellModal";

const BASIC_CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/ZBEpiMLmkUur0M4yHxca";
const PREMIUM_CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/yFcKQLjHRkH2sWawFDAz";

const PricingPlans = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const basicFeatures = [
    { text: "150 atividades para TDAH", included: true },
    { text: "Diversas atividades - Colorir - Labirinto - Caça palavras - e Muito mais", included: true },
    { text: "Acesso Instantâneo e Digital", included: true },
    { text: "Garantia de 7 Dias", included: true },
    { text: "Sem benefícios do plano Premium", included: false },
  ];

  const premiumFeatures = [
    { text: "150 atividades para TDAH", included: true },
    { text: "Diversas atividades - Colorir - Labirinto - Caça palavras - e Muito mais", included: true },
    { text: "Acesso Instantâneo e Digital", included: true },
    { text: "BONUS: 15 Jogos Rápidos Para Estimular Atenção", included: true, isBonus: true },
    { text: "BONUS: Tabela de Organização Semanal", included: true, isBonus: true },
    { text: "BONUS: 15 Dicas para Estimular Interesse", included: true, isBonus: true },
    { text: "Garantia de 7 Dias", included: true },
    { text: "Atualizações Mensais", included: true },
    { text: "Suporte Prioritário", included: true },
  ];

  const handleBasicClick = () => {
    setShowUpsell(true);
  };

  const handlePremiumClick = () => {
    window.location.href = PREMIUM_CHECKOUT_URL;
  };

  const handleUpsellAccept = () => {
    window.location.href = PREMIUM_CHECKOUT_URL;
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    window.location.href = BASIC_CHECKOUT_URL;
  };

  return (
    <section id="planos" className="py-12 md:py-16 bg-background">
      <div className="container">
        <CountdownTimer />

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Escolha Seu Plano
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Plano Básico */}
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <h3 className="text-2xl font-heading font-bold text-center mb-4">
              Plano Básico
            </h3>
            
            <div className="text-center mb-4">
              <span className="text-muted-foreground line-through text-lg">R$97</span>
              <div className="text-5xl font-heading font-bold text-primary">
                R$10<span className="text-lg">,00</span>
              </div>
              <p className="text-sm text-muted-foreground">pagamento único</p>
              <p className="text-accent font-semibold text-sm">Você economiza R$87,00</p>
            </div>

            <ul className="space-y-3 mb-6">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? "" : "text-destructive"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button
                onClick={handleBasicClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110"
              >
                QUERO COMPRAR!
              </button>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="bg-card rounded-2xl p-6 shadow-card-hover border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Mais Comprado
              </span>
            </div>

            <h3 className="text-2xl font-heading font-bold text-center mb-4 mt-2">
              Plano Premium
            </h3>

            <div className="text-center mb-4">
              <span className="text-muted-foreground line-through text-lg">R$197</span>
              <div className="text-5xl font-heading font-bold text-primary">
                R$27<span className="text-lg">,00</span>
              </div>
              <p className="text-sm text-muted-foreground">pagamento único</p>
              <p className="text-accent font-semibold text-sm">
                Você economiza R$168,00 + R$97 em bônus
              </p>
            </div>

            <div className="bg-muted rounded-lg p-3 flex items-center justify-center gap-2 mb-4">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                +857 pessoas escolheram essa oferta
              </span>
            </div>

            <ul className="space-y-3 mb-6">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  {feature.isBonus ? (
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.isBonus ? "text-primary font-medium" : ""}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button
                onClick={handlePremiumClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110"
              >
                QUERO COMPRAR!
              </button>
            </div>
          </div>
        </div>
      </div>

      <UpsellModal
        open={showUpsell}
        onClose={() => setShowUpsell(false)}
        onAccept={handleUpsellAccept}
        onDecline={handleUpsellDecline}
      />
    </section>
  );
};

export default PricingPlans;
