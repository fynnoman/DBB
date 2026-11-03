import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function PortraitIntro() {
  return (
    <section
      id="ueber"
      className="container-shell max-w-[1440px] py-[62px] md:py-[76px] px-4 text-center"
    >
      <Reveal>
        <div
          className="relative mx-auto mb-6 rounded-[28px] overflow-hidden border border-[rgba(183,154,98,0.42)] shadow-soft group"
          style={{
            width: "min(430px, 82vw)",
            aspectRatio: "4 / 5",
          }}
        >
          <Image
            src="/portrait-babeanu-bauer.jpg"
            alt={`Portrait ${site.fullName}`}
            fill
            sizes="(max-width: 640px) 82vw, 430px"
            className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            priority
          />

          <div
            aria-hidden
            className="absolute inset-[10px] rounded-[20px] pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.35)" }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Link
          href="/ueber-mich"
          className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-[13px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
        >
          ÜBER MICH
        </Link>
      </Reveal>
    </section>
  );
}
