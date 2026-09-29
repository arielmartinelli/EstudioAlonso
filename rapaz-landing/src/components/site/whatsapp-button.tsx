"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Contacto rápido.
 * - Escritorio/tablet: botón flotante de WhatsApp que se despliega en hover.
 * - Móvil: barra inferior al alcance del pulgar (Llamar + WhatsApp) que aparece
 *   al pasar el hero, para no tapar los CTA principales.
 */
export function WhatsAppButton() {
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setPastHero(v > window.innerHeight * 0.85));

  return (
    <>
      <motion.a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp (se abre en una pestaña nueva)"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full bg-cera p-4 text-tinta shadow-[0_12px_30px_-8px_rgb(18_26_32/0.5)] md:flex"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width] duration-500 ease-out group-hover:max-w-40 group-focus-visible:max-w-40">
          Escribinos
        </span>
      </motion.a>

      <AnimatePresence>
        {pastHero && (
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            exit={{ y: "110%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-tinta/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
          >
            <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
              <a
                href={site.phoneHref}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-semibold text-papel active:bg-white/10"
              >
                <Phone className="size-4" aria-hidden="true" /> Llamar 24 h
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-cera text-sm font-semibold text-tinta active:scale-[0.98]"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
