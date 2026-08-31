"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
    label: "Untersuchungsraum",
  },
  {
    src: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1200&auto=format&fit=crop",
    label: "Diagnostik · Echo",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    label: "Anmeldung",
  },
];

export default function PraxisGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [30, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-15, 35]);

  return (
    <section
      id="praxis"
      ref={ref}
      className="relative bg-ivory-50 py-20 sm:py-24 md:py-40 cv-auto"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="eyebrow rule-gold">Praxis</p>
            <h2 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
              Ein Blick in unsere <span className="italic text-forest-700">Räume.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-[15px] md:text-lg leading-relaxed text-forest-700/85">
            Eigene Praxisfotos werden ergänzt. Bis dahin geben diese Aufnahmen einen Eindruck von
            der Atmosphäre, die wir in der Poststraße 43 schaffen möchten — ruhig, hell, hochwertig.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16 grid gap-4 sm:gap-6 md:grid-cols-12">
          <motion.div style={{ y: y1 }} className="md:col-span-7 md:row-start-1">
            <GalleryItem {...rows[0]} className="aspect-[4/3]" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="md:col-span-5 md:row-start-1 md:mt-24">
            <GalleryItem {...rows[1]} className="aspect-[3/4]" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="md:col-span-8 md:col-start-3">
            <GalleryItem {...rows[2]} className="aspect-[16/9] md:aspect-[16/8]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-forest-800/10 bg-forest-900 ${className}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        quality={72}
        className="object-cover transition-transform duration-700 ease-cozy md:group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent" />
      <figcaption className="absolute bottom-3 left-3 glass rounded-full px-3 py-1.5 text-[10px] md:text-[11px] uppercase tracking-brand-wide text-forest-800">
        {label}
      </figcaption>
    </figure>
  );
}
