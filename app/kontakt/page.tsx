import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import Kontakt from "@/components/Kontakt";

export const metadata: Metadata = {
  title: `Kontakt & Termin | ${site.brand}`,
  description: `Kontakt zur kardiologischen Privatpraxis ${site.brand} in ${site.city}. Adresse, Sprechzeiten, Kontaktformular und Anfahrtshinweise.`,
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
        kicker="Kontakt & Termin"
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
        alt="Symbolisches Bild — ruhige Kommunikation"
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
        vereinbaren — nach einem kurzen persönlichen Gespräch.
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
                  Die Praxis liegt zentral in {site.city}. Detaillierte Hinweise zu
                  Parkmöglichkeiten und öffentlicher Anbindung werden ergänzt, sobald
                  der Praxisbetrieb beginnt.
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
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-[22px] border border-line bg-white/70 p-7 md:p-8 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(50% 60% at 100% 0%, rgba(183,154,98,0.10), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="kicker mb-3">Sprechzeiten</div>
                  <ul className="divide-y divide-line text-[14px] leading-[1.7]">
                    <li className="flex justify-between py-3">
                      <span>Montag – Donnerstag</span>
                      <span className="text-muted">[wird ergänzt]</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span>Freitag</span>
                      <span className="text-muted">[wird ergänzt]</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span>Samstag / Sonntag</span>
                      <span className="text-muted">Geschlossen</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-[12px] leading-[1.6] text-muted">
                    Termine ausschließlich nach Vereinbarung.
                  </p>

                  <div className="mt-6 rounded-[16px] border border-[#e2c9c6] bg-[#fdf1ef] p-4">
                    <div className="text-[11px] tracking-[0.10em] uppercase font-extrabold text-[#b3261e] mb-1">
                      Notfall
                    </div>
                    <p className="text-[13px] leading-[1.6] text-ink m-0">
                      Bei akuten Beschwerden bitte umgehend die{" "}
                      <strong className="tracking-wider">
                        {site.emergencyNumber}
                      </strong>{" "}
                      wählen.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
