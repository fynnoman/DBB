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

const services: Service[] = [
  {
    kicker: "Herzultraschall",
    title: "Echokardiographie und Speckle Tracking",
    body: "Hochauflösender Herzultraschall mit differenzierter Funktionsanalyse und bei Bedarf Speckle-Tracking-Analyse.",
    tone: "warm",
  },
  {
    kicker: "Rhythmus",
    title: "EKG und Langzeitdiagnostik",
    body: "Ruhe, Belastungs- und Langzeit-EKG sowie Langzeit-Blutdruckmessung zur gezielten Abklärung.",
  },
  {
    kicker: "Funktionsdiagnostik",
    title: "Stressechokardiographie",
    body: "Belastungsabhängige Echokardiographie bei entsprechender medizinischer Indikation.",
  },
  {
    kicker: "Gefäße",
    title: "Carotis und Gefäßdiagnostik",
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
    id: "seltene-herzerkrankungen",
    kicker: "Spezialdiagnostik",
    title: "Seltene Herzerkrankungen",
    body: "Abklärung bei Verdacht auf Amyloidose, Morbus Fabry oder hypertrophe Kardiomyopathie. Die Praxis ist Mitglied der Deutschen Gesellschaft für Amyloid-Krankheiten.",
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
              "Lipidprofil über unser Partnerlabor",
              "kurzer ärztlicher Bericht",
            ]}
            notice="Laborleistungen werden vom Partnerlabor separat in Rechnung gestellt."
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
              "Carotis-Doppler sowie Duplexsonographie",
              "Ergometrie und Belastungs-EKG",
              "umfassendere Labordiagnostik über das Partnerlabor",
              "vertiefte Anamnese und individuelle Risikoeinschätzung",
              "ausführlicher ärztlicher Bericht mit persönlichen Empfehlungen",
            ]}
            notice="Laborleistungen werden vom Partnerlabor separat in Rechnung gestellt."
            ctaLabel="EXECUTIVE CHECK-UP BUCHEN"
            tone="gold"
          />
        </div>

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
      </div>
    </section>
  );
}
