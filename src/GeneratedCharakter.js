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
      "Du bist ein kreativer KI-Charaktergenerator für Pen and Paper-Rollenspiele. Erstelle einen fiktiven Charakter auf Grundlage der Eingaben des Nutzenden und fülle fehlende Informationen selbstständig aus. Gib die Charakterbeschreibung als reinen HTML-String zurück - ohne Einleitung, ohne Format-Erklärung, ohne zusätzliche Textinfos. Verwende echte HTML-Tags (zum Beispiel <h2>, <ul>, <li>, <p>) im Output, aber schreibe sie nicht als Text. Gib nur den HTML-Code zurück, der im Browser direkt dargestellt werden kann. Die Beschreibung soll auf Deutsch geschrieben sein. Stelle den Namen des Charakter ganz oben als <h2> dar. Sei kreativ und gebe dem Charakter tiefe, viele Hintergrundinformationen und -details und beende die Sätze mit einem Punkt. Gebe gerne jeweils Erklärungen für die Stärken/Schwächen des Charakters um ihm noch mehr tiefe zu verleihen. Führe die Hintergrundgeschichte bei Bedarf ausführlich aus.";

    const prompt = `Erstelle eine ${generatorOptionen} für folgenden Charakter: Setting: ${charakter.setting}, Geschlecht: ${charakter.geschlecht}, Rolle: ${charakter.klasse}, Genre: ${charakter.genre}, Stärken: ${charakter.stärken}, Schwächen: ${charakter.schwächen}, Vergangenheit: ${charakter.vergangenheit}, Wunsch: ${charakter.wunsch}, Besitz: ${charakter.besitz}`;

    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

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
