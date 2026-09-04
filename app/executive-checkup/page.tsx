import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
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

const modules = [
  {
    numeral: "01",
    kicker: "Gefäße",
    title: "Carotis-Doppler",
    body:
      "Ultraschall der hirnversorgenden Gefäße zur frühen Erkennung arteriosklerotischer Veränderungen — ein wichtiger Frühindikator für das kardiovaskuläre Gesamtrisiko.",
  },
  {
    numeral: "02",
    kicker: "Belastung",
    title: "Ergometrie",
    body:
      "Belastungs-EKG unter standardisierter Steigerung zur Beurteilung von Rhythmus, Belastbarkeit und Sauerstoffversorgung. Der klassische Stress-Test — bei uns ohne Zeitdruck.",
  },
  {
    numeral: "03",
    kicker: "Labor",
    title: "Erweitertes Profil",
    body:
      "Lipidprofil, entzündliche Marker, Nieren- und Leberwerte, HbA1c und weitere Biomarker je nach Indikation. Die Grundlage für ein tragfähiges Risikoprofil.",
  },
  {
    numeral: "04",
    kicker: "Synthese",
    title: "Individueller Risiko-Score",
    body:
      "Alle Werte fließen in eine individuelle kardiovaskuläre Risikoeinschätzung — als Grundlage für konkrete, umsetzbare Präventionsempfehlungen.",
  },
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

export default function ExecutiveCheckupPage() {
  return (
    <>
      <PageHero
        eyebrow="Direkt buchbar"
        kicker="Executive Check-up"
        chapter="08"
        title={
          <>
            Executive<br />Check-up.<br />
            <span className="italic text-muted">Wenn Sie mehr wissen wollen.</span>
          </>
        }
        lead="Die umfassendere Variante für eine vertiefte kardiovaskuläre Risikoanalyse — mit Carotis-Diagnostik, Ergometrie, erweitertem Labor und individuellem Präventionskonzept."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1666214277657-e0aa03b1c8a4?w=1920&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild — Executive-Diagnostik"
        overline="Executive Check-up"
        caption="Ein tragfähiges Bild — nicht nur eine Momentaufnahme."
        aspect="cinema"
        fullBleed
      />

      <section className="container-shell max-w-[1440px] pb-20 md:pb-24 px-4">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Positionierung</div>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] tracking-[-0.015em] title-rule">
                Ein Termin, der<br />
                <span className="italic text-muted">lange Antworten gibt.</span>
              </h2>
              <p className="text-muted text-[15px] md:text-[17px] leading-[1.8] mt-8 max-w-[560px]">
                Der Executive Check-up ist die Wahl für Menschen, die nicht nur einen
                aktuellen Befund, sondern ein tragfähiges Präventionskonzept möchten.
                Alle Untersuchungen finden am selben Tag statt, die persönliche
                Befundbesprechung ist Teil des Termins.
              </p>
              <div className="mt-10 border-t border-line pt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(40px,5vw,68px)] tracking-[-0.02em]">
                    ~110
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Minuten
                  </div>
                </div>
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(40px,5vw,68px)] tracking-[-0.02em]">
                    5+
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Diagnostik-Module
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-line bg-white/70 p-7 md:p-8">
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
              <p className="mt-6 pt-5 border-t border-line text-[12px] leading-[1.6] text-muted">
                Laborleistungen werden vom kooperierenden Labor separat in Rechnung
                gestellt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SplitFeature
        eyebrow="Zusatzmodule"
        heading={
          <>
            Was den Executive<br />
            <span className="italic text-muted">vom Basis unterscheidet.</span>
          </>
        }
        intro="Vier Module bauen den Basis Check-up zu einer belastbaren, umfassenden kardiovaskulären Standortbestimmung aus."
        items={modules}
      />

      <Statement
        eyebrow="Positionierung"
        tone="forest"
        footer={
          <>
            Der Executive Check-up ist kein Premium-Paket im Marketing-Sinne. Er ist
            die richtige Wahl, wenn Sie ein tragfähiges Bild wollen — nicht nur eine
            Momentaufnahme.
          </>
        }
      >
        Prävention beginnt<br />
        <span className="italic text-cream/85">mit einem klaren Bild.</span>
      </Statement>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Für wen sinnvoll</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
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
