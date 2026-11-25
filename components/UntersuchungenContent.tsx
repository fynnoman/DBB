"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type Tone = "gold" | "forest";

type Section = {
  id: string;
  title: string;
  lead?: string;
  tone?: Tone;
  bullets?: string[];
  paragraphs?: string[];
  extra?: {
    heading?: string;
    bullets?: string[];
    paragraph?: string;
  }[];
};

const ablaufBullets = [
  "Ärztliches Gespräch und Erhebung der Krankengeschichte (Anamnese)",
  "Körperliche Untersuchung",
  "Ruhe-EKG",
  "Echokardiographie (Herzultraschall), gegebenenfalls mit Speckle-Tracking-Analyse",
  "Verständliche Erläuterung der Untersuchungsergebnisse",
  "Individuelle Therapieempfehlung und Beratung zum weiteren Vorgehen",
  "Erstellung eines schriftlichen Arztberichts mit Zusammenfassung der Befunde und Empfehlungen",
];

const diagnostik: Section[] = [
  {
    id: "ruhe-ekg",
    title: "Ruhe-EKG",
    tone: "gold",
    paragraphs: [
      "Über kleine Elektroden auf der Haut werden die elektrischen Signale des Herzens aufgezeichnet. Dadurch können Herzrhythmusstörungen sowie Hinweise auf Durchblutungsstörungen und weitere krankhafte Veränderungen des Herzens erkannt werden.",
    ],
  },
  {
    id: "vektorkardiographie",
    title: "Vektorkardiographie (räumliches EKG)",
    tone: "gold",
    paragraphs: [
      "Eine erweiterte Form des EKGs, bei der die elektrischen Signale des Herzens dreidimensional dargestellt werden. Dadurch können zusätzliche Informationen über die elektrische Aktivität des Herzens und Hinweise auf krankhafte Veränderungen gewonnen werden.",
    ],
  },
  {
    id: "belastungs-ekg",
    title: "Belastungsergometrie (Belastungs-EKG)",
    tone: "gold",
    paragraphs: [
      "Während Sie auf einem Fahrradergometer trainieren, werden Ihre Herzaktivität und Ihr Blutdruck kontinuierlich überwacht. So lässt sich beurteilen, wie Ihr Herz auf körperliche Anstrengung reagiert und wie belastbar Sie sind. Auch Hinweise auf belastungsabhängige Durchblutungs- und Herzrhythmusstörungen können dabei gewonnen werden.",
    ],
  },
  {
    id: "echokardiographie",
    title: "Echokardiographie (Herzultraschall)",
    tone: "gold",
    paragraphs: [
      "Eine schmerzfreie und strahlenfreie Ultraschalluntersuchung, bei der das schlagende Herz in Echtzeit sichtbar gemacht wird.",
      "Dabei können unter anderem folgende Veränderungen beurteilt werden:",
    ],
    bullets: [
      "Größe und Funktion des Herzens",
      "Herzklappenfehler wie Undichtigkeiten oder Verengungen",
      "Angeborene Herzfehler",
      "Hinweise auf Durchblutungsstörungen des Herzmuskels",
      "Veränderungen des Herzmuskels und des Herzbeutels",
      "Veränderungen der darstellbaren Abschnitte der Hauptschlagader (Aorta)",
    ],
    extra: [
      {
        paragraph:
          "Die Herzkranzgefäße selbst lassen sich mittels konventioneller Echokardiographie nicht ausreichend beurteilen. Hierfür stehen andere Untersuchungsmethoden zur Verfügung, die bei Bedarf ausführlich mit Ihnen besprochen und veranlasst werden können.",
      },
    ],
  },
  {
    id: "speckle-tracking",
    title: "Speckle-Tracking-Analyse (Strain-Analyse / AFI-Messung)",
    tone: "gold",
    paragraphs: [
      "Eine moderne, erweiterte Ultraschalltechnik, mit der die Bewegung und das Zusammenziehen des Herzmuskels besonders genau untersucht werden.",
      "Dadurch können bereits erste Anzeichen einer Herzmuskelfunktionsstörung erkannt werden, noch bevor die herkömmlich gemessene Pumpkraft des Herzens nachlässt. Auch bei seltenen Herzerkrankungen und möglichen Durchblutungsstörungen kann diese Untersuchung wertvolle zusätzliche Informationen liefern.",
      "Die Speckle-Tracking-Analyse ist insbesondere von Bedeutung bei:",
    ],
    bullets: [
      "Unklarer Luftnot und eingeschränkter körperlicher Leistungsfähigkeit",
      "Verdacht auf Herzschwäche oder Herzmuskelerkrankungen",
      "Kardio-Onkologie",
      "Kardio-Rheumatologie",
      "Abklärung seltener Herzerkrankungen",
      "Früherkennung von Herzmuskelfunktionsstörungen",
    ],
    extra: [
      {
        paragraph:
          "Sind sowohl die konventionelle Echokardiographie als auch die Speckle-Tracking-Analyse unauffällig, ist eine relevante Störung der Herzmuskelfunktion weniger wahrscheinlich.",
      },
      {
        paragraph:
          "Die abschließende Beurteilung erfolgt stets unter Berücksichtigung Ihrer Beschwerden, Ihrer Krankengeschichte, Ihrer persönlichen Risikofaktoren und sämtlicher Untersuchungsergebnisse. Nicht jede Herzerkrankung lässt sich allein durch einen Herzultraschall ausschließen.",
      },
    ],
  },
  {
    id: "stressecho",
    title: "Stressechokardiographie (Herzultraschall unter Belastung)",
    tone: "gold",
    paragraphs: [
      "Das Herz wird während körperlicher Anstrengung auf einem Fahrradergometer mittels Ultraschall untersucht.",
      "Dadurch können Hinweise auf Durchblutungsstörungen sowie Funktionsstörungen des Herzmuskels und der Herzklappen erkannt werden, die bei einer Untersuchung in Ruhe möglicherweise nicht sichtbar sind.",
    ],
  },
  {
    id: "duplexsonographie",
    title: "Duplexsonographie der Halsgefäße",
    tone: "gold",
    paragraphs: [
      "Eine schmerzfreie und strahlenfreie Ultraschalluntersuchung der Blutgefäße, die das Gehirn mit Blut versorgen.",
      "Dabei können Gefäßablagerungen (Plaques), Veränderungen der Gefäßwände und Verengungen erkannt werden. Die Untersuchung ermöglicht eine ergänzende Einschätzung Ihres persönlichen Risikos für einen Schlaganfall und andere Herz-Kreislauf-Erkrankungen.",
    ],
  },
  {
    id: "langzeit-ekg",
    title: "Langzeit-EKG mit KI-gestützter Analyse",
    tone: "gold",
    paragraphs: [
      "Ein kleines tragbares Gerät zeichnet Ihre Herzaktivität über einen längeren Zeitraum während Ihres gewohnten Alltags und im Schlaf auf.",
      "So können auch Herzrhythmusstörungen erkannt werden, die nur gelegentlich auftreten und bei einem herkömmlichen Ruhe-EKG möglicherweise nicht erfasst werden.",
      "Die Auswertung wird durch künstliche Intelligenz unterstützt und anschließend ärztlich überprüft und beurteilt.",
    ],
  },
  {
    id: "langzeit-rr",
    title: "Langzeit-Blutdruckmessung",
    tone: "gold",
    paragraphs: [
      "Ein tragbares Blutdruckmessgerät misst Ihren Blutdruck über 24 Stunden in regelmäßigen Abständen, sowohl tagsüber als auch während des Schlafs.",
      "Dadurch lässt sich feststellen, ob ein Bluthochdruck vorliegt, wie sich der Blutdruck im Tages- und Nachtverlauf verhält und ob eine bestehende medikamentöse Behandlung ausreichend wirksam ist.",
      "Auffällige nächtliche Blutdruckwerte können zudem indirekte Hinweise auf ein mögliches Schlafapnoe-Syndrom liefern.",
    ],
  },
];

const weitereLeistungen: Section[] = [
  {
    id: "praeoperativ",
    title: "Präoperative kardiologische Risikobeurteilung",
    tone: "forest",
    paragraphs: [
      "Vor einem großen operativen Eingriff wird Ihr individuelles kardiales Risiko beurteilt. Dabei wird geprüft, ob eine Herzerkrankung vorliegt, wie belastbar Ihr Herz ist und ob besondere kardiologische Maßnahmen vor der Operation erforderlich sind.",
    ],
    extra: [
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG und Echokardiographie, gegebenenfalls weitere Untersuchungen entsprechend dem individuellen Risikoprofil und der Art des geplanten Eingriffs.",
      },
    ],
  },
  {
    id: "zweitmeinung",
    title: "Kardiologische Zweitmeinung",
    tone: "forest",
    paragraphs: [
      "Sie haben bereits eine Diagnose oder eine Therapieempfehlung erhalten und wünschen eine weitere fachärztliche Einschätzung?",
      "Ihre bisherigen Befunde werden sorgfältig beurteilt. Die Untersuchungsergebnisse, mögliche Behandlungsalternativen und das weitere Vorgehen werden ausführlich mit Ihnen besprochen.",
    ],
    extra: [
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG und Echokardiographie, sowie bei entsprechender medizinischer Indikation weitere ergänzende Untersuchungen.",
      },
    ],
  },
  {
    id: "kardio-onkologie",
    title: "Kardio-Onkologie",
    tone: "forest",
    paragraphs: [
      "Bestimmte Krebstherapien, beispielsweise Chemotherapie, Immuntherapie oder Bestrahlung, können das Herz und die Blutgefäße beeinträchtigen.",
      "Durch gezielte kardiologische Untersuchungen können mögliche Auswirkungen auf das Herz frühzeitig erkannt und behandelt werden. Ziel ist es, die Herzgesundheit während der Krebsbehandlung bestmöglich zu schützen.",
    ],
    extra: [
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG, Echokardiographie mit Speckle-Tracking-Analyse, spezielle Laboruntersuchungen bei Bedarf.",
      },
      {
        paragraph:
          "Abhängig von der Art der Krebstherapie und Ihrem persönlichen Risikoprofil können Verlaufskontrollen beispielsweise in Abständen von 4, 8 oder 12 Wochen erforderlich sein. Die Untersuchungsintervalle werden individuell festgelegt.",
      },
    ],
  },
  {
    id: "kardio-rheumatologie",
    title: "Kardio-Rheumatologie",
    tone: "forest",
    paragraphs: [
      "Rheumatische Erkrankungen, Autoimmunerkrankungen und andere chronische Entzündungserkrankungen können nicht nur die Gelenke und andere Organe, sondern auch das Herz und die Blutgefäße betreffen.",
      "Gezielte kardiologische Untersuchungen ermöglichen eine frühzeitige Erkennung möglicher Veränderungen des Herzmuskels, der Herzklappen, des Herzbeutels und der Gefäße.",
    ],
    extra: [
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG, Echokardiographie, Speckle-Tracking-Analyse, ergänzende Labor- und Gefäßuntersuchungen bei Bedarf.",
      },
    ],
  },
  {
    id: "frauenherz",
    title: "Frauenherzsprechstunde",
    tone: "forest",
    paragraphs: [
      "Herzerkrankungen können sich bei Frauen anders äußern als bei Männern. Auch hormonelle Veränderungen, Schwangerschaft, Schwangerschaftskomplikationen und die Wechseljahre können die Herzgesundheit und das persönliche Herz-Kreislauf-Risiko beeinflussen.",
      "Die Frauenherzsprechstunde berücksichtigt diese geschlechtsspezifischen Besonderheiten bei der Vorsorge, Diagnostik und Behandlung von Herz-Kreislauf-Erkrankungen.",
    ],
    extra: [
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG, Echokardiographie, Speckle-Tracking-Analyse.",
      },
      {
        heading: "Je nach Beschwerdeart und individuellem Risikoprofil können weitere Untersuchungen sinnvoll sein",
        bullets: [
          "Schilddrüsensonographie",
          "Belastungs-EKG oder Stressechokardiographie",
          "Langzeit-EKG",
          "24-Stunden-Blutdruckmessung",
          "Duplexsonographie der Halsgefäße",
          "Erweiterte Laboruntersuchungen",
          "Überweisung zur weiterführenden endokrinologischen oder gynäkologischen Abklärung und Mitbehandlung",
        ],
      },
    ],
  },
  {
    id: "seltene-herzerkrankungen",
    title: "Abklärung seltener Herzerkrankungen",
    tone: "forest",
    paragraphs: [
      "Nicht jede Herzerkrankung hat eine häufige oder leicht erkennbare Ursache. Hinter unklaren Beschwerden, Veränderungen des Herzmuskels oder einer Herzschwäche können sich auch seltene Erkrankungen verbergen.",
      "Hierzu zählen unter anderem:",
    ],
    bullets: [
      "Kardiale Amyloidose",
      "Morbus Fabry",
      "Kardiale Sarkoidose",
      "Weitere seltene Herzmuskelerkrankungen (Kardiomyopathien)",
    ],
    extra: [
      {
        paragraph:
          "Mithilfe spezialisierter Untersuchungen können erste Hinweise auf solche Erkrankungen erkannt und gezielte weiterführende diagnostische Schritte eingeleitet werden.",
      },
      {
        heading: "Beinhaltet",
        paragraph:
          "Ruhe-EKG, Echokardiographie mit Speckle-Tracking-Analyse und gezielte Laboruntersuchungen. Bei Bedarf erfolgt die weiterführende Abklärung in Zusammenarbeit mit spezialisierten Fachzentren.",
      },
    ],
  },
  {
    id: "labordiagnostik",
    title: "Labordiagnostik",
    tone: "forest",
    paragraphs: [
      "Blutuntersuchungen können wichtige zusätzliche Informationen über Ihre Herzgesundheit und Ihr persönliches Herz-Kreislauf-Risiko liefern.",
      "Hierzu gehören beispielsweise:",
    ],
    bullets: [
      "Laborwerte zur Beurteilung einer möglichen Herzschwäche",
      "Cholesterinwerte und weitere Fettstoffwechselparameter",
      "Entzündungsparameter",
      "Schilddrüsenwerte",
      "Nierenfunktion und Elektrolyte",
      "Spezielle Biomarker bei bestimmten Herzerkrankungen",
    ],
    extra: [
      {
        paragraph:
          "Die Laboruntersuchungen werden individuell nach medizinischer Indikation in Zusammenarbeit mit einem externen Labor durchgeführt.",
      },
    ],
  },
];

function Accordion({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-3">
      {sections.map((s) => (
        <AccordionItem key={s.id} section={s} />
      ))}
    </div>
  );
}

function AccordionItem({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);
  const panelId = `panel-${section.id}`;
  const tone = section.tone ?? "gold";

  const toneStyles =
    tone === "forest"
      ? "border-[rgba(35,79,67,0.32)] bg-gradient-to-br from-[rgba(35,79,67,0.08)] via-white to-white"
      : "border-gold/45 bg-gradient-to-br from-gold-50 via-white to-white";

  const barColor = tone === "forest" ? "via-forest" : "via-gold";
  const iconColor = tone === "forest" ? "text-forest" : "text-gold";

  return (
    <article
      id={section.id}
      className={`relative overflow-hidden rounded-[18px] border ${toneStyles} scroll-mt-28`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${barColor} to-transparent`}
      />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <div className="flex items-center gap-4 min-w-0">
          {/* Platzhalter für Piktogramm, später austauschbar */}
          <span
            aria-hidden
            className={`hidden sm:grid place-items-center w-11 h-11 rounded-full border ${
              tone === "forest" ? "border-forest/40" : "border-gold/55"
            } ${iconColor} flex-shrink-0`}
          >
            <HeartGlyph />
          </span>
          <h3 className="font-display text-[clamp(17px,2.2vw,22px)] leading-[1.25] text-ink">
            {section.title}
          </h3>
        </div>
        <span
          aria-hidden
          className={`flex-shrink-0 grid place-items-center w-9 h-9 rounded-full border ${
            tone === "forest" ? "border-forest/40" : "border-gold/55"
          } ${iconColor} transition-transform duration-500 ease-editorial ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <PlusIcon />
        </span>
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
            <div className="px-5 md:px-6 pb-6 md:pb-7 pt-1 space-y-4 text-[15.5px] md:text-[16px] leading-[1.75] text-ink/85">
              {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
              {section.bullets && (
                <ul className="space-y-2.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span
                        aria-hidden
                        className={`mt-[11px] inline-block h-px w-3 ${
                          tone === "forest" ? "bg-forest" : "bg-gold"
                        } flex-shrink-0`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.extra?.map((ex, i) => (
                <div key={i} className="space-y-3">
                  {ex.heading && (
                    <div
                      className={`text-[12px] tracking-[0.18em] uppercase font-extrabold ${
                        tone === "forest" ? "text-forest" : "text-gold-700"
                      }`}
                    >
                      {ex.heading}
                    </div>
                  )}
                  {ex.paragraph && <p>{ex.paragraph}</p>}
                  {ex.bullets && (
                    <ul className="space-y-2.5">
                      {ex.bullets.map((b) => (
                        <li key={b} className="flex gap-3 items-start">
                          <span
                            aria-hidden
                            className={`mt-[11px] inline-block h-px w-3 ${
                              tone === "forest" ? "bg-forest" : "bg-gold"
                            } flex-shrink-0`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function HeartGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function UntersuchungenContent() {
  return (
    <section className="container-shell max-w-[960px] px-4 py-20 md:py-28">
      <Reveal>
        <header className="mb-12 md:mb-16">
          <p className="kicker mb-3">Untersuchungen</p>
          <h1 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.1] text-ink mb-5">
            Ablauf der kardiologischen Untersuchung
          </h1>
          <p className="text-[17px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[720px]">
            Patientenverständliche Erklärungen zu den in der Praxis angebotenen
            Untersuchungen. Tippen Sie auf eine Untersuchung, um die Erläuterung
            einzublenden.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <section className="mb-16 md:mb-20">
          <div className="rounded-[22px] border border-gold/45 bg-gradient-to-br from-gold-100 via-gold-50 to-white p-7 md:p-9">
            <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold-700 mb-4">
              Basisuntersuchung
            </div>
            <h2 className="font-display text-[clamp(22px,2.6vw,30px)] leading-[1.2] text-ink mb-5">
              Die kardiologische Basisuntersuchung in meiner Praxis umfasst
            </h2>
            <ul className="space-y-3 text-[15.5px] md:text-[16px] leading-[1.7] text-ink/85">
              {ablaufBullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span
                    aria-hidden
                    className="mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15.5px] md:text-[16px] leading-[1.75] text-ink/85">
              Auf Grundlage der Untersuchungsergebnisse und Ihrer individuellen
              Beschwerden werden weitere diagnostische Maßnahmen nach
              ärztlicher Beurteilung und ausschließlich bei entsprechender
              medizinischer Indikation geplant und durchgeführt.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-16 md:mb-20">
          <h2
            id="kardiologische-diagnostik"
            className="font-display text-[clamp(24px,3vw,34px)] leading-[1.15] text-ink mb-3 scroll-mt-28"
          >
            Kardiologische Diagnostik
          </h2>
          <p className="text-[15.5px] md:text-[16px] leading-[1.7] text-ink/80 mb-8 max-w-[720px]">
            Alle diagnostischen Verfahren, die in der Praxis angeboten werden.
          </p>
          <Accordion sections={diagnostik} />
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2
            id="weitere-leistungen"
            className="font-display text-[clamp(24px,3vw,34px)] leading-[1.15] text-ink mb-3 scroll-mt-28"
          >
            Weitere kardiologische Leistungen und spezialisierte Sprechstunden
          </h2>
          <p className="text-[15.5px] md:text-[16px] leading-[1.7] text-ink/80 mb-8 max-w-[720px]">
            Ergänzende Leistungen und spezialisierte Sprechstunden für
            individuelle Beschwerden und Fragestellungen.
          </p>
          <Accordion sections={weitereLeistungen} />
        </section>
      </Reveal>
    </section>
  );
}
