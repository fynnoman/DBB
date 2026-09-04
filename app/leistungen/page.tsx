import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Leistungen | ${site.brand} — Kardiologie ${site.city}`,
  description:
    "Kardiologische Leistungen bei DBB Kardio: Basis Check-up, Executive Check-up, Firmen-Check-up, Echokardiographie, Speckle Tracking, Cardio-Onkologie, Frauenherz, Nachsorge.",
};

const checkups = [
  {
    tag: "BASIS",
    title: "Basis Check-up",
    duration: "60 – 75 Min.",
    body: "Anamnese, klinische Untersuchung, EKG, Belastungs-EKG, Echokardiographie inklusive Speckle Tracking. Das strukturierte Fundament einer kardiologischen Standortbestimmung.",
    highlights: [
      "Ausführliches Erstgespräch",
      "Ruhe- und Belastungs-EKG",
      "Farbdoppler-Echokardiographie",
      "Persönliche Befundbesprechung",
    ],
  },
  {
    tag: "EXECUTIVE",
    title: "Executive Check-up",
    duration: "90 – 120 Min.",
    body: "Erweitertes Untersuchungsprogramm mit zusätzlichen Modulen für Menschen mit hoher Alltagsbelastung, Reisetätigkeit oder familiärer Vorbelastung.",
    highlights: [
      "Alles aus dem Basis Check-up",
      "Erweitertes Laborprofil",
      "Langzeit-Blutdruck / Langzeit-EKG",
      "Individuelles Präventionskonzept",
    ],
  },
  {
    tag: "FIRMEN",
    title: "Kardio-Check-up für Firmen",
    duration: "nach Absprache",
    body: "Kardiovaskuläre Vorsorge für Führungskräfte und Mitarbeitende — als Einzelmandat oder als strukturiertes Programm für ganze Teams.",
    highlights: [
      "Individuell konfigurierbar",
      "Diskreter Ablauf",
      "Berichtsformat nach Abstimmung",
      "Wiederkehrende Intervalle möglich",
    ],
  },
];

const diagnostik = [
  {
    kicker: "Bildgebung",
    items: [
      "Farbdoppler-Echokardiographie",
      "Speckle-Tracking-Analyse",
      "Stress-Echokardiographie",
      "Karotis-Duplex-Sonographie",
    ],
  },
  {
    kicker: "Elektrophysiologie",
    items: [
      "Ruhe-EKG",
      "Belastungs-EKG (Ergometrie)",
      "Langzeit-EKG (24 h / 72 h)",
      "Event-Recorder-Auswertung",
    ],
  },
  {
    kicker: "Funktion & Prävention",
    items: [
      "Langzeit-Blutdruckmessung",
      "Kardiovaskuläres Risiko-Screening",
      "Erweitertes Labor (Lipide, Biomarker)",
      "Lebensstil- und Bewegungsberatung",
    ],
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
    title: "Nachsorge nach kardialem Ereignis",
    body: "Strukturierte Weiterbetreuung nach Infarkt, Bypass, Stent oder Klappen-Intervention — in enger Abstimmung mit Klinik und Hausarzt.",
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
            Kardiologie mit Zeit.<br />
            <span className="text-muted italic">Struktur, die Sie spüren.</span>
          </>
        }
        lead="Vom präzise abgestimmten Basis-Check bis zum umfassenden Executive-Programm — jede Leistung ist so aufgebaut, dass Diagnostik, Gespräch und Empfehlung an einem einzigen Termin zusammenfinden."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {checkups.map((c) => (
            <Reveal key={c.tag} delay={0.05}>
              <article className="group relative flex flex-col rounded-[24px] border border-line bg-white/70 p-7 md:p-8 h-full overflow-hidden transition-all duration-500 ease-editorial hover:shadow-cardHover hover:-translate-y-[2px]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/[0.06] px-3 py-1 text-[10px] tracking-[0.18em] font-extrabold uppercase text-gold">
                    {c.tag}
                  </span>
                  <span className="text-[11px] tracking-[0.10em] uppercase text-muted">
                    {c.duration}
                  </span>
                </div>
                <h3 className="font-display text-[24px] md:text-[26px] leading-[1.2] mb-3">
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
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-9 md:mb-10">
              <div className="kicker mb-3">Diagnostik-Spektrum</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Ein Untersuchungsraum, drei Perspektiven.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-5 max-w-[720px]">
                Bildgebung, Elektrophysiologie und funktionelle Diagnostik greifen in
                der Praxis nahtlos ineinander — für einen Befund, der mehr ist als eine
                Sammlung einzelner Werte.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {diagnostik.map((d) => (
              <Reveal key={d.kicker} delay={0.05}>
                <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="kicker mb-4">{d.kicker}</div>
                  <ul className="space-y-3 text-[14px] leading-[1.65] text-ink/85">
                    {d.items.map((i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          aria-hidden
                          className="mt-[9px] inline-block h-px w-4 bg-gold flex-shrink-0"
                        />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Spezialsprechstunden</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
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

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-line bg-white/70 p-6 md:p-8">
            <div>
              <div className="kicker mb-2">Kostenübernahme</div>
              <p className="text-muted text-[14px] md:text-[15px] leading-[1.7] max-w-[640px]">
                Abrechnung nach GOÄ. Für Privatpatienten und Beihilfeberechtigte
                erstattungsfähig; für gesetzlich Versicherte als Selbstzahler-Leistung
                möglich.
              </p>
            </div>
            <Link
              href="/patienten"
              className="min-h-[48px] px-5 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-line text-ink hover:border-gold transition-colors"
            >
              Zur Patienten-Info
            </Link>
          </div>
        </Reveal>
      </section>

      <PageCta
        title="Passenden Check-up finden."
        lead="Nicht sicher, welches Programm für Sie sinnvoll ist? Wir stimmen den Umfang vor dem Termin persönlich ab."
      />
    </>
  );
}
