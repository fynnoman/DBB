import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import Kontakt from "@/components/Kontakt";

export const metadata: Metadata = {
  title: `Kontakt und Termin | ${site.brand}`,
  description: `Kontakt zur kardiologischen Privatpraxis ${site.brand} in ${site.city}, ${site.address.district}. Adresse, Sprechzeiten, Kontaktformular und Anfahrtshinweise.`,
};

const ways = [
  {
    numeral: "01",
    kicker: "Telefon",
    label: site.phone,
    note: "Innerhalb der Sprechzeiten. Rückruf bei Bedarf.",
  },
  {
    numeral: "02",
    kicker: "E-Mail",
    label: site.email,
    note: "Nicht für medizinische Notfälle geeignet.",
  },
  {
    numeral: "03",
    kicker: "Formular",
    label: "Kontaktformular auf dieser Seite",
    note: "Wir melden uns zeitnah zurück.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        kicker="Kontakt und Termin"
        chapter="06"
        title={
          <>
            Ein Anruf,<br />
            <span className="italic text-muted">ein persönliches Wort.</span>
          </>
        }
        lead="Wir vereinbaren Termine individuell. Für Rückfragen zu Vorbereitung, Abrechnung oder speziellen Anliegen sind Telefon, E-Mail und Formular gleichermaßen möglich."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1682706841281-f723c5bfcd83?w=1600&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild. Ruhige Kommunikation"
        overline="Kontakt"
        caption="Zehn Minuten am Telefon ersparen zwei Fragen im Termin."
        aspect="wide"
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {ways.map((w) => (
            <Reveal key={w.kicker} delay={0.05}>
              <article className="group relative rounded-[24px] border border-line bg-white/70 p-7 md:p-8 h-full overflow-hidden hover:border-gold/60 transition-colors duration-500">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-gold/60 leading-none text-[clamp(44px,5vw,64px)] tracking-[-0.03em]">
                    {w.numeral}
                  </span>
                  <div className="kicker mt-3">{w.kicker}</div>
                </div>
                <div className="font-display text-[20px] md:text-[22px] leading-[1.25] text-ink break-words mb-4">
                  {w.label}
                </div>
                <p className="text-muted text-[13px] leading-[1.6]">{w.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PullQuote author="Grundsatz" role="Termin-Vergabe">
        Wir wollen keinen Termin verkaufen, sondern den richtigen Termin
        vereinbaren, nach einem kurzen persönlichen Gespräch.
      </PullQuote>

      <Kontakt />

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <Reveal>
              <div>
                <div className="kicker mb-3">Anfahrt</div>
                <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                  So finden Sie<br />
                  <span className="italic text-muted">zu uns.</span>
                </h2>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-8 max-w-[520px]">
                  Die Praxis befindet sich in {site.city}-{site.address.district}.
                  Gut erreichbar für Patientinnen und Patienten aus {site.city},
                  Merzig und Saarbrücken.
                </p>
                <address className="not-italic mt-8 text-[15px] leading-[1.7] text-ink">
                  <span className="font-display text-[18px]">{site.brand}</span>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zipCity}
                </address>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/praxis"
                    className="min-h-[44px] px-5 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-line text-ink hover:border-gold transition-colors"
                  >
                    Zur Praxis-Seite
                  </Link>
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-5 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-forest text-forest hover:bg-forest hover:text-white transition-colors"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-[22px] border border-line bg-white/70 overflow-hidden">
                <div className="p-7 md:p-8">
                  <div className="kicker mb-3">Sprechzeiten</div>
                  <ul className="divide-y divide-line text-[14px] leading-[1.7]">
                    <li className="flex justify-between py-3">
                      <span>Montag bis Donnerstag</span>
                      <span className="text-muted">[wird ergänzt]</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span>Freitag</span>
                      <span className="text-muted">[wird ergänzt]</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span>Samstag und Sonntag</span>
                      <span className="text-muted">Geschlossen</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-[12px] leading-[1.6] text-muted">
                    Termine ausschließlich nach Vereinbarung.
                  </p>

                  <div className="mt-6 rounded-[16px] border border-forest/25 bg-forest/[0.06] p-4">
                    <div className="text-[11px] tracking-[0.14em] uppercase font-extrabold text-forest mb-1">
                      Terminabsage
                    </div>
                    <p className="text-[13px] leading-[1.6] text-ink m-0">
                      Bitte sagen Sie Termine spätestens 24 Stunden vorher ab.
                      Nicht abgesagte Termine müssen wir in Rechnung stellen.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[16/9] w-full border-t border-line">
                  <iframe
                    src={site.mapsEmbed}
                    title="Karte zur Praxis"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
