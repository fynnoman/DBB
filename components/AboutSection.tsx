"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";

export default function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="relative py-20 sm:py-24 md:py-40 bg-ivory-50 cv-auto"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 md:grid-cols-12 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <ParallaxImage
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop"
            alt="Dr. medic Denisa Babeanu-Bauer"
            className="aspect-[4/5] sm:aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto md:max-w-none"
            intensity={70}
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <p className="mt-3 text-center md:text-left text-[11px] sm:text-xs uppercase tracking-brand-wide text-forest-500">
            Portraitfoto wird ergänzt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <p className="eyebrow rule-gold">Über mich</p>
          <h2 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
            Kardiologie mit Zeit,{" "}
            <span className="italic text-forest-700">Ruhe</span> und Präzision.
          </h2>
          <p className="mt-6 md:mt-8 max-w-2xl text-[15px] md:text-lg leading-relaxed text-forest-700/90">
            Als Kardiologin arbeite ich für Menschen, die ihre Herzgesundheit ernst nehmen. In
            meiner Privatpraxis in St. Ingbert nehme ich mir für jede Untersuchung ausreichend Zeit,
            höre genau zu und ordne Befunde klar ein. Der Fokus liegt auf moderner Diagnostik,
            individueller Prävention und einer verständlichen Sprache.
          </p>

          <ul className="mt-7 sm:mt-8 md:mt-10 grid gap-3 sm:gap-3.5 grid-cols-1 sm:grid-cols-2">
            <Fact label="Ausbildung" value="Facharztausbildung Kardiologie" />
            <Fact label="Schwerpunkt" value="Echokardiographie, Speckle Tracking" />
            <Fact label="Zusatzfokus" value="Cardio-Onkologie · Frauenherz" />
            <Fact label="Haltung" value="Persönlich. Ruhig. Präzise." />
          </ul>

          <div className="mt-10 md:mt-12">
            <Link
              href="/ueber-mich"
              prefetch
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-4 text-sm font-semibold text-forest-800 hover:bg-white/70 transition-colors min-h-[52px]"
            >
              Mehr über mich
              <Arrow />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <li className="glass rounded-2xl p-4 sm:p-4">
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 font-serif text-[17px] sm:text-lg leading-snug text-forest-800">
        {value}
      </p>
    </li>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
