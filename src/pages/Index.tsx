import Header from "@/components/Header";
import VideoCarousel from "@/components/VideoCarousel";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <VideoCarousel />
      <Hero />
      <Features />
      <Modules />
      <Benefits />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
