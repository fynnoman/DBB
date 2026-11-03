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
            <div className="text-[13px] tracking-[0.10em] font-extrabold uppercase text-ink mb-3">
              {site.brand}
            </div>
            <p className="text-muted text-[14px] leading-[1.7]">
              {site.descriptor} <br />
              {site.fullName}
            </p>
            <span
              aria-hidden
              className="mt-4 inline-block h-px w-10 bg-gradient-to-r from-gold to-transparent"
            />
          </div>

          <FooterCol label="Praxis">
            <address className="not-italic text-[14px] leading-[1.7] text-muted">
              {site.address.street}
              <br />
              {site.address.zipCity}
              <br />
              Stadtteil {site.address.district}
            </address>
            <div className="mt-3 text-[14px] leading-[1.7] text-muted">
              <div>Telefon: {site.phone}</div>
              <div>E-Mail: {site.email}</div>
            </div>
          </FooterCol>

          <FooterCol label="Öffnungszeiten">
            <ul className="text-[14px] leading-[1.7] text-muted space-y-1">
              <li className="flex justify-between gap-4">
                <span>Montag bis Freitag</span>
                <span>8 bis 13 Uhr</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Montag, Dienstag und Donnerstag Nachmittag</span>
                <span>nach Vereinbarung</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Samstag und Sonntag</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </FooterCol>
        </div>
      </div>

      <div className="bg-forest text-cream/85">
        <div className="container-shell max-w-[1440px] py-8 md:py-10 pb-24 md:pb-14 px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[14px]">
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/denisa-babeanu-bauer-47b61b40"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn-Profil von Dr. medic Denisa Babeanu-Bauer"
              title="LinkedIn"
              className="w-9 h-9 rounded-full grid place-items-center border border-cream/30 text-cream/85 hover:text-white hover:border-gold transition-colors"
            >
              <LinkedInIcon />
            </a>
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
      <div className="text-[13px] tracking-[0.10em] font-extrabold uppercase text-ink mb-3">
        {label}
      </div>
      {children}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z" />
    </svg>
  );
}
