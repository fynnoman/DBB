import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Für Patienten | ${site.brand}`,
  description:
    "Informationen für Privatpatienten, Beihilfeberechtigte und Selbstzahler. Vorbereitung auf den Termin, Abrechnung nach GOÄ, Aktuelles zu Sprechzeiten und Medikamente.",
};

const groups = [
  {
    tag: "PRIVAT",
    title: "Privatversicherte",
    body: "Ihre Untersuchungen werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Wir stellen Ihnen die Rechnung persönlich aus; die Erstattung erfolgt über Ihre private Krankenversicherung.",
  },
  {
    tag: "BEIHILFE",
    title: "Beihilfeberechtigte",
    body: "Beamtinnen und Beamte sind ebenso willkommen. Die Rechnung entspricht den Anforderungen der Beihilfestellen des Bundes und der Länder.",
  },
  {
    tag: "SELBSTZAHLER",
    title: "GKV als Selbstzahler",
    body: "Gesetzlich Versicherte können unsere Leistungen als Selbstzahler in Anspruch nehmen. Sie erhalten eine transparente GOÄ-Rechnung; eine Kostenerstattung durch die GKV ist grundsätzlich nicht vorgesehen.",
  },
];

const prep = [
  {
    kicker: "01",
    title: "Vor dem Termin",
    body: "Bitte bringen Sie einen aktuellen Medikamentenplan und relevante Vorbefunde mit. Für Belastungsuntersuchungen sportliche Kleidung.",
  },
  {
    kicker: "02",
    title: "Am Termin",
    body: "Planen Sie ausreichend Zeit ein. Anamnese, Untersuchung und die persönliche Befundbesprechung finden am selben Tag statt.",
  },
  {
    kicker: "03",
    title: "Nach dem Termin",
    body: "Sie erhalten einen schriftlichen Befund. Bei Bedarf koordinieren wir Nachfolgetermine oder die Abstimmung mit Ihrem Hausarzt.",
  },
];

const news = [
  {
    date: "[Datum]",
    title: "Sprechzeiten & Urlaub",
    body: "Aktuelle Sprechzeiten und geplante Abwesenheiten werden hier bekannt gegeben — ergänzt der Praxisbetrieb offiziell startet.",
  },
  {
    date: "[Datum]",
    title: "Kurzfristige Termine",
    body: "Für dringende kardiologische Fragestellungen halten wir tageweise Puffer frei. Bitte telefonisch anfragen.",
  },
  {
    date: "[Datum]",
    title: "Vertretung",
    body: "Während geplanter Abwesenheiten informieren wir über die kardiologische Vertretung in wohnortnaher Umgebung.",
  },
];

const meds = [
  "Betablocker",
  "ACE-Hemmer / Sartane",
  "Statine",
  "Antikoagulantien",
  "Diuretika",
  "Kalziumantagonisten",
];

export default function PatientenPage() {
  return (
    <>
      <PageHero
        eyebrow="Für Patienten"
        kicker="Für Patienten"
        chapter="04"
        title={
          <>
            Was Sie wissen sollten,<br />
            <span className="text-muted italic">bevor Sie kommen.</span>
          </>
        }
        lead="Transparente Abrechnung, klare Vorbereitung, verlässliche Kommunikation. Alles Wesentliche für Ihren Besuch — kompakt an einem Ort."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Wer wird behandelt</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
              Für wen die Praxis offen ist.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <Reveal key={g.tag} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/[0.06] px-3 py-1 text-[10px] tracking-[0.18em] font-extrabold uppercase text-gold mb-5">
                  {g.tag}
                </span>
                <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                  {g.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {g.body}
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
              <div className="kicker mb-3">Vorbereitung</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Drei Schritte zu Ihrem Termin.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {prep.map((p) => (
              <Reveal key={p.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-[26px] text-gold/80">
                      {p.kicker}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent"
                    />
                  </div>
                  <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                    {p.body}
                  </p>
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
              <div className="kicker mb-3">Aktuelles</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Sprechzeiten & Abwesenheiten.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                Hier veröffentlichen wir kurzfristige Änderungen der Sprechzeiten,
                geplante Urlaubszeiten und die zuständigen Vertretungen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="rounded-[22px] border border-line bg-white/70 divide-y divide-line overflow-hidden">
              {news.map((n) => (
                <li key={n.title} className="p-6 md:p-7">
                  <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold mb-2">
                    {n.date}
                  </div>
                  <div className="font-display text-[18px] leading-[1.3] mb-1.5">
                    {n.title}
                  </div>
                  <p className="text-muted text-[14px] leading-[1.7]">{n.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
            <Reveal>
              <div>
                <div className="kicker mb-3">Medikamente erklärt</div>
                <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                  Was Sie einnehmen — und warum.
                </h2>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                  In der Sprechstunde nehmen wir uns die Zeit, gängige kardiologische
                  Medikamente in verständlicher Sprache zu erklären: Wirkung,
                  Wechselwirkungen und typische Nebenwirkungen.
                </p>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75] mt-4 max-w-[520px]">
                  Kein Ersatz für die persönliche Beratung — aber eine Grundlage, damit
                  Sie eine informierte Entscheidung treffen können.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
                <div className="kicker mb-4">Häufig besprochen</div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[14px] leading-[1.6] text-ink/85">
                  {meds.map((m) => (
                    <li key={m} className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="inline-block h-px w-4 bg-gold"
                      />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[22px] border border-[#e2c9c6] bg-[#fdf1ef] p-6 md:p-7">
              <div className="text-[12px] tracking-[0.10em] uppercase font-extrabold text-[#b3261e] mb-1.5">
                Notfall
              </div>
              <p className="text-[14px] leading-[1.7] text-ink m-0">
                Bei akuten Beschwerden — Brustschmerz, plötzliche Luftnot, kalter
                Schweiß — bitte umgehend die{" "}
                <strong className="tracking-wider">{site.emergencyNumber}</strong>{" "}
                wählen. Diese Website ersetzt keinen Notruf.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Fragen zur Abrechnung oder Vorbereitung?"
        lead="Wir klären alle Details vor Ihrem Termin — telefonisch, per E-Mail oder über das Kontaktformular."
        primaryLabel="TERMIN ANFRAGEN"
        secondaryLabel="Zu den Leistungen"
        secondaryHref="/leistungen"
      />
    </>
  );
}
