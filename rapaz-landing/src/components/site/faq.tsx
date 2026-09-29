import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:gap-12 md:px-8 md:py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera-oscura">Preguntas frecuentes</p>
          <h2 id="faq-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em] lg:text-[2.75rem] xl:text-5xl">
            Lo que nos preguntan en la primera llamada.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <Accordion className="border-t border-tinta/15">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-tinta/15">
                <AccordionTrigger className="gap-4 py-5 font-display text-lg hover:no-underline hover:text-cera-oscura sm:py-6 sm:text-xl md:text-2xl [&_[data-slot=accordion-trigger-icon]]:size-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
