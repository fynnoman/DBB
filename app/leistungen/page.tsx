import ServicesGrid from "@/components/ServicesGrid";
import ScaleToBackground from "@/components/ScaleToBackground";
import { services } from "@/lib/site";

export const metadata = {
  title: "Leistungen · DBB Kardio",
  description:
    "Kardiologische Leistungen in St. Ingbert: Echokardiographie, Speckle Tracking, Prävention, Check-up, Rhythmus & Blutdruck, Cardio-Onkologie, Frauenherz.",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="relative bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-16" style={{ paddingTop: "calc(var(--sait) + 96px)" }}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="eyebrow rule-gold">Leistungen</p>
          <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2.25rem,8vw,5rem)] leading-[1.02] tracking-brand-tight max-w-4xl">
            Ein modernes Spektrum kardiologischer{" "}
            <span className="italic text-forest-700">Untersuchungen.</span>
          </h1>
        </div>
      </section>

      <ServicesGrid />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1800&auto=format&fit=crop"
        eyebrow="Prävention · Check-up"
        headline={
          <>
            Früh erkennen. <span className="italic text-gold-300">Klar handeln.</span>
          </>
        }
        paragraph="Ein individueller kardiologischer Check-up gibt Ihnen Sicherheit – und schafft die Grundlage, um Ihr Herz nachhaltig zu schützen."
      />

      <section className="bg-ivory-50 py-20 sm:py-24 md:py-32 cv-auto">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-6 md:gap-10">
            {services.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="glass rounded-3xl p-6 sm:p-8 md:p-12 grid gap-4 md:gap-6 md:grid-cols-12 scroll-mt-28 md:scroll-mt-32"
              >
                <div className="md:col-span-4">
                  <p className="eyebrow">Leistung</p>
                  <h2 className="mt-3 font-serif text-forest-800 text-2xl sm:text-3xl md:text-4xl leading-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="md:col-span-8 text-[15px] md:text-lg leading-relaxed text-forest-700/90">
                  {s.short}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
