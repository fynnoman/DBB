"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function PortraitIntro() {
  const [open, setOpen] = useState(false);
  const panelId = "ueber-mich-panel";

  return (
    <section
      id="ueber"
      className="container-shell max-w-[1440px] py-[62px] md:py-[76px] px-4 text-center"
    >
      <Reveal>
        <div
          className="relative mx-auto mb-6 rounded-[28px] overflow-hidden border border-[rgba(183,154,98,0.42)] shadow-soft group"
          style={{
            width: "min(430px, 82vw)",
            aspectRatio: "4 / 5",
          }}
        >
          <Image
            src="/portrait-babeanu-bauer.jpg"
            alt={`Portrait ${site.fullName}`}
            fill
            sizes="(max-width: 640px) 82vw, 430px"
            className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            priority
          />

          <div
            aria-hidden
            className="absolute inset-[10px] rounded-[20px] pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.35)" }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-[13px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          {open ? "WENIGER ANZEIGEN" : "ÜBER MICH"}
        </button>
      </Reveal>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="ueber-mich-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-auto max-w-[720px] pt-10 md:pt-14 text-left">
              <h2 className="font-display text-[clamp(26px,3vw,38px)] leading-[1.12] tracking-[-0.015em]">
                Dr. medic Denisa Babeanu-Bauer
              </h2>
              <p className="mt-3 font-display text-[clamp(17px,1.8vw,21px)] text-gold leading-[1.4]">
                Fachärztin für Innere Medizin und Kardiologie
              </p>

              <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.8] text-ink/85">
                <p>
                  Geboren 1983 in Rumänien, begann mein medizinischer Weg
                  mit dem Studium der Humanmedizin und der anschließenden
                  Facharztweiterbildung am Universitätsklinikum Craiova.
                </p>
                <p>
                  2010 führte mich mein beruflicher Weg nach Deutschland.
                  In den folgenden Jahren sammelte ich umfassende
                  Erfahrungen in der Kardiologie des Marienhaus Klinikums
                  Saarlouis und der SHG-Kliniken Völklingen, insbesondere
                  in der modernen Echokardiographie, der kardiologischen
                  Funktionsdiagnostik und der Notfallmedizin.
                </p>
                <p>
                  Von Ende 2019 bis Ende 2026 war ich als Ärztliche
                  Leiterin der Kardiologie und Angiologie am Medizinischen
                  Versorgungszentrum der SHG in Saarbrücken tätig.
                </p>
                <p>
                  Nach vielen Jahren klinischer und ambulanter Erfahrung
                  habe ich mich entschlossen, meinen Wunsch nach einer
                  eigenen Praxis zu verwirklichen.
                </p>
                <p>
                  Mit der Eröffnung von DBB KARDIO in Saarlouis-Fraulautern
                  im Februar 2027 beginnt für mich ein neuer beruflicher
                  Abschnitt, an einem Ort, mit dem ich auch persönlich
                  verbunden bin.
                </p>
                <p className="text-ink font-display text-[clamp(18px,1.9vw,21px)] leading-[1.5]">
                  Medizinische Kompetenz und Menschlichkeit gehören für
                  mich zusammen.
                </p>
                <p>
                  Ich freue mich darauf, Sie persönlich kennenzulernen und
                  Sie langfristig und vertrauensvoll auf Ihrem Weg zu einer
                  guten Herzgesundheit zu begleiten.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-line">
                <p className="kicker mb-4">Persönliches</p>
                <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.8] text-ink/85">
                  <p>
                    Auch außerhalb der Medizin bin ich neugierig und
                    vielseitig interessiert. Zu meinen Leidenschaften
                    gehören Fernreisen, das Entdecken fremder Kulturen und
                    das Kochen. Meine Freude am Reisen und an der Kulinarik
                    teile ich gelegentlich auch auf meinem YouTube-Kanal.
                  </p>
                  <p>
                    In jüngerer Zeit habe ich außerdem die Acrylmalerei für
                    mich entdeckt. Dabei experimentiere ich gerne mit
                    unterschiedlichen Stilrichtungen, Farben und Techniken.
                    Einige meiner selbst gemalten Bilder finden Sie auch in
                    den Räumlichkeiten meiner Praxis.
                  </p>
                  <p>
                    Die kreative Beschäftigung bietet mir einen schönen
                    Ausgleich zum medizinischen Berufsalltag.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
