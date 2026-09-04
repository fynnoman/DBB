export const metadata = {
  title: "Datenschutz · DBB Kardio",
};

export default function DatenschutzPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Datenschutz</p>
      <h1 className="font-display text-[clamp(30px,4vw,50px)] leading-[1.1] title-rule">
        Ihre Daten sind bei uns geschützt.
      </h1>

      <div className="mt-10 space-y-6 text-muted leading-[1.75]">
        <p>
          Der Schutz Ihrer personenbezogenen Daten hat für uns höchste
          Priorität. Diese Datenschutzerklärung informiert Sie über Art,
          Umfang und Zwecke der Verarbeitung personenbezogener Daten im Rahmen
          unserer Website und der Kontaktaufnahme.
        </p>
        <p className="italic text-ink/70">
          Vollständiger Text wird zum Praxisstart ergänzt.
        </p>
      </div>
    </section>
  );
}
