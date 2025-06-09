import React, { useState } from "react";
import axios from "axios";
import "./GeneratedCharakter.css";
import LoadingBar from "./LoadingBar";

export default function GeneratedCharakter({ charakter, generatorOptionen }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [antwort, setAntwort] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    setLoading(true);

    const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    const context =
      "Du bist ein kreativer KI-Charaktergenerator für Pen and Paper-Rollenspiele. Erstelle einen fiktiven Charakter auf Grundlage der Eingaben des Nutzenden und fülle fehlende Informationen selbstständig aus. Gib die Charakterbeschreibung als reinen HTML-String zurück - ohne Einleitung, ohne Format-Erklärung, ohne zusätzliche Textinfos. Verwende echte HTML-Tags (zum Beispiel <h2>, <ul>, <li>, <p>) im Output, aber schreibe sie nicht als Text. Gib nur den HTML-Code zurück, der im Browser direkt dargestellt werden kann. Die Beschreibung soll auf Deutsch geschrieben sein. Stelle den Namen des Charakters ganz oben als <h2> dar. Sei kreativ und gebe dem Charakter Tiefe, viele Hintergrundinformationen und -details und beende die Sätze mit einem Punkt.";
    let prompt = "";

    if (generatorOptionen === "nur-hintergrundgeschichte") {
      prompt = `Erstelle eine kreative, fiktive Hintergrundgeschichte mit maximal 2 Absätzen für folgenden Charakter: Setting: ${charakter.setting}, Geschlecht: ${charakter.geschlecht}, Rolle: ${charakter.klasse}, Genre: ${charakter.genre}, Stärken: ${charakter.stärken}, Schwächen: ${charakter.schwächen}, Vergangenheit: ${charakter.vergangenheit}, Wunsch: ${charakter.wunsch}, Besitz: ${charakter.besitz}. Ergänze eigenständig fehlende Informationen und Details, um eine vollständige Charakterbeschreibung zu erstellen.`;
    } else if (generatorOptionen === "nur-werte-atributprofil") {
      prompt = `Generiere ein Attributsprofil für folgenden Charakter: Setting: ${charakter.setting}, Geschlecht: ${charakter.geschlecht}, Rolle: ${charakter.klasse}, Genre: ${charakter.genre}, Stärken: ${charakter.stärken}, Schwächen: ${charakter.schwächen}. Würfle passende Werte für die Attribute aus und beschreibe sie kurz. Ergänze eigenständig fehlende Informationen und Details, um eine vollständige Wertetabelle zu erstellen. Beschränke dich dabei auf maximal 6 Attribute und gib sie als HTML-Liste zurück.`;
    } else if (
      generatorOptionen === "kompletter-charakter-mit-hintergrund-und-werte"
    ) {
      prompt = `Erstelle einen kompletten Charakter mit Hintergrundgeschichte und Attributsprofil für folgenden Charakter: Setting: ${charakter.setting}, Geschlecht: ${charakter.geschlecht}, Rolle: ${charakter.klasse}, Genre: ${charakter.genre}, Stärken: ${charakter.stärken}, Schwächen: ${charakter.schwächen}, Vergangenheit: ${charakter.vergangenheit}, Wunsch: ${charakter.wunsch}, Besitz: ${charakter.besitz}. Ergänze eigenständig fehlende Informationen und Details, um eine vollständige Charakterbeschreibung mit entsprechenden Werten zu erstellen. Beschränke die gesamte Antwort auf maximal 1500 Zeichen.`;
    }

    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setAntwort(response.data.answer);
      setLoading(false);
    });
  }

  return (
    <>
      <input type="submit" value="Generieren" onClick={handleSubmit} />

      {isSubmitted && (
        <div className="GeneratedCharakter">
          {loading ? (
            <LoadingBar />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: antwort }} />
          )}
        </div>
      )}
    </>
  );
}
