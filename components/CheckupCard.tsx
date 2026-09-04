"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CheckupCard({
  id,
  kicker,
  title,
  intro,
  items,
  notice,
  ctaLabel,
}: {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  items: string[];
  notice: ReactNode;
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={id}
      className={`relative rounded-[20px] border transition-colors duration-500 ease-editorial ${
        open
          ? "border-gold/70 bg-white/70"
          : "border-line bg-white/40 hover:border-gold/50"
      } overflow-hidden card-lift`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-body`}
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-7 md:p-8 pr-16 relative cursor-pointer"
      >
        <div className="kicker">{kicker}</div>
        <h3 className="font-display text-[22px] md:text-[24px] mt-2 mb-1.5">
          {title}
        </h3>
        <div className="mt-2 text-muted text-[13px] font-semibold tracking-[0.02em]">
          {open ? "Weniger anzeigen" : "Leistungen anzeigen"}
        </div>

        <span
          aria-hidden
          className={`absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-gold text-gold grid place-items-center transition-transform duration-500 ease-editorial ${
            open ? "rotate-45" : ""
          }`}
        >
          <PlusIcon />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-body`}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 md:px-8 pb-8">
              <p className="text-muted leading-[1.7]">{intro}</p>
              <ul className="mt-4 pl-5 list-disc marker:text-gold text-muted leading-[1.8]">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="mt-5 pl-4 pr-4 py-4 border-l-[3px] border-gold rounded-[12px] bg-gold/[0.06] text-[#4a4743] leading-[1.65]">
                {notice}
              </div>
              <div className="mt-5">
                <a
                  href="#kontakt"
                  className="inline-flex min-h-[46px] px-5 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 1v12M1 7h12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
