import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Über die Ärztin | ${site.fullName}`,
  description:
    "Dr. medic Denisa Babeanu-Bauer — Kardiologin in St. Ingbert. Werdegang, Schwerpunkte, Haltung. Persönliche Betreuung ohne Fließbandmedizin.",
};

const schwerpunkte = [
  {
    kicker: "01",
    title: "Echokardiographie & Speckle Tracking",
    body: "Hochauflösende Ultraschalluntersuchung des Herzens inklusive Speckle-Tracking-Analyse zur frühen Erkennung feinster Funktionsstörungen.",
  },
  {
    kicker: "02",
    title: "Cardio-Onkologie",
    body: "Kardiologische Begleitung während und nach onkologischer Therapie. Prävention von kardiotoxischen Nebenwirkungen und individuelle Nachsorge.",
  },
  {
    kicker: "03",
    title: "Frauenherz-Sprechstunde",
    body: "Herzerkrankungen zeigen bei Frauen oft andere Symptome. Dedizierte Diagnostik unter Berücksichtigung geschlechtsspezifischer Besonderheiten.",
  },
  {
    kicker: "04",
    title: "Prävention & Longevity",
    body: "Strukturierte Risiko-Bewertung, moderne Biomarker und langfristige Begleitung — bevor aus einem Befund ein Ereignis wird.",
  },
];

const vita = [
  { year: "Approbation", body: "[wird ergänzt]" },
  { year: "Facharzt-Ausbildung Innere Medizin & Kardiologie", body: "[wird ergänzt]" },
  { year: "Klinische Stationen", body: "[wird ergänzt]" },
  { year: "Zusatzqualifikationen", body: "Echokardiographie · Speckle Tracking · Cardio-Onkologie" },
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

      <section className="container-shell max-w-[1440px] px-4 pb-16 md:pb-24">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
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
                    "linear-gradient(180deg, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.35) 55%, rgba(24,24,24,0.75) 100%)",
                }}
              />
              <div aria-hidden className="absolute inset-0 grid place-items-center pointer-events-none">
                <span className="font-display text-white/25 tracking-[0.22em] text-[clamp(28px,6vw,54px)] uppercase select-none">
                  Platzhalter
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
                  Portraitfoto folgt
                </div>
                <div className="mt-1.5 font-display text-white text-[20px] leading-tight">
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
          </Reveal>

          <div>
            <Reveal>
              <div className="kicker mb-3">Haltung</div>
              <h2 className="font-display text-[clamp(26px,3vw,38px)] leading-[1.2] title-rule">
                Medizin, die zuhört, bevor sie misst.
              </h2>
              <p className="text-muted text-[16px] md:text-[17px] leading-[1.8] mt-6">
                Die Kardiologie hat in den letzten Jahren einen enormen technologischen
                Sprung gemacht. Doch der wertvollste Teil einer Untersuchung bleibt das
                Gespräch. In der Praxis nehmen wir uns die Zeit, die es braucht, um
                Beschwerden einzuordnen, Kontext zu verstehen und daraus einen Weg
                abzuleiten, der wirklich zu Ihnen passt.
              </p>
              <p className="text-muted text-[16px] md:text-[17px] leading-[1.8] mt-4">
                Jede Untersuchung wird persönlich durchgeführt, jeder Befund persönlich
                besprochen. Kein Delegieren an Assistenzpersonal, keine Standardpakete
                ohne Rücksicht auf Ihre Vorgeschichte.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 py-1">
                <p className="font-display italic text-[20px] md:text-[22px] leading-[1.5] text-ink">
                  „Ich möchte, dass Sie das Sprechzimmer nicht mit mehr Fragen, sondern
                  mit mehr Klarheit verlassen."
                </p>
                <footer className="mt-3 text-[12px] tracking-[0.10em] uppercase text-muted">
                  {site.fullName}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-9 md:mb-10">
              <div className="kicker mb-3">Schwerpunkte</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Vier klinische Schwerpunkte, eine Handschrift.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {schwerpunkte.map((s) => (
              <Reveal key={s.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full transition-shadow duration-500 ease-editorial hover:shadow-cardHover">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-[26px] text-gold/80">{s.kicker}</span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent"
                    />
                  </div>
                  <h3 className="font-display text-[22px] md:text-[24px] leading-[1.2] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.7]">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Werdegang</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
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
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 px-6 py-5 md:px-8 md:py-6"
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
