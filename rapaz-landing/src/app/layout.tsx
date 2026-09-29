import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Rapaz · Estudio jurídico penal en Buenos Aires";
const description =
  "Defensa penal y representación de víctimas. Detenciones, delitos económicos, estupefacientes y delitos informáticos. Guardia de urgencias las 24 horas.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Rapaz" },
  description,
  keywords: ["abogado penalista", "defensa penal", "estudio jurídico", "Buenos Aires", "excarcelación", "urgencias penales"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.legalName,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121a20",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  url: site.url,
  telephone: "+54 11 5555-0142",
  email: site.email,
  areaServed: "AR",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
  openingHours: "Mo-Fr 09:00-19:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${bodoni.variable} ${hanken.variable} ${plexMono.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <MotionProvider>{children}</MotionProvider>
        <Toaster position="bottom-center" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
