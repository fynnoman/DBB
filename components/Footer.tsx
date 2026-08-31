import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 text-ivory-100 pt-16 sm:pt-20 pb-8 pb-safe">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 md:gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight tracking-brand-tight">
              DBB <span className="italic text-gold-300">Kardio</span>
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-brand-wide text-ivory-100/60">
              {site.fullName} · {site.descriptor}
            </p>
            <p className="mt-6 sm:mt-8 font-serif text-lg sm:text-xl md:text-2xl leading-snug text-ivory-100 max-w-md">
              {site.claim}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="eyebrow text-gold-300">Praxis</p>
              <ul className="mt-4 space-y-1 text-sm text-ivory-100/85">
                <li>{site.address.street}</li>
                <li>{site.address.zipCity}</li>
                <li className="text-ivory-100/60">{site.address.floor}</li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-gold-300">Kontakt</p>
              <ul className="mt-4 space-y-1 text-sm text-ivory-100/85">
                <li>Telefon: {site.phone}</li>
                <li className="break-words">E-Mail: {site.email}</li>
                <li className="text-ivory-100/60">Sprechzeiten: {site.hours}</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="eyebrow text-gold-300">Information</p>
              <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-3 text-sm text-ivory-100/85">
                <li>
                  <Link href="/impressum" prefetch={false} className="hover:text-gold-200 py-1 inline-block">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" prefetch={false} className="hover:text-gold-200 py-1 inline-block">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/impressum#aufsichtsbehoerden" prefetch={false} className="hover:text-gold-200 py-1 inline-block">
                    Aufsichtsbehörden
                  </Link>
                </li>
                <li>
                  <Link href="/barrierefreiheit" prefetch={false} className="hover:text-gold-200 py-1 inline-block">
                    Barrierefreiheit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col-reverse gap-4 border-t border-ivory-100/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ivory-100/60">
            © 2026 DBB Kardiologische Privatpraxis Saarpfalz. Alle Rechte vorbehalten.
          </p>
          <a
            href={site.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-gold-300 px-5 py-3.5 text-sm font-semibold text-forest-800 hover:bg-gold-200 transition-colors min-h-[48px]"
          >
            Termin bei Doctolib
          </a>
        </div>
      </div>
    </footer>
  );
}
