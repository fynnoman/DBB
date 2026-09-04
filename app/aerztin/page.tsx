import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Über die Ärztin | ${site.fullName}`,
  description:
    "Dr. medic Denisa Babeanu-Bauer — Kardiologin in St. Ingbert. Werdegang, Schwerpunkte, Haltung. Persönliche Betreuung ohne Fließbandmedizin.",
};

const schwerpunkte = [
  {
    numeral: "01",
    kicker: "Bildgebung",
    title: "Echokardiographie & Speckle Tracking",
    body:
      "Hochauflösende Ultraschalluntersuchung des Herzens inklusive Speckle-Tracking-Analyse zur frühen Erkennung feinster Funktionsstörungen — bevor sie im klassischen Echo sichtbar werden.",
  },
  {
    numeral: "02",
    kicker: "Onkologie",
    title: "Cardio-Onkologie",
    body:
      "Kardiologische Begleitung während und nach onkologischer Therapie. Prävention kardiotoxischer Nebenwirkungen und individuelle Nachsorge in enger Abstimmung mit der onkologischen Behandlung.",
  },
  {
    numeral: "03",
    kicker: "Gender-Kardiologie",
    title: "Frauenherz",
    body:
      "Herzerkrankungen zeigen bei Frauen oft andere Symptome — und werden deshalb später erkannt. Dedizierte Diagnostik unter Berücksichtigung geschlechtsspezifischer Besonderheiten.",
  },
  {
    numeral: "04",
    kicker: "Longevity",
    title: "Prävention & Verlaufsmedizin",
    body:
      "Strukturierte Risiko-Bewertung, moderne Biomarker und langfristige Begleitung. Bevor aus einem Befund ein Ereignis wird.",
  },
];

const vita = [
  { year: "Approbation", body: "[wird ergänzt]" },
  { year: "Facharzt-Ausbildung Innere Medizin & Kardiologie", body: "[wird ergänzt]" },
  { year: "Klinische Stationen", body: "[wird ergänzt]" },
  {
    year: "Zusatzqualifikationen",
    body: "Echokardiographie · Speckle Tracking · Cardio-Onkologie",
  },
  { year: "Niederlassung", body: `Privatpraxis ${site.city}` },
];

export default function AerztinPage() {
  return (
    <>
      <PageHero
        eyebrow="Die Ärztin"
        kicker="Über die Ärztin"
        chapter="01"
        title={
          <>
            {site.fullName}.<br />
            <span className="text-muted italic">Persönlich. Präzise. Zugewandt.</span>
          </>
        }
        lead="Kardiologie beginnt für mich mit einem Gespräch, nicht mit einem Gerät. Wer Zeit für seine Patienten hat, sieht mehr — und muss weniger reparieren."
      />

      <section className="container-shell max-w-[1440px] px-4 pb-20 md:pb-32">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div
                className="relative rounded-[28px] overflow-hidden border border-[rgba(183,154,98,0.42)] shadow-soft"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1682706841281-f723c5bfcd83?w=900&auto=format&fit=crop&q=80"
                  alt="Symbolisches Bild bis zur Übergabe des Portraitfotos"
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.35) 55%, rgba(24,24,24,0.78) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 grid place-items-center pointer-events-none"
                >
                  <span className="font-display text-white/25 tracking-[0.22em] text-[clamp(28px,6vw,54px)] uppercase select-none">
                    Platzhalter
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
                    Portraitfoto folgt
                  </div>
                  <div className="mt-1.5 font-display text-white text-[22px] leading-tight">
                    {site.fullName}
                  </div>
                  <div className="mt-1 text-white/75 text-[13px]">
                    {site.descriptor} · {site.city}
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-[10px] rounded-[20px] pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.35)" }}
                />
              </div>
              <div className="mt-6 flex items-start gap-3 text-[12px] tracking-[0.10em] uppercase text-muted">
                <span
                  aria-hidden
                  className="mt-[7px] h-px w-8 bg-gold flex-shrink-0"
                />
                <span>
                  Portrait
                  <br />
                  <span className="text-ink/85 normal-case tracking-[0.05em]">
                    Ein Kapitel folgt.
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="kicker mb-4">Haltung</div>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-0.015em] title-rule">
                Medizin,<br />die zuhört,<br />bevor sie misst.
              </h2>
              <p className="text-muted text-[17px] md:text-[18px] leading-[1.8] mt-8">
                Die Kardiologie hat in den letzten Jahren einen enormen technologischen
                Sprung gemacht. Doch der wertvollste Teil einer Untersuchung bleibt das
                Gespräch. In der Praxis nehmen wir uns die Zeit, die es braucht, um
                Beschwerden einzuordnen, Kontext zu verstehen und daraus einen Weg
                abzuleiten, der wirklich zu Ihnen passt.
              </p>
              <p className="text-muted text-[16px] md:text-[17px] leading-[1.8] mt-5">
                Jede Untersuchung wird persönlich durchgeführt, jeder Befund persönlich
                besprochen. Kein Delegieren an Assistenzpersonal, keine Standardpakete
                ohne Rücksicht auf Ihre Vorgeschichte.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 grid grid-cols-2 gap-6 md:gap-10 border-t border-line pt-10">
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(48px,6vw,84px)] tracking-[-0.02em]">
                    45
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Minuten
                  </div>
                  <p className="text-muted text-[14px] leading-[1.6] mt-2 max-w-[260px]">
                    typische Termin-Dauer für den Basis-Check — ohne getakteten
                    Nachfolger im Warteraum.
                  </p>
                </div>
                <div>
                  <div className="font-display text-gold/80 leading-none text-[clamp(48px,6vw,84px)] tracking-[-0.02em]">
                    01
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                    Ansprechpartnerin
                  </div>
                  <p className="text-muted text-[14px] leading-[1.6] mt-2 max-w-[260px]">
                    Die gesamte Untersuchung und Befundbesprechung findet bei
                    derselben Ärztin statt.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PullQuote
        author={site.fullName}
        role={`${site.descriptor} · ${site.city}`}
      >
        Ich möchte, dass Sie das Sprechzimmer nicht mit mehr Fragen, sondern mit
        mehr Klarheit verlassen.
      </PullQuote>

      <SplitFeature
        eyebrow="Vier klinische Schwerpunkte"
        heading={
          <>
            Wo Präzision <span className="italic text-muted">
              messbar
            </span> wird.
          </>
        }
        intro="Vier Bereiche, in denen wir gezielt Zeit investiert haben. Nicht, weil es Trends sind — sondern weil wir sehen, wo klassische Standardversorgung an Grenzen stößt."
        items={schwerpunkte}
      />

      <Statement
        eyebrow="Grundsatz"
        tone="forest"
        footer={
          <>
            Deshalb keine Serien-Termine, keine anonyme Abläufe, keine Delegation an
            fachfremdes Personal. Der Preis ist Zeit — und die geben wir jedem
            Patienten bewusst.
          </>
        }
      >
        Medizin, die Zeit braucht, kann man nicht optimieren.<br />
        <span className="italic text-cream/85">Man kann sie nur ernst nehmen.</span>
      </Statement>

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-10 md:mb-12">
            <div className="kicker mb-3">Werdegang</div>
            <h2 className="font-display leading-[1.05] text-[clamp(28px,3.6vw,44px)] title-rule">
              Vita in Stationen.
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-5 max-w-[720px]">
              Die vollständige Vita mit Ausbildungsstationen, Weiterbildungen,
              Publikationen und Mitgliedschaften wird zeitnah ergänzt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <ol className="border border-line rounded-[22px] bg-white/70 divide-y divide-line overflow-hidden">
            {vita.map((v) => (
              <li
                key={v.year}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 px-6 py-5 md:px-8 md:py-7"
              >
                <div className="text-[12px] tracking-[0.10em] uppercase font-extrabold text-ink">
                  {v.year}
                </div>
                <div className="text-muted text-[15px] leading-[1.7]">{v.body}</div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <PageCta
        title="Termin bei Frau Dr. Babeanu-Bauer anfragen."
        lead="Erstgespräch, Basis-Check-up oder gezielte Fragestellung — wir besprechen im Vorfeld, was für Sie sinnvoll ist."
      />
    </>
  );
}
