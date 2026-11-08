"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/Reveal";

type Tone = "default" | "warm" | "forest";

type Group = {
  title: string;
  items: string[];
  tone?: Tone;
};

const groups: Group[] = [
  {
    title: "Kardiologische Vorsorge und Nachsorge",
    items: [
      "Vorsorge und Prävention der kardiovaskulären Erkrankungen",
      "Nachsorge aller Herzerkrankungen (KHK, Herzklappenfehler, Herzinfarkt, Bypass- und Herzklappenoperationen, Herzrhythmusstörungen, Herzinsuffizienz, angeborene Herzfehler, Herzmuskelentzündung, Bluthochdruck, Lungenhochdruck)",
    ],
  },
  {
    title: "Kardiologische Diagnostik",
    tone: "warm",
    items: [
      "Ruhe-EKG",
      "Vektorkardiographie",
      "Belastungsergometrie",
      "Echokardiographie und Speckle-Tracking-Analyse",
      "Stressechokardiographie (Echokardiographie unter Belastung)",
      "Duplexsonographie der Halsgefässe",
      "Langzeit-EKG mit KI-gestützter Analyse",
      "Langzeit-Blutdruckmessung",
    ],
  },
  {
    title: "Weitere kardiologische Leistungen",
    tone: "forest",
    items: [
      "Präoperative kardiologische Risikobeurteilung",
      "Kardiologische Zweitmeinung",
      "Kardio-Onkologie",
      "Kardio-Rheumatologie",
      "Frauenherzsprechstunde",
      "Abklärung seltener Herzerkrankungen",
      "Labordiagnostik",
    ],
  },
];

type Checkup = {
  id: string;
  title: string;
  lead: string;
  listHeading?: string;
  items: string[];
  cta: string;
};

const checkups: Checkup[] = [
  {
    id: "kardio",
    title: "Kardio Check-up",
    lead: "Der Kardio Check-up eignet sich für Patientinnen und Patienten, die eine strukturierte kardiologische Ersteinschätzung wünschen.",
    items: [
      "ausführliche Anamnese",
      "körperliche Untersuchung",
      "12-Kanal-EKG",
      "Echokardiographie",
      "Belastungs-EKG",
      "ärztlicher Befundbericht",
    ],
    cta: "KARDIO CHECK-UP BUCHEN",
  },
  {
    id: "executive",
    title: "Executive Check-up",
    lead: "Der Executive Check-up ist eine umfassende Abklärung des Herzens inklusive kardiovaskulärer Risikoanalyse und individueller Präventionsempfehlung.",
    listHeading: "Leistungen",
    items: [
      "ausführliche Anamnese",
      "körperliche Untersuchung",
      "12-Kanal-EKG mit Vektorkardiographie",
      "Echokardiographie inkl. Speckle Tracking Analyse",
      "Belastungs-EKG oder Stressechokardiographie",
      "Dopplersonographie der Halsgefäße",
      "Abschlussgespräch",
      "ärztlicher Befundbericht",
    ],
    cta: "EXECUTIVE CHECK-UP BUCHEN",
  },
];

const toneStyles: Record<Tone, string> = {
  default:
    "bg-gradient-to-br from-[rgba(183,154,98,0.18)] via-gold-50 to-white border-gold/45",
  warm: "bg-gradient-to-br from-gold-100 via-gold-50 to-white border-gold/60",
  forest:
    "bg-gradient-to-br from-[rgba(35,79,67,0.18)] via-[rgba(35,79,67,0.08)] to-white border-[rgba(35,79,67,0.42)]",
};

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {groups.map((g) => {
            const tone: Tone = g.tone ?? "default";
            return (
              <StaggerItem key={g.title}>
                <article
                  className={`group relative h-full rounded-[22px] border p-7 md:p-9 card-lift overflow-hidden ${toneStyles[tone]}`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute top-0 left-0 right-0 h-px ${
                      tone === "warm"
                        ? "bg-gradient-to-r from-transparent via-gold to-transparent"
                        : tone === "forest"
                          ? "bg-gradient-to-r from-transparent via-forest to-transparent"
                          : "bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                    }`}
                  />
                  <h3 className="font-display text-[27px] md:text-[27px] mb-6 leading-tight">
                    {g.title}
                  </h3>
                  <ul className="space-y-3 text-[18px] md:text-[17px] leading-[1.7] text-ink/85">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 items-start">
                        <span
                          aria-hidden
                          className="mt-[12px] md:mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
          {checkups.map((c) => (
            <StaggerItem key={c.id}>
              <CheckupCard data={c} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CheckupCard({ data }: { data: Checkup }) {
  const [open, setOpen] = useState(false);
  const panelId = `checkup-${data.id}`;

  return (
    <article className="group relative h-full overflow-hidden border border-gold/60 bg-gradient-to-br from-gold-100 via-gold-50 to-white rounded-[22px] p-7 md:p-9 flex flex-col">
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <h3 className="font-display text-[27px] md:text-[27px] mb-3 leading-tight">
        {data.title}
      </h3>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="relative z-10 self-start inline-flex items-center min-h-[44px] -mx-2 px-2 py-2 text-[13px] font-extrabold tracking-[0.1em] uppercase text-muted hover:text-ink active:text-ink transition-colors rounded-md"
        style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
      >
        {open ? "Weniger anzeigen" : "Mehr anzeigen"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5">
              <p className="text-ink/85 text-[16px] md:text-[17px] leading-[1.7] mb-5">
                {data.lead}
              </p>

              {data.listHeading && (
                <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold mb-3">
                  {data.listHeading}
                </div>
              )}

              <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.7] text-ink/85">
                {data.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      aria-hidden
                      className="mt-[9px] inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="#kontakt"
        className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-gold text-white px-6 text-[13px] md:text-[12px] font-extrabold tracking-[0.14em] uppercase hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
      >
        {data.cta}
      </a>
    </article>
  );
}
