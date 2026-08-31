"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  overlay?: boolean;
  sizes?: string;
  priority?: boolean;
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  intensity = 120,
  overlay = true,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mobileIntensity = intensity * 0.45;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-mobileIntensity, mobileIntensity]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.03, 1.1]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-forest-900 ${className}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={72}
          className="object-cover"
          draggable={false}
        />
      </motion.div>
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-forest-900/10" />
      )}
    </div>
  );
}
