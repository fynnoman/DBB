import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

const rooms = [
  {
    title: "Anmeldung & Empfang",
    note: "Ruhige Atmosphäre, diskrete Aufnahme.",
    image:
      "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?w=1400&auto=format&fit=crop&q=80",
    alt: "Warm gestalteter Empfangsbereich mit Holzverkleidung",
  },
  {
    title: "Wartebereich",
    note: "Warmes Licht, gedämpfte Farben, Privatsphäre.",
    image:
      "https://images.unsplash.com/photo-1587316205676-ea1bcdf9765f?w=1400&auto=format&fit=crop&q=80",
    alt: "Warmer Wartebereich mit Sofa und Pflanze",
  },
  {
    title: "Untersuchungsraum",
    note: "Konzipiert für kardiovaskuläre Diagnostik.",
    image:
      "https://images.unsplash.com/photo-1778151270886-f227700b0eba?w=1400&auto=format&fit=crop&q=80",
    alt: "Ruhiger, moderner Untersuchungsraum",
  },
  {
    title: "Echokardiographie",
    note: "Hochauflösender Herzultraschall mit Speckle Tracking.",
    image:
      "https://images.unsplash.com/photo-1559757296-5c84adc6d116?w=1400&auto=format&fit=crop&q=80",
    alt: "Anatomisches Herzmodell",
  },
  {
    title: "Ärztliches Sprechzimmer",
    note: "Zeit für Anamnese, Einordnung und Fragen.",
    image:
      "https://images.unsplash.com/photo-1758448093806-88b2089068ab?w=1400&auto=format&fit=crop&q=80",
    alt: "Elegantes Sprechzimmer mit warmen Steinoberflächen",
  },
  {
    title: "Belastungsraum",
    note: "Ergometrie und Belastungs-EKG in ruhiger Umgebung.",
    image:
      "https://images.unsplash.com/photo-1788416636062-162e4a8754bc?w=1400&auto=format&fit=crop&q=80",
    alt: "Ruhiger Raum mit Holzdecke und warmem Licht",
  },
];

export default function Praxis() {
  return (
    <section id="praxis" className="relative cv-auto">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Praxis"
          title="Praxis & Räumlichkeiten."
          lead="Ruhe, warmes Licht und diskrete Privatsphäre in jedem Raum. Die Bilder werden bei Praxisstart durch eigene Aufnahmen ersetzt."
        />

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {rooms.map((room, i) => (
            <StaggerItem key={room.title}>
              <figure className="group relative rounded-[22px] border border-line overflow-hidden bg-white/40 card-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
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
                  {/* Big faded PLATZHALTER watermark */}
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
