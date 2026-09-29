import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const actions = [
  {
    title: "Llamá a la guardia",
    body: `${site.phoneDisplay}, las 24 horas, feriados incluidos. Un abogado del estudio va a la dependencia.`,
  },
  {
    title: "Que no declare sin abogado",
    body: "Nadie está obligado a declarar contra sí mismo. Pedir un defensor antes de hablar es un derecho.",
  },
  {
    title: "Anotá tres datos",
    body: "En qué comisaría o juzgado está, a qué hora lo detuvieron y, si te lo dan, el número de causa.",
  },
];

export function Urgency() {
  return (
    <section aria-labelledby="urgencia-title" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:gap-10 md:px-8 md:py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera-oscura">Si es urgente</p>
          <h2 id="urgencia-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em] lg:text-[2.75rem] xl:text-5xl">
            ¿Detuvieron a alguien? Hacé esto ahora.
          </h2>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:col-span-8">
          {actions.map((a, i) => (
            <li key={a.title} className="group relative bg-card">
              <Reveal delay={i * 0.1} className="grid h-full grid-cols-[2.5rem_1fr] gap-x-3 p-5 sm:block sm:p-6 md:p-7">
                <span
                  aria-hidden="true"
                  className="row-span-2 font-display text-4xl leading-none text-niebla transition-colors duration-300 group-hover:text-cera group-active:text-cera sm:text-5xl"
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold sm:mt-5">{a.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{a.body}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-cera transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
