import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { areas } from "@/lib/site";

export function PracticeAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="bg-papel">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera-oscura">Áreas de práctica</p>
            <h2 id="areas-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em]">
              Solo derecho penal.
              <br />
              <span className="italic text-plumaje">Todo el derecho penal.</span>
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground lg:col-span-5 lg:max-w-md lg:justify-self-end">
            Defendemos a personas y empresas imputadas, y representamos a víctimas como querellantes.
            Cada área la lleva un abogado que hace solo eso.
          </p>
        </Reveal>

        <ul className="mt-10 border-t md:mt-14 border-tinta/15">
          {areas.map((area, i) => (
            <li key={area.title}>
              <Reveal delay={Math.min(i * 0.05, 0.25)} y={16}>
                <a
                  href="#contacto"
                  className="group relative grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 overflow-hidden border-b border-tinta/15 py-6 sm:gap-x-10 lg:grid-cols-12 lg:py-8"
                >
                  {/* Fondo que barre de izquierda a derecha en hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-0 origin-left scale-x-0 bg-tinta transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 group-active:scale-x-100"
                  />
                  <span className="relative font-mono text-xs uppercase tracking-[0.16em] text-plumaje transition-colors duration-500 group-hover:text-cera group-active:text-cera lg:col-span-3 lg:pl-4">
                    {area.ref}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="relative row-span-2 size-6 text-plumaje transition-all duration-500 group-hover:rotate-45 group-hover:text-cera lg:order-last lg:col-span-1 lg:row-span-1 lg:justify-self-end lg:mr-4"
                  />
                  <span className="relative font-display text-2xl leading-tight transition-colors duration-500 group-hover:text-papel group-active:text-papel sm:text-[1.75rem] lg:col-span-4 lg:text-3xl">
                    {area.title}
                  </span>
                  <span className="relative col-span-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-niebla/85 group-active:text-niebla/85 lg:col-span-4">
                    {area.summary}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
