import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GeneratedCharakter.css";

export default function GeneratedCharakter({ charakter, generatorOptionen }) {
  const [antwort, setAntwort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchKI() {
      setLoading(true);
      const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
      const context =
        "Du bist ein kreativer und erfidungsreicher KI-Charaktergenerator für Rollenspiele. Du generierst Charaktere basierend auf den Informationen, die der Nutzer dir gibt. Du gibst die Informationen in einem Textblock zurück, der die folgenden Punkte enthält: Setting, Geschlecht, Klasse, Genre, Stärken, Schwächen, Vergangenheit, Wunsch und Besitz. Die Informationen sind in einem Textblock zusammengefasst und nicht in einer Liste. Der Textblock ist in deutscher Sprache verfasst.";
      const prompt = `Erstelle eine ${generatorOptionen} für folgenden Charakter: Setting: ${charakter.setting}, Geschlecht: ${charakter.geschlecht}, Rolle: ${charakter.klasse}, Genre: ${charakter.genre}, Stärken: ${charakter.stärken}, Schwächen: ${charakter.schwächen}, Vergangenheit: ${charakter.vergangenheit}, Wunsch: ${charakter.wunsch}, Besitz: ${charakter.besitz}`;

      const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      axios.get(apiUrl).then((response) => {
        setAntwort(response.data.answer);
        setLoading(false);
      });
    }
    fetchKI();
  }, [charakter, generatorOptionen]);

  return (
    <div className="GeneratedCharakter">
      <h2>Generierter Charakter</h2>
      {loading ? <p>Wird geladen...</p> : <p>{antwort}</p>}
    </div>
  );
}
