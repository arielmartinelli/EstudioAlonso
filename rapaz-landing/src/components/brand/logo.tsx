import { cn } from "@/lib/utils";
import { FALCON } from "./falcon-paths";

type Tone = { className?: string; tone?: "dark" | "light" };

/** Isotipo estático (nav, footer). */
export function RapazMark({ className, tone = "dark" }: Tone) {
  const ink = tone === "dark" ? "var(--tinta)" : "var(--papel)";
  const paper = tone === "dark" ? "var(--papel)" : "var(--tinta)";
  return (
    <svg viewBox={FALCON.viewBox} className={cn("shrink-0", className)} aria-hidden="true">
      <path d={FALCON.head} fill={ink} />
      <path d={FALCON.throat} fill={paper} />
      <circle {...FALCON.eye} fill="var(--cera)" />
      <circle {...FALCON.pupil} fill="var(--tinta)" />
      <path d={FALCON.brow} fill={ink} />
    </svg>
  );
}

/** Logotipo completo: isotipo + wordmark. */
export function RapazLogo({ className, tone = "dark" }: Tone) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <RapazMark tone={tone} className="size-9" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.4rem] font-semibold tracking-[0.2em]">RAPAZ</span>
        <span
          className={cn(
            "mt-1 hidden whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.24em] min-[360px]:block",
            tone === "dark" ? "text-plumaje" : "text-niebla/75",
          )}
        >
          Estudio jurídico · Penal
        </span>
      </span>
    </span>
  );
}
