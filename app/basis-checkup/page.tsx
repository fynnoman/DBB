import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Basis Check-up | ${site.brand} ${site.city}`,
  description:
    "Basis Check-up bei DBB Kardio in St. Ingbert: Anamnese, körperliche Untersuchung, 12-Kanal-EKG, Basis-Echokardiographie, Lipidprofil und persönlicher Bericht.",
};

const included = [
  "Ausführliche Anamnese",
  "Körperliche Untersuchung",
  "12-Kanal-EKG",
  "Basis-Echokardiographie",
  "Lipidprofil (Kooperationslabor)",
  "Kurzer ärztlicher Bericht",
];

const steps = [
  {
    kicker: "01",
    title: "Vorgespräch",
    body: "Wir klären, welche Fragestellungen im Vordergrund stehen, und stimmen die Untersuchung darauf ab.",
  },
  {
    kicker: "02",
    title: "Untersuchung",
    body: "EKG, Echokardiographie und Blutentnahme werden persönlich durchgeführt — ohne Delegation an fachfremdes Personal.",
  },
  {
    kicker: "03",
    title: "Persönlicher Befund",
    body: "Direkt im Anschluss besprechen wir die Ergebnisse, das Risikoprofil und die nächsten sinnvollen Schritte.",
  },
];

export default function BasisCheckupPage() {
  return (
    <>
      <PageHero
        eyebrow="Direkt buchbar"
        kicker="Basis Check-up"
        chapter="07"
        title={
          <>
            Basis Check-up.<br />
            <span className="text-muted italic">Struktur für den Start.</span>
          </>
        }
        lead="Das strukturierte Fundament einer kardiologischen Standortbestimmung: Anamnese, EKG, Echokardiographie, Lipidprofil und persönliche Befundbesprechung — in einem einzigen Termin."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Für wen sinnvoll</div>
              <h2 className="font-display text-[clamp(26px,3vw,38px)] leading-[1.2] title-rule">
                Kardiologische Ersteinschätzung — bewusst gewählt.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[560px]">
                Der Basis Check-up eignet sich für Menschen, die eine strukturierte
                kardiologische Standortbestimmung wünschen — sei es aus präventiven
                Gründen, wegen familiärer Vorbelastung oder als Reaktion auf erste
                unspezifische Beschwerden.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-4 max-w-[560px]">
                Er ersetzt keine Notfalluntersuchung. Für akute Symptome ist der Weg
                über die {site.emergencyNumber} oder die nächste Notaufnahme der
                richtige.
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
              <div className="kicker mb-3">Ablauf</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Drei Schritte, ein Termin.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <Reveal key={s.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-[26px] text-gold/80">
                      {s.kicker}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent"
                    />
                  </div>
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
        </div>
      </section>

      <PageCta
        title="Basis Check-up buchen."
        lead="Wir bestätigen den Termin telefonisch oder per E-Mail und schicken Ihnen die Anmeldeunterlagen vorab zu."
        primaryLabel="TERMIN ANFRAGEN"
        secondaryLabel="Executive Check-up ansehen"
        secondaryHref="/executive-checkup"
      />
    </>
  );
}
