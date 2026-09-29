import { RapazLogo } from "@/components/brand/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="barrado bg-tinta text-niebla/80">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-28 md:px-8 md:pt-16 md:pb-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="sm:col-span-2 md:col-span-5">
            <RapazLogo tone="light" className="text-papel" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Defensa penal y representación de víctimas en la Ciudad de Buenos Aires, la Provincia y
              la justicia federal.
            </p>
          </div>
          <nav aria-label="Pie de página" className="md:col-span-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cera">Secciones</p>
            <ul className="mt-3 grid grid-cols-2 text-sm sm:grid-cols-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-2 transition-colors hover:text-papel">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic md:col-span-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cera">Oficina</p>
            <p className="mt-4 text-sm leading-relaxed">
              {site.address}
              <br />
              {site.city}
              <br />
              <a href={site.phoneHref} className="inline-block py-1 transition-colors hover:text-papel">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="inline-block break-all py-1 transition-colors hover:text-papel">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-niebla/55 md:flex-row md:justify-between">
          <p>
            © {year} {site.legalName}. La información de este sitio no constituye asesoramiento legal.
          </p>
          <p className="font-mono uppercase tracking-[0.16em]">Sitio demo · estudio ficticio</p>
        </div>
      </div>
    </footer>
  );
}
