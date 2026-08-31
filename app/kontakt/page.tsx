import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Kontakt · DBB Kardio",
  description:
    "Kontakt zur kardiologischen Privatpraxis in St. Ingbert. Termine bevorzugt online über Doctolib.",
};

export default function KontaktPage() {
  return (
    <>
      <section
        className="relative bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-8"
        style={{ paddingTop: "calc(var(--sait) + 96px)" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="eyebrow rule-gold">Kontakt</p>
          <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2.25rem,8vw,5rem)] leading-[1.02] tracking-brand-tight max-w-4xl">
            So erreichen Sie{" "}
            <span className="italic text-forest-700">die Praxis.</span>
          </h1>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
