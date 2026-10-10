import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

const rooms = [
  {
    src: "/praxisraum-01.jpg",
    alt: "Praxisraum DBB Kardio",
  },
  {
    src: "/praxisraum-02.jpg",
    alt: "Praxisraum DBB Kardio",
  },
];

export default function Praxis() {
  return (
    <section id="praxis" className="relative cv-auto">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Praxis"
          title="Praxisräume."
        />

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6">
          {rooms.map((room, i) => (
            <StaggerItem key={i}>
              <figure className="group relative rounded-[22px] border border-line overflow-hidden bg-white/40 card-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 46vw"
                    className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-[10px] rounded-[16px] pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)" }}
                  />
                </div>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
