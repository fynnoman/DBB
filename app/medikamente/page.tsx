import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
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
    title: "Sacubitril / Valsartan (Entresto)",
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
    kicker: "Nichts eigenständig",
    body: "Medikamente sollten nie eigenständig begonnen, abgesetzt oder in der Dosis verändert werden — Rücksprache mit der Ärztin ist entscheidend.",
  },
  {
    kicker: "Wechselwirkungen",
    body: "Bitte informieren Sie uns über alle regelmäßig eingenommenen Präparate — inklusive frei verkäuflicher Mittel und Nahrungsergänzung.",
  },
  {
    kicker: "Nebenwirkungen ernst nehmen",
    body: "Ungewohnte Beschwerden bitte zeitnah melden, damit wir Dosis oder Präparat gemeinsam anpassen können.",
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
            <span className="text-muted italic">verständlich erklärt.</span>
          </>
        }
        lead="Die folgenden Informationen dienen der Orientierung und ersetzen keine individuelle ärztliche Beratung. Für konkrete Fragen zu Ihrer Medikation sprechen Sie uns bitte persönlich an."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Häufig verordnete Wirkstoffgruppen</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
              Wirkung und typische Nebenwirkungen.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {meds.map((m) => (
            <Reveal key={m.title} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-6 md:p-7 h-full transition-shadow duration-500 ease-editorial hover:shadow-cardHover">
                <div className="text-[11px] text-gold font-extrabold tracking-[0.10em] uppercase">
                  {m.badge}
                </div>
                <h3 className="font-display text-[21px] mt-1.5 mb-2">{m.title}</h3>
                <p className="text-muted leading-[1.62] m-0 text-[14px] md:text-[15px]">
                  <strong className="text-ink">Wirkung:</strong> {m.effect}
                </p>
                <p className="text-muted leading-[1.62] mt-2 text-[14px] md:text-[15px]">
                  <strong className="text-ink">Mögliche Nebenwirkungen:</strong>{" "}
                  {m.side}
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
              <div className="kicker mb-3">Drei Grundregeln</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Sicher durch die Therapie.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {rules.map((r) => (
              <Reveal key={r.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="kicker mb-3">{r.kicker}</div>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                    {r.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[22px] border border-[#e2c9c6] bg-[#fdf1ef] p-6 md:p-7">
              <div className="text-[12px] tracking-[0.10em] uppercase font-extrabold text-[#b3261e] mb-1.5">
                Notfall
              </div>
              <p className="text-[14px] leading-[1.7] text-ink m-0">
                Bei akuten Symptomen — Brustschmerz, plötzliche Luftnot, Schwindel
                mit Übelkeit — bitte umgehend die{" "}
                <strong className="tracking-wider">{site.emergencyNumber}</strong>{" "}
                wählen. Diese Seite ersetzt keinen Notruf.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Frage zu Ihrer Medikation?"
        lead="Ob Neuverordnung, Dosisanpassung oder Nebenwirkung — wir besprechen die Details persönlich, nicht am Telefon-Bot."
        primaryLabel="TERMIN ANFRAGEN"
      />
    </>
  );
}
