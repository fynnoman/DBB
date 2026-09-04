import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `GKV als Selbstzahler | ${site.brand} ${site.city}`,
  description:
    "Gesetzlich Versicherte können die kardiologischen Leistungen der Privatpraxis DBB Kardio in St. Ingbert als Selbstzahler in Anspruch nehmen. Transparente GOÄ-Rechnung.",
};

const flow = [
  {
    numeral: "01",
    kicker: "Terminvereinbarung",
    title: "Umfang & Kosten transparent klären.",
    body:
      "Vor dem Termin klären wir Umfang und voraussichtliche Kosten transparent — damit es beim Rechnungserhalt keine Überraschungen gibt.",
  },
  {
    numeral: "02",
    kicker: "Untersuchung",
    title: "Identisch zur privatärztlichen Sprechstunde.",
    body:
      "Ablauf und Diagnostik unterscheiden sich nicht von unseren privatärztlichen Terminen. Sie erhalten dieselbe Zeit, dieselben Untersuchungen und denselben Bericht.",
  },
  {
    numeral: "03",
    kicker: "Rechnung nach GOÄ",
    title: "Transparent, nachvollziehbar, dokumentiert.",
    body:
      "Sie erhalten eine transparente Rechnung nach der Gebührenordnung für Ärzte. Die Zahlung erfolgt direkt an die Praxis oder über eine PVS.",
  },
];

const facts = [
  {
    kicker: "GOÄ",
    body: "Alle Leistungen werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet — verbindlich und einheitlich.",
  },
  {
    kicker: "Keine GKV-Erstattung",
    body: "Eine Kostenerstattung durch die gesetzliche Krankenkasse ist grundsätzlich nicht vorgesehen — bitte einplanen.",
  },
  {
    kicker: "Steuerlich relevant",
    body: "Die Rechnung kann unter bestimmten Voraussetzungen als außergewöhnliche Belastung steuerlich geltend gemacht werden.",
  },
  {
    kicker: "Zusatzversicherung",
    body: "Wenn Sie eine private Zusatzversicherung besitzen, kann diese Teile der Kosten übernehmen. Bitte vorab klären.",
  },
];

export default function GkvSelbstzahlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Für gesetzlich Versicherte"
        kicker="GKV als Selbstzahler"
        chapter="14"
        title={
          <>
            Privatpraxis nutzen —<br />
            <span className="italic text-muted">auch als GKV-Versicherte.</span>
          </>
        }
        lead="Gesetzlich Versicherte können unsere Leistungen als Selbstzahler in Anspruch nehmen. Sie erhalten dieselbe Zeit, dieselbe Diagnostik und eine transparente Rechnung nach GOÄ."
      />

      <SplitFeature
        eyebrow="So läuft es ab"
        heading={
          <>
            Drei Schritte,<br />
            <span className="italic text-muted">ein klarer Weg.</span>
          </>
        }
        intro="Als Selbstzahlerin oder Selbstzahler durchlaufen Sie denselben ärztlichen Weg wie unsere Privatpatienten — mit demselben Standard und einer transparenten Kostenstruktur."
        items={flow}
      />

      <Statement
        eyebrow="Prinzip"
        tone="forest"
        footer={
          <>
            Für uns gibt es medizinisch keine Zwei-Klassen-Gesellschaft. Der
            Unterschied liegt ausschließlich in der administrativen Abwicklung —
            nicht in Umfang, Zeit oder Sorgfalt der Untersuchung.
          </>
        }
      >
        Derselbe Standard<br />
        <span className="italic text-cream/85">für alle, die kommen.</span>
      </Statement>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Was Sie wissen sollten</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Vier Fakten<br />
                <span className="italic text-muted">vorab.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {facts.map((f) => (
              <Reveal key={f.kicker} delay={0.05}>
                <article className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8 h-full">
                  <div className="kicker mb-3">{f.kicker}</div>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                    {f.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[22px] border border-line bg-white/70 p-6 md:p-7">
              <div className="kicker mb-2">Notfall</div>
              <p className="text-[14px] leading-[1.7] text-ink m-0">
                Diese Seite gilt für elektive kardiologische Untersuchungen. Bei
                akuten Beschwerden wählen Sie bitte umgehend die{" "}
                <strong className="tracking-wider">{site.emergencyNumber}</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Als Selbstzahler einen Termin vereinbaren."
        lead="Wir stimmen den Untersuchungsumfang und die voraussichtlichen Kosten vor dem Termin transparent mit Ihnen ab."
        primaryLabel="TERMIN ANFRAGEN"
        secondaryLabel="Zur Patienten-Info"
        secondaryHref="/patienten"
      />
    </>
  );
}
