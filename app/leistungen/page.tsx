import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Leistungen | ${site.brand}, Kardiologie ${site.city}`,
  description:
    "Kardiologische Leistungen bei DBB Kardio in Saarlouis: Basis Check-up, Executive Check-up, Echokardiographie, Speckle Tracking, Cardio-Onkologie, Frauenherz und spezialisierte Diagnostik seltener Herzerkrankungen.",
};

const checkups = [
  {
    tag: "01",
    label: "Basis",
    title: "Basis Check-up",
    duration: "60 bis 75 Min.",
    href: "/basis-checkup",
    body:
      "Anamnese, klinische Untersuchung, EKG, Belastungs-EKG und Echokardiographie inklusive Speckle Tracking. Das strukturierte Fundament einer kardiologischen Standortbestimmung.",
    highlights: [
      "Ausführliches Erstgespräch",
      "Ruhe- und Belastungs-EKG",
      "Farbdoppler-Echokardiographie",
      "Persönliche Befundbesprechung",
    ],
  },
  {
    tag: "02",
    label: "Executive",
    title: "Executive Check-up",
    duration: "90 bis 120 Min.",
    href: "/executive-checkup",
    body:
      "Erweitertes Untersuchungsprogramm mit zusätzlichen Modulen für Menschen mit hoher Alltagsbelastung, Reisetätigkeit oder familiärer Vorbelastung.",
    highlights: [
      "Alles aus dem Basis Check-up",
      "Erweitertes Laborprofil",
      "Langzeit-Blutdruck und Langzeit-EKG",
      "Individuelles Präventionskonzept",
    ],
  },
  {
    tag: "03",
    label: "Spezial",
    title: "Seltene Herzerkrankungen",
    duration: "nach Vereinbarung",
    href: "/seltene-herzerkrankungen",
    body:
      "Spezialisierte Diagnostik bei Verdacht auf kardiale Amyloidose, Morbus Fabry oder hypertrophe Kardiomyopathie.",
    highlights: [
      "Fokussierte Spezialanamnese",
      "Speckle-Tracking-Echokardiographie",
      "Enge Netzwerk-Anbindung",
      "Verlaufsplan über Jahre",
    ],
  },
];

const diagnostik = [
  {
    numeral: "01",
    kicker: "Bildgebung",
    title: "Farbdoppler-Echokardiographie",
    body:
      "Hochauflösende Darstellung von Herzkammern, Klappenfunktion und Blutfluss. Basis jeder kardiologischen Untersuchung und bei uns inklusive Speckle-Tracking-Analyse.",
  },
  {
    numeral: "02",
    kicker: "Belastung",
    title: "Ergometrie und Stress-Echo",
    body:
      "Belastungsabhängige Diagnostik zur Beurteilung von Rhythmus, Sauerstoffversorgung und Herzfunktion unter definierten Anforderungen.",
  },
  {
    numeral: "03",
    kicker: "Rhythmus",
    title: "Ruhe, Langzeit und Event-EKG",
    body:
      "Von der punktuellen Aufnahme bis zur mehrtägigen Rhythmusüberwachung. Immer so, wie es die jeweilige Fragestellung erfordert.",
  },
  {
    numeral: "04",
    kicker: "Gefäße",
    title: "Karotis-Duplex-Sonographie",
    body:
      "Ultraschall der hirnversorgenden Gefäße zur frühen Erkennung arteriosklerotischer Veränderungen und zur Einordnung des Schlaganfall-Risikos.",
  },
];

const spezial = [
  {
    title: "Cardio-Onkologie",
    body: "Kardiologische Begleitung bei laufender oder abgeschlossener onkologischer Therapie. Prävention und frühe Erkennung kardiotoxischer Nebenwirkungen.",
  },
  {
    title: "Frauenherz-Sprechstunde",
    body: "Dedizierte Diagnostik unter Berücksichtigung geschlechtsspezifischer Symptomatik und Risikoprofile.",
  },
  {
    title: "Seltene Herzerkrankungen",
    body: "Spezialisierte Abklärung bei Verdacht auf kardiale Amyloidose, Morbus Fabry oder hypertrophe Kardiomyopathie.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        kicker="Leistungen"
        chapter="02"
        title={
          <>
            Kardiologie<br />
            <span className="italic text-muted">mit Zeit.</span>
          </>
        }
        lead="Vom präzise abgestimmten Basis-Check bis zum umfassenden Executive-Programm. Jede Leistung ist so aufgebaut, dass Diagnostik, Gespräch und Empfehlung an einem einzigen Termin zusammenfinden."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=1920&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild eines Untersuchungsraums bei DBB Kardio"
        overline="Diagnostik-Raum"
        caption="Ein Untersuchungsraum, viele Perspektiven. Bildgebung, Belastung und Rhythmus im Zusammenspiel."
        aspect="cinema"
        fullBleed
      />

      <section className="container-shell max-w-[1440px] pb-20 md:pb-28 px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {checkups.map((c) => (
            <Reveal key={c.tag} delay={0.05}>
              <Link
                href={c.href}
                className="group relative flex flex-col rounded-[26px] border border-line bg-white/70 p-7 md:p-8 h-full overflow-hidden transition-all duration-500 ease-editorial hover:shadow-cardHover hover:-translate-y-[2px] hover:border-gold/60"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-gold/60 leading-none text-[clamp(52px,6vw,80px)] tracking-[-0.03em]">
                    {c.tag}
                  </span>
                  <span className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-muted mt-2 text-right">
                    {c.label}
                    <br />
                    <span className="font-normal text-ink/70 tracking-[0.08em] text-[10px]">
                      {c.duration}
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-[26px] leading-[1.15] mb-4">
                  {c.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.7] mb-5">
                  {c.body}
                </p>
                <ul className="space-y-2 text-[13px] leading-[1.7] text-ink/80 mt-auto">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex gap-3 items-start">
                      <span
                        aria-hidden
                        className="mt-[7px] inline-block h-[6px] w-[6px] rounded-full bg-gold"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-extrabold text-ink/85 group-hover:text-gold transition-colors">
                  Zur Übersicht
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Statement
        eyebrow="Diagnostik"
        tone="forest"
        footer={
          <>
            Alle Untersuchungen werden persönlich durch die Ärztin durchgeführt.
            Kein Delegieren an Assistenzpersonal, keine anonyme Befund-Übergabe
            per E-Mail. Diagnostik und Gespräch gehören bei uns in dieselben 90
            Minuten.
          </>
        }
      >
        Ein Untersuchungsraum,<br />
        <span className="italic text-cream/85">viele Perspektiven.</span>
      </Statement>

      <SplitFeature
        eyebrow="Diagnostik-Spektrum"
        heading={
          <>
            Vier Fenster<br />in dasselbe Herz.
          </>
        }
        intro="Bildgebung, Belastung, Rhythmus und Gefäße. Jede Modalität erzählt eine andere Geschichte. Erst in der Kombination ergibt sich ein tragfähiges Bild."
        items={diagnostik}
      />

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-10 md:mb-14">
            <div className="kicker mb-3">Spezialsprechstunden</div>
            <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,50px)] tracking-[-0.015em] title-rule">
              Wenn Standard nicht reicht.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {spezial.map((s) => (
            <Reveal key={s.title} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <span
                  aria-hidden
                  className="mb-5 inline-block h-px w-10 bg-gradient-to-r from-gold to-transparent"
                />
                <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                  {s.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title="Passenden Check-up finden."
        lead="Nicht sicher, welches Programm für Sie sinnvoll ist? Wir stimmen den Umfang vor dem Termin persönlich ab."
      />
    </>
  );
}
