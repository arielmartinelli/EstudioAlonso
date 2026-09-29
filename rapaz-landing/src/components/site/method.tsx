"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { steps } from "@/lib/site";

export function Method() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="metodo" aria-labelledby="metodo-title" className="barrado bg-tinta text-papel">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:gap-14 md:px-8 md:py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera">Cómo trabajamos</p>
          <h2 id="metodo-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em] lg:text-[3.25rem] xl:text-6xl">
            De la primera llamada a la sentencia.
          </h2>
          <p className="mt-6 max-w-md text-niebla/80">
            Un proceso penal tiene tiempos que no esperan. Por eso trabajamos con etapas claras y te
            decimos en cada una qué pasa, qué sigue y qué necesitamos de vos.
          </p>
        </Reveal>

        <ol ref={listRef} className="relative lg:col-span-7">
          {/* Línea de progreso guiada por el scroll */}
          <span aria-hidden="true" className="absolute left-[0.6875rem] top-2 bottom-2 w-px bg-white/12" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute left-[0.6875rem] top-2 bottom-2 w-px origin-top bg-cera"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-10 pl-11 last:pb-0 sm:pb-14 sm:pl-14">
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0.4, backgroundColor: "rgb(18 26 32)" }}
                whileInView={{ scale: 1, backgroundColor: "rgb(224 171 38)" }}
                viewport={{ margin: "0px 0px -45% 0px" }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-1 flex size-[1.4rem] items-center justify-center rounded-full border border-cera font-mono text-[0.65rem] text-tinta"
              >
                {i + 1}
              </motion.span>
              <Reveal delay={0.05}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-niebla/60">{step.time}</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-niebla/80">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
