// Geometría del isotipo: cabeza de halcón peregrino de perfil (viewBox 16 12 104 104).
// Capucha oscura, mejilla/garganta clara, ceja marcada y ojo con anillo amarillo.
export const FALCON = {
  viewBox: "16 12 104 104",
  head: "M28 112 C20 82 22 46 42 29 C56 17 79 15 92 27 C97 32 100 36 101 40 L106 42 C115 46 118 58 110 69 C108 62 105 59 101 59 C98 61 95 62 92 62 C89 73 83 88 79 112 Z",
  throat:
    "M88 52 C91 56 93 59 92 62 C89 73 83 88 79 112 L56 112 C63 104 70 96 73 86 C76 76 77 66 80 58 C82 54 85 52 88 52 Z",
  brow: "M70 31.5 L95 36.5 L94 31 L70 27 Z",
  eye: { cx: 82, cy: 40, r: 7.5 },
  pupil: { cx: 83, cy: 40.5, r: 3.4 },
} as const;
