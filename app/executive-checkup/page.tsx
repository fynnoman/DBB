import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Executive Check-up | ${site.brand} ${site.city}`,
  description:
    "Executive Check-up bei DBB Kardio in St. Ingbert: umfassende kardiovaskuläre Risikoanalyse mit Carotis-Duplex, Ergometrie, erweiterter Labordiagnostik und individueller Prävention.",
};

const included = [
  "Alle Leistungen des Basis Check-ups",
  "Carotis-Doppler / Duplexsonographie",
  "Ergometrie / Belastungs-EKG",
  "Erweiterte Labordiagnostik",
  "Vertiefte Risikoeinschätzung",
  "Ausführlicher Bericht mit Empfehlungen",
];

const targets = [
  {
    kicker: "Führungskräfte",
    body: "Menschen mit hoher Verantwortungsdichte, Reisetätigkeit oder Schichtarbeit — kardiovaskuläre Belastungen bleiben oft unentdeckt.",
  },
  {
    kicker: "Familiäre Vorbelastung",
    body: "Wenn Herz-Kreislauf-Erkrankungen in der Familie vorkommen, lohnt sich eine strukturierte, tiefergehende Analyse.",
  },
  {
    kicker: "Sport & Longevity",
    body: "Belastungs-EKG und Karotis-Diagnostik sind sinnvoll, wenn Bewegung eine tragende Rolle im Alltag spielt.",
  },
];

const modules = [
  { name: "Carotis-Doppler", body: "Ultraschall der hirnversorgenden Gefäße zur frühen Erkennung arteriosklerotischer Veränderungen." },
  { name: "Ergometrie", body: "Belastungs-EKG unter standardisierter Steigerung zur Beurteilung von Rhythmus und Sauerstoffversorgung." },
  { name: "Erweitertes Labor", body: "Lipidprofil, entzündliche Marker, Nieren- und Leberwerte, HbA1c und weitere Biomarker je nach Indikation." },
  { name: "Risiko-Score", body: "Individuelles kardiovaskuläres Risikoprofil auf Basis aller erhobenen Werte — als Grundlage für Prävention." },
];

export default function ExecutiveCheckupPage() {
  return (
    <>
      <PageHero
        eyebrow="Direkt buchbar"
        kicker="Executive Check-up"
        chapter="08"
        title={
          <>
            Executive Check-up.<br />
            <span className="text-muted italic">Wenn Sie mehr wissen wollen.</span>
          </>
        }
        lead="Die umfassendere Variante für eine vertiefte kardiovaskuläre Risikoanalyse — mit Carotis-Diagnostik, Ergometrie, erweitertem Labor und individuellem Präventionskonzept."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Positionierung</div>
              <h2 className="font-display text-[clamp(26px,3vw,38px)] leading-[1.2] title-rule">
                Ein Termin, der lange Antworten gibt.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[560px]">
                Der Executive Check-up ist die Wahl für Menschen, die nicht nur einen
                aktuellen Befund, sondern ein tragfähiges Präventionskonzept möchten.
                Alle Untersuchungen finden am selben Tag statt, die persönliche
                Befundbesprechung ist Teil des Termins.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-4 max-w-[560px]">
                Der ausführliche Bericht enthält konkrete, umsetzbare Empfehlungen —
                keine Standardsätze.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
              <div className="kicker mb-4">Enthaltene Leistungen</div>
              <ul className="space-y-3 text-[14px] leading-[1.65] text-ink/85">
                {included.map((i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      aria-hidden
                      className="mt-[9px] inline-block h-px w-4 bg-gold flex-shrink-0"
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-t border-line text-[12px] leading-[1.6] text-muted">
                Laborleistungen werden vom kooperierenden Labor separat in Rechnung
                gestellt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-9 md:mb-10">
              <div className="kicker mb-3">Für wen sinnvoll</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Drei typische Ausgangslagen.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {targets.map((t) => (
              <Reveal key={t.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="kicker mb-3">{t.kicker}</div>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                    {t.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Zusatzmodule</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
              Was den Executive vom Basis unterscheidet.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <Reveal key={m.name} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <span
                  aria-hidden
                  className="mb-4 inline-block h-px w-10 bg-gradient-to-r from-gold to-transparent"
                />
                <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                  {m.name}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title="Executive Check-up anfragen."
        lead="Umfang und Zeitrahmen stimmen wir vorab persönlich mit Ihnen ab — damit der Termin exakt zu Ihrer Situation passt."
        primaryLabel="TERMIN ANFRAGEN"
        secondaryLabel="Basis Check-up ansehen"
        secondaryHref="/basis-checkup"
      />
    </>
  );
}
