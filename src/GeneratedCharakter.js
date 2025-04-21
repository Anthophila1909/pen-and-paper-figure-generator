import React from "react";
import "./GeneratedCharakter.css";

export default function GeneratedCharakter({ charakter, generatorOptionen }) {
  return (
    <div>
      <h2>Generierter Charakter</h2>
      <p>
        <strong>Setting:</strong> {charakter.setting}
      </p>
      <p>
        <strong>Geschlecht:</strong> {charakter.geschlecht}
      </p>
      <p>
        <strong>Beruf/Klasse:</strong> {charakter.klasse}
      </p>
      <p>
        <strong>Genre:</strong> {charakter.genre}
      </p>
      <p>
        <strong>Stärken:</strong> {charakter.stärken}
      </p>
      <p>
        <strong>Schwächen:</strong> {charakter.schwächen}
      </p>
      <p>
        <strong>Wichtige Vergangenheit:</strong> {charakter.vergangenheit}
      </p>
      <p>
        <strong>Wunsch/Ziel:</strong> {charakter.wunsch}
      </p>
      <p>
        <strong>Besonderer Besitz:</strong> {charakter.besitz}
      </p>
      <p>
        <strong>Generierte Option:</strong> {generatorOptionen}
      </p>
    </div>
  );
}
