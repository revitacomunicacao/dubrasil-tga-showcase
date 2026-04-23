const WhatsAppButton = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById("contato")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToContactForm}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Ir para o formulário de contato"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
        className="group-hover:animate-pulse"
      >
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.27.22-.61.22-1.14.16-1.27-.07-.13-.25-.2-.52-.34z" />
        <path d="M26.66 5.34A14.46 14.46 0 0 0 16.02 1C8.03 1 1.54 7.49 1.54 15.48c0 2.55.67 5.04 1.95 7.24L1 31l8.47-2.23a14.4 14.4 0 0 0 6.55 1.57h.01c7.99 0 14.48-6.49 14.48-14.48 0-3.87-1.51-7.51-4.25-10.52zM16.03 27.9h-.01c-2.2 0-4.35-.59-6.23-1.71l-.45-.27-5.03 1.32 1.34-4.9-.29-.5a12.37 12.37 0 0 1-1.89-6.35c0-6.8 5.53-12.33 12.33-12.33 3.29 0 6.38 1.28 8.71 3.61a12.24 12.24 0 0 1 3.61 8.72c0 6.8-5.53 12.41-12.09 12.41z" />
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-[20px] font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco!
      </span>
    </button>
  );
};

export default WhatsAppButton;
