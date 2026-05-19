import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { renderFaqAnswer } from "@/lib/faq-answer"
import type { HomePageContent } from "@/types/cms"

type FAQProps = {
  content: HomePageContent["faq"]
}

const FAQ = ({ content }: FAQProps) => {
  return (
    <section id="faq" className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-[center_25%] md:bg-center bg-no-repeat max-md:bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${content.backgroundUrl})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/90 max-md:bg-brand-surface/92" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-[60px] text-white">
            {content.title}
          </h2>
          <p className="mt-4 text-base max-md:text-base md:text-[20px] text-white max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm p-4 max-md:p-5 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base max-md:pr-2 md:text-[20px] hover:no-underline text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-base md:text-[20px] leading-relaxed">
                  {renderFaqAnswer(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-8 md:mt-10 text-center text-base md:text-[20px] text-white/80 max-w-4xl mx-auto">
          {content.footerText}
        </p>
      </div>
    </section>
  )
}

export default FAQ
