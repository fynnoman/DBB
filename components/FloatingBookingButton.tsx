"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export default function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);
  const [footerNear, setFooterNear] = useState(false);
  const { scrollY } = useScroll();
  const ioRef = useRef<IntersectionObserver | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 240);
  });

  useEffect(() => {
    // Hide when footer is close so the button never overlaps the footer CTA
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    ioRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setFooterNear(e.isIntersecting));
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    ioRef.current.observe(footer);
    return () => ioRef.current?.disconnect();
  }, []);

  const shown = visible && !footerNear;

  return (
    <motion.a
      href={site.doctolibUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Termin über Doctolib buchen"
      initial={false}
      animate={{
        opacity: shown ? 1 : 0,
        y: shown ? 0 : 24,
        scale: shown ? 1 : 0.9,
        pointerEvents: shown ? "auto" : "none",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed z-40 bottom-safe right-safe md:bottom-8 md:right-8"
    >
      <span className="relative flex items-center gap-2 md:gap-3 rounded-full pl-2.5 pr-4 md:pl-3 md:pr-5 py-2.5 md:py-3.5 bg-forest-700 text-ivory-50 ring-1 ring-gold-300/40 hover:bg-forest-800 transition-colors shadow-[0_18px_40px_-12px_rgba(13,49,40,0.55)] min-h-[52px]">
        <span className="relative">
          <span className="absolute inset-0 rounded-full bg-gold-300/40 motion-safe:animate-ping" aria-hidden />
          <span className="relative flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gold-300 text-forest-800">
            <HeartCalendar />
          </span>
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-brand-wide text-gold-200/90">
            Doctolib
          </span>
          <span className="text-[13px] md:text-base font-semibold">
            Termin buchen
          </span>
        </span>
      </span>
    </motion.a>
  );
}

function HeartCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16M8 3v3M16 3v3M6 21h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 17.5c-2-1.3-4-2.9-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.1-2 3.7-4 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
