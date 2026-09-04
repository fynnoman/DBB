import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Kooperationen & Netzwerk | ${site.brand}`,
  description:
    "Kardiologisches Netzwerk der Privatpraxis DBB Kardio in St. Ingbert. Verzahnung mit Kliniken, Hausärzten und ausgewählten Fachdisziplinen im Saarland.",
};

const partners = [
  {
    numeral: "01",
    kicker: "Klinik",
    title: "Klinik-Kooperationen",
    body:
      "Enge Abstimmung mit kardiologischen Abteilungen und Herzzentren für stationäre Diagnostik, interventionelle Verfahren und Rehabilitation.",
  },
  {
    numeral: "02",
    kicker: "Hausärzte",
    title: "Zuweisende Kolleginnen & Kollegen",
    body:
      "Verlässliche Berichts- und Rücksprachestruktur mit hausärztlichen Praxen im Saarland und der Saarpfalz. Kurze Wege, klare Befunde.",
  },
  {
    numeral: "03",
    kicker: "Fachdisziplinen",
    title: "Interdisziplinäres Netzwerk",
    body:
      "Direkte Verbindungen in Onkologie, Endokrinologie, Radiologie und Nephrologie — wo Kardiologie an andere Fachgebiete grenzt.",
  },
  {
    numeral: "04",
    kicker: "Prävention",
    title: "Sport-Medizin & Reha-Sport",
    body:
      "Zusammenarbeit mit spezialisierten Trainingspartnern für die aktive Nachsorge und leitliniengerechte Bewegungsberatung.",
  },
];

const values = [
  {
    kicker: "Klar",
    title: "Ein Befund. Ein Ansprechpartner.",
    body: "Berichte gehen nach Abstimmung direkt an die zuweisende Kollegin oder den zuweisenden Kollegen. Kurz, präzise, ohne Umwege.",
  },
  {
    kicker: "Diskret",
    title: "Vertraulichkeit als Standard.",
    body: "Wir behandeln Kooperationen genauso vertraulich wie Patientenkontakte — kein Namensdropping, keine Werbung mit Partnern.",
  },
  {
    kicker: "Kurzfristig",
    title: "Termine, wenn es dringend ist.",
    body: "Für dringliche kardiologische Fragestellungen aus dem Netzwerk halten wir tageweise Puffer frei.",
  },
];

export default function KooperationenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kooperationen"
        kicker="Kooperationen"
        chapter="05"
        title={
          <>
            Ein starkes<br />
            Netzwerk<br />
            <span className="italic text-muted">rund um Ihr Herz.</span>
          </>
        }
        lead="Kardiologie funktioniert selten allein. Wir arbeiten mit Kliniken, Hausärzten und ausgewählten Fachdisziplinen zusammen — damit Diagnostik, Therapie und Nachsorge nahtlos ineinander greifen."
      />

      <SplitFeature
        eyebrow="Vier Kooperations-Ebenen"
        heading={
          <>
            Wo Verzahnung<br />
            <span className="italic text-muted">wirklich wirkt.</span>
          </>
        }
        intro="Kooperationen entstehen dort, wo eine Fachrichtung an ihre Grenzen kommt. Wir haben vier Ebenen bewusst aufgebaut — nicht als Marketing-Netzwerk, sondern als Arbeitsstruktur."
        items={partners}
      />

      <Statement
        eyebrow="Arbeitsweise"
        tone="forest"
        footer={
          <>
            Deshalb halten wir Kooperationen strukturiert schmal — dafür belastbar.
            Jede Zuweisung wird persönlich gelesen, jeder Befund persönlich
            zurückgemeldet.
          </>
        }
      >
        Netzwerke sind so gut,<br />
        <span className="italic text-cream/85">wie das schwächste Glied.</span>
      </Statement>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Wie wir zusammenarbeiten</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Drei Prinzipien,<br />
                <span className="italic text-muted">die Kollegen schätzen.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="kicker mb-3">{v.kicker}</div>
                  <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <Reveal>
          <div className="rounded-[28px] border border-line bg-white/70 p-8 md:p-14 text-center">
            <div className="kicker mb-4">Für zuweisende Kolleginnen & Kollegen</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.4vw,44px)] max-w-[820px] mx-auto">
              Sie möchten eine Patientin oder einen Patienten zuweisen?
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[640px] mx-auto">
              Wir richten einen direkten Kanal für zuweisende Praxen ein. Bis dahin
              erreichen Sie uns über die auf der Kontaktseite hinterlegten Wege.
            </p>
          </div>
        </Reveal>
      </section>

      <PageCta
        title="Kooperation aufbauen oder anfragen."
        lead="Wenn Sie als Klinik, Praxis oder Fachdisziplin mit uns zusammenarbeiten möchten, freuen wir uns über ein persönliches Gespräch."
        primaryLabel="KONTAKT AUFNEHMEN"
        secondaryLabel="Zu den Leistungen"
        secondaryHref="/leistungen"
      />
    </>
  );
}
