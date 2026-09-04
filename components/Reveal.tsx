"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

/**
 * SSR-safe reveal-on-scroll.
 * Content is present in the initial HTML so search engines and no-JS clients
 * see the full text. On client, we hide it (`.reveal`) then animate in
 * (`.is-in`) once the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setInView(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${mounted ? "reveal" : ""} ${
        inView ? "is-in" : ""
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className = "",
  stagger = 0.06,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const arr = Children.toArray(children);
  return (
    <div className={className}>
      {arr.map((child, i) => {
        if (isValidElement(child)) {
          const el = child as ReactElement<{ index?: number; delay?: number }>;
          return cloneElement(el, {
            index: i,
            delay: delayChildren + i * stagger,
          });
        }
        return child;
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
  delay,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}) {
  const d = delay ?? index * 0.06;
  return (
    <Reveal className={className} delay={d}>
      {children}
    </Reveal>
  );
}
