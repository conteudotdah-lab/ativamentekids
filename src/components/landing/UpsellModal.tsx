import { Check, Gift, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

const premiumFeatures = [
  "150 atividades para TDAH",
  "Diversas atividades - Colorir - Labirinto - Caça palavras - e Muito mais",
  "Acesso Instantâneo e Digital",
  "BONUS: 15 Jogos Rápidos Para Estimular Atenção",
  "BONUS: Tabela de Organização Semanal",
  "BONUS: 15 Dicas para Estimular Interesse",
  "Garantia de 7 Dias",
  "Atualizações Mensais",
  "Suporte Prioritário",
];

const UpsellModal = ({ open, onClose, onAccept, onDecline }: UpsellModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-card border-2 border-primary">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Gift className="w-6 h-6" />
              <span className="text-2xl font-heading font-bold">PARABÉNS!</span>
              <Gift className="w-6 h-6" />
            </div>
            <p className="text-xl font-heading text-foreground">
              Você Ganhou uma Promoção Exclusiva!
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className="text-center py-4">
          <p className="text-muted-foreground mb-4">
            Por apenas mais <span className="text-primary font-bold">R$9,90</span> você adquire o{" "}
            <span className="text-primary font-bold">Plano Premium</span>!
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-2xl text-muted-foreground line-through">R$27,00</span>
            <div className="text-4xl font-heading font-bold text-accent">
              R$19<span className="text-lg">,90</span>
            </div>
          </div>

          <p className="text-sm text-accent font-semibold mb-6">
            Oferta válida apenas agora!
          </p>

          <div className="bg-muted rounded-lg p-4 mb-6 text-left">
            <p className="font-heading font-bold mb-3 text-center">
              O que você vai receber:
            </p>
            <ul className="space-y-2">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  {feature.startsWith("BONUS") ? (
                    <Gift className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.startsWith("BONUS") ? "text-primary font-medium" : ""}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onAccept}
            className="w-full bg-accent text-accent-foreground py-4 px-6 rounded-full font-bold text-lg shadow-cta hover:brightness-110 transition-all duration-300 transform hover:scale-105 active:scale-100 mb-3"
          >
            ACEITAR OFERTA!
          </button>

          <button
            onClick={onDecline}
            className="text-muted-foreground text-sm underline hover:text-foreground transition-colors"
          >
            Não, obrigado. Quero apenas o Plano Básico.
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsellModal;
