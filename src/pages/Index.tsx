import Header from "@/components/Header";
import VideoCarousel from "@/components/VideoCarousel";
import Hero from "@/components/Hero";
import ErpResolve from "@/components/ErpResolve";
import Modules from "@/components/Modules";
import ParaQuemE from "@/components/ParaQuemE";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SolucoesDuBrasil } from "@/components/SolucoesDuBrasil";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <VideoCarousel />
      <Hero />
      <ErpResolve />
      <Modules />
      <SolucoesDuBrasil />
      <ParaQuemE />
      <Benefits />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
