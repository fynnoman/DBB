"use client";

import { motion } from "framer-motion";
import { bringWithYou } from "@/lib/site";

export default function ErsterTermin() {
  return (
    <section
      id="erster-termin"
      className="relative bg-forest-800 text-ivory-50 py-20 sm:py-24 md:py-40 overflow-hidden cv-auto"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80vw_60vh_at_10%_0%,rgba(210,177,94,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 sm:gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-gold-300 rule-gold">Erster Termin</p>
            <h2 className="mt-6 md:mt-8 font-serif text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
              Gut vorbereitet zu <span className="italic text-gold-300">Ihrem Termin.</span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-xl text-[15px] md:text-lg leading-relaxed text-ivory-100/90">
              Bei Ihrer ersten Vorstellung erfolgen eine ausführliche Anamnese, eine körperliche
              Untersuchung, ein EKG sowie eine Echokardiographie, bei Bedarf einschließlich
              Speckle Tracking. Weitere Untersuchungen richten sich gezielt nach Ihren Beschwerden
              und dem individuellen Krankheitsbild.
            </p>
            <p className="mt-4 md:mt-6 max-w-xl text-[15px] md:text-lg leading-relaxed text-ivory-100/85">
              Bitte bringen Sie alle medizinisch relevanten Unterlagen, aktuelle Laborwerte, Ihre
              Medikamentenliste und Informationen zu Allergien mit.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-3.5 sm:px-4 py-2 text-[10.5px] sm:text-[11px] uppercase tracking-brand-wide text-gold-200 min-h-[40px]">
                Datenschutzformular · wird ergänzt
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-3.5 sm:px-4 py-2 text-[10.5px] sm:text-[11px] uppercase tracking-brand-wide text-gold-200 min-h-[40px]">
                Anamnesebogen · wird ergänzt
              </span>
              <button
                type="button"
                onClick={() => typeof window !== "undefined" && window.print()}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold-300 px-5 py-3 text-sm font-semibold text-forest-800 hover:bg-gold-200 transition-colors min-h-[48px]"
              >
                <Printer />
                Checkliste drucken
              </button>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark rounded-3xl p-5 sm:p-6 md:p-8"
            >
              <p className="eyebrow text-gold-300">Bitte mitbringen</p>
              <ul className="mt-5 md:mt-6 divide-y divide-white/10">
                {bringWithYou.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 sm:gap-4 py-3.5 sm:py-4 first:pt-0 last:pb-0">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-300/15 text-gold-300 text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-base sm:text-lg leading-snug text-ivory-50">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Printer() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9V4h12v5M6 18H4v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2M8 14h8v6H8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
