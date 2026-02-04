import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/553433228500?text=Olá! Gostaria de saber mais sobre o ERP TGA.", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco!
      </span>
    </button>
  );
};

export default WhatsAppButton;
