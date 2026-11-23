"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollNav() {
  const pathname = usePathname();
  const [mode, setMode] = useState<"down" | "up">("down");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(h > 400);
      if (y < 200) setMode("down");
      else if (y > h - 200) setMode("up");
      else setMode(y < h / 2 ? "down" : "up");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (!visible) return null;

  const scrollTo = () => {
    const target =
      mode === "down"
        ? document.documentElement.scrollHeight
        : 0;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTo}
      aria-label={mode === "down" ? "Nach unten scrollen" : "Nach oben scrollen"}
      title={mode === "down" ? "Nach unten" : "Nach oben"}
      className="fixed left-4 md:left-6 z-[940] w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-booking border border-gold bg-white text-gold hover:bg-gold hover:text-white transition-colors"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 96px)" }}
    >
      <ArrowIcon direction={mode} />
    </button>
  );
}

function ArrowIcon({ direction }: { direction: "down" | "up" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={direction === "up" ? "rotate-180" : ""}
    >
      <path
        d="M12 5v14M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
