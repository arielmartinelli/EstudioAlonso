"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { RapazLogo } from "@/components/brand/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 24);
    setHidden(v > 480 && v > prev && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-tinta/92 backdrop-blur-md border-b border-white/8"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 text-papel sm:h-18 md:px-8">
        <a href="#inicio" aria-label="Rapaz, ir al inicio" className="rounded-sm">
          <RapazLogo tone="light" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 text-sm text-niebla/85 transition-colors hover:text-papel"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cera transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="group hidden items-center gap-2.5 rounded-full border border-cera/60 py-2 pl-3 pr-4 text-sm font-medium text-papel transition-colors hover:bg-cera hover:text-tinta sm:inline-flex"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cera opacity-70 group-hover:bg-tinta" />
              <span className="relative inline-flex size-2 rounded-full bg-cera group-hover:bg-tinta" />
            </span>
            Urgencias 24 h
            <Phone className="size-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-papel lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Menú móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto bg-tinta pb-[max(2rem,env(safe-area-inset-bottom))] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-[clamp(1.75rem,8vw,2.5rem)] text-papel"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="mx-5 mt-8 flex items-center justify-center gap-2 rounded-full bg-cera py-4 font-semibold text-tinta"
            >
              <Phone className="size-4" aria-hidden="true" /> Urgencias: {site.phoneDisplay}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
