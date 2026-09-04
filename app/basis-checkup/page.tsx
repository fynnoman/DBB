import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
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
    numeral: "01",
    kicker: "Vorgespräch",
    title: "Fragestellung schärfen.",
    body:
      "Wir klären, welche Fragestellungen im Vordergrund stehen, und stimmen die Untersuchung darauf ab. Kein Standardprotokoll — sondern eine Auswahl mit klarem Ziel.",
  },
  {
    numeral: "02",
    kicker: "Untersuchung",
    title: "EKG, Echo, Labor — persönlich.",
    body:
      "EKG, Echokardiographie und Blutentnahme werden persönlich durchgeführt — ohne Delegation an fachfremdes Personal. Alles im selben Raum, in einem Zug.",
  },
  {
    numeral: "03",
    kicker: "Persönlicher Befund",
    title: "Klarheit statt Nachfrage.",
    body:
      "Direkt im Anschluss besprechen wir die Ergebnisse, das Risikoprofil und die nächsten sinnvollen Schritte. Sie gehen nicht mit Fragen, sondern mit einem Plan.",
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
            <span className="italic text-muted">Struktur für den Start.</span>
          </>
        }
        lead="Das strukturierte Fundament einer kardiologischen Standortbestimmung: Anamnese, EKG, Echokardiographie, Lipidprofil und persönliche Befundbesprechung — in einem einzigen Termin."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild — kardiologische Basisuntersuchung"
        overline="Basis Check-up"
        caption="Ein Termin, der reicht — für Klarheit statt Nachfragen."
        aspect="cinema"
      />

      <section className="container-shell max-w-[1440px] pb-20 md:pb-24 px-4">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Für wen sinnvoll</div>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] tracking-[-0.015em] title-rule">
                Kardiologische Ersteinschätzung —<br />
                <span className="italic text-muted">bewusst gewählt.</span>
              </h2>
              <p className="text-muted text-[15px] md:text-[17px] leading-[1.8] mt-8 max-w-[560px]">
                Der Basis Check-up eignet sich für Menschen, die eine strukturierte
                kardiologische Standortbestimmung wünschen — sei es aus präventiven
                Gründen, wegen familiärer Vorbelastung oder als Reaktion auf erste
                unspezifische Beschwerden.
              </p>
              <p className="text-muted text-[14px] md:text-[15px] leading-[1.75] mt-5 max-w-[560px]">
                Er ersetzt keine Notfalluntersuchung. Für akute Symptome ist der Weg
                über die {site.emergencyNumber} oder die nächste Notaufnahme der
                richtige.
              </p>
              <div className="mt-10 border-t border-line pt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(40px,5vw,68px)] tracking-[-0.02em]">
                    ~70
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Minuten
                  </div>
                </div>
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(40px,5vw,68px)] tracking-[-0.02em]">
                    1×
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Termin
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
        eyebrow="Ablauf"
        heading={
          <>
            Drei Schritte,<br />
            <span className="italic text-muted">ein Termin.</span>
          </>
        }
        intro="Der Basis Check-up ist so aufgebaut, dass Vorgespräch, Diagnostik und Befund-Klärung an einem einzigen Nachmittag zusammenfinden."
        items={steps}
      />

      <Statement
        eyebrow="Grundsatz"
        tone="forest"
        footer={
          <>
            Deshalb keine Serien-Vorstellung, keine anonyme Befund-Zustellung, keine
            Delegation an fachfremdes Personal. Sie gehen mit einem Bild von Ihrem
            Herzen — nicht mit einer Rechnung und offenen Fragen.
          </>
        }
      >
        Ein Termin, der<br />
        <span className="italic text-cream/85">wirklich reicht.</span>
      </Statement>

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
