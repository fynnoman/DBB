"use client";

import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "fill"> & {
  fill?: boolean;
};

export default function PlaceholderImage({ fill = true, className, ...rest }: Props) {
  return (
    <>
      <Image
        fill={fill}
        {...rest}
        className={className}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-sans font-bold uppercase tracking-[0.32em] text-[clamp(1rem,4vw,2.4rem)] text-neutral-200/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] select-none"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}
        >
          Platzhalter
        </span>
      </div>
    </>
  );
}
