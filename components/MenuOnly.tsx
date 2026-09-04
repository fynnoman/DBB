"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type MenuOnlyContextValue = {
  revealed: Set<string>;
  reveal: (id: string) => void;
};

const MenuOnlyContext = createContext<MenuOnlyContextValue | null>(null);

export function MenuOnlyProvider({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const reveal = useCallback((id: string) => {
    setRevealed((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        // Wait one frame so the section can start mounting before we scroll.
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      });
    }
  }, []);

  // Cross-page reveal: /?menu=medikamente#medikamente
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const menuTarget = params.get("menu");
    if (menuTarget) {
      reveal(menuTarget);
      const url = new URL(window.location.href);
      url.searchParams.delete("menu");
      window.history.replaceState({}, "", url.toString());
    }
  }, [reveal]);

  const value = useMemo(() => ({ revealed, reveal }), [revealed, reveal]);

  return (
    <MenuOnlyContext.Provider value={value}>
      {children}
    </MenuOnlyContext.Provider>
  );
}

export function useMenuOnly() {
  const ctx = useContext(MenuOnlyContext);
  if (!ctx)
    throw new Error("useMenuOnly must be used inside MenuOnlyProvider");
  return ctx;
}

export function MenuOnlySection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const { revealed } = useMenuOnly();
  const isOpen = revealed.has(id);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          id={id}
          key={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`overflow-hidden ${className}`}
        >
          <div className="animate-floatIn">{children}</div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
