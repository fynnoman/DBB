import Link from "next/link";
import { site } from "@/lib/site";

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit" },
  { href: "/impressum#aufsichtsbehoerden", label: "Aufsichtsbehörden" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white/60">
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
    </footer>
  );
}
