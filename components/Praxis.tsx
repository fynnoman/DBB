import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

const rooms = [
  {
    title: "Sprechzimmer",
    note: "Warmes Licht, Zeit für Anamnese und Befundbesprechung.",
    image:
      "https://images.unsplash.com/photo-1758448093806-88b2089068ab?w=1400&auto=format&fit=crop&q=80",
    alt: "Platzhalter: ruhiges Sprechzimmer mit warmen Oberflächen",
  },
  {
    title: "Untersuchungsraum",
    note: "Ausgestattet für Echokardiographie, EKG und Belastungsdiagnostik.",
    image:
      "https://images.unsplash.com/photo-1778151270886-f227700b0eba?w=1400&auto=format&fit=crop&q=80",
    alt: "Platzhalter: moderner Untersuchungsraum für kardiologische Diagnostik",
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
            <StaggerItem key={room.title}>
              <figure className="group relative rounded-[22px] border border-line overflow-hidden bg-white/40 card-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 46vw"
                    className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, rgba(24,24,24,0.35) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-[10px] rounded-[16px] pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 grid place-items-center pointer-events-none"
                  >
                    <span className="font-display text-white/28 tracking-[0.22em] text-[clamp(22px,4.2vw,42px)] uppercase select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                      Platzhalter
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-extrabold text-gold">
                    Bild {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <figcaption className="p-6">
                  <div className="kicker">Raum</div>
                  <h3 className="font-display text-[20px] mt-2 mb-1.5">
                    {room.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-[1.65] m-0">
                    {room.note}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
