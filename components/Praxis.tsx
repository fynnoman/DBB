import { SectionTitle } from "@/components/SectionTitle";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const rooms = [
  { title: "Anmeldung & Empfang", note: "Ruhige Atmosphäre, diskrete Aufnahme." },
  { title: "Wartebereich", note: "Warmes Licht, gedämpfte Farben, Privatsphäre." },
  { title: "Untersuchungsraum", note: "Konzipiert für kardiovaskuläre Diagnostik." },
  { title: "Echokardiographie", note: "Hochauflösender Herzultraschall mit Speckle Tracking." },
  { title: "Ärztliches Sprechzimmer", note: "Zeit für Anamnese, Einordnung und Fragen." },
  { title: "Belastungsraum", note: "Ergometrie und Belastungs-EKG in ruhiger Umgebung." },
];

export default function Praxis() {
  return (
    <section id="praxis" className="relative">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Praxis"
          title="Praxis & Räumlichkeiten."
          lead="Hier werden bald eigene Bilder von Anmeldung, Wartebereich, Untersuchungsräumen, Echokardiographie und ärztlichem Sprechzimmer eingebunden. Bis dahin zeigt diese Ansicht die Struktur der Räume."
        />

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {rooms.map((room, i) => (
            <StaggerItem key={room.title}>
              <figure className="group relative rounded-[22px] border border-line overflow-hidden bg-white/40 card-lift">
                <div
                  className="relative aspect-[4/3] w-full"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(183,154,98,0.10), rgba(255,255,255,0.9))",
                  }}
                >
                  {/* Placeholder pattern until real photography arrives. */}
                  <div className="absolute inset-0 grid place-items-center text-muted text-[13px] text-center px-6">
                    <div>
                      <div className="kicker mb-2">Bild {String(i + 1).padStart(2, "0")}</div>
                      <div>
                        Praxisfoto folgt.
                        <br />
                        Slot ist bereits vorbereitet.
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-[10px] rounded-[16px] pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.20)" }}
                  />
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
