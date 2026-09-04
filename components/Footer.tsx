import Link from "next/link";
import { site } from "@/lib/site";

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit" },
  { href: "/impressum#aufsichtsbehoerden", label: "Aufsichtsbehörden" },
];

const sitemap = [
  { href: "/aerztin", label: "Über die Ärztin" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/praxis", label: "Praxis" },
  { href: "/patienten", label: "Patienten" },
  { href: "/kooperationen", label: "Kooperationen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white/60">
      <div className="container-shell max-w-[1440px] px-4 pt-14 md:pt-16 pb-8 md:pb-10">
        <div className="grid gap-10 md:gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-[12px] tracking-[0.10em] font-extrabold uppercase text-ink mb-3">
              {site.brand}
            </div>
            <p className="text-muted text-[13px] leading-[1.7]">
              {site.descriptor} <br />
              {site.fullName}
            </p>
            <span
              aria-hidden
              className="mt-4 inline-block h-px w-10 bg-gradient-to-r from-gold to-transparent"
            />
          </div>

          <FooterCol label="Praxis">
            <address className="not-italic text-[13px] leading-[1.7] text-muted">
              {site.address.street}
              <br />
              {site.address.zipCity}
            </address>
            <div className="mt-3 text-[13px] leading-[1.7] text-muted">
              <div>Telefon: {site.phone}</div>
              <div>E-Mail: {site.email}</div>
            </div>
          </FooterCol>

          <FooterCol label="Sprechzeiten">
            <ul className="text-[13px] leading-[1.7] text-muted space-y-1">
              <li className="flex justify-between gap-4">
                <span>Mo – Do</span>
                <span>[wird ergänzt]</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Freitag</span>
                <span>[wird ergänzt]</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sa / So</span>
                <span>Geschlossen</span>
              </li>
            </ul>
            <p className="mt-3 text-[12px] leading-[1.6] text-muted/80">
              Termine ausschließlich nach Vereinbarung.
            </p>
          </FooterCol>

          <FooterCol label="Sitemap">
            <ul className="text-[13px] leading-[1.7] space-y-1">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-ink transition-colors underline-offset-4 hover:underline decoration-gold/60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="container-shell max-w-[1440px] py-8 md:py-10 pb-24 md:pb-14 px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[13px] text-muted">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="hover:text-ink transition-colors underline-offset-4 hover:underline decoration-gold/60"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-px w-8 bg-gradient-to-r from-gold to-transparent"
            />
            <span>
              © {site.copyrightYear} {site.brand}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[12px] tracking-[0.10em] font-extrabold uppercase text-ink mb-3">
        {label}
      </div>
      {children}
    </div>
  );
}
