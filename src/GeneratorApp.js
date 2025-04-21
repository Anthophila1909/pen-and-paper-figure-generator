import React, { useState } from "react";
import "./GeneratorApp.css";
import GeneratedCharakter from "./GeneratedCharakter";

export default function GeneratorApp() {
  const [charakter, setCharakter] = useState({
    setting: "",
    geschlecht: "",
    klasse: "",
    genre: "",
    stärken: "",
    schwächen: "",
    vergangenheit: "",
    wunsch: "",
    besitz: "",
  });

  const [generatorOptionen, setGeneratorOptionen] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setCharakter((prevCharakter) => ({
      ...prevCharakter,
      [name]: value,
    }));
  }

  function handleRadioChange(event) {
    setGeneratorOptionen(event.target.value);
  }

  return (
    <div className="GeneratorApp">
      <form>
        <div className="row">
          <div className="col basisinformationen">
            <h2>Basis-Informationen:</h2>
            <div className="form-group">
              <label htmlFor="setting">Setting:</label>
              <input
                type="text"
                placeholder="Cthulhu 1920er, Cyberpunk Tokyo, ..."
                name="setting"
                id="setting"
                value={charakter.setting}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="geschlecht">Geschlecht:</label>
              <input
                type="text"
                placeholder="weiblich, non-binär, ..."
                name="geschlecht"
                id="geschlecht"
                value={charakter.geschlecht}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="klasse">Beruf/ Klasse/ Rolle:</label>
              <input
                type="text"
                placeholder="Krieger, Magierin, Professorin, ..."
                name="klasse"
                id="klasse"
                value={charakter.klasse}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre/Ton:</label>
              <input
                type="text"
                placeholder="Grusel, Noir, Komödie, düster, ..."
                name="genre"
                id="genre"
                value={charakter.genre}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col charakterkontext">
            <h2>Charakterkontext:</h2>
            <div className="form-group">
              <label htmlFor="stärken">Stärken:</label>
              <input
                type="text"
                placeholder="mutig, neugierig, redegewandt, ..."
                name="stärken"
                id="stärken"
                value={charakter.stärken}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="schwächen">Schwächen:</label>
              <input
                type="text"
                placeholder="Angst bei Dunkelheit, stur, impulsiv, ..."
                name="schwächen"
                id="schwächen"
                value={charakter.schwächen}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vergangenheit">Wichtige Vergangenheit:</label>
              <input
                type="text"
                placeholder="verlor Schwester im Krieg, ..."
                name="vergangenheit"
                id="vergangenheit"
                value={charakter.vergangenheit}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="wunsch">Wunsch/Ziel:</label>
              <input
                type="text"
                placeholder="will das Rätsel um ihren Vater lösen, ..."
                name="wunsch"
                id="wunsch"
                value={charakter.wunsch}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="besitz">Besonderer Besitz:</label>
              <input
                type="text"
                placeholder="zerknitterter Liebesbrief, Dolch, ..."
                name="besitz"
                id="besitz"
                value={charakter.besitz}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="generator-entscheidung">
          <h2>Was soll generiert werden?</h2>
          <div className="radio-group">
            <input
              type="radio"
              name="generatorOptionen"
              value="nur-hintergrundgeschichte"
              id="nur-hintergrundgeschichte"
              checked={generatorOptionen === "nur-hintergrundgeschichte"}
              onChange={handleRadioChange}
            />
            <label htmlFor="nur-hintergrundgeschichte">
              Nur Hintergrundgeschichte
            </label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="generatorOptionen"
              value="nur-werte-atributprofil"
              id="nur-werte-atributprofil"
              checked={generatorOptionen === "nur-werte-atributprofil"}
              onChange={handleRadioChange}
            />
            <label htmlFor="nur-werte-atributprofil">
              Nur Werte / Attributsprofil
            </label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="generatorOptionen"
              value="kompletter-charakter-mit-hintergrund-und-werte"
              id="kompletter-charakter-mit-hintergrund-und-werte"
              checked={
                generatorOptionen ===
                "kompletter-charakter-mit-hintergrund-und-werte"
              }
              onChange={handleRadioChange}
            />
            <label htmlFor="kompletter-charakter-mit-hintergrund-und-werte">
              Beides kombiniert (kompletter Charakter)
            </label>
          </div>
          <GeneratedCharakter
            charakter={charakter}
            generatorOptionen={generatorOptionen}
          />
        </div>
      </form>
    </div>
  );
}
