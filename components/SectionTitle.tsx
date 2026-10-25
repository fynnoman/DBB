import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function SectionTitle({
  kicker,
  title,
  lead,
  align = "left",
}: {
  kicker?: string;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div
        className={`max-w-[900px] mb-9 md:mb-10 ${
          align === "center" ? "mx-auto text-center" : ""
        }`}
      >
        {kicker && (
          <h2 className="text-[clamp(36px,5.5vw,64px)] tracking-[0.08em] uppercase font-extrabold text-gold leading-[1.1]">
            {kicker}
          </h2>
        )}
        {lead && (
          <p className="text-muted text-[18px] md:text-[19px] leading-[1.75] mt-5 max-w-[720px]">
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
