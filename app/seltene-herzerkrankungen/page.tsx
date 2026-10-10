import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Seltene Herzerkrankungen | ${site.brand}`,
  description:
    "Spezialisierte kardiologische Diagnostik bei Verdacht auf kardiale Amyloidose, Morbus Fabry oder hypertrophe Kardiomyopathie. Privatpraxis in Saarlouis für Patientinnen und Patienten aus Saarlouis, Merzig und Saarbrücken.",
};

const diagnosen = [
  {
    numeral: "01",
    kicker: "Ablagerungserkrankung",
    title: "Kardiale Amyloidose",
    body:
      "Bei der kardialen Amyloidose lagern sich fehlgefaltete Eiweißstoffe im Herzmuskel ab und beeinträchtigen dessen Funktion. Eine frühe Diagnostik mit Echokardiographie, Speckle Tracking und spezifischen Zusatzuntersuchungen entscheidet maßgeblich über den weiteren Verlauf.",
  },
  {
    numeral: "02",
    kicker: "Stoffwechselerkrankung",
    title: "Morbus Fabry",
    body:
      "Morbus Fabry ist eine seltene lysosomale Speichererkrankung, die unter anderem das Herz betrifft. Linksventrikuläre Hypertrophie, Rhythmusstörungen und Herzinsuffizienz können die ersten Hinweise sein und erfordern eine gezielte kardiologische Abklärung.",
  },
  {
    numeral: "03",
    kicker: "Erbliche Kardiomyopathie",
    title: "Hypertrophe Kardiomyopathie",
    body:
      "Die hypertrophe Kardiomyopathie ist die häufigste erblich bedingte Herzmuskelerkrankung. Sie bleibt oft lange symptomarm und wird häufig erst bei Belastungsbeschwerden, Rhythmusstörungen oder im Rahmen einer Familienabklärung erkannt.",
  },
];

const focus = [
  {
    kicker: "Anamnese",
    body: "Strukturierte Erhebung von Beschwerden, Familienanamnese und möglichen Hinweisen aus Vorbefunden anderer Fachdisziplinen.",
  },
  {
    kicker: "Bildgebung",
    body: "Echokardiographie mit Speckle Tracking zur frühen Erkennung charakteristischer Veränderungen des Herzmuskels.",
  },
  {
    kicker: "Rhythmus",
    body: "EKG, Langzeit-EKG und bei Bedarf Belastungsuntersuchungen zur Beurteilung von Rhythmusstörungen und Belastbarkeit.",
  },
  {
    kicker: "Labor",
    body: "Spezifische Marker wie Troponin oder NT-proBNP und je nach Fragestellung weitere Laborparameter zur Verlaufsbeurteilung.",
  },
  {
    kicker: "Netzwerk",
    body: "Enge Abstimmung mit spezialisierten Zentren der Deutschen Gesellschaft für Amyloid-Krankheiten, wenn weiterführende Diagnostik oder Therapien notwendig werden.",
  },
  {
    kicker: "Begleitung",
    body: "Klarer Verlaufsplan über Jahre hinweg mit festen Kontrollintervallen und einer erreichbaren Ansprechpartnerin.",
  },
];

const cadence = [
  { label: "Erstvorstellung", body: "Ausführliche Anamnese, Bildgebung und Einordnung bestehender Vorbefunde in einem einzigen Termin." },
  { label: "Verlaufskontrolle", body: "In der Regel alle 6 bis 12 Monate, abhängig von Diagnose, Therapie und Verlauf." },
  { label: "Bei Veränderung", body: "Kurzfristig bei neuen Beschwerden, veränderter Belastbarkeit oder auffälligen Verlaufsparametern." },
];

export default function SelteneHerzerkrankungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Spezialdiagnostik"
        kicker="Seltene Herzerkrankungen"
        chapter="10"
        title={
          <>
            Seltene Herzerkrankungen,<br />
            <span className="italic text-muted">früh erkannt.</span>
          </>
        }
        lead={`Spezialisierte kardiologische Diagnostik bei Verdacht auf kardiale Amyloidose, Morbus Fabry und hypertrophe Kardiomyopathie. Für Patientinnen und Patienten aus ${site.serviceArea.join(", ")}.`}
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild zur Diagnostik seltener Herzerkrankungen"
        overline="Spezialdiagnostik"
        caption="Nicht jede Herzerkrankung ist häufig. Manche brauchen einen zweiten, geschulten Blick."
        aspect="wide"
      />

      <SplitFeature
        eyebrow="Drei typische Krankheitsbilder"
        heading={
          <>
            Was in der Praxis<br />
            <span className="italic text-muted">regelmäßig vorkommt.</span>
          </>
        }
        intro="Seltene Herzerkrankungen bleiben oft lange unentdeckt. Eine strukturierte kardiologische Abklärung kann über den weiteren Verlauf entscheiden."
        items={diagnosen}
      />

<section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Umfang der Spezialsprechstunde</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Sechs Bausteine,<br />
                <span className="italic text-muted">individuell gewichtet.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focus.map((f) => (
              <Reveal key={f.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-6 md:p-7 h-full">
                  <div className="kicker mb-2">{f.kicker}</div>
                  <p className="text-muted text-[14px] leading-[1.7]">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Rhythmus der Betreuung</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Verlässliche<br />
                <span className="italic text-muted">Begleitung.</span>
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-8 max-w-[520px]">
                Seltene Herzerkrankungen brauchen Kontinuität. Der genaue
                Kontrollrhythmus wird im Erstgespräch festgelegt und bei Bedarf
                angepasst.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="rounded-[22px] border border-line bg-white/70 divide-y divide-line overflow-hidden">
              {cadence.map((c) => (
                <li
                  key={c.label}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-6 px-6 py-6"
                >
                  <div className="kicker">{c.label}</div>
                  <p className="text-muted text-[14px] leading-[1.7] m-0">{c.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Spezialsprechstunde anfragen."
        lead="Bitte bringen Sie relevante Vorbefunde und einen aktuellen Medikamentenplan mit. Vor dem Erstkontakt genügt eine kurze telefonische Rücksprache."
        primaryLabel="TERMIN ANFRAGEN"
      />
    </>
  );
}
