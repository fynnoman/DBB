"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [reading, setReading] = useState(false);
  const [supported, setSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSupported("speechSynthesis" in window);
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const extractText = useCallback(() => {
    const main = document.getElementById("main");
    if (!main) return "";
    const clone = main.cloneNode(true) as HTMLElement;
    clone
      .querySelectorAll(
        "script, style, iframe, nav, button, [aria-hidden='true'], .sr-only",
      )
      .forEach((el) => el.remove());
    const text = clone.innerText.replace(/\s+/g, " ").trim();
    return text;
  }, []);

  const toggleRead = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (reading) {
      synth.cancel();
      setReading(false);
      return;
    }
    const text = extractText();
    if (!text) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "de-DE";
    utter.rate = 0.98;
    utter.pitch = 1;
    utter.onend = () => setReading(false);
    utter.onerror = () => setReading(false);
    utteranceRef.current = utter;
    synth.speak(utter);
    setReading(true);
  }, [reading, extractText]);

  return (
    <div
      aria-label="Hilfsfunktionen"
      className={`fixed right-4 md:right-6 z-[940] flex flex-col gap-2.5 transition-all duration-500 ease-editorial ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 96px)" }}
    >
      {supported && (
        <button
          type="button"
          onClick={toggleRead}
          aria-pressed={reading}
          aria-label={reading ? "Vorlesen stoppen" : "Seite vorlesen lassen"}
          title={reading ? "Vorlesen stoppen" : "Seite vorlesen lassen"}
          className={`w-11 h-11 md:w-12 md:h-12 rounded-full grid place-items-center shadow-booking border transition-colors backdrop-blur-md ${
            reading
              ? "bg-forest text-white border-forest"
              : "bg-white/95 border-line text-forest hover:bg-forest hover:text-white hover:border-forest"
          }`}
        >
          {reading ? <StopIcon /> : <SpeakerIcon />}
        </button>
      )}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Zum Seitenanfang"
        title="Zum Seitenanfang"
        className="w-11 h-11 md:w-12 md:h-12 rounded-full grid place-items-center shadow-booking border border-line bg-white/95 text-ink hover:border-gold hover:text-gold-600 backdrop-blur-md transition-colors"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 19V5m0 0-6 6m6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 5 6 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="6" width="12" height="12" rx="1.5" fill="currentColor" />
    </svg>
  );
}
