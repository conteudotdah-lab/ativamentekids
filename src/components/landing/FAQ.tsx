import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShoppingCart } from "lucide-react";

const faqs = [
  {
    question: "Como acessar o material?",
    answer:
      "Após a confirmação do pagamento, você receberá um e-mail com o link para download do PDF. O acesso é instantâneo e você pode baixar o material quantas vezes precisar.",
  },
  {
    question: "As atividades são para qual faixa etária?",
    answer:
      "As atividades foram desenvolvidas para crianças de 3 a 12 anos com TDAH. Cada atividade possui indicação de dificuldade para que você possa escolher as mais adequadas para o seu filho.",
  },
  {
    question: "Posso imprimir as atividades?",
    answer:
      "Sim! O material foi formatado especialmente para impressão. Você pode imprimir quantas vezes quiser para usar com seu filho.",
  },
  {
    question: "Preciso ter experiência com TDAH?",
    answer:
      "Não! Cada atividade vem com instruções claras e dicas de como aplicá-la. O material foi feito para que qualquer pai ou responsável possa usar facilmente.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias para testar o material. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail solicitando o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-sm px-4"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 bg-accent text-accent-foreground shadow-cta hover:brightness-110"
          >
            <ShoppingCart className="w-5 h-5" />
            COMPRAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
