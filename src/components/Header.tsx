import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoTGA from "@/assets/logo tga.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      {" "}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {" "}
        <div className="flex flex-row gap-2 md:gap-10">
          {" "}
          <img
            src={logo}
            alt="DuBrasil Soluções"
            className="h-10 md:h-12 w-auto"
          />{" "}
          <img
            src={logoTGA}
            alt="DuBrasil Soluções"
            className="h-10 md:h-12 w-auto"
          />{" "}
        </div>{" "}
        {/* Desktop Navigation */}{" "}
        <nav className="hidden md:flex items-center gap-8">
          {" "}
          <button
            onClick={() => scrollToSection("dispositivos")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Dispositivos{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("clientes")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Clientes{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("sobrenos")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Sobre Nós{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("solucoes")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Soluções{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("recursos")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Recursos{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("modulos")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Módulos{" "}
          </button>{" "}
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            {" "}
            Benefícios{" "}
          </button>{" "}
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {" "}
            Fale Conosco{" "}
          </Button>{" "}
        </nav>{" "}
        {/* Mobile Menu Button */}{" "}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {" "}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}{" "}
        </button>{" "}
      </div>{" "}
      {/* Mobile Navigation */}{" "}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 py-4">
          {" "}
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {" "}
            <button
              onClick={() => scrollToSection("dispositivos")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Dispositivos{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Clientes{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("sobrenos")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Sobre Nós{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Soluções{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("recursos")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Recursos{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("modulos")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Módulos{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              {" "}
              Benefícios{" "}
            </button>{" "}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              {" "}
              Fale Conosco{" "}
            </Button>{" "}
          </div>{" "}
        </nav>
      )}{" "}
    </header>
  );
};
export default Header;
