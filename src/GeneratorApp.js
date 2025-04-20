import React from "react";
import "./GeneratorApp.css";

export default function GeneratorApp() {
  return (
    <div className="GeneratorApp">
      <form>
        <div className="basisinformationen">
          <h2>Basis-Informationen:</h2>
          <label for="setting">Setting:</label>
          <input
            type="text"
            placeholder="Cthulhu 1920er, Cyberpunk Tokyo, ..."
            name="setting"
          />
          <label for="geschlecht">Geschlecht:</label>
          <input
            type="text"
            placeholder="weiblich, non-binär, ..."
            name="geschlecht"
          />
          <label for="klasse">Beruf/Klasse/Rolle:</label>
          <input
            type="text"
            placeholder="Krieger, Magierin, Professorin, ..."
            name="klasse"
          />
          <label for="genre">Genre/Ton:</label>
          <input
            type="text"
            placeholder="Grusel, Noir, Komödie, düster, ..."
            name="genre"
          />
        </div>
        <div className="charakterkontext">
          <h2>Charakterkontext:</h2>
          <label for="stärken">Stärken:</label>
          <input
            type="text"
            placeholder="mutig, neugierig, redegewandt, ..."
            name="stärken"
          />
          <label for="schwächen">Schwächen:</label>
          <input
            type="text"
            placeholder="Angst bei Dunkelheit, stur, impulsiv, ..."
            name="schwächen"
          />
          <label for="vergangenheit">Wichtige Vergangenheit:</label>
          <input
            type="text"
            placeholder="verlor Schwester im Krieg, wuchs im Kloster auf, ..."
            name="vergangenheit"
          />
          <label for="wunsch">Wunsch/Ziel:</label>
          <input
            type="text"
            placeholder="will das Rätsel um ihren Vater lösen, ..."
            name="wunsch"
          />
          <label for="besitz">Besonderer Besitz:</label>
          <input
            type="text"
            placeholder="zerknitterter Liebesbrief, verfluchter Dolch, ..."
            name="besitz"
          />
        </div>
        <div className="generator-entscheidung">
          <h2>Was soll generiert werden?</h2>
          <label for="hintergrundgeschichte">Nur Hintergrundgeschichte</label>
          <input type="checkbox" name="hintergrundgeschichte" />
          <label for="werte">Nur Werte / Attributsprofil</label>
          <input type="checkbox" name="werte" />
          <label for="kompletter-charaker">
            Beides kombiniert (kompletter Charakter)
          </label>
          <input type="checkbox" name="kompletter-charaker" />
          <input type="submit" value="Generieren" />
        </div>
      </form>
    </div>
  );
}
