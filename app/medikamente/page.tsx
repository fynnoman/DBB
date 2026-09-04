import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Herzmedikamente verständlich erklärt | ${site.brand}`,
  description:
    "Betablocker, ACE-Hemmer, Sartane, Statine, Diuretika, Antikoagulanzien: Wirkung, Einsatz und typische Nebenwirkungen kardiovaskulärer Medikamente in verständlicher Sprache.",
};

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
    title: "Sacubitril / Valsartan",
    effect:
      "kombiniert Gefäß- und Hormonwirkungen zur Entlastung bei bestimmten Formen der Herzinsuffizienz.",
    side:
      "niedriger Blutdruck, erhöhtes Kalium, Veränderung der Nierenwerte. Selten Angioödem.",
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
    side:
      "erhöhtes Blutungsrisiko. Wechselwirkungen und Nierenfunktion können relevant sein.",
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

const rules = [
  {
    numeral: "01",
    kicker: "Nichts eigenständig",
    title: "Keine Selbst-Anpassung.",
    body:
      "Medikamente sollten nie eigenständig begonnen, abgesetzt oder in der Dosis verändert werden — Rücksprache mit der Ärztin ist entscheidend, auch wenn es „nur eine Kleinigkeit“ ist.",
  },
  {
    numeral: "02",
    kicker: "Wechselwirkungen",
    title: "Alles auf den Tisch.",
    body:
      "Bitte informieren Sie uns über alle regelmäßig eingenommenen Präparate — inklusive frei verkäuflicher Mittel, Nahrungsergänzung und pflanzlicher Präparate.",
  },
  {
    numeral: "03",
    kicker: "Nebenwirkungen ernst nehmen",
    title: "Beim Auftreten melden.",
    body:
      "Ungewohnte Beschwerden bitte zeitnah melden, damit wir Dosis oder Präparat gemeinsam anpassen können. Das ist keine Belastung, sondern Teil einer guten Therapie.",
  },
];

export default function MedikamentePage() {
  return (
    <>
      <PageHero
        eyebrow="Wissen"
        kicker="Medikamente erklärt"
        chapter="12"
        title={
          <>
            Herzmedikamente,<br />
            <span className="italic text-muted">verständlich erklärt.</span>
          </>
        }
        lead="Die folgenden Informationen dienen der Orientierung und ersetzen keine individuelle ärztliche Beratung. Für konkrete Fragen zu Ihrer Medikation sprechen Sie uns bitte persönlich an."
      />

      <section className="relative overflow-hidden border-y border-line bg-cream-300/40">
        <div className="container-shell max-w-[1440px] px-4 py-14 md:py-20 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-gold"
              />
              <span className="text-[10px] tracking-[0.24em] uppercase font-extrabold text-gold">
                Index
              </span>
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-gradient-to-l from-transparent to-gold"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div
              aria-hidden
              className="font-display tracking-[-0.03em] leading-none text-ink/[0.10] select-none text-[clamp(80px,16vw,240px)]"
            >
              A · B · S · D · A
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display italic text-muted text-[clamp(16px,1.8vw,22px)] leading-[1.5] mt-6 max-w-[720px] mx-auto">
              ACE-Hemmer, Betablocker, Statine, Diuretika, Antikoagulanzien — was
              hinter den Buchstaben steckt, entscheidet über den Alltag mit dem
              Herzen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] pb-20 md:pb-24 px-4">
        <Reveal>
          <div className="max-w-[900px] mb-10 md:mb-14">
            <div className="kicker mb-3">Häufig verordnete Wirkstoffgruppen</div>
            <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
              Wirkung<br />
              <span className="italic text-muted">und typische Nebenwirkungen.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {meds.map((m, i) => (
            <Reveal key={m.title} delay={0.05}>
              <article className="group relative rounded-[22px] border border-line bg-white/70 p-6 md:p-8 h-full transition-all duration-500 ease-editorial hover:shadow-cardHover hover:border-gold/60 overflow-hidden">
                <span
                  aria-hidden
                  className="absolute top-6 right-6 md:top-8 md:right-8 font-display text-gold/25 leading-none text-[clamp(40px,5vw,64px)] tracking-[-0.03em]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-[11px] text-gold font-extrabold tracking-[0.14em] uppercase">
                  {m.badge}
                </div>
                <h3 className="font-display text-[24px] mt-2 mb-4">{m.title}</h3>
                <p className="text-muted leading-[1.7] m-0 text-[14px] md:text-[15px]">
                  <strong className="text-ink">Wirkung:</strong> {m.effect}
                </p>
                <p className="text-muted leading-[1.7] mt-3 text-[14px] md:text-[15px]">
                  <strong className="text-ink">Mögliche Nebenwirkungen:</strong>{" "}
                  {m.side}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Statement
        eyebrow="Wichtig"
        tone="ink"
        footer={
          <>
            Diese Übersicht ist eine Orientierungshilfe — kein Ersatz für die
            persönliche Beratung. Ob eine Substanzklasse zu Ihnen passt, hängt von
            Diagnose, Vorerkrankungen, weiterer Medikation und individuellen Werten
            ab.
          </>
        }
      >
        Wissen ist gut.<br />
        <span className="italic text-cream/85">Kontext ist besser.</span>
      </Statement>

      <SplitFeature
        eyebrow="Drei Grundregeln"
        heading={
          <>
            Sicher durch<br />
            <span className="italic text-muted">die Therapie.</span>
          </>
        }
        intro="Die meisten kardiovaskulären Medikamente sind gut verträglich — vorausgesetzt, drei einfache Regeln werden konsequent eingehalten."
        items={rules}
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-20 px-4">
        <Reveal>
          <div className="rounded-[22px] border border-[#e2c9c6] bg-[#fdf1ef] p-6 md:p-8">
            <div className="text-[12px] tracking-[0.10em] uppercase font-extrabold text-[#b3261e] mb-2">
              Notfall
            </div>
            <p className="text-[15px] leading-[1.7] text-ink m-0 max-w-[720px]">
              Bei akuten Symptomen — Brustschmerz, plötzliche Luftnot, Schwindel mit
              Übelkeit — bitte umgehend die{" "}
              <strong className="tracking-wider">{site.emergencyNumber}</strong>{" "}
              wählen. Diese Seite ersetzt keinen Notruf.
            </p>
          </div>
        </Reveal>
      </section>

      <PageCta
        title="Frage zu Ihrer Medikation?"
        lead="Ob Neuverordnung, Dosisanpassung oder Nebenwirkung — wir besprechen die Details persönlich, nicht am Telefon-Bot."
        primaryLabel="TERMIN ANFRAGEN"
      />
    </>
  );
}
