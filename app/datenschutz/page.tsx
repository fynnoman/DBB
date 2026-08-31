export const metadata = {
  title: "Datenschutz · DBB Kardio",
};

export default function DatenschutzPage() {
  return (
    <section
      className="bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-24"
      style={{ paddingTop: "calc(var(--sait) + 96px)" }}
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8 text-forest-700/90 leading-relaxed">
        <p className="eyebrow rule-gold">Datenschutz</p>
        <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-brand-tight">
          Ihre Daten sind bei uns geschützt.
        </h1>

        <div className="mt-10 space-y-6">
          <p>
            Der Schutz Ihrer personenbezogenen Daten hat für uns höchste Priorität. Diese
            Datenschutzerklärung informiert Sie über Art, Umfang und Zwecke der Verarbeitung
            personenbezogener Daten im Rahmen unserer Website und der Kontaktaufnahme.
          </p>
          <p className="italic text-forest-500">
            Vollständiger Text wird zum Praxisstart ergänzt.
          </p>
        </div>
      </div>
    </section>
  );
}
