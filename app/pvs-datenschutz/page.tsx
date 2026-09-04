import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `PVS & Datenschutz | ${site.brand}`,
  description:
    "Transparente privatärztliche Abrechnung über eine PVS, Datenübermittlung an Kooperationslabore und die dazugehörigen Einwilligungsformulare bei DBB Kardio St. Ingbert.",
};

const blocks = [
  {
    kicker: "Private Verrechnungsstelle",
    title: "Abrechnung über eine PVS",
    body: "Die privatärztliche Abrechnung kann über eine private Verrechnungsstelle (PVS) erfolgen. Hierfür ist, soweit erforderlich, Ihre Einwilligung zur Datenübermittlung notwendig — wir informieren Sie transparent, bevor Daten weitergegeben werden.",
  },
  {
    kicker: "Labor & Datenübermittlung",
    title: "Kooperationslabor",
    body: "Wenn Laboruntersuchungen über ein Kooperationslabor durchgeführt werden, erhalten Sie zu Beginn der Behandlung die notwendigen Datenschutz- und Einwilligungsformulare. Ohne Ihre Zustimmung erfolgt keine Datenweitergabe.",
  },
  {
    kicker: "Ihre Rechte",
    title: "Auskunft, Berichtigung, Widerruf",
    body: "Sie haben jederzeit das Recht auf Auskunft über gespeicherte Daten, Berichtigung, Löschung und Widerruf erteilter Einwilligungen. Wir stellen die dafür notwendigen Wege klar auf der Datenschutzseite dar.",
  },
];

const clarifications = [
  {
    q: "Warum überhaupt eine PVS?",
    a: "Die Abrechnung über eine PVS entlastet die Praxis administrativ und ermöglicht klare Zahlungsprozesse. Rechnungen bleiben transparent nachvollziehbar.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Es werden ausschließlich die für die Rechnungsstellung erforderlichen Daten übermittelt — nach Ihrer Einwilligung und im Rahmen der geltenden Datenschutzgesetze.",
  },
  {
    q: "Kann ich die Einwilligung widerrufen?",
    a: "Ja. Ein Widerruf ist jederzeit möglich und wirkt für die Zukunft. Bereits durchgeführte Übermittlungen bleiben davon rechtlich unberührt.",
  },
];

export default function PvsDatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Abrechnung & Datenschutz"
        kicker="PVS & Datenschutz"
        chapter="13"
        title={
          <>
            Transparent geregelt,<br />
            <span className="text-muted italic">von Anfang an.</span>
          </>
        }
        lead="Wie Ihre Rechnung entsteht, welche Daten wohin gehen — und wie Sie jederzeit die Kontrolle behalten. Auf dieser Seite bündeln wir das Wesentliche."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <div className="grid gap-5 md:grid-cols-3">
          {blocks.map((b) => (
            <Reveal key={b.title} delay={0.05}>
              <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                <div className="kicker mb-3">{b.kicker}</div>
                <h3 className="font-display text-[22px] leading-[1.2] mb-3">
                  {b.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {b.body}
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
              <div className="kicker mb-3">Häufige Fragen</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                Was Patientinnen und Patienten meist fragen.
              </h2>
            </div>
          </Reveal>

          <ul className="rounded-[22px] border border-line bg-white/70 divide-y divide-line overflow-hidden">
            {clarifications.map((c) => (
              <Reveal key={c.q} delay={0.05}>
                <li className="p-6 md:p-7">
                  <div className="font-display text-[19px] md:text-[20px] leading-[1.3] mb-2">
                    {c.q}
                  </div>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75] m-0">
                    {c.a}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title="Detailfragen zur Abrechnung?"
        lead="Für konkrete Rückfragen zur Rechnungsstellung oder Datenübermittlung ist der direkte Kontakt am schnellsten."
        primaryLabel="KONTAKT AUFNEHMEN"
        secondaryLabel="Vollständiger Datenschutz"
        secondaryHref="/datenschutz"
      />
    </>
  );
}
