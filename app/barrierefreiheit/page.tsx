export const metadata = {
  title: "Barrierefreiheit · DBB Kardio",
};

export default function BarrierefreiheitPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Barrierefreiheit</p>
      <h1 className="font-display text-[clamp(30px,4vw,50px)] leading-[1.1] title-rule">
        Zugänglich für alle.
      </h1>

      <div className="mt-10 space-y-6 text-muted leading-[1.75]">
        <p>
          Die Praxis ist barrierearm erreichbar. Bei Fragen zur Wegeplanung
          oder für besondere Anforderungen unterstützen wir Sie gerne
          persönlich.
        </p>
        <p>
          Diese Website ist so gestaltet, dass sie auch mit Screenreadern und
          Tastaturnavigation gut nutzbar ist. Für Rückmeldungen zur digitalen
          Barrierefreiheit erreichen Sie uns per E-Mail.
        </p>
        <p className="italic text-ink/70">
          Detailerklärung zur digitalen Barrierefreiheit folgt.
        </p>
      </div>
    </section>
  );
}
