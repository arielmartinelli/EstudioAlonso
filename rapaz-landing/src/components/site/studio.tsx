import { Reveal } from "@/components/motion/reveal";
import { principles, team } from "@/lib/site";

export function Studio() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="bg-papel">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera-oscura">El estudio</p>
            <h2 id="estudio-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em] lg:text-[3.25rem] xl:text-6xl">
              Tres abogados.
              <br />
              <span className="italic text-plumaje">Una sola causa: la tuya.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed sm:text-lg text-muted-foreground lg:col-span-6 lg:col-start-7">
            <p>
              Rapaz nació en 2009 con una idea simple: una defensa penal se gana leyendo mejor que la
              contraparte. Somos un estudio chico a propósito. Tomamos pocas causas para poder
              conocerlas de memoria.
            </p>
            <p>
              Litigamos en la justicia nacional, federal y de la Provincia de Buenos Aires, y trabajamos
              con peritos contables, informáticos y médicos de parte.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
          {team.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 0.1} className="group h-full">
                <article className="grid h-full grid-cols-[5.5rem_1fr] overflow-hidden rounded-sm border border-border bg-card transition-[box-shadow,transform] duration-500 ease-out sm:grid-cols-[9rem_1fr] md:flex md:flex-col hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(18_26_32/0.35)]">
                  {/* Retrato placeholder: monograma sobre barrado */}
                  <div className="barrado relative flex items-end overflow-hidden bg-pizarra p-3 sm:p-5 md:aspect-[4/3] md:p-6">
                    <span className="font-display text-4xl italic text-papel/90 sm:text-6xl md:text-7xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                      {p.initials}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute right-3 top-3 size-2 rounded-full sm:size-3 md:right-6 md:top-6 bg-cera transition-transform duration-500 group-hover:scale-150"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <h3 className="font-display text-xl sm:text-2xl">{p.name}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-cera-oscura">{p.role}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-px md:mt-16 overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {principles.map((pr, i) => (
            <li key={pr.title} className="bg-papel">
              <Reveal delay={i * 0.08} className="p-5 sm:p-7">
                <h3 className="flex items-center gap-3 text-lg font-semibold">
                  <span aria-hidden="true" className="h-px w-6 bg-cera" />
                  {pr.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{pr.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
