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
            <br />
            Stadtteil {site.address.district}
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
            Ärztin, Fachärztin für Innere Medizin und Kardiologie. Verliehen in
            der Bundesrepublik Deutschland.
          </p>
        </div>

        <div>
          <p className="kicker">Zuständige Kammer</p>
          <p className="mt-2 text-ink">Ärztekammer des Saarlandes</p>
          <p>
            Faktoreistraße 4
            <br />
            66111 Saarbrücken
            <br />
            Telefon: 0681 / 4003-0
            <br />
            E-Mail: info@aeksaar.de
            <br />
            <a
              href="https://www.aerztekammer-saarland.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              www.aerztekammer-saarland.de
            </a>
          </p>
        </div>

<div>
          <p className="kicker">Berufsrechtliche Regelungen</p>
          <p className="mt-2">
            Berufsordnung für die Ärztinnen und Ärzte des Saarlandes.
            Heilberufekammergesetz des Saarlandes. Gebührenordnung für Ärzte
            (GOÄ). Die genannten Regelungen sind über die Ärztekammer des
            Saarlandes einsehbar.
          </p>
        </div>

        <div>
          <p className="kicker">Redaktionell verantwortlich</p>
          <p className="mt-2">{site.fullName}, Anschrift wie oben.</p>
        </div>

        <div>
          <p className="kicker">EU-Streitschlichtung</p>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
            bereit.
          </p>
        </div>
      </div>
    </section>
  );
}
