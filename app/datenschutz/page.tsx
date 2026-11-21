import { site } from "@/lib/site";

export const metadata = {
  title: "Datenschutz · DBB Kardio",
};

export default function DatenschutzPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Datenschutz</p>
      <h1 className="font-display text-[32px] md:text-[38px] text-ink leading-[1.2]">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-8 text-muted leading-[1.75] text-[16px]">
        <p>
          Die Verarbeitung personenbezogener Daten, beispielsweise des Namens,
          der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen
          Person, erfolgt im Einklang mit den Erfordernissen der
          Datenschutz-Grundverordnung (DSGVO) und in Übereinstimmung mit den
          für uns geltenden landesspezifischen Datenschutzbestimmungen
          (DSAnpUG-EU / BDSG). Mittels dieser Datenschutzerklärung möchten wir
          Sie über Art, Umfang und Zweck der von uns verarbeiteten
          personenbezogenen Daten informieren. Ferner werden Sie mittels dieser
          Datenschutzerklärung über die Ihnen zustehenden Rechte aufgeklärt.
        </p>
        <p>
          Im Allgemeinen ist es für die Nutzung unserer Internetseite nicht
          erforderlich, dass Sie personenbezogene Daten angeben. Um im
          Einzelfall jedoch unsere Services anbieten zu können, benötigen wir
          ggf. Ihre personenbezogenen Daten, zum Beispiel bei der Zusendung von
          Informationsmaterial sowie auch für die Beantwortung individueller
          Anfragen oder Anmeldung zu unseren Online-Services. Ist die
          Verarbeitung personenbezogener Daten erforderlich und besteht für
          eine solche Verarbeitung keine gesetzliche Grundlage, holen wir
          generell die Einwilligung der betroffenen Person ein.
        </p>
        <p>
          Wir haben zahlreiche technische und organisatorische Maßnahmen
          umgesetzt, um einen möglichst lückenlosen Schutz der über diese
          Internetseite verarbeiteten personenbezogenen Daten sicherzustellen.
        </p>

        <div>
          <p className="kicker">Name und Anschrift des Verantwortlichen</p>
          <p className="mt-2">
            Verantwortlicher im Sinne der DSGVO und des DSAnpUG-EU / BDSG und
            anderer Bestimmungen mit datenschutzrechtlichem Charakter ist:
          </p>
          <p className="mt-4 text-ink font-display text-[22px]">
            {site.fullName}
          </p>
          <p>{site.descriptor}</p>
          <p>
            {site.address.street}
            <br />
            {site.address.zipCity}
            <br />
            Deutschland
          </p>
          <p className="mt-2">
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>
        </div>

        <div>
          <p className="kicker">
            Rechtsgrundlage für die Verarbeitung personenbezogener Daten
          </p>
          <p className="mt-2">
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
            Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
            lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
            Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
            eines Vertrages, dessen Vertragspartei die betroffene Person ist,
            erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
            Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
            Durchführung vorvertraglicher Maßnahmen erforderlich sind. Soweit
            eine Verarbeitung personenbezogener Daten zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich ist, der unsere Praxis
            unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            Für den Fall, dass lebenswichtige Interessen der betroffenen Person
            oder einer anderen natürlichen Person eine Verarbeitung
            personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
            lit. d DSGVO als Rechtsgrundlage. Ist die Verarbeitung zur Wahrung
            eines berechtigten Interesses unserer Praxis oder eines Dritten
            erforderlich und überwiegen die Interessen, Grundrechte und
            Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht,
            so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die
            Verarbeitung.
          </p>
        </div>

        <div>
          <p className="kicker">Log-Files</p>
          <p className="mt-2">
            Beim Zugriff auf unsere Internetseiten übermittelt Ihr
            Internet-Browser automatisch Daten an unseren Webserver. Hierbei
            handelt es sich unter anderem um Browsertyp und Version, verwendetes
            Betriebssystem, verweisende URL, Name der abgerufenen Datei,
            übertragene Datenmenge, Datum und Uhrzeit des Zugriffs sowie Ihre
            IP-Adresse. Die Erhebung und Speicherung erfolgt ausschließlich in
            anonymisierter oder pseudonymisierter Form und lässt keinen
            Rückschluss auf Sie als natürliche Person zu. Sie werden getrennt
            von anderen Daten, die Sie im Rahmen der Nutzung unseres
            Internetangebots eingeben, gespeichert. Ihre Auswertung erfolgt nur
            zu statistischen Zwecken.
          </p>
        </div>

        <div>
          <p className="kicker">Cookies</p>
          <p className="mt-2 text-ink">
            a) Cookies und wie sie von uns eingesetzt werden
          </p>
          <p className="mt-2">
            Bei Cookies handelt es sich um spezifische Identifikationszeichen,
            die auf die Festplatte Ihres Computers oder sonstige Endgeräte
            übertragen werden können, um die ordnungsgemäße Funktionalität
            unserer Internetseiten sicherzustellen.
          </p>
          <p className="mt-4">Cookies können von uns zu weiteren Zwecken verwendet werden, insbesondere können wir:</p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>
              Sie automatisch erkennen, wenn Sie sich auf unserer Internetseite
              anmelden. Dadurch besteht die Möglichkeit, Ihnen gezielte
              Hinweise zu geben sowie ggf. weitere Funktionen und Dienste
              anzubieten.
            </li>
            <li>
              auf unserer Internetseite Inhalte darstellen, die speziell auf
              Ihre Interessen zugeschnitten sind.
            </li>
            <li>
              Recherchen und Diagnosen zur Verbesserung von Inhalten und
              Leistungen durchführen.
            </li>
            <li>Betrugsversuche verhindern.</li>
            <li>die Sicherheit verbessern.</li>
          </ul>
          <p className="mt-4">
            Beim Aufruf unserer Internetseiten werden Sie um Einwilligung in
            das Setzen von Cookies gebeten. Sie haben die Möglichkeit, nur
            notwendige Cookies zuzulassen oder auch Cookies zu akzeptieren, die
            weitergehenden Zwecken dienen.
          </p>
          <p className="mt-2">
            Rechtsgrundlage für das Setzen von Cookies sowie deren Verarbeitung
            ist Art. 6 Abs. 1 lit. a DSGVO sowie im Übrigen Art. 6 Abs. 1 lit.
            f DSGVO. Soweit Sie jedoch das Setzen von Cookies nicht erlauben
            oder Cookies auf andere Art und Weise ablehnen, können sich
            Einschränkungen der Anzeige und Funktion der Website ergeben.
          </p>
          <p className="mt-4 text-ink">b) Cookies ablehnen: Browsereinstellungen</p>
          <p className="mt-2">
            Die Hilfe-Funktion der meisten Webbrowser erklärt Ihnen, wie Sie
            Ihren Browser davon abhalten, neue Cookies zu akzeptieren, wie Sie
            Ihren Browser darauf hinweisen lassen, wenn Sie einen neuen Cookie
            erhalten, oder auch, wie Sie sämtliche erhaltenen Cookies
            ausschalten.
          </p>
        </div>

        <div>
          <p className="kicker">Google Maps</p>
          <p className="mt-2">
            Auf unserer Internetseite verwenden wir die Google Maps API, um
            geographische Informationen visuell darzustellen. Google Maps ist
            ein Kartendienst von Google Ireland Limited, Gordon House, Barrow
            Street, Dublin 4, Irland. Bei der Nutzung von Google Maps werden
            von Google auch Daten über die Nutzung der Maps-Funktionen durch
            Besucher der Webseiten erhoben, verarbeitet und genutzt. Nähere
            Informationen über die Datenverarbeitung durch Google können Sie
            den Datenschutzhinweisen von Google entnehmen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              policies.google.com/privacy
            </a>
            . Dort können Sie im Datenschutzcenter auch Ihre Einstellungen
            verändern, sodass Sie Ihre Daten verwalten und schützen können.
          </p>
        </div>

        <div>
          <p className="kicker">Social Media</p>
          <p className="mt-2">
            Auf unseren Seiten sind keine Plugins eingebunden, die durch
            soziale Netzwerke wie Facebook, Instagram, X, LinkedIn oder
            WhatsApp zur Verfügung gestellt werden. Eine automatische
            Übertragung von Nutzerdaten an die Betreiber dieser Plattformen
            findet auf unseren Seiten nicht statt. Sofern wir überhaupt
            Social-Buttons einsetzen, stellen diese den direkten Kontakt
            zwischen den Netzwerken und Nutzern erst dann her, wenn der Nutzer
            aktiv auf einen dieser Buttons klickt.
          </p>
        </div>

        <div>
          <p className="kicker">Kontaktaufnahme über unsere Website</p>
          <p className="mt-2">
            Über die Kontaktformulare und Kontaktwege auf unserer Website
            (Terminwunsch, Rezept- oder Überweisungsanfrage, allgemeine
            Nachricht) können Sie direkt mit uns Kontakt aufnehmen. Wir
            erheben, verarbeiten, speichern und nutzen die von Ihnen über das
            Formular oder per E-Mail mitgeteilten Kontaktdaten und
            Informationen ausschließlich für die Bearbeitung Ihres konkreten
            Anliegens. Eine Weitergabe an Dritte erfolgt ohne Ihre Einwilligung
            nicht. Rechtsgrundlage der Verarbeitung Ihrer Daten ist Ihre
            Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Mit Ihrer
            Einwilligung in die Verarbeitung erklären Sie sich auch mit der
            weiteren Kommunikation mit uns per E-Mail bezüglich Ihres
            Anliegens einverstanden.
          </p>
        </div>

        <div>
          <p className="kicker">Löschung und Sperrung personenbezogener Daten</p>
          <p className="mt-2">
            Wir verarbeiten und speichern personenbezogene Daten nur für den
            Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
            ist, oder sofern dies durch den Europäischen Richtlinien- und
            Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
            Vorschriften, welchen wir unterliegen, vorgesehen wurde.
          </p>
          <p className="mt-2">
            Entfällt der Speicherungszweck oder läuft eine vom Europäischen
            Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
            Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
            personenbezogenen Daten routinemäßig und entsprechend den
            gesetzlichen Vorschriften gesperrt oder gelöscht.
          </p>
        </div>

        <div>
          <p className="kicker">Rechte der betroffenen Person</p>
          <p className="mt-2">
            Sie erhalten jederzeit ohne Angabe von Gründen kostenfreie Auskunft
            über Ihre bei uns gespeicherten Daten. Sie können jederzeit Ihre
            bei uns erhobenen Daten sperren, berichtigen oder löschen lassen
            und der anonymisierten oder pseudonymisierten Datenerhebung und
            Datenspeicherung zu Optimierungszwecken unserer Internetseite
            widersprechen.
          </p>
          <p className="mt-2">
            Auch können Sie jederzeit die uns erteilte Einwilligung zur
            Datenerhebung und Verwendung ohne Angabe von Gründen widerrufen,
            die Datenverarbeitung bleibt bis zum Zeitpunkt des Widerrufs
            rechtmäßig. Der Widerruf ist an den Verantwortlichen unter dessen
            oben angegebenen Kontaktdaten zu richten.
          </p>
          <p className="mt-2">
            Gemäß Art. 77 DSGVO haben Sie das Recht, sich bei einer
            Aufsichtsbehörde (für die Praxis in {site.city} bei der
            Landesbeauftragten für Datenschutz und Informationsfreiheit des
            Saarlandes) zu beschweren, wenn Sie der Ansicht sind, dass die
            Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt.
          </p>
        </div>

        <div>
          <p className="kicker">
            Datenschutz bei Bewerbungen und im Bewerbungsverfahren
          </p>
          <p className="mt-2">
            Wir erheben und verarbeiten die personenbezogenen Daten von
            Bewerbenden zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die
            Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist
            insbesondere dann der Fall, wenn ein Bewerber oder eine Bewerberin
            entsprechende Bewerbungsunterlagen auf dem elektronischen Wege,
            beispielsweise per E-Mail, an den für die Verarbeitung
            Verantwortlichen übermittelt. Schließen wir einen Anstellungsvertrag
            mit einem Bewerber oder einer Bewerberin, werden die übermittelten
            Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses
            unter Beachtung der gesetzlichen Vorschriften gespeichert. Wird von
            uns kein Anstellungsvertrag geschlossen, so werden die
            Bewerbungsunterlagen sechs Monate nach Bekanntgabe der
            Absageentscheidung automatisch gelöscht, sofern einer Löschung
            keine sonstigen berechtigten Interessen des für die Verarbeitung
            Verantwortlichen entgegenstehen. Sonstiges berechtigtes Interesse
            in diesem Sinne ist beispielsweise eine Beweispflicht in einem
            Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).
          </p>
        </div>

        <div>
          <p className="kicker">Kontaktaufnahme</p>
          <p className="mt-2">
            Wenn Sie weitere Fragen zur Erhebung, Verarbeitung oder Nutzung
            Ihrer personenbezogenen Daten haben, kontaktieren Sie uns bitte.
            Gleiches gilt für Auskünfte, Sperrung, Löschungs- und
            Berichtigungswünsche hinsichtlich Ihrer personenbezogenen Daten
            sowie für Widerrufe erteilter Einwilligungen.
          </p>
          <p className="mt-4 text-ink font-display text-[20px]">
            {site.fullName}
          </p>
          <p>{site.descriptor}</p>
          <p>
            {site.address.street}
            <br />
            {site.address.zipCity}
          </p>
          <p className="mt-2">
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
