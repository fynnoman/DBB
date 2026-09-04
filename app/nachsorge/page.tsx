import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Nachsorge & Verlaufskontrolle | ${site.brand}`,
  description:
    "Kardiologische Nachsorge und Verlaufskontrolle nach Infarkt, Stent, Bypass oder Klappen-Intervention. Persönliche Betreuung bei DBB Kardio in St. Ingbert.",
};

const situations = [
  {
    kicker: "Nach dem Ereignis",
    title: "Nach Herzinfarkt, Stent oder Bypass",
    body: "Strukturierte Weiterbetreuung nach einem kardialen Ereignis — mit klarem Fokus auf Sekundärprävention und Lebensqualität.",
  },
  {
    kicker: "Chronisch",
    title: "Bei bekannter Herzerkrankung",
    body: "Verlaufskontrolle bei Herzinsuffizienz, koronarer Herzkrankheit, Vorhofflimmern oder Klappenveränderungen.",
  },
  {
    kicker: "Nach Diagnostik",
    title: "Kontrolle nach Untersuchungen",
    body: "Wenn Vorbefunde eine Beobachtung nahelegen — etwa nach auffälligem EKG, Herzultraschall oder Bildgebung.",
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
            Nachsorge, die weiterdenkt.<br />
            <span className="text-muted italic">Verlässlich. Ohne Automatismus.</span>
          </>
        }
        lead="Nach einem kardialen Ereignis oder bei bekannter Herzerkrankung braucht es kontinuierliche, strukturierte Betreuung — mit denselben Standards wie am ersten Termin."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Für wen</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
              Drei typische Anlässe für eine Nachsorge.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {situations.map((s) => (
            <Reveal key={s.kicker} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <div className="kicker mb-3">{s.kicker}</div>
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
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-9 md:mb-10">
              <div className="kicker mb-3">Umfang eines Nachsorge-Termins</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Sechs Bausteine, individuell gewichtet.
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

      <section className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Rhythmus</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Wie oft ist sinnvoll?
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                Der Termintakt ergibt sich aus Diagnose, Medikation und individueller
                Situation. Wir stimmen ihn beim Erstgespräch mit Ihnen ab und passen ihn
                bei Bedarf an.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="rounded-[22px] border border-line bg-white/70 divide-y divide-line overflow-hidden">
              {cadence.map((c) => (
                <li
                  key={c.label}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-6 px-6 py-5"
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
