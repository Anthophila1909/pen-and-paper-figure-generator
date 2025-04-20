import React from "react";
import "./GeneratorApp.css";

export default function GeneratorApp() {
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="klasse">Beruf/ Klasse/ Rolle:</label>
              <input
                type="text"
                placeholder="Krieger, Magierin, Professorin, ..."
                name="klasse"
                id="klasse"
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre/Ton:</label>
              <input
                type="text"
                placeholder="Grusel, Noir, Komödie, düster, ..."
                name="genre"
                id="genre"
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="schwächen">Schwächen:</label>
              <input
                type="text"
                placeholder="Angst bei Dunkelheit, stur, impulsiv, ..."
                name="schwächen"
                id="schwächen"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vergangenheit">Wichtige Vergangenheit:</label>
              <input
                type="text"
                placeholder="verlor Schwester im Krieg, ..."
                name="vergangenheit"
                id="vergangenheit"
              />
            </div>
            <div className="form-group">
              <label htmlFor="wunsch">Wunsch/Ziel:</label>
              <input
                type="text"
                placeholder="will das Rätsel um ihren Vater lösen, ..."
                name="wunsch"
                id="wunsch"
              />
            </div>
            <div className="form-group">
              <label htmlFor="besitz">Besonderer Besitz:</label>
              <input
                type="text"
                placeholder="zerknitterter Liebesbrief, Dolch, ..."
                name="besitz"
                id="besitz"
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
              value="hintergrundgeschichte"
              id="hintergrundgeschichte"
            />
            <label htmlFor="hintergrundgeschichte">
              Nur Hintergrundgeschichte
            </label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="generatorOptionen"
              value="werte"
              id="werte"
            />
            <label htmlFor="werte">Nur Werte / Attributsprofil</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="generatorOptionen"
              value="kompletter-charaker"
              id="kompletter-charaker"
            />
            <label htmlFor="kompletter-charaker">
              Beides kombiniert (kompletter Charakter)
            </label>
          </div>
          <input type="submit" value="Generieren" />
        </div>
      </form>
    </div>
  );
}
