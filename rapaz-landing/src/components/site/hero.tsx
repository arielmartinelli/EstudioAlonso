"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Phone } from "lucide-react";
import { WatchingFalcon } from "@/components/brand/watching-falcon";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const lines = ["Vemos lo que", "el expediente", "esconde."];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="barrado relative isolate overflow-hidden bg-tinta pt-24 text-papel sm:pt-28 md:pt-32"
    >
      {/* Halo cálido detrás del ojo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgb(224_171_38/0.13),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 sm:pb-16 md:grid-cols-12 md:gap-6 md:px-8 lg:gap-10 lg:pb-24">
        <div className="md:col-span-8 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cera sm:mb-8 sm:text-xs"
          >
            Defensa penal · Buenos Aires
          </motion.p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.3rem,9.6vw,6.4rem)] font-medium leading-[0.98] tracking-[-0.02em] text-balance md:text-[clamp(3rem,6.6vw,6.4rem)]"
          >
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={i === 2 ? "block italic text-cera" : "block"}
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-niebla/85 sm:mt-8 sm:text-lg"
          >
            Una nulidad en un allanamiento, un plazo vencido, un testigo que se contradice. Encontrarlo
            a tiempo cambia el resultado de una causa penal. Ese es nuestro trabajo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cera px-7 py-4 font-semibold text-tinta transition-[transform,background-color] duration-300 hover:bg-[#ebbb3f] active:scale-[0.98]"
            >
              Consultar un caso
              <ArrowDownRight
                className="size-4 transition-transform duration-300 group-hover:rotate-[-45deg]"
                aria-hidden="true"
              />
            </a>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-medium text-papel transition-colors duration-300 hover:border-papel hover:bg-white/5"
            >
              <Phone className="size-4 transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
              Urgencias: {site.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[13rem] sm:max-w-[16rem] md:col-span-4 md:max-w-none lg:col-span-5">
          <WatchingFalcon className="w-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-4 hidden text-right font-mono text-[0.68rem] uppercase tracking-[0.2em] text-niebla/60 lg:block"
          >
            <span className="italic normal-case tracking-normal">Falco peregrinus</span> · ve con
            nitidez a más de un kilómetro
          </motion.p>
        </div>
      </div>

      {/* Cita constitucional: el fundamento del oficio */}
      <div className="border-t border-white/10">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 md:flex-row md:items-baseline md:gap-8 md:px-8"
        >
          <figcaption className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cera">
            Art. 18, Constitución Nacional
          </figcaption>
          <blockquote className="font-display text-base italic text-niebla/90 sm:text-lg md:text-xl">
            “Es inviolable la defensa en juicio de la persona y de los derechos.”
          </blockquote>
        </motion.figure>
      </div>
    </section>
  );
}
