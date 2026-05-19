import Header from "@/components/Header"
import VideoCarousel from "@/components/VideoCarousel"
import Hero from "@/components/Hero"
import ModulesMock from "@/components/ModulesMock"
import ParaQuemE from "@/components/ParaQuemE"
import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { SolucoesDuBrasil } from "@/components/SolucoesDuBrasil"
import ContactForm from "@/components/ContactForm"
import FAQ from "@/components/FAQ"
import { useHomePage } from "@/hooks/useHomePage"
import { FALLBACK_HOME_CONTENT } from "@/lib/cms-fallbacks"

const Index = () => {
  const { data: homeContent = FALLBACK_HOME_CONTENT } = useHomePage()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <VideoCarousel />
      <Hero content={homeContent.hero} />
      <ModulesMock modules={homeContent.modules} />
      <SolucoesDuBrasil />
      <ParaQuemE content={homeContent.paraQuemE} />
      <Benefits content={homeContent.benefits} />
      <FAQ content={homeContent.faq} />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Index
