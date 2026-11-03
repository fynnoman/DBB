"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type A11yState = {
  fontScale: number;
  contrast: boolean;
  blueFilter: boolean;
  night: boolean;
  hideImages: boolean;
};

const defaultA11y: A11yState = {
  fontScale: 1,
  contrast: false,
  blueFilter: false,
  night: false,
  hideImages: false,
};

const STORAGE_KEY = "dbb-a11y";

function applyA11y(state: A11yState) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(state.fontScale));
  root.classList.toggle("a11y-contrast", state.contrast);
  root.classList.toggle("a11y-blue-filter", state.blueFilter);
  root.classList.toggle("a11y-night", state.night);
  root.classList.toggle("a11y-hide-images", state.hideImages);
}

export default function FloatingActions() {
  const [a11y, setA11y] = useState<A11yState>(defaultA11y);
  const [panelOpen, setPanelOpen] = useState(false);
  const [reading, setReading] = useState(false);
  const [supported, setSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Hydrate from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    setSupported("speechSynthesis" in window);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...defaultA11y, ...(JSON.parse(raw) as Partial<A11yState>) };
        setA11y(parsed);
        applyA11y(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist and apply on any change
  useEffect(() => {
    if (typeof window === "undefined") return;
    applyA11y(a11y);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(a11y));
    } catch {
      // ignore
    }
  }, [a11y]);

  // Close panel on outside click / Escape
  useEffect(() => {
    if (!panelOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setPanelOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [panelOpen]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
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

  const changeFont = (delta: number) => {
    setA11y((prev) => {
      const next = Math.min(1.5, Math.max(0.85, +(prev.fontScale + delta).toFixed(2)));
      return { ...prev, fontScale: next };
    });
  };

  const toggle = (key: keyof A11yState) => {
    setA11y((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAll = () => {
    setA11y(defaultA11y);
    if (reading && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setReading(false);
    }
  };

  return (
    <div
      aria-label="Barrierefreiheit"
      className="fixed right-4 md:right-6 z-[940] flex flex-col items-end gap-2.5"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 96px)" }}
    >
      {panelOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Barrierefreiheit Einstellungen"
          className="w-[min(320px,92vw)] rounded-[20px] border border-line bg-white shadow-menu p-5 origin-bottom-right"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display text-[18px] m-0">Barrierefreiheit</h4>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[14px] text-ink">Schriftgröße</span>
              <div className="flex items-center gap-1.5">
                <IconButton
                  label="Schrift kleiner"
                  onClick={() => changeFont(-0.1)}
                >
                  <span className="text-[18px] leading-none font-bold">−</span>
                </IconButton>
                <span className="text-[12px] tabular-nums text-muted w-10 text-center">
                  {Math.round(a11y.fontScale * 100)} %
                </span>
                <IconButton
                  label="Schrift größer"
                  onClick={() => changeFont(0.1)}
                >
                  <span className="text-[18px] leading-none font-bold">+</span>
                </IconButton>
              </div>
            </div>

            <ToggleRow
              label="Kontrastmodus"
              checked={a11y.contrast}
              onChange={() => toggle("contrast")}
            />
            <ToggleRow
              label="Blaufilter"
              checked={a11y.blueFilter}
              onChange={() => toggle("blueFilter")}
            />
            <ToggleRow
              label="Nachtmodus"
              checked={a11y.night}
              onChange={() => toggle("night")}
            />
            <ToggleRow
              label="Bilder ausblenden"
              checked={a11y.hideImages}
              onChange={() => toggle("hideImages")}
            />

            <button
              type="button"
              onClick={toggleRead}
              disabled={!supported}
              title={
                supported
                  ? undefined
                  : "Ihr Browser unterstützt die Vorlesefunktion leider nicht."
              }
              className={`w-full min-h-[42px] rounded-full border text-[13px] font-extrabold tracking-[0.05em] transition-colors ${
                reading
                  ? "bg-forest text-white border-forest"
                  : "border-line text-ink hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-line"
              }`}
            >
              {reading ? "VORLESEN STOPPEN" : "WEBSITE VORLESEN"}
            </button>

            <button
              type="button"
              onClick={resetAll}
              className="w-full min-h-[42px] rounded-full border border-line text-[13px] font-extrabold tracking-[0.05em] text-muted hover:text-ink hover:border-gold transition-colors"
            >
              ALLES ZURÜCKSETZEN
            </button>
          </div>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setPanelOpen((v) => !v)}
        aria-expanded={panelOpen}
        aria-label={
          panelOpen
            ? "Barrierefreiheit schließen"
            : "Barrierefreiheit öffnen"
        }
        title="Barrierefreiheit"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-booking border border-gold bg-gold text-white hover:bg-gold-600 transition-colors"
      >
        <A11yIcon />
      </button>
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer">
      <span className="text-[14px] text-ink">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full border transition-colors ${
          checked ? "bg-gold border-gold" : "bg-white border-line"
        }`}
      >
        <span
          className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-editorial ${
            checked ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        />
      </button>
    </label>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="w-8 h-8 rounded-full border border-line grid place-items-center text-ink hover:border-gold hover:text-gold-600 transition-colors"
    >
      {children}
    </button>
  );
}

function A11yIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="4.2" r="1.8" fill="currentColor" />
      <path
        d="M4 7.5c2.7 1 5.3 1.5 8 1.5s5.3-.5 8-1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 9v4.5m0 0 3 7.5m-3-7.5-3 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
