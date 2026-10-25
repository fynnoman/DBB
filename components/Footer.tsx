import Link from "next/link";
import { site } from "@/lib/site";

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white/60">
      <div className="container-shell max-w-[1440px] px-4 pt-14 md:pt-16 pb-10">
        <div className="grid gap-10 md:gap-8 md:grid-cols-3">
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
              <br />
              Stadtteil {site.address.district}
            </address>
            <div className="mt-3 text-[13px] leading-[1.7] text-muted">
              <div>Telefon: {site.phone}</div>
              <div>E-Mail: {site.email}</div>
            </div>
          </FooterCol>

          <FooterCol label="Öffnungszeiten">
            <ul className="text-[13px] leading-[1.7] text-muted space-y-1">
              <li className="flex justify-between gap-4">
                <span>Mo bis Fr</span>
                <span>8 bis 13 Uhr</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Mo, Di, Do Nachmittag</span>
                <span>nach Vereinbarung</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sa und So</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </FooterCol>
        </div>
      </div>

      <div className="bg-forest text-cream/85">
        <div className="container-shell max-w-[1440px] py-8 md:py-10 pb-24 md:pb-14 px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[13px]">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-gold/80"
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
