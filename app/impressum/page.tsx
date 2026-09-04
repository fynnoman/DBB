import { site } from "@/lib/site";

export const metadata = {
  title: "Impressum · DBB Kardio",
};

export default function ImpressumPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Impressum</p>
      <h1 className="font-display text-[clamp(30px,4vw,50px)] leading-[1.1] title-rule">
        Angaben gemäß § 5 TMG.
      </h1>

      <div className="mt-10 space-y-8 text-muted leading-[1.7]">
        <div>
          <p className="kicker">Praxis</p>
          <p className="mt-2 font-display text-[24px] text-ink">
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
          <p className="kicker">Kontakt</p>
          <p className="mt-2">Telefon: {site.phone}</p>
          <p>E-Mail: {site.email}</p>
        </div>

        <div>
          <p className="kicker">Berufsbezeichnung</p>
          <p className="mt-2">
            Ärztin, verliehen in [wird ergänzt]. Fachärztin für Innere Medizin
            und Kardiologie.
          </p>
        </div>

        <div id="aufsichtsbehoerden">
          <p className="kicker">Aufsichtsbehörden</p>
          <p className="mt-2">Ärztekammer des Saarlandes, [wird ergänzt]</p>
          <p>Kassenärztliche Vereinigung Saarland, [wird ergänzt]</p>
        </div>

        <div>
          <p className="kicker">Berufsrechtliche Regelungen</p>
          <p className="mt-2">
            Berufsordnung für die Ärztinnen und Ärzte des Saarlandes.
            Heilberufekammergesetz. Gebührenordnung für Ärzte (GOÄ). Einsehbar
            über die zuständige Kammer.
          </p>
        </div>

        <div>
          <p className="kicker">Redaktionell verantwortlich</p>
          <p className="mt-2">{site.fullName}, Adresse wie oben.</p>
        </div>
      </div>
    </section>
  );
}
