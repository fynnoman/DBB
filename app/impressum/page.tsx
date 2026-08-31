import { site } from "@/lib/site";

export const metadata = {
  title: "Impressum · DBB Kardio",
};

export default function ImpressumPage() {
  return (
    <section
      className="bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-24"
      style={{ paddingTop: "calc(var(--sait) + 96px)" }}
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="eyebrow rule-gold">Impressum</p>
        <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-brand-tight">
          Angaben gemäß § 5 TMG.
        </h1>

        <div className="mt-10 space-y-6 text-forest-700/90 leading-relaxed">
          <div>
            <p className="eyebrow">Praxis</p>
            <p className="mt-2 font-serif text-2xl text-forest-800">
              {site.fullName}
            </p>
            <p>{site.descriptor}</p>
            <p>
              {site.address.street}
              <br />
              {site.address.zipCity}
            </p>
          </div>

          <div>
            <p className="eyebrow">Kontakt</p>
            <p className="mt-2">Telefon: {site.phone}</p>
            <p>E-Mail: {site.email}</p>
          </div>

          <div>
            <p className="eyebrow">Berufsbezeichnung</p>
            <p className="mt-2">
              Ärztin, verliehen in [wird ergänzt]. Fachärztin für Innere Medizin und Kardiologie.
            </p>
          </div>

          <div id="aufsichtsbehoerden">
            <p className="eyebrow">Aufsichtsbehörden</p>
            <p className="mt-2">Ärztekammer des Saarlandes, [wird ergänzt]</p>
            <p>Kassenärztliche Vereinigung Saarland, [wird ergänzt]</p>
          </div>

          <div>
            <p className="eyebrow">Berufsrechtliche Regelungen</p>
            <p className="mt-2">
              Berufsordnung für die Ärztinnen und Ärzte des Saarlandes. Heilberufekammergesetz.
              Gebührenordnung für Ärzte (GOÄ). Einsehbar über die zuständige Kammer.
            </p>
          </div>

          <div>
            <p className="eyebrow">Redaktionell verantwortlich</p>
            <p className="mt-2">{site.fullName}, Adresse wie oben.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
