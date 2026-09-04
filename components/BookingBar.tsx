"use client";

import { useEffect, useState } from "react";

export default function BookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-label="Schnellkontakt"
      className={`fixed left-1/2 z-[950] -translate-x-1/2 bottom-safe transition-all duration-700 ease-editorial will-change-transform ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex gap-2 items-center bg-white/97 border border-[rgba(183,154,98,0.45)] shadow-booking rounded-full p-2 backdrop-blur-md max-w-[95vw] overflow-x-auto">
        <a
          href="/kontakt"
          title="Anrufen"
          className="whitespace-nowrap min-h-[40px] px-4 rounded-full inline-flex items-center gap-2 text-[11px] md:text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-colors"
        >
          <PhoneMark /> ANRUF
        </a>
        <a
          href="/kontakt"
          title="E-Mail"
          className="whitespace-nowrap min-h-[40px] px-4 rounded-full inline-flex items-center gap-2 text-[11px] md:text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-colors"
        >
          <MailMark /> E-MAIL
        </a>
        <a
          href="/kontakt"
          className="whitespace-nowrap min-h-[40px] px-4 md:px-5 rounded-full inline-flex items-center text-[11px] md:text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 transition-colors"
        >
          TERMIN BUCHEN
        </a>
      </div>
    </div>
  );
}

function PhoneMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m3 7 9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
