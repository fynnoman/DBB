export const metadata = {
  title: "Barrierefreiheit · DBB Kardio",
};

export default function BarrierefreiheitPage() {
  return (
    <section
      className="bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-24"
      style={{ paddingTop: "calc(var(--sait) + 96px)" }}
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8 text-forest-700/90 leading-relaxed">
        <p className="eyebrow rule-gold">Barrierefreiheit</p>
        <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-brand-tight">
          Zugänglich für alle.
        </h1>

        <div className="mt-10 space-y-6">
          <p>
            Die Praxis befindet sich im 5. Obergeschoss. Ein Aufzug steht zur Verfügung. Wir
            unterstützen Sie gerne persönlich bei Ihrer Wegplanung.
          </p>
          <p>
            Diese Website ist so gestaltet, dass sie auch mit Screenreadern und Tastaturnavigation
            gut nutzbar ist. Für Rückmeldungen zur digitalen Barrierefreiheit erreichen Sie uns per
            E-Mail.
          </p>
          <p className="italic text-forest-500">
            Detailerklärung zur digitalen Barrierefreiheit folgt.
          </p>
        </div>
      </div>
    </section>
  );
}
