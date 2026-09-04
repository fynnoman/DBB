import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Nachsorge & Verlaufskontrolle | ${site.brand}`,
  description:
    "Kardiologische Nachsorge und Verlaufskontrolle nach Infarkt, Stent, Bypass oder Klappen-Intervention. Persönliche Betreuung bei DBB Kardio in St. Ingbert.",
};

const situations = [
  {
    numeral: "01",
    kicker: "Nach dem Ereignis",
    title: "Nach Herzinfarkt, Stent oder Bypass",
    body:
      "Strukturierte Weiterbetreuung nach einem kardialen Ereignis — mit klarem Fokus auf Sekundärprävention, Belastbarkeit und Lebensqualität.",
  },
  {
    numeral: "02",
    kicker: "Chronisch",
    title: "Bei bekannter Herzerkrankung",
    body:
      "Verlaufskontrolle bei Herzinsuffizienz, koronarer Herzkrankheit, Vorhofflimmern oder Klappenveränderungen — im Rhythmus, den die Erkrankung braucht.",
  },
  {
    numeral: "03",
    kicker: "Nach Diagnostik",
    title: "Kontrolle nach Untersuchungen",
    body:
      "Wenn Vorbefunde eine Beobachtung nahelegen — etwa nach auffälligem EKG, Herzultraschall oder Bildgebung — geben wir dem Verlauf einen Rahmen.",
  },
];

const focus = [
  {
    kicker: "Symptome",
    body: "Erhebung veränderter Belastbarkeit, neu aufgetretener Beschwerden und Alltagsauswirkungen.",
  },
  {
    kicker: "Bildgebung",
    body: "Verlaufsecho, gegebenenfalls Speckle Tracking und weitere Ultraschall-Diagnostik im Vergleich zum Vorbefund.",
  },
  {
    kicker: "Rhythmus",
    body: "EKG, Langzeit-EKG oder Ergometrie bei entsprechender Fragestellung.",
  },
  {
    kicker: "Medikation",
    body: "Überprüfung der aktuellen Medikation auf Wirksamkeit, Verträglichkeit und Anpassungsbedarf.",
  },
  {
    kicker: "Labor",
    body: "Nieren, Elektrolyte, Herzinsuffizienz-Marker, Lipide — abgestimmt auf Vorbefunde und Therapie.",
  },
  {
    kicker: "Empfehlung",
    body: "Klare Handlungsempfehlungen zu Bewegung, Ernährung, Reisen und beruflicher Belastbarkeit.",
  },
];

const cadence = [
  { label: "Erstkontrolle", body: "In der Regel 4 – 12 Wochen nach dem Ereignis oder der Intervention." },
  { label: "Stabile Phase", body: "Alle 6 – 12 Monate — abhängig von Diagnose und Medikation." },
  { label: "Bei Veränderung", body: "Kurzfristig bei neuen Symptomen, veränderter Belastbarkeit oder Auffälligkeiten in der Selbstmessung." },
];

export default function NachsorgePage() {
  return (
    <>
      <PageHero
        eyebrow="Verlaufskontrolle"
        kicker="Nachsorge"
        chapter="10"
        title={
          <>
            Nachsorge,<br />
            <span className="italic text-muted">die weiterdenkt.</span>
          </>
        }
        lead="Nach einem kardialen Ereignis oder bei bekannter Herzerkrankung braucht es kontinuierliche, strukturierte Betreuung — mit denselben Standards wie am ersten Termin."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild — Nachsorge und Verlaufskontrolle"
        overline="Verlaufskontrolle"
        caption="Kontinuität, die den Unterschied macht — nicht nur Kontrolle nach Schema F."
        aspect="cinema"
      />

      <SplitFeature
        eyebrow="Für wen"
        heading={
          <>
            Drei typische<br />
            <span className="italic text-muted">Anlässe.</span>
          </>
        }
        intro="Ob nach einem konkreten Ereignis, bei einer bekannten chronischen Diagnose oder als Reaktion auf einen Vorbefund — Nachsorge ist keine Einheitsleistung, sondern eine Antwort auf Kontext."
        items={situations}
      />

      <Statement
        eyebrow="Prinzip"
        tone="ink"
        footer={
          <>
            Deshalb keine standardisierten Kontroll-Slots, keine anonyme
            Werte-Verwaltung. Jede Nachsorge ist so aufgebaut, dass sie die
            eigentliche Frage beantwortet — nicht nur Häkchen setzt.
          </>
        }
      >
        Verlaufskontrolle ist<br />
        <span className="italic text-cream/85">keine Wiederholung.</span>
      </Statement>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Umfang eines Nachsorge-Termins</div>
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
              <div className="kicker mb-3">Rhythmus</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Wie oft<br />
                <span className="italic text-muted">ist sinnvoll?</span>
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-8 max-w-[520px]">
                Der Termintakt ergibt sich aus Diagnose, Medikation und individueller
                Situation. Wir stimmen ihn beim Erstgespräch mit Ihnen ab und passen
                ihn bei Bedarf an.
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
        title="Nachsorge-Termin vereinbaren."
        lead="Bitte bringen Sie relevante Vorbefunde und einen aktuellen Medikamentenplan mit. Für die Erstberatung genügt ein telefonischer Kontakt."
        primaryLabel="TERMIN ANFRAGEN"
      />
    </>
  );
}
