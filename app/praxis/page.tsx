import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Praxisräume | ${site.brand} ${site.city}`,
  description:
    "Kardiologische Privatpraxis DBB Kardio in Saarlouis, Stadtteil Fraulautern. Ruhige Räumlichkeiten, warmes Licht, diskrete Privatsphäre. Für Patientinnen und Patienten aus Saarlouis, Merzig und Saarbrücken.",
};

const rooms = [
  {
    src: "https://images.unsplash.com/photo-1758448093806-88b2089068ab?w=1200&auto=format&fit=crop&q=80",
    label: "Sprechzimmer",
    caption: "Warmes Licht, klare Linien und Zeit für das Gespräch.",
  },
  {
    src: "https://images.unsplash.com/photo-1778151270886-f227700b0eba?w=1200&auto=format&fit=crop&q=80",
    label: "Untersuchungsraum",
    caption: "Ausgestattet für Echokardiographie, EKG und Belastungsdiagnostik.",
  },
];

const principles = [
  {
    numeral: "01",
    kicker: "Zeit",
    title: "Ein Termin, ein Anliegen.",
    body:
      "Wir überbuchen nicht. Jeder Termin ist so bemessen, dass Diagnostik, Gespräch und Befund an einem Nachmittag Platz haben und nicht in 15-Minuten-Slots getaktet sind.",
  },
  {
    numeral: "02",
    kicker: "Diskretion",
    title: "Getrennte Wege im Raumkonzept.",
    body:
      "Empfang, Wartebereich und Untersuchungsräume sind so angeordnet, dass Sie andere Patientinnen und Patienten nicht kreuzen müssen. Bewusst und nicht zufällig.",
  },
  {
    numeral: "03",
    kicker: "Atmosphäre",
    title: "Wenig Weiß, wenig Neon.",
    body:
      "Naturmaterialien, warme Farbtöne und indirektes Licht. Ein Raum, in dem man ruhig atmen kann, auch bei ernsten Themen und schwer verdaulichen Befunden.",
  },
];

export default function PraxisPage() {
  return (
    <>
      <PageHero
        eyebrow="Praxis"
        kicker="Praxisräume"
        chapter="03"
        title={
          <>
            Ein Ort für ernsthafte<br />
            <span className="italic text-muted">Medizin.</span>
          </>
        }
        lead={`Die Privatpraxis in ${site.city}-${site.address.district} ist bewusst so angelegt, dass sie nicht wie ein Wartesaal wirkt. Wer hierher kommt, findet Ruhe, warmes Licht und die Zeit, die eine gute Untersuchung braucht.`}
      />

      <SplitFeature
        eyebrow="Drei Prinzipien"
        heading={
          <>
            Wie sich ein Raum<br />
            <span className="italic text-muted">anfühlen darf.</span>
          </>
        }
        intro="Die Praxisräume folgen keiner klinischen Effizienzlogik, sondern einer bewussten Haltung. Diese drei Prinzipien haben jede Entscheidung geleitet, vom Grundriss bis zum Griff der Untersuchungstür."
        items={principles}
      />

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Praxisräume</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Zwei Räume, eine Handschrift.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-5 max-w-[720px]">
                Die abgebildeten Fotos sind Platzhalter bis zur eigenen
                Bildproduktion. Sie geben einen ersten Eindruck der Atmosphäre,
                die uns wichtig ist.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {rooms.map((r, i) => (
              <Reveal key={r.label + i} delay={0.05}>
                <figure className="group relative overflow-hidden rounded-[22px] border border-line bg-white">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={r.src}
                      alt={`Platzhalter zum Raum ${r.label}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 46vw"
                      className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(24,24,24,0) 40%, rgba(24,24,24,0.78) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute top-4 right-4">
                      <span className="text-[10px] tracking-[0.18em] uppercase font-extrabold text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                        Platzhalter
                      </span>
                    </div>
                    <div
                      aria-hidden
                      className="absolute top-4 left-4 font-display italic text-white/80 text-[13px]"
                    >
                      Nr. {String(i + 1).padStart(2, "0")}
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                      <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
                        {r.label}
                      </div>
                      <div className="mt-1 text-[14px] leading-[1.5]">{r.caption}</div>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PullQuote author="Zur Raumauswahl" role="Grundriss und Ausbau">
        Ein Raum, in dem man ruhig atmen kann, ist keine Kür. Er ist Teil der
        Diagnostik.
      </PullQuote>

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Standort</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                {site.city},<br />
                <span className="italic text-muted">{site.address.street}.</span>
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-8 max-w-[520px]">
                Die Praxis befindet sich im Stadtteil {site.address.district},
                verkehrsgünstig und ruhig zugleich. Patientinnen und Patienten
                erreichen uns bequem aus Saarlouis, Merzig und Saarbrücken.
              </p>
              <address className="not-italic mt-8 text-[15px] leading-[1.7] text-ink">
                <span className="font-display text-[18px]">{site.brand}</span>
                <br />
                {site.address.street}
                <br />
                {site.address.zipCity}
              </address>
              <div className="mt-6">
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] px-5 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-forest text-forest hover:bg-forest hover:text-white transition-colors"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[22px] border border-line bg-white/70 overflow-hidden">
              <div className="p-7 md:p-8">
                <div className="kicker mb-4">Öffnungszeiten</div>
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
      </section>

      <PageCta
        title="Vor Ort einen Eindruck gewinnen."
        lead="Wir zeigen Ihnen die Praxis gerne vor dem ersten Untersuchungstermin. Sprechen Sie uns an."
      />
    </>
  );
}
