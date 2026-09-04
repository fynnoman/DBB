import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PageCta } from "@/components/PageCta";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `PVS & Datenschutz | ${site.brand}`,
  description:
    "Transparente privatärztliche Abrechnung über eine PVS, Datenübermittlung an Kooperationslabore und die dazugehörigen Einwilligungsformulare bei DBB Kardio St. Ingbert.",
};

const blocks = [
  {
    numeral: "01",
    kicker: "Private Verrechnungsstelle",
    title: "Abrechnung über eine PVS",
    body:
      "Die privatärztliche Abrechnung kann über eine private Verrechnungsstelle (PVS) erfolgen. Hierfür ist, soweit erforderlich, Ihre Einwilligung zur Datenübermittlung notwendig — wir informieren Sie transparent, bevor Daten weitergegeben werden.",
  },
  {
    numeral: "02",
    kicker: "Labor & Datenübermittlung",
    title: "Kooperationslabor",
    body:
      "Wenn Laboruntersuchungen über ein Kooperationslabor durchgeführt werden, erhalten Sie zu Beginn der Behandlung die notwendigen Datenschutz- und Einwilligungsformulare. Ohne Ihre Zustimmung erfolgt keine Datenweitergabe.",
  },
  {
    numeral: "03",
    kicker: "Ihre Rechte",
    title: "Auskunft, Berichtigung, Widerruf",
    body:
      "Sie haben jederzeit das Recht auf Auskunft über gespeicherte Daten, Berichtigung, Löschung und Widerruf erteilter Einwilligungen. Die Wege dorthin sind auf der vollständigen Datenschutzseite dokumentiert.",
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
            <span className="italic text-muted">von Anfang an.</span>
          </>
        }
        lead="Wie Ihre Rechnung entsteht, welche Daten wohin gehen — und wie Sie jederzeit die Kontrolle behalten. Auf dieser Seite bündeln wir das Wesentliche."
      />

      <EditorialImage
        src="https://images.unsplash.com/photo-1666214277657-e0aa03b1c8a4?w=1600&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild — Vertraulichkeit und Datenschutz"
        overline="Vertraulich"
        caption="Ohne Ihre Einwilligung geht kein Datensatz aus dieser Praxis."
        aspect="cinema"
      />

      <SplitFeature
        eyebrow="Drei Bausteine"
        heading={
          <>
            Was Sie<br />
            <span className="italic text-muted">wissen sollten.</span>
          </>
        }
        intro="Abrechnung und Datenschutz sind bei uns keine Kleingedrucktes — sie sind Teil der ärztlichen Vereinbarung. Diese drei Bausteine bilden den Rahmen."
        items={blocks}
      />

      <PullQuote author="Grundsatz" role="Datenschutz">
        Ohne Ihre Einwilligung geht kein Datensatz aus dieser Praxis. Das ist keine
        Marketing-Formel, sondern die Grundlage unserer Arbeit.
      </PullQuote>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Häufige Fragen</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Was Patientinnen<br />
                <span className="italic text-muted">und Patienten meist fragen.</span>
              </h2>
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {clarifications.map((c, i) => (
              <Reveal key={c.q} delay={0.05}>
                <li className="grid grid-cols-1 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] gap-4 md:gap-14 py-10 md:py-12">
                  <div>
                    <span className="font-display text-gold/70 leading-none text-[clamp(44px,5vw,72px)] tracking-[-0.03em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:pt-4">
                    <h3 className="font-display text-[clamp(20px,2.2vw,28px)] leading-[1.25] mb-3">
                      {c.q}
                    </h3>
                    <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] max-w-[60ch] m-0">
                      {c.a}
                    </p>
                  </div>
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
