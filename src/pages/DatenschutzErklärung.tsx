import React from "react";
import "./DatenschutzErklärung.css";
import { Link } from "react-router-dom";

const Datenschutz: React.FC = () => {
  return (
    <section className="container py-24 sm:py-32 w-[100%]">
      <div className="bg-card p-8 rounded-lg shadow-md max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-foreground">
          <p>
            <strong>1. Datenschutz auf einen Blick</strong>
            <br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <p>
            <strong>2. Allgemeine Hinweise und Pflichtinformationen</strong>
            <br />
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <p>
            <strong>3. Datenerfassung auf unserer Website</strong>
            <br />
            <em>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </em>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <p>
            <strong>4. Ihre Rechte</strong>
            <br />
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
            unter der im Impressum angegebenen Adresse an uns wenden.
          </p>

          <p>
            <strong>5. Datensicherheit</strong>
            <br />
            Wir verwenden innerhalb des Website-Besuchs das verbreitete
            SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
            höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-primary">
            Datenerfassung auf dieser Website
          </h2>

          <p>
            <strong>Cookies</strong>
            <br />
            Unsere Internetseiten verwenden teilweise so genannte Cookies.
            Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
            keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
            effektiver und sicherer zu machen. Cookies sind kleine Textdateien,
            die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>

          <p>
            <strong>Kontaktformular</strong>
            <br />
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-primary">
            Änderungen dieser Datenschutzerklärung
          </h2>

          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung
            gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen in
            der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer
            Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>

          <p>
            <strong>Fragen zum Datenschutz</strong>
            <br />
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail an{" "}
            <a
              href="mailto:drinkbuddy@gmail.com"
              className="text-primary hover:underline"
            >
              drinkbuddy@gmail.com
            </a>
            .
          </p>
          <p>
            <strong>Daten löschen?</strong>
            <br />
            Wenn Sie Ihre Daten löschen lassen möchten, können Sie dies hier
            tun:{" "}
            <Link to="/DatenEntfernen" className="text-primary hover:underline">
              Daten löschen
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
