"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Aparición suave al entrar en pantalla. MotionConfig reducedMotion="user" la neutraliza. */
export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
