import Header from "@/components/Header";
import VideoCarousel from "@/components/VideoCarousel";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import ParaQuemE from "@/components/ParaQuemE";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SolucoesDuBrasil } from "@/components/SolucoesDuBrasil";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <VideoCarousel />
      <Hero />
      <Modules />
      <SolucoesDuBrasil />
      <ParaQuemE />
      <Benefits />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
