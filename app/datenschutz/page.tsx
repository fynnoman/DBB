import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Datenschutz | ${site.brand}`,
  description:
    "Informationen zur Verarbeitung personenbezogener Daten in der kardiologischen Privatpraxis Dr. medic Denisa Babeanu-Bauer in Saarlouis.",
};

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.2] text-ink mt-14 md:mt-16 mb-5 scroll-mt-28"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[clamp(18px,1.8vw,22px)] leading-[1.25] text-ink mt-8 mb-3">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15.5px] md:text-[16px] leading-[1.75] text-ink/85">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2.5 text-[15.5px] md:text-[16px] leading-[1.7] text-ink/85 pl-0">
      {children}
    </ul>
  );
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <span
        aria-hidden
        className="mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="container-shell max-w-[860px] px-4 py-20 md:py-28">
      <Reveal>
        <header className="mb-10 md:mb-14">
          <p className="kicker mb-3">Datenschutz</p>
          <h1 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.1] text-ink mb-5">
            Datenschutzerklärung
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-ink/80 italic">
            Informationen zur Verarbeitung personenbezogener Daten
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div className="space-y-5 mb-10 md:mb-14">
          <P>
            Der Schutz personenbezogener Daten, insbesondere sensibler
            Gesundheitsdaten, hat in meiner Praxis einen hohen Stellenwert.
          </P>
          <P>
            Diese Datenschutzerklärung informiert über die Verarbeitung
            personenbezogener Daten beim Besuch der Website, bei der
            Terminvereinbarung sowie im Rahmen der medizinischen Betreuung und
            Praxisorganisation.
          </P>
          <P>
            Die Datenverarbeitung erfolgt zweckgebunden und im erforderlichen
            Umfang unter Beachtung der Datenschutz-Grundverordnung (DSGVO), des
            Bundesdatenschutzgesetzes (BDSG), der ärztlichen Berufsordnung sowie
            der gesetzlichen Schweigepflicht.
          </P>
        </div>
      </Reveal>

      <Reveal>
        <aside
          aria-label="Das Wichtigste in Kürze"
          className="rounded-[22px] border border-gold/45 bg-gradient-to-br from-gold-100 via-gold-50 to-white p-7 md:p-9 mb-12 md:mb-16"
        >
          <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold-700 mb-3">
            Das Wichtigste in Kürze
          </div>
          <UL>
            <LI>
              Personenbezogene Daten und Gesundheitsdaten werden vertraulich
              behandelt.
            </LI>
            <LI>
              Für die Terminorganisation und digitale Patientenverwaltung wird
              Doctolib eingesetzt.
            </LI>
            <LI>
              Die cloudbasierte Speicherung der Patientendaten erfolgt in
              Deutschland.
            </LI>
            <LI>
              Eine Weitergabe personenbezogener Daten erfolgt ausschließlich auf
              einer zulässigen rechtlichen Grundlage.
            </LI>
            <LI>
              Für die privatärztliche Abrechnung über eine externe
              Abrechnungsstelle werden gesonderte Einwilligungs- und
              Datenschutzunterlagen bereitgestellt.
            </LI>
            <LI>
              Sämtliche Mitarbeitenden der Praxis unterliegen der
              Verschwiegenheitspflicht.
            </LI>
          </UL>
        </aside>
      </Reveal>

      <div className="space-y-5">
        <Reveal>
          <H2 id="verantwortlich">1. Verantwortliche Stelle</H2>
          <P>Verantwortlich für die Verarbeitung personenbezogener Daten ist:</P>
          <div className="mt-4 rounded-[16px] border-l-4 border-gold bg-gold-50/60 p-5">
            <p className="font-display text-[20px] text-ink leading-tight">
              {site.fullName}
            </p>
            <p className="text-ink/85 mt-1">Kardiologische Privatpraxis</p>
            <p className="text-ink/85">
              Fachärztin für Innere Medizin und Kardiologie
            </p>
            <p className="text-ink/85 mt-3">
              {site.address.street}
              <br />
              {site.address.zipCity}
            </p>
            <p className="text-ink/85 mt-3">
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
          </div>
          <P>
            Bei Fragen zur Verarbeitung personenbezogener Daten oder zur
            Wahrnehmung datenschutzrechtlicher Ansprüche kann jederzeit Kontakt
            mit der Praxis aufgenommen werden.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="hosting">2. Hosting und Server-Logdateien</H2>
          <P>Diese Website wird bei folgendem Anbieter gehostet:</P>
          <div className="mt-4 rounded-[16px] border border-line bg-white/70 p-5">
            <p className="text-ink font-semibold">IONOS SE</p>
            <p className="text-ink/85 mt-1">
              Elgendorfer Straße 57
              <br />
              56410 Montabaur
              <br />
              Deutschland
            </p>
          </div>
          <P>
            Beim Besuch dieser Website werden technisch erforderliche
            Informationen durch den Internetbrowser an den Webserver
            übermittelt.
          </P>
          <P>Hierzu können insbesondere folgende Daten gehören:</P>
          <UL>
            <LI>IP-Adresse</LI>
            <LI>Datum und Uhrzeit des Zugriffs</LI>
            <LI>Aufgerufene Seiten und Dateien</LI>
            <LI>Übertragene Datenmenge</LI>
            <LI>Browsertyp und Browserversion</LI>
            <LI>Verwendetes Betriebssystem</LI>
            <LI>Zuvor besuchte Website (Referrer-URL)</LI>
          </UL>
          <P>
            Die Verarbeitung dieser Informationen dient der sicheren und
            funktionsfähigen Bereitstellung der Website, der technischen
            Stabilität sowie der Erkennung und Abwehr von Sicherheitsrisiken.
          </P>
          <P>
            Rechtsgrundlage ist das berechtigte Interesse an einer sicheren und
            zuverlässigen Bereitstellung der Website gemäß Art. 6 Abs. 1 lit. f
            DSGVO.
          </P>
          <P>
            Die Verarbeitung personenbezogener Daten durch den Hosting-Anbieter
            erfolgt im Rahmen der datenschutzrechtlichen Anforderungen gemäß
            Art. 28 DSGVO.
          </P>
          <P>
            Die Speicherung technischer Zugriffsdaten erfolgt nur so lange, wie
            dies für den jeweiligen Verarbeitungszweck erforderlich ist.
          </P>
          <P>
            Weitere Informationen zur Datenverarbeitung sind den
            Datenschutzbestimmungen von IONOS zu entnehmen.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="sicherheit">3. Verschlüsselung und Datensicherheit</H2>
          <P>
            Diese Website verwendet eine SSL- bzw. TLS-Verschlüsselung zum
            Schutz der Datenübertragung.
          </P>
          <P>
            Zum Schutz personenbezogener Daten und Gesundheitsdaten werden
            angemessene technische und organisatorische Maßnahmen gemäß Art. 32
            DSGVO eingesetzt.
          </P>
          <P>
            Diese dienen insbesondere dem Schutz vor unbefugtem Zugriff,
            Verlust, Veränderung, unberechtigter Offenlegung und missbräuchlicher
            Verwendung.
          </P>
          <P>
            Der Zugriff auf medizinische Daten ist ausschließlich hierzu
            berechtigten Personen gestattet.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="cookies">4. Cookies und externe Dienste</H2>
          <P>
            Technisch notwendige Cookies oder vergleichbare Technologien können
            zur ordnungsgemäßen Bereitstellung der Website eingesetzt werden.
          </P>
          <P>
            Soweit technisch nicht notwendige Cookies, Analysewerkzeuge oder
            externe Dienste eingesetzt werden, erfolgt deren Aktivierung auf
            Grundlage einer vorherigen Einwilligung, sofern diese gesetzlich
            erforderlich ist.
          </P>
          <P>
            Rechtsgrundlagen sind § 25 TDDDG sowie Art. 6 Abs. 1 lit. a bzw.
            lit. f DSGVO.
          </P>
          <P>
            Eine erteilte Einwilligung kann jederzeit mit Wirkung für die
            Zukunft widerrufen werden.
          </P>

          <H3>4.1 Google Maps</H3>
          <P>
            Zur Darstellung des Praxisstandortes und zur Unterstützung der
            Anfahrts- und Routenplanung wird Google Maps angeboten.
          </P>
          <P>Anbieter des Dienstes ist:</P>
          <div className="mt-2 mb-2 rounded-[14px] border border-line bg-white/70 p-4">
            <p className="text-ink/85">
              Google Ireland Limited
              <br />
              Gordon House, Barrow Street
              <br />
              Dublin 4, Irland
            </p>
          </div>
          <P>
            Bei der Nutzung von Google Maps können insbesondere die IP-Adresse,
            technische Geräte- und Browserinformationen sowie gegebenenfalls
            Standortdaten verarbeitet werden.
          </P>
          <P>
            Sofern Google Maps unmittelbar in die Website eingebunden ist,
            erfolgt die Aktivierung erst nach entsprechender Einwilligung.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a DSGVO und, soweit
            einschlägig, § 25 Abs. 1 TDDDG.
          </P>
          <P>
            Eine erteilte Einwilligung kann jederzeit mit Wirkung für die
            Zukunft widerrufen werden.
          </P>
          <P>
            Bei einer Weiterleitung über einen externen Link erfolgt die weitere
            Datenverarbeitung durch den jeweiligen Anbieter.
          </P>
          <P>
            Eine Datenverarbeitung außerhalb der Europäischen Union kann nicht
            ausgeschlossen werden.
          </P>
          <P>
            Weitere Informationen sind den{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              Datenschutzbestimmungen von Google
            </a>{" "}
            zu entnehmen.
          </P>

          <H3>4.2 Google Ads</H3>
          <P>
            Zur Bekanntmachung der kardiologischen Privatpraxis und ihrer
            medizinischen Dienstleistungen wird der Online-Werbedienst Google
            Ads eingesetzt.
          </P>
          <P>
            Anbieter des Dienstes ist Google Ireland Limited, Gordon House,
            Barrow Street, Dublin 4, Irland.
          </P>
          <P>
            Die Nutzung dient der Bereitstellung von Werbeanzeigen, insbesondere
            innerhalb der Google-Suche.
          </P>
          <P>
            Sofern auf dieser Website zusätzlich Technologien zur
            Erfolgsmessung von Werbeanzeigen (Conversion-Tracking) eingesetzt
            werden, können hierbei technische Informationen, Cookie-Kennungen
            und Informationen zur Interaktion mit Werbeanzeigen verarbeitet
            werden.
          </P>
          <P>
            Eine solche Verarbeitung erfolgt erst nach entsprechender
            Einwilligung und unter Beachtung der geltenden datenschutzrechtlichen
            Anforderungen.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1
            TDDDG.
          </P>
          <P>
            Patientenakten, medizinische Befunde, Diagnosen und sonstige
            personenbezogene Behandlungsdaten werden nicht zu Werbezwecken an
            Google übermittelt.
          </P>
          <P>
            Eine gesundheitsbezogene Personalisierung von Werbeanzeigen auf
            Grundlage von Patientendaten findet nicht statt.
          </P>
          <P>
            Eine erteilte Einwilligung kann jederzeit über die
            Datenschutzeinstellungen der Website mit Wirkung für die Zukunft
            widerrufen werden.
          </P>
          <P>
            Weitere Informationen sind den{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              Datenschutzbestimmungen von Google
            </a>{" "}
            zu entnehmen.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="doctolib">
            5. Online-Terminvereinbarung und digitale Patientenverwaltung
          </H2>
          <P>
            Für die Online-Terminvereinbarung, Terminorganisation, digitale
            Patientenverwaltung und medizinische Dokumentation werden
            Dienstleistungen von Doctolib eingesetzt.
          </P>
          <P>
            Im Rahmen der Terminvereinbarung können insbesondere folgende Daten
            verarbeitet werden:
          </P>
          <UL>
            <LI>Vor- und Nachname</LI>
            <LI>Geburtsdatum</LI>
            <LI>Telefonnummer und E-Mail-Adresse</LI>
            <LI>Versicherungsstatus</LI>
            <LI>Terminart und Terminzeitpunkt</LI>
            <LI>Behandlungsanlass</LI>
            <LI>Weitere für die Terminvereinbarung erforderliche Angaben</LI>
          </UL>
          <P>
            Die Verarbeitung dient der Organisation der medizinischen Betreuung,
            der Terminplanung sowie gegebenenfalls der Übermittlung von
            Terminbestätigungen und Terminerinnerungen per E-Mail oder SMS.
          </P>
          <P>
            Im Rahmen der digitalen Patientenverwaltung werden zusätzlich die
            für die medizinische Betreuung und Dokumentation erforderlichen
            Gesundheitsdaten verarbeitet.
          </P>
          <P>
            Die cloudbasierte Speicherung der Patientendaten erfolgt in
            Deutschland.
          </P>
          <P>
            Soweit Doctolib als Auftragsverarbeiter tätig wird, erfolgt die
            Verarbeitung auf Grundlage eines Vertrags zur Auftragsverarbeitung
            gemäß Art. 28 DSGVO.
          </P>
          <P>
            Bei der Nutzung eines persönlichen Doctolib-Kontos oder
            eigenständiger Dienstleistungen des Anbieters gelten ergänzend
            dessen Datenschutzbestimmungen.
          </P>
          <P>
            Die Nutzung der Online-Terminvereinbarung ist freiwillig. Eine
            Terminvereinbarung kann alternativ telefonisch oder persönlich in
            der Praxis erfolgen.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO sowie bei der
            Verarbeitung von Gesundheitsdaten Art. 9 Abs. 2 lit. h und Abs. 3
            DSGVO.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="medizinische-betreuung">
            6. Verarbeitung personenbezogener Daten im Rahmen der medizinischen
            Betreuung
          </H2>
          <P>
            Im Rahmen der kardiologischen Betreuung werden personenbezogene
            Daten und Gesundheitsdaten verarbeitet, soweit diese für die
            medizinische Versorgung, Praxisorganisation und Erfüllung
            gesetzlicher Verpflichtungen erforderlich sind.
          </P>
          <P>Hierzu gehören insbesondere:</P>
          <UL>
            <LI>Personalien und Kontaktdaten</LI>
            <LI>Versicherungs- und Abrechnungsdaten</LI>
            <LI>Medizinische Vorgeschichte und Vorerkrankungen</LI>
            <LI>Familiäre und persönliche Risikofaktoren</LI>
            <LI>Beschwerden und aktuelle Medikamenteneinnahme</LI>
            <LI>Diagnosen und medizinische Befunde</LI>
            <LI>Medizinische Bild-, Mess- und Funktionsdaten</LI>
            <LI>Laborergebnisse</LI>
            <LI>Arztbriefe und medizinische Berichte</LI>
            <LI>Therapieempfehlungen und Behandlungsverläufe</LI>
          </UL>
          <P>
            Die Verarbeitung kann ebenfalls medizinische Informationen umfassen,
            die von vor- oder mitbehandelnden Ärztinnen und Ärzten,
            Krankenhäusern oder anderen medizinischen Einrichtungen rechtmäßig
            zur Verfügung gestellt werden.
          </P>
          <P>Die Datenverarbeitung erfolgt insbesondere zu folgenden Zwecken:</P>
          <UL>
            <LI>Ärztliche Beratung und Untersuchung</LI>
            <LI>Kardiologische Diagnostik</LI>
            <LI>Prävention und individuelle Risikobeurteilung</LI>
            <LI>Medizinische Behandlung und Therapieplanung</LI>
            <LI>Verlaufskontrollen</LI>
            <LI>Ärztliche Zweitmeinungen</LI>
            <LI>Erstellung medizinischer Befunde und Arztbriefe</LI>
            <LI>Erfüllung gesetzlicher Dokumentationspflichten</LI>
            <LI>Organisation und Abrechnung medizinischer Leistungen</LI>
          </UL>
          <P>
            Hierzu gehört insbesondere die Verarbeitung medizinischer
            Untersuchungsdaten aus:
          </P>
          <UL>
            <LI>Ruhe-EKG</LI>
            <LI>Belastungs-EKG</LI>
            <LI>Vektorkardiographie</LI>
            <LI>
              Echokardiographie einschließlich erweiterter echokardiographischer
              Verfahren
            </LI>
            <LI>Speckle-Tracking-Echokardiographie</LI>
            <LI>Stressechokardiographie</LI>
            <LI>Langzeit-EKG</LI>
            <LI>Langzeit-Blutdruckmessung</LI>
            <LI>Sonographischen Gefäßuntersuchungen</LI>
            <LI>Weiteren angebotenen kardiologischen Untersuchungsverfahren</LI>
          </UL>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b und lit. c DSGVO, Art. 9
            Abs. 2 lit. h und Abs. 3 DSGVO sowie § 22 Abs. 1 Nr. 1 lit. b BDSG.
          </P>
          <P>
            Die Bereitstellung der medizinisch erforderlichen personenbezogenen
            Daten ist Voraussetzung für eine ordnungsgemäße ärztliche Betreuung.
            Ohne diese Informationen kann eine medizinische Behandlung
            gegebenenfalls nicht oder nur eingeschränkt erfolgen.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="abrechnung">7. Privatärztliche Abrechnung</H2>
          <P>
            Die Abrechnung der ärztlichen Leistungen erfolgt auf Grundlage der
            Gebührenordnung für Ärzte (GOÄ).
          </P>
          <P>
            Bei privatversicherten und gegebenenfalls beihilfeberechtigten
            Patientinnen und Patienten kann die Abrechnung über eine externe
            privatärztliche Abrechnungsstelle erfolgen.
          </P>
          <P>
            Die hierfür erforderliche Übermittlung personenbezogener und
            abrechnungsrelevanter medizinischer Daten erfolgt auf Grundlage
            einer gesonderten ausdrücklichen Einwilligung und der entsprechenden
            Entbindung von der ärztlichen Schweigepflicht.
          </P>
          <P>
            Die zugehörigen Vertragsunterlagen, Einwilligungserklärungen und
            Datenschutzinformationen der privatärztlichen Abrechnungsstelle
            werden vor Ort in der Praxis zur Verfügung gestellt.
          </P>
          <P>
            Im Rahmen der Abrechnung können insbesondere folgende Daten
            verarbeitet und übermittelt werden:
          </P>
          <UL>
            <LI>Personalien und Kontaktdaten</LI>
            <LI>Rechnungsanschrift</LI>
            <LI>Behandlungszeitraum</LI>
            <LI>Abrechnungsrelevante Diagnosen und Befunde</LI>
            <LI>Erbrachte medizinische Leistungen</LI>
            <LI>Gebührenpositionen und Rechnungsbeträge</LI>
          </UL>
          <P>
            Die Datenübermittlung erfolgt ausschließlich im für die Abrechnung
            erforderlichen Umfang.
          </P>
          <P>
            Rechtsgrundlagen für die einwilligungsbasierte Datenübermittlung
            sind Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO.
          </P>
          <P>
            Eine erteilte Einwilligung kann jederzeit mit Wirkung für die
            Zukunft widerrufen werden. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt hiervon unberührt.
          </P>
          <P>
            Die Einwilligung zur externen Abrechnung ist freiwillig. Eine
            Nichterteilung der Einwilligung berührt nicht die grundsätzliche
            Möglichkeit einer medizinischen Behandlung.
          </P>
          <P>
            Die Abrechnung selbstzahlender Patientinnen und Patienten kann
            unmittelbar durch die Praxis erfolgen.
          </P>
          <P>
            Die Einreichung privatärztlicher Rechnungen bei
            Krankenversicherungen oder Beihilfestellen erfolgt grundsätzlich
            durch die jeweiligen Patientinnen und Patienten.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="labor">8. Externe Laboruntersuchungen</H2>
          <P>
            Sofern im Rahmen der medizinischen Betreuung Laboruntersuchungen
            erforderlich sind, können diese durch externe medizinische Labore
            durchgeführt werden.
          </P>
          <P>
            Hierfür werden das entsprechende Probenmaterial sowie die für die
            Durchführung, Zuordnung und medizinische Beurteilung der
            Untersuchung erforderlichen personenbezogenen Daten an das
            beauftragte Labor übermittelt.
          </P>
          <P>
            Die Datenübermittlung beschränkt sich auf die für die jeweilige
            Untersuchung erforderlichen Informationen.
          </P>
          <P>
            Die Laborergebnisse werden der Praxis zur ärztlichen Beurteilung zur
            Verfügung gestellt und in der Patientenakte dokumentiert.
          </P>
          <P>
            Die Abrechnung externer Laborleistungen kann unmittelbar durch das
            jeweilige Labor erfolgen.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b und Art. 9 Abs. 2 lit. h
            DSGVO.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="auswertung">9. Externe medizinische Auswertung</H2>
          <P>
            Im Rahmen bestimmter kardiologischer Untersuchungen, insbesondere
            der Langzeit-EKG-Diagnostik, können spezialisierte externe
            medizinische Auswertungsstellen eingebunden werden.
          </P>
          <P>
            Die Übermittlung der hierfür erforderlichen Untersuchungsdaten
            erfolgt verschlüsselt und unter Beachtung der geltenden
            datenschutzrechtlichen Anforderungen.
          </P>
          <P>
            Soweit das jeweilige Untersuchungs- und Auswertungsverfahren dies
            ermöglicht, erfolgt die Übermittlung in pseudonymisierter Form, ohne
            unmittelbare Angabe der persönlichen Identitätsdaten.
          </P>
          <P>
            Die Untersuchungsergebnisse werden anschließend ärztlich beurteilt
            und in der Patientenakte dokumentiert.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b und Art. 9 Abs. 2 lit. h
            DSGVO.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="zusammenarbeit">
            10. Ärztliche Zusammenarbeit und weiterführende Diagnostik
          </H2>
          <P>
            Im Rahmen einer umfassenden medizinischen Betreuung kann eine
            weiterführende Diagnostik oder Behandlung durch andere Ärztinnen und
            Ärzte, Krankenhäuser oder spezialisierte medizinische Einrichtungen
            erforderlich sein.
          </P>
          <P>Hierzu gehören insbesondere:</P>
          <UL>
            <LI>Hausärztliche und fachärztliche Praxen</LI>
            <LI>Krankenhäuser und spezialisierte Herzzentren</LI>
            <LI>Radiologische und nuklearmedizinische Einrichtungen</LI>
            <LI>Einrichtungen zur weiterführenden kardiologischen Diagnostik</LI>
            <LI>Weitere medizinische Fachrichtungen und diagnostische Einrichtungen</LI>
          </UL>
          <P>
            Bei entsprechender medizinischer Indikation können Überweisungen,
            Krankenhauseinweisungen, ärztliche Empfehlungen sowie medizinische
            Befundberichte ausgestellt werden.
          </P>
          <P>
            Eine Übermittlung von Arztbriefen, Untersuchungsergebnissen und
            weiteren medizinischen Informationen erfolgt im medizinisch
            erforderlichen Umfang unter Beachtung der ärztlichen Schweigepflicht
            und des Einverständnisses der Patientinnen und Patienten, soweit
            dieses erforderlich ist.
          </P>
          <P>
            Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b und Art. 9
            Abs. 2 lit. h DSGVO.
          </P>
          <P>
            Gesetzlich zulässige oder vorgeschriebene Datenübermittlungen sowie
            erforderliche Datenübermittlungen in medizinischen Notfällen bleiben
            hiervon unberührt.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="kontaktaufnahme">
            11. Kontaktaufnahme per Telefon und E-Mail
          </H2>
          <P>
            Bei einer Kontaktaufnahme per Telefon oder E-Mail werden die
            mitgeteilten personenbezogenen Daten zur Bearbeitung des jeweiligen
            Anliegens verarbeitet.
          </P>
          <P>Dies umfasst insbesondere:</P>
          <UL>
            <LI>Terminvereinbarungen und Terminänderungen</LI>
            <LI>Allgemeine organisatorische Anfragen</LI>
            <LI>Anfragen zu medizinischen Untersuchungen</LI>
            <LI>Abrechnungsbezogene Anliegen</LI>
            <LI>Behandlungsbezogene Kommunikation</LI>
          </UL>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO sowie
            bei behandlungsbezogenen Gesundheitsdaten Art. 9 Abs. 2 lit. h
            DSGVO.
          </P>
          <P>
            Da gewöhnliche E-Mails nicht in jedem Fall ausreichend gegen den
            Zugriff unbefugter Dritter geschützt sind, sollten vertrauliche
            medizinische Informationen, Befunde oder andere sensible
            Gesundheitsdaten möglichst über geschützte Kommunikationswege oder
            persönlich übermittelt werden.
          </P>
          <P>
            Behandlungsrelevante Informationen können entsprechend den
            gesetzlichen Dokumentationspflichten in die Patientenakte übernommen
            werden.
          </P>
          <P>
            Elektronische Kommunikationswege sind nicht für medizinische
            Notfälle vorgesehen.
          </P>
          <P>
            Bei akuten lebensbedrohlichen Beschwerden ist der Rettungsdienst
            unter der Telefonnummer{" "}
            <a
              href="tel:112"
              className="font-semibold underline-offset-4 hover:underline"
            >
              112
            </a>{" "}
            zu kontaktieren.
          </P>

          <H3>11.1 Kontaktformular</H3>
          <P>
            Das auf dieser Website bereitgestellte Kontaktformular dient
            ausschließlich der Bearbeitung organisatorischer und
            administrativer Anliegen im Zusammenhang mit der kardiologischen
            Privatpraxis.
          </P>
          <P>
            Die im Kontaktformular angegebenen personenbezogenen Daten werden
            ausschließlich zur Bearbeitung der jeweiligen Anfrage und
            gegebenenfalls zur erforderlichen Kontaktaufnahme verarbeitet.
          </P>
          <P>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO sowie,
            sofern im Zusammenhang mit einer medizinischen Betreuung
            Gesundheitsdaten verarbeitet werden, Art. 9 Abs. 2 lit. h DSGVO.
          </P>
          <P>
            Über das Kontaktformular erfolgen keine medizinische Beratung,
            Diagnosestellung oder Therapieempfehlung. Die Übermittlung einer
            Anfrage begründet für sich allein kein ärztliches
            Behandlungsverhältnis.
          </P>
          <P>
            Das Kontaktformular ist nicht für die Übermittlung umfangreicher
            medizinischer Unterlagen, die Abklärung akuter Beschwerden oder die
            Bearbeitung medizinischer Notfälle vorgesehen.
          </P>
          <P>
            Die übermittelten Daten werden nur so lange gespeichert, wie dies
            zur Bearbeitung des jeweiligen Anliegens erforderlich ist oder
            gesetzliche Dokumentations- und Aufbewahrungspflichten bestehen.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="schweigepflicht">
            12. Ärztliche Schweigepflicht und Vertraulichkeit
          </H2>
          <P>
            Sämtliche im Rahmen der medizinischen Betreuung erhobenen
            Informationen unterliegen der ärztlichen Schweigepflicht gemäß §
            203 StGB und den geltenden berufsrechtlichen Bestimmungen.
          </P>
          <P>
            Die Verpflichtung zur Vertraulichkeit gilt ebenfalls für die
            Mitarbeitenden der Praxis sowie für entsprechend eingebundene
            externe mitwirkende Personen.
          </P>
          <P>
            Eine Weitergabe vertraulicher medizinischer Informationen an
            Familienangehörige, Arbeitgeber, Versicherungen oder andere Personen
            und Einrichtungen erfolgt ausschließlich auf einer entsprechenden
            gesetzlichen Grundlage oder mit der erforderlichen Einwilligung.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="empfaenger">13. Empfänger personenbezogener Daten</H2>
          <P>
            Personenbezogene Daten werden ausschließlich im erforderlichen
            Umfang und auf einer zulässigen rechtlichen Grundlage an berechtigte
            Empfänger übermittelt.
          </P>
          <P>Hierzu können insbesondere gehören:</P>
          <UL>
            <LI>Berechtigte Mitarbeitende der Praxis</LI>
            <LI>Anbieter digitaler Termin- und Patientenverwaltung</LI>
            <LI>Anbieter medizinischer Software</LI>
            <LI>IT- und Hosting-Dienstleister</LI>
            <LI>Privatärztliche Abrechnungsstellen</LI>
            <LI>Externe medizinische Labore</LI>
            <LI>Medizinische Auswertungsstellen</LI>
            <LI>Vor-, mit- und weiterbehandelnde Ärztinnen und Ärzte</LI>
            <LI>Krankenhäuser und weitere medizinische Einrichtungen</LI>
            <LI>Behörden und sonstige gesetzlich berechtigte Stellen</LI>
          </UL>
          <P>
            Soweit externe Dienstleister als Auftragsverarbeiter tätig werden,
            erfolgt deren Einbindung auf Grundlage entsprechender Verträge gemäß
            Art. 28 DSGVO.
          </P>
          <P>
            Eine Weitergabe von Patientendaten an Dritte zu Werbezwecken findet
            nicht statt.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="drittland">
            14. Datenübermittlung außerhalb der Europäischen Union
          </H2>
          <P>
            Die cloudbasierte Speicherung der im Rahmen der digitalen
            Patientenverwaltung geführten Patientendaten erfolgt in Deutschland.
          </P>
          <P>
            Soweit im Rahmen technischer Dienstleistungen eine Verarbeitung
            personenbezogener Daten außerhalb der Europäischen Union oder des
            Europäischen Wirtschaftsraums stattfindet, erfolgt diese unter
            Beachtung der gesetzlichen Anforderungen gemäß Art. 44 ff. DSGVO.
          </P>
          <P>
            Hierfür sind insbesondere ein entsprechender Angemessenheitsbeschluss
            der Europäischen Kommission oder geeignete datenschutzrechtliche
            Garantien erforderlich, sofern keine andere gesetzlich zulässige
            Ausnahme vorliegt.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="links">15. Links zu externen Websites</H2>
          <P>
            Diese Website kann Verlinkungen zu externen Anbietern, medizinischen
            Einrichtungen oder weiteren Informationsangeboten enthalten.
          </P>
          <P>
            Bei einer Weiterleitung zu einer externen Website gelten die
            Datenschutzbestimmungen des jeweiligen Anbieters.
          </P>
          <P>
            Für die dort stattfindende Datenverarbeitung ist der jeweilige
            Anbieter verantwortlich.
          </P>

          <H3>15.1 LinkedIn</H3>
          <P>
            Auf dieser Website befindet sich eine Verlinkung zum beruflichen
            Profil auf LinkedIn.
          </P>
          <P>Anbieter ist:</P>
          <div className="mt-2 mb-2 rounded-[14px] border border-line bg-white/70 p-4">
            <p className="text-ink/85">
              LinkedIn Ireland Unlimited Company
              <br />
              Wilton Place
              <br />
              Dublin 2, Irland
            </p>
          </div>
          <P>
            Die Verlinkung dient der Bereitstellung weiterführender beruflicher
            Informationen.
          </P>
          <P>
            Bei einer einfachen Verlinkung erfolgt allein durch den Besuch
            dieser Website keine Datenübermittlung an LinkedIn über den
            entsprechenden Button.
          </P>
          <P>
            Erst durch das aktive Anklicken des Links wird eine Verbindung zur
            Plattform hergestellt. Dabei können personenbezogene Daten,
            insbesondere die IP-Adresse und technische Browserinformationen,
            durch LinkedIn verarbeitet werden.
          </P>
          <P>
            Für die anschließende Datenverarbeitung auf der Plattform gelten die{" "}
            <a
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              Datenschutzbestimmungen von LinkedIn
            </a>
            .
          </P>

          <H3>15.2 Jameda</H3>
          <P>
            Auf dieser Website befindet sich eine Verlinkung zum Arztprofil auf
            dem Ärzte- und Gesundheitsportal Jameda.
          </P>
          <P>Anbieter ist:</P>
          <div className="mt-2 mb-2 rounded-[14px] border border-line bg-white/70 p-4">
            <p className="text-ink/85">
              jameda GmbH
              <br />
              München, Deutschland
            </p>
          </div>
          <P>
            Die Verlinkung dient der Bereitstellung weiterführender
            Informationen zur kardiologischen Privatpraxis, zum ärztlichen
            Leistungsangebot sowie zu Patientenbewertungen und gegebenenfalls
            zur Online-Terminvereinbarung.
          </P>
          <P>
            Bei einer einfachen Verlinkung erfolgt allein durch den Besuch
            dieser Website keine Datenübermittlung an Jameda über den
            entsprechenden Button.
          </P>
          <P>
            Erst durch das aktive Anklicken des Links wird eine Verbindung zum
            Anbieter hergestellt.
          </P>
          <P>
            Für die weitere Verarbeitung personenbezogener Daten auf der
            Plattform gelten die{" "}
            <a
              href="https://www.jameda.de/zusatzinfo/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              Datenschutzbestimmungen von Jameda
            </a>
            .
          </P>
        </Reveal>

        <Reveal>
          <H2 id="speicherdauer">
            16. Speicherdauer und gesetzliche Aufbewahrungspflichten
          </H2>
          <P>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies
            für den jeweiligen Verarbeitungszweck erforderlich ist oder
            gesetzliche Aufbewahrungspflichten bestehen.
          </P>
          <P>
            Medizinische Behandlungsunterlagen werden grundsätzlich mindestens
            zehn Jahre nach Abschluss der Behandlung aufbewahrt (§ 630f Abs. 3
            BGB).
          </P>
          <P>
            Aufgrund besonderer gesetzlicher oder berufsrechtlicher
            Bestimmungen können im Einzelfall längere Aufbewahrungsfristen
            erforderlich sein.
          </P>
          <P>
            Abrechnungsunterlagen unterliegen den jeweils geltenden
            gesetzlichen und steuerrechtlichen Aufbewahrungsfristen.
          </P>
          <P>
            Nach Ablauf der maßgeblichen Aufbewahrungsfristen erfolgt die
            Löschung personenbezogener Daten, sofern keine weitere rechtliche
            Grundlage für die Speicherung besteht.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="automatisiert">17. Automatisierte Entscheidungsfindung</H2>
          <P>
            Eine ausschließlich automatisierte Entscheidungsfindung mit
            rechtlicher oder vergleichbar erheblicher Wirkung im Sinne des Art.
            22 DSGVO findet im Rahmen der medizinischen Betreuung nicht statt.
          </P>
          <P>
            Medizinische Untersuchungsergebnisse, diagnostische Befunde und
            Therapieentscheidungen unterliegen der ärztlichen Beurteilung und
            Verantwortung.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="rechte">18. Rechte betroffener Personen</H2>
          <P>
            Im Rahmen der gesetzlichen Voraussetzungen bestehen folgende Rechte
            hinsichtlich der Verarbeitung personenbezogener Daten:
          </P>
          <UL>
            <LI>
              Auskunftsrecht über die verarbeiteten personenbezogenen Daten
              (Art. 15 DSGVO)
            </LI>
            <LI>
              Recht auf Berichtigung unrichtiger oder unvollständiger Daten
              (Art. 16 DSGVO)
            </LI>
            <LI>Recht auf Löschung personenbezogener Daten (Art. 17 DSGVO)</LI>
            <LI>Recht auf Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</LI>
            <LI>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</LI>
            <LI>Widerspruchsrecht gegen bestimmte Datenverarbeitungen (Art. 21 DSGVO)</LI>
            <LI>
              Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für
              die Zukunft (Art. 7 Abs. 3 DSGVO)
            </LI>
          </UL>
          <P>
            Darüber hinaus besteht im Rahmen der gesetzlichen Voraussetzungen
            das Recht auf Einsicht in die Patientenakte.
          </P>
          <P>
            Gesetzliche Dokumentations- und Aufbewahrungspflichten können einer
            sofortigen Löschung medizinischer Daten entgegenstehen.
          </P>
          <P>
            Zur Wahrnehmung dieser Rechte kann jederzeit Kontakt mit der Praxis
            aufgenommen werden.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="widerspruch">19. Widerspruchsrecht</H2>
          <P>
            Soweit personenbezogene Daten auf Grundlage eines berechtigten
            Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden,
            besteht das Recht, aus Gründen, die sich aus der besonderen
            persönlichen Situation ergeben, jederzeit Widerspruch gegen diese
            Verarbeitung einzulegen.
          </P>
          <P>
            Die betreffende Datenverarbeitung wird eingestellt, sofern keine
            zwingenden schutzwürdigen Gründe für die weitere Verarbeitung
            nachgewiesen werden können, welche die Interessen, Rechte und
            Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung
            der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            dient.
          </P>
          <P>
            Der Widerspruch kann formlos gegenüber der Praxis erklärt werden.
          </P>
        </Reveal>

        <Reveal>
          <H2 id="aufsicht">
            20. Beschwerderecht bei der Datenschutzaufsichtsbehörde
          </H2>
          <P>
            Bei der Annahme, dass die Verarbeitung personenbezogener Daten
            gegen datenschutzrechtliche Vorschriften verstößt, besteht das
            Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde gemäß
            Art. 77 DSGVO.
          </P>
          <P>Die zuständige Datenschutzaufsichtsbehörde ist:</P>
          <div className="mt-4 rounded-[16px] border border-line bg-white/70 p-5">
            <p className="text-ink font-semibold">
              Unabhängiges Datenschutzzentrum Saarland
            </p>
            <p className="text-ink/85 mt-1">
              Landesbeauftragte für Datenschutz und Informationsfreiheit
            </p>
            <p className="text-ink/85 mt-3">
              Fritz-Dobisch-Straße 12
              <br />
              66111 Saarbrücken
            </p>
            <p className="text-ink/85 mt-3">
              Telefon: 0681 94781-0
              <br />
              Telefax: 0681 94781-29
              <br />
              E-Mail: poststelle@datenschutz.saarland.de
            </p>
          </div>
        </Reveal>

        <Reveal>
          <H2 id="aktualisierung">21. Aktualisierung der Datenschutzerklärung</H2>
          <P>
            Diese Datenschutzerklärung wird bei Änderungen der gesetzlichen
            Rahmenbedingungen, der technischen Gegebenheiten oder der
            eingesetzten medizinischen und organisatorischen Dienstleistungen
            entsprechend angepasst.
          </P>
          <p className="mt-6 text-[14px] text-muted italic">
            Stand: November 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
