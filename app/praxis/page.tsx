import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Praxis & Räumlichkeiten | ${site.brand} ${site.city}`,
  description:
    "Kardiologische Privatpraxis DBB Kardio in St. Ingbert. Ruhige Räumlichkeiten, warmes Licht, diskrete Privatsphäre. Ein Ort, an dem Medizin unaufgeregt stattfindet.",
};

const rooms = [
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&auto=format&fit=crop&q=80",
    label: "Empfang",
    caption: "Ruhige Ankunft ohne Wartesaal-Atmosphäre.",
  },
  {
    src: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=1200&auto=format&fit=crop&q=80",
    label: "Sprechzimmer",
    caption: "Warmes Licht, klare Linien, Zeit für das Gespräch.",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&auto=format&fit=crop&q=80",
    label: "Untersuchungsraum",
    caption: "Moderne Diagnostik, ruhig eingebettet.",
  },
  {
    src: "https://images.unsplash.com/photo-1666214277657-e0aa03b1c8a4?w=1200&auto=format&fit=crop&q=80",
    label: "Echo-Raum",
    caption: "Hochauflösende Bildgebung in konzentrierter Ruhe.",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&auto=format&fit=crop&q=80",
    label: "EKG & Belastung",
    caption: "Ergometrie in geräumiger, temperierter Umgebung.",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&auto=format&fit=crop&q=80",
    label: "Ruhezone",
    caption: "Für Erholung nach Belastungsuntersuchungen.",
  },
];

const principles = [
  {
    kicker: "Zeit",
    title: "Ein Termin, ein Anliegen.",
    body: "Wir überbuchen nicht. Jeder Termin ist so bemessen, dass Diagnostik, Gespräch und Befund an einem Nachmittag Platz haben.",
  },
  {
    kicker: "Diskretion",
    title: "Getrennte Wege im Raumkonzept.",
    body: "Empfang, Wartebereich und Untersuchungsräume sind so angeordnet, dass Sie andere Patienten nicht kreuzen müssen.",
  },
  {
    kicker: "Atmosphäre",
    title: "Wenig Weiß, wenig Neon.",
    body: "Naturmaterialien, warme Farbtöne und indirektes Licht. Ein Raum, in dem man ruhig atmen kann — auch bei ernsten Themen.",
  },
];

export default function PraxisPage() {
  return (
    <>
      <PageHero
        eyebrow="Praxis"
        kicker="Praxis & Räumlichkeiten"
        chapter="03"
        title={
          <>
            Ein Ort für ernsthafte Medizin.<br />
            <span className="text-muted italic">Ohne Klinik-Atmosphäre.</span>
          </>
        }
        lead={`Die Privatpraxis in ${site.city} ist bewusst so angelegt, dass sie nicht wie ein Wartesaal wirkt. Wer hierher kommt, findet Ruhe, warmes Licht und die Zeit, die eine gute Untersuchung braucht.`}
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <Reveal key={p.kicker} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <div className="kicker mb-3">{p.kicker}</div>
                <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                  {p.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-9 md:mb-10">
              <div className="kicker mb-3">Raum-Rundgang</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Sechs Räume, eine Handschrift.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-5 max-w-[720px]">
                Die abgebildeten Fotos sind Platzhalter bis zur eigenen Bildproduktion.
                Sie geben einen ersten Eindruck der Atmosphäre, die uns wichtig ist.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r, i) => (
              <Reveal key={r.label + i} delay={0.05}>
                <figure className="group relative overflow-hidden rounded-[22px] border border-line bg-white">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={r.src}
                      alt={`Platzhalter — ${r.label}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 30vw"
                      className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(24,24,24,0) 40%, rgba(24,24,24,0.75) 100%)",
                      }}
                    />
                    <div aria-hidden className="absolute top-3 right-3">
                      <span className="text-[10px] tracking-[0.18em] uppercase font-extrabold text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        Platzhalter
                      </span>
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

      <section className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Standort</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                {site.city}, {site.address.street}.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                Die Praxis liegt zentral, gut erreichbar und mit ruhigem Straßenbild.
                Parkmöglichkeiten und Anfahrt-Hinweise werden auf der Kontaktseite
                gebündelt.
              </p>
              <address className="not-italic mt-6 text-[15px] leading-[1.7] text-ink">
                {site.brand}
                <br />
                {site.address.street}
                <br />
                {site.address.zipCity}
              </address>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
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
