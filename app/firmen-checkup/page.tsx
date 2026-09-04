import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { EditorialSplit } from "@/components/EditorialSplit";
import { PageCta } from "@/components/PageCta";
import { Statement } from "@/components/Statement";
import { SplitFeature } from "@/components/SplitFeature";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Kardio-Check-up für Firmen | ${site.brand}`,
  description:
    "Kardiovaskuläre Check-ups für Führungskräfte und Teams. DBB Kardio in St. Ingbert bietet strukturierte Firmen-Programme mit diskreter Kommunikation und individuellem Umfang.",
};

const formats = [
  {
    numeral: "01",
    kicker: "Einzel-Mandat",
    title: "Für einzelne Führungskräfte",
    body:
      "Persönlicher Check-up in ruhiger Atmosphäre. Kommunikation direkt mit der Person, ohne Umweg über die HR — Berichtsformat nach Wunsch.",
  },
  {
    numeral: "02",
    kicker: "Team-Programm",
    title: "Für Führungsteams",
    body:
      "Strukturierte Untersuchungsreihe für Vorstand, Geschäftsleitung oder Schlüsselpersonen — mit einheitlichem Berichtsformat und diskreter Terminlogistik.",
  },
  {
    numeral: "03",
    kicker: "Wiederkehrend",
    title: "Jahresprogramm",
    body:
      "Kardiovaskuläre Betreuung im festen Rhythmus, damit Trends erkennbar bleiben statt Einzelpunkten. Für Unternehmen, die Prävention ernst nehmen.",
  },
];

const principles = [
  {
    kicker: "Diskretion",
    body: "Berichte gehen ausschließlich an die untersuchte Person. Kommunikation mit der HR nur nach ausdrücklicher Freigabe.",
  },
  {
    kicker: "Skalierbar",
    body: "Umfang je Person individuell zwischen Basis- und Executive-Check-up konfigurierbar.",
  },
  {
    kicker: "On-Site optional",
    body: "Onboarding-Termine oder Vorbesprechungen auf Wunsch beim Unternehmen vor Ort.",
  },
];

export default function FirmenCheckupPage() {
  return (
    <>
      <PageHero
        eyebrow="Für Unternehmen"
        kicker="Kardio-Check-up für Firmen"
        chapter="09"
        title={
          <>
            Kardiologie<br />
            <span className="italic text-muted">für Ihre Schlüsselpersonen.</span>
          </>
        }
        lead="Strukturierte kardiovaskuläre Vorsorge für Führungskräfte und Teams — mit individuell konfigurierbarem Umfang, festen Ansprechpartnern und diskreter Kommunikation."
      />

      <EditorialSplit
        src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=1200&auto=format&fit=crop&q=80"
        alt="Symbolisches Bild — diskretes Executive-Setting"
        overline="Firmen-Mandat"
        kicker="Diskretion als Standard"
        side="left"
        aspect="wide"
        heading={
          <>
            Kardiologie für<br />
            <span className="italic text-muted">Ihre Schlüsselpersonen.</span>
          </>
        }
        body={
          <>
            <p>
              Ein Untersuchungstermin, der ohne Corporate-Logistik auskommt: ruhiger
              Ablauf, keine Wartesaal-Situationen, keine Rückfragen aus der HR ohne
              Ihre Freigabe.
            </p>
            <p>
              Wir stimmen Umfang und Kommunikation vorher persönlich mit Ihnen ab —
              nicht mit einem Rahmenvertrag, sondern in einem 20-Minuten-Vorgespräch.
            </p>
          </>
        }
      />

      <SplitFeature
        eyebrow="Drei Formate"
        heading={
          <>
            Drei Wege,<br />
            <span className="italic text-muted">Verantwortung zu übernehmen.</span>
          </>
        }
        intro="Vom einmaligen Termin für eine Führungskraft bis zum strukturierten Jahresprogramm — Firmen-Mandate laufen bei uns nach denselben klaren Prinzipien wie jede andere Behandlung."
        items={formats}
      />

      <Statement
        eyebrow="Prinzip"
        tone="forest"
        footer={
          <>
            Wir behandeln Firmen-Mandate wie jedes andere ärztliche Verhältnis:
            vertraulich, präzise und ohne Blick auf Corporate-Kalender. Umfang und
            Kommunikation stimmen wir vor dem ersten Termin klar ab.
          </>
        }
      >
        Firmen-Kardiologie<br />
        <span className="italic text-cream/85">ist keine Corporate-Wellness.</span>
      </Statement>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
          <Reveal>
            <div className="max-w-[900px] mb-10 md:mb-14">
              <div className="kicker mb-3">Arbeitsweise</div>
              <h2 className="font-display leading-[1.05] text-[clamp(30px,4vw,52px)] tracking-[-0.015em] title-rule">
                Drei Prinzipien,<br />
                <span className="italic text-muted">die den Unterschied machen.</span>
              </h2>
            </div>
          </Reveal>

          <ul className="rounded-[22px] border border-line bg-white/70 divide-y divide-line overflow-hidden">
            {principles.map((p) => (
              <Reveal key={p.kicker} delay={0.05}>
                <li className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 p-6 md:p-8">
                  <div className="kicker">{p.kicker}</div>
                  <p className="text-muted text-[14px] md:text-[15px] leading-[1.75] m-0">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-shell max-w-[1440px] py-[80px] md:py-[112px] px-4">
        <Reveal>
          <article className="relative overflow-hidden rounded-[28px] bg-forest text-cream shadow-soft">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                background:
                  "radial-gradient(600px 300px at 90% -10%, rgba(183,154,98,0.9), transparent 60%), radial-gradient(400px 200px at 5% 110%, rgba(183,154,98,0.6), transparent 55%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />
            <div className="relative p-8 md:p-14">
              <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold-200 mb-4">
                Unternehmen · Anfrage
              </div>
              <h3 className="font-display text-[clamp(28px,3.6vw,46px)] leading-[1.05] max-w-[820px]">
                Ein persönliches Vorgespräch klärt in 20 Minuten,<br />
                <span className="italic text-cream/85">was für Ihre Situation richtig ist.</span>
              </h3>
              <p className="text-cream/80 leading-[1.7] mt-8 max-w-[620px]">
                Wir stimmen Zielgruppe, Untersuchungsumfang, Berichtsformat und
                Rhythmus vorab persönlich ab. Diskret, unverbindlich, ohne
                Rahmenvertrag im Vorfeld.
              </p>
            </div>
          </article>
        </Reveal>
      </section>

      <PageCta
        title="Firmen-Programm anfragen."
        lead="Nutzen Sie das Kontaktformular oder rufen Sie uns direkt an. Wir melden uns diskret und persönlich zurück."
        primaryLabel="ANFRAGE STARTEN"
        secondaryLabel="Zu den Leistungen"
        secondaryHref="/leistungen"
      />
    </>
  );
}
