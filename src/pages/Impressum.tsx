import React from "react";
import "./Impressum.css";

const Impressum: React.FC = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="bg-card p-8 rounded-lg shadow-md max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Impressum</h1>

        <div className="space-y-6 text-foreground">
          <p>
            <strong>Angaben gemäß § 5 TMG</strong>
            <br />
            Tom Stiefel
            <br />
            Max-Planck-Str. 29A
            <br />
            63500Seligenstadt
            <br />
            Deutschland
          </p>

          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Tom Stiefel
          </p>

          <p>
            <strong>Kontakt:</strong>
            <br />
            Telefon: 06182 1234
            <br />
            E-Mail: drinkbuddy@gmail.com
            <br />
          </p>

          <p>
            <strong>Umsatzsteuer-ID:</strong>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            [USt-IdNr.]
          </p>

          <p>
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </strong>
            <br />
            Tom Stiefel
            <br />
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-primary">
            Haftungsausschluss
          </h2>

          <p>
            <strong>Haftung für Inhalte</strong>
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich.
          </p>

          <p>
            <strong>Haftung für Links</strong>
            <br />
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-primary">
            Streitschlichtung
          </h2>

          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
            bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
