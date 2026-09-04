import { MenuOnlySection } from "@/components/MenuOnly";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

const meds = [
  {
    badge: "Blutdruck & Herzfrequenz",
    title: "Betablocker",
    effect: "senken Herzfrequenz und Blutdruck und entlasten das Herz.",
    side: "Müdigkeit, langsamer Puls, Schwindel, kalte Hände oder Füße.",
  },
  {
    badge: "RAAS-Hemmung",
    title: "ACE-Hemmer",
    effect: "senken Blutdruck und entlasten Herz und Gefäße.",
    side: "Reizhusten, Blutdruckabfall, Anstieg von Kalium oder Kreatinin. Selten Angioödem.",
  },
  {
    badge: "RAAS-Hemmung",
    title: "Sartane (ARB)",
    effect: "ähnlich wie ACE-Hemmer, häufig bei ACE-Hemmer-Unverträglichkeit.",
    side: "Blutdruckabfall, erhöhtes Kalium, Veränderung der Nierenwerte.",
  },
  {
    badge: "Herzinsuffizienz",
    title: "Sacubitril / Valsartan (Entresto)",
    effect:
      "kombiniert Gefäß- und Hormonwirkungen zur Entlastung bei bestimmten Formen der Herzinsuffizienz.",
    side: "niedriger Blutdruck, erhöhtes Kalium, Veränderung der Nierenwerte. Selten Angioödem.",
  },
  {
    badge: "Cholesterin",
    title: "Statine",
    effect:
      "senken LDL-Cholesterin und reduzieren das Risiko kardiovaskulärer Ereignisse.",
    side: "Muskelbeschwerden, selten relevante Leberwert- oder Muskelenzymerhöhungen.",
  },
  {
    badge: "Entwässerung",
    title: "Diuretika",
    effect:
      "fördern die Ausscheidung von Wasser und Salz und reduzieren Flüssigkeitsüberlastung.",
    side: "Elektrolytverschiebungen, niedriger Blutdruck, Veränderungen der Nierenwerte.",
  },
  {
    badge: "Gerinnungshemmung",
    title: "Antikoagulanzien",
    effect:
      "vermindern die Blutgerinnung, etwa zur Schlaganfallprävention bei Vorhofflimmern.",
    side: "erhöhtes Blutungsrisiko. Wechselwirkungen und Nierenfunktion können relevant sein.",
  },
  {
    badge: "Thrombozytenhemmung",
    title: "ASS & Clopidogrel",
    effect:
      "hemmen Blutplättchen und werden unter anderem bei koronarer Herzkrankheit oder nach Stentimplantation eingesetzt.",
    side:
      "Blutungen, Magen-Darm-Beschwerden. Bei Clopidogrel selten Blutbildveränderungen.",
  },
];

export default function Medikamente() {
  return (
    <MenuOnlySection id="medikamente">
      <div className="border-y border-line bg-white/[0.35]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
          <SectionTitle
            kicker="Medikamente"
            title="Herzmedikamente verständlich erklärt."
            lead="Die folgenden Informationen dienen der Orientierung und ersetzen keine individuelle ärztliche Beratung. Medikamente sollten nie eigenständig begonnen, abgesetzt oder in der Dosis verändert werden."
          />

          <Stagger className="grid md:grid-cols-2 gap-4 md:gap-5">
            {meds.map((m) => (
              <StaggerItem key={m.title}>
                <article className="h-full bg-white/60 border border-line rounded-[18px] p-6 md:p-7 card-lift">
                  <div className="text-[11px] text-gold font-extrabold tracking-[0.10em] uppercase">
                    {m.badge}
                  </div>
                  <h3 className="font-display text-[21px] mt-1.5 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-muted leading-[1.62] m-0">
                    <strong className="text-ink">Wirkung:</strong> {m.effect}
                  </p>
                  <p className="text-muted leading-[1.62] mt-2">
                    <strong className="text-ink">Mögliche Nebenwirkungen:</strong>{" "}
                    {m.side}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </MenuOnlySection>
  );
}
