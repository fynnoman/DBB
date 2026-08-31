import AboutSection from "@/components/AboutSection";
import ScaleToBackground from "@/components/ScaleToBackground";

export const metadata = {
  title: "Über mich · Dr. medic Denisa Babeanu-Bauer",
  description:
    "Persönliche Kardiologie in St. Ingbert. Über meinen Werdegang, meine Schwerpunkte und meine Haltung als Kardiologin.",
};

export default function UeberMichPage() {
  return (
    <>
      <section
        className="relative bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-8"
        style={{ paddingTop: "calc(var(--sait) + 96px)" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="eyebrow rule-gold">Über mich</p>
          <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2.25rem,8vw,5rem)] leading-[1.02] tracking-brand-tight max-w-5xl">
            Dr. medic Denisa{" "}
            <span className="italic text-forest-700">Babeanu-Bauer.</span>
          </h1>
          <p className="mt-5 md:mt-6 max-w-2xl text-[15px] md:text-lg leading-relaxed text-forest-700/90">
            Kardiologin in St. Ingbert. Ich arbeite für Menschen, die ihre Herzgesundheit ernst
            nehmen — mit Zeit, Ruhe und einer klaren, verständlichen Sprache.
          </p>
        </div>
      </section>

      <AboutSection />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1600&auto=format&fit=crop"
        eyebrow="Haltung"
        headline={
          <>
            Persönlich. Ruhig.{" "}
            <span className="italic text-gold-300">Präzise.</span>
          </>
        }
        paragraph="Ihre Anliegen bekommen Zeit. Untersuchungen erfolgen fundiert und in ruhiger Atmosphäre. Befunde werden verständlich eingeordnet und in einen langfristigen Weg für Ihre Herzgesundheit übersetzt."
      />
    </>
  );
}
