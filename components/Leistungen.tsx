import CheckupCard from "@/components/CheckupCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const services = [
  {
    kicker: "Herzultraschall",
    title: "Echokardiographie & Speckle Tracking",
    body: "Hochauflösender Herzultraschall mit differenzierter Funktionsanalyse und bei Bedarf Speckle-Tracking-Analyse.",
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
  },
  {
    kicker: "Schwerpunkt",
    title: "Frauenherz",
    body: "Diagnostik mit besonderem Blick auf frauenspezifische Herz-Kreislauf-Risiken.",
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
  },
];

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35]"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Leistungen"
          title="Kardiologische Diagnostik und Betreuung."
          lead="Zwei Check-up-Formate zur direkten Buchung, plus das gesamte diagnostische Spektrum für die persönliche Betreuung nach ärztlicher Indikation."
        />

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
          />
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-7">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article
                id={s.id}
                className="h-full bg-white/40 border border-line rounded-[20px] p-7 card-lift"
              >
                <div className="kicker">{s.kicker}</div>
                <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                  {s.title}
                </h3>
                <p className="text-muted leading-[1.65] m-0">{s.body}</p>
              </article>
            </StaggerItem>
          ))}

          <StaggerItem>
            <article
              id="firmen-checkup"
              className="h-full bg-white/40 border border-line rounded-[20px] p-7 card-lift"
            >
              <div className="kicker">Unternehmen</div>
              <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                Kardio-Check-up für Firmen
              </h3>
              <p className="text-muted leading-[1.65]">
                Individuell abgestimmte kardiologische Check-up-Angebote für
                Unternehmen und Mitarbeitende.
              </p>
              <div className="mt-4 pl-4 pr-4 py-4 border-l-[3px] border-gold rounded-[12px] bg-gold/[0.06] text-[#4a4743] leading-[1.65]">
                Einzelheiten, Umfang und individuelle Anforderungen werden
                vorab persönlich besprochen.
              </div>
              <div className="mt-5">
                <a
                  href="#kontakt"
                  className="inline-flex min-h-[46px] px-5 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-all duration-500 ease-editorial"
                >
                  ANFRAGE ÜBER KONTAKTFORMULAR
                </a>
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
