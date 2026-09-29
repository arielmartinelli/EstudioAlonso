"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { FALCON } from "./falcon-paths";
import { cn } from "@/lib/utils";

const MAX_OFFSET = 2.4; // unidades del viewBox que puede moverse la pupila
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Firma visual del sitio: el halcón se dibuja al cargar y su pupila sigue el cursor.
 * Respeta prefers-reduced-motion (se muestra estático) y no escucha el puntero en pantallas táctiles.
 */
export function WatchingFalcon({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const py = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) {
      // Pantallas táctiles: sin cursor que seguir, el halcón "vigila" solo.
      const spots: [number, number][] = [[-2, 0.4], [1.8, -0.6], [0.4, 1.6], [-1.2, -1.2], [0, 0]];
      let i = 0;
      const id = window.setInterval(() => {
        const [sx, sy] = spots[i++ % spots.length];
        x.set(sx);
        y.set(sy);
      }, 1600);
      return () => window.clearInterval(id);
    }

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const box = svg.getBoundingClientRect();
        // Centro del ojo en coordenadas de pantalla
        const scale = box.width / 104;
        const ex = box.left + (FALCON.eye.cx - 16) * scale;
        const ey = box.top + (FALCON.eye.cy - 12) * scale;
        const dx = e.clientX - ex;
        const dy = e.clientY - ey;
        const dist = Math.hypot(dx, dy) || 1;
        const k = Math.min(dist / 260, 1) * MAX_OFFSET;
        x.set((dx / dist) * k);
        y.set((dy / dist) * k);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce, x, y]);

  const drawn = reduce ? { pathLength: 1, fillOpacity: 1 } : undefined;

  return (
    <svg
      ref={svgRef}
      viewBox={FALCON.viewBox}
      className={cn("overflow-visible", className)}
      role="img"
      aria-label="Isotipo de Rapaz: cabeza de halcón peregrino"
    >
      <defs>
        <clipPath id="eye-clip">
          <circle {...FALCON.eye} />
        </clipPath>
      </defs>

      <motion.path
        d={FALCON.head}
        stroke="var(--cera)"
        strokeWidth={0.6}
        fill="var(--papel)"
        initial={drawn ? { ...drawn, strokeOpacity: 0 } : { pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
        animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
        transition={{
          pathLength: { duration: 1.6, ease: EASE },
          fillOpacity: { duration: 0.9, delay: 1.2, ease: "easeOut" },
          strokeOpacity: { duration: 0.8, delay: 2.2 },
        }}
      />
      <motion.path
        d={FALCON.throat}
        fill="var(--tinta)"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      />

      {/* Ojo */}
      <motion.g
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.9 }}
        style={{ transformOrigin: `${FALCON.eye.cx}px ${FALCON.eye.cy}px`, transformBox: "view-box" }}
      >
        <circle {...FALCON.eye} fill="var(--cera)" />
        <g clipPath="url(#eye-clip)">
          <motion.circle {...FALCON.pupil} fill="var(--tinta)" style={{ x: px, y: py }} />
          <circle cx={FALCON.eye.cx - 2.6} cy={FALCON.eye.cy - 2.6} r={1.1} fill="#fff" opacity={0.8} />
          {/* Párpado: parpadeo ocasional */}
          {!reduce && (
            <motion.rect
              x={FALCON.eye.cx - 8}
              y={FALCON.eye.cy - 8}
              width={16}
              height={16}
              fill="var(--papel)"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 0, 1, 0] }}
              transition={{ duration: 6, times: [0, 0.94, 0.97, 1], repeat: Infinity, delay: 3 }}
              style={{ transformOrigin: "top", transformBox: "fill-box" }}
            />
          )}
        </g>
      </motion.g>

      <motion.path
        d={FALCON.brow}
        fill="var(--papel)"
        initial={reduce ? false : { opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.1, ease: EASE }}
      />
    </svg>
  );
}
