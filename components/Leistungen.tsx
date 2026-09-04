import CheckupCard from "@/components/CheckupCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

type Tone = "default" | "warm" | "forest";

type Service = {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  tone?: Tone;
};

// Rhythm: two warm accents distributed across the grid keeps the eye moving
// without breaking the beige/gold palette.
const services: Service[] = [
  {
    kicker: "Herzultraschall",
    title: "Echokardiographie & Speckle Tracking",
    body: "Hochauflösender Herzultraschall mit differenzierter Funktionsanalyse und bei Bedarf Speckle-Tracking-Analyse.",
    tone: "warm",
  },
  {
    kicker: "Rhythmus",
    title: "EKG & Langzeitdiagnostik",
    body: "Ruhe-, Belastungs- und Langzeit-EKG sowie Langzeit-Blutdruckmessung zur gezielten Abklärung.",
  },
  {
    kicker: "Funktionsdiagnostik",
    title: "Stressechokardiographie",
    body: "Belastungsabhängige Echokardiographie bei entsprechender medizinischer Indikation.",
  },
  {
    kicker: "Gefäße",
    title: "Carotis- & Gefäßdiagnostik",
    body: "Ultraschallgestützte Untersuchung ausgewählter Gefäßregionen zur kardiovaskulären Risikoeinschätzung.",
  },
  {
    kicker: "Spezialgebiet",
    title: "Kardio-Onkologie",
    body: "Kardiologische Begleitung vor, während und nach potenziell kardiotoxischen Therapien.",
    tone: "forest",
  },
  {
    kicker: "Schwerpunkt",
    title: "Frauenherz",
    body: "Diagnostik mit besonderem Blick auf frauenspezifische Herz-Kreislauf-Risiken.",
    tone: "warm",
  },
  {
    kicker: "Spezialdiagnostik",
    title: "Seltene Herzerkrankungen",
    body: "Abklärung bei Verdacht auf Amyloidose, Morbus Fabry oder hypertrophe Kardiomyopathie.",
  },
  {
    id: "nachsorge",
    kicker: "Nachsorge",
    title: "Kardiologische Verlaufskontrolle",
    body: "Verlaufskontrolle bei bekannter Herzerkrankung, nach Diagnostik oder nach therapeutischen Veränderungen.",
    tone: "forest",
  },
];

const toneStyles: Record<Tone, string> = {
  default: "bg-white/40 border-line",
  warm: "bg-gradient-to-br from-gold-50/70 to-white/40 border-gold/35",
  forest:
    "bg-gradient-to-br from-[rgba(35,79,67,0.06)] to-white/40 border-[rgba(35,79,67,0.22)]",
};

const kickerStyles: Record<Tone, string> = {
  default: "text-gold",
  warm: "text-gold",
  forest: "text-forest",
};

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Leistungen"
          title="Kardiologische Diagnostik und Betreuung."
          lead="Zwei Check-up-Formate zur direkten Buchung, dazu das gesamte diagnostische Spektrum für die persönliche Betreuung nach ärztlicher Indikation."
        />

        {/* Feature check-ups */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <CheckupCard
            id="basis-checkup"
            kicker="Direkt buchbar"
            title="Basis Check-up"
            intro="Der Basis Check-up eignet sich für Patientinnen und Patienten, die eine strukturierte kardiologische Ersteinschätzung wünschen."
            items={[
              "ausführliche Anamnese",
              "körperliche Untersuchung",
              "12-Kanal-EKG",
              "Basis-Echokardiographie",
              "Lipidprofil über unser Kooperationslabor",
              "kurzer ärztlicher Bericht",
            ]}
            notice="Laborleistungen werden vom kooperierenden Labor separat in Rechnung gestellt."
            ctaLabel="BASIS CHECK-UP BUCHEN"
            tone="gold"
          />
          <CheckupCard
            id="executive-checkup"
            kicker="Direkt buchbar"
            title="Executive Check-up"
            intro="Der Executive Check-up ist die umfassendere Variante für eine vertiefte kardiovaskuläre Risikoanalyse und individuelle Prävention."
            items={[
              "alle Leistungen des Basis Check-ups",
              "Carotis-Doppler / Duplexsonographie",
              "Ergometrie / Belastungs-EKG",
              "umfassendere Labordiagnostik über das Kooperationslabor",
              "vertiefte Anamnese und individuelle Risikoeinschätzung",
              "ausführlicher ärztlicher Bericht mit personalisierten Empfehlungen",
            ]}
            notice="Laborleistungen werden vom kooperierenden Labor separat in Rechnung gestellt."
            ctaLabel="EXECUTIVE CHECK-UP BUCHEN"
            tone="gold"
          />
        </div>

        {/* Sub-header before the specialty grid */}
        <div className="mt-16 md:mt-20 mb-8 md:mb-10 max-w-[720px]">
          <div className="kicker mb-3">Spektrum</div>
          <h3 className="font-display text-[24px] md:text-[32px] leading-[1.15] title-rule">
            Diagnostik und Schwerpunkte auf einen Blick.
          </h3>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => {
            const tone: Tone = s.tone ?? "default";
            return (
              <StaggerItem key={s.title}>
                <article
                  id={s.id}
                  className={`group relative h-full rounded-[20px] border p-7 card-lift overflow-hidden ${toneStyles[tone]}`}
                >
                  {tone !== "default" && (
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute top-0 left-0 right-0 h-px ${
                        tone === "warm"
                          ? "bg-gradient-to-r from-transparent via-gold to-transparent"
                          : "bg-gradient-to-r from-transparent via-forest to-transparent"
                      }`}
                    />
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`kicker ${kickerStyles[tone]}`}>
                      {s.kicker}
                    </div>
                    {tone !== "default" && (
                      <span
                        aria-hidden
                        className={`inline-block h-1.5 w-1.5 rounded-full mt-1 ${
                          tone === "warm" ? "bg-gold" : "bg-forest"
                        }`}
                      />
                    )}
                  </div>
                  <h3 className="font-display text-[22px] mt-2.5 mb-2.5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-[1.65] m-0">{s.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Firmen: dark anchor tile */}
        <div className="mt-12 md:mt-14" id="firmen-checkup">
          <article className="relative overflow-hidden rounded-[24px] bg-forest text-cream shadow-soft">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                background:
                  "radial-gradient(600px 300px at 90% -10%, rgba(183,154,98,0.9), transparent 60%), radial-gradient(400px 200px at 5% 110%, rgba(183,154,98,0.6), transparent 55%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <div className="relative grid md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 p-8 md:p-12">
              <div>
                <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold-200">
                  Unternehmen · Anfrage
                </div>
                <h3 className="font-display text-[clamp(26px,3.4vw,42px)] mt-3 mb-4 leading-[1.1]">
                  Kardio-Check-up für Firmen.
                </h3>
                <p className="text-cream/85 leading-[1.7] max-w-[540px] m-0">
                  Individuell abgestimmte kardiologische Check-up-Angebote für
                  Unternehmen und Mitarbeitende. Einzelheiten, Umfang und
                  individuelle Anforderungen werden vorab persönlich
                  besprochen.
                </p>
              </div>

              <div className="md:pl-4 md:border-l border-gold/25 flex flex-col justify-between gap-6">
                <ul className="space-y-2.5 text-cream/85 leading-[1.55] text-[14px]">
                  <li className="flex items-start gap-2.5">
                    <Dot /> Onboarding-Termin auf Wunsch vor Ort
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Dot /> Untersuchungspakete nach Bedarf skalierbar
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Dot /> Diskrete Kommunikation mit Ihrer HR
                  </li>
                </ul>
                <a
                  href="#kontakt"
                  className="inline-flex self-start min-h-[48px] px-6 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
                >
                  ANFRAGE ÜBER KONTAKTFORMULAR
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="mt-2 inline-block h-1 w-1 rounded-full bg-gold flex-shrink-0"
    />
  );
}
