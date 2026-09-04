import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Kontakt from "@/components/Kontakt";

export const metadata: Metadata = {
  title: `Kontakt & Termin | ${site.brand}`,
  description: `Kontakt zur kardiologischen Privatpraxis ${site.brand} in ${site.city}. Adresse, Sprechzeiten, Kontaktformular und Anfahrtshinweise.`,
};

const ways = [
  {
    kicker: "Telefon",
    label: site.phone,
    note: "Innerhalb der Sprechzeiten. Rückruf bei Bedarf.",
  },
  {
    kicker: "E-Mail",
    label: site.email,
    note: "Nicht für medizinische Notfälle geeignet.",
  },
  {
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
            <span className="text-muted italic">ein persönliches Wort.</span>
          </>
        }
        lead="Wir vereinbaren Termine individuell. Für Rückfragen zu Vorbereitung, Abrechnung oder speziellen Anliegen sind Telefon, E-Mail und Formular gleichermaßen möglich."
      />

      <section className="container-shell max-w-[1440px] pb-8 md:pb-12 px-4">
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((w) => (
            <Reveal key={w.kicker} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-6 md:p-7 h-full">
                <div className="kicker mb-3">{w.kicker}</div>
                <div className="font-display text-[18px] leading-[1.3] text-ink break-words">
                  {w.label}
                </div>
                <p className="text-muted text-[13px] leading-[1.6] mt-3">{w.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Kontakt />

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <Reveal>
              <div>
                <div className="kicker mb-3">Anfahrt</div>
                <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                  So finden Sie zu uns.
                </h2>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                  Die Praxis liegt zentral in {site.city}. Detaillierte Hinweise zu
                  Parkmöglichkeiten und öffentlicher Anbindung werden ergänzt, sobald
                  der Praxisbetrieb beginnt.
                </p>
                <address className="not-italic mt-6 text-[15px] leading-[1.7] text-ink">
                  {site.brand}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zipCity}
                </address>
                <div className="mt-6 flex flex-wrap gap-3">
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
