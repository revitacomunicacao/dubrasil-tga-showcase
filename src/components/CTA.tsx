import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/553433228500?text=Olá! Gostaria de saber mais sobre o ERP TGA.", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para transformar a gestão da sua empresa?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo e descubra como o ERP TGA pode 
            impulsionar os resultados do seu negócio.
          </p>
          
          <Button 
            size="lg" 
            onClick={openWhatsApp}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 group"
          >
            <MessageCircle className="mr-2" />
            Falar com Especialista
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-6 text-muted-foreground text-sm">
            Resposta rápida via WhatsApp • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
