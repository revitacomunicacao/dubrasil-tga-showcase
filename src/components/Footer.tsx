import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={logo} 
            alt="DuBrasil Soluções" 
            className="h-10 w-auto"
          />
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} DuBrasil Soluções. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              Distribuidor autorizado do ERP TGA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
