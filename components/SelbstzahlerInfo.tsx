"use client";

import { motion } from "framer-motion";

export default function SelbstzahlerInfo() {
  return (
    <section className="relative bg-ivory-100 py-20 sm:py-24 md:py-40 overflow-hidden cv-auto">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 sm:gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow rule-gold">Für wen ist die Praxis da?</p>
            <h2 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
              Privatpatienten und{" "}
              <span className="italic text-forest-700">Selbstzahler.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-5 md:space-y-6 text-[15px] md:text-lg leading-relaxed text-forest-700/90"
          >
            <p>
              Privatversicherte, Beihilfeberechtigte und Selbstzahler sind herzlich willkommen. Auch
              gesetzlich versicherte Patientinnen und Patienten können sämtliche angebotenen
              Leistungen in Anspruch nehmen. Die Behandlung erfolgt dann jedoch nicht über die
              gesetzliche Krankenversicherung, sondern als privatärztliche Selbstzahlerleistung.
            </p>
            <p>
              Die Abrechnung der ärztlichen Leistungen erfolgt nach der Gebührenordnung für Ärzte
              (GOÄ). Bei individuell zusammengestellten Vorsorge- und Check-up-Konzepten werden
              Leistungsumfang und die voraussichtlichen Kosten vorab transparent erläutert; die
              Rechnung bleibt eine GOÄ-konforme Einzelabrechnung.
            </p>

            <ul className="mt-6 md:mt-8 grid gap-2.5 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              <Pill title="Privatpatienten" />
              <Pill title="Beihilfeberechtigte" />
              <Pill title="Selbstzahler" />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({ title }: { title: string }) {
  return (
    <li className="glass rounded-2xl px-4 py-3.5 sm:py-4 text-center">
      <p className="font-serif text-forest-800 text-[17px] sm:text-lg">{title}</p>
    </li>
  );
}
