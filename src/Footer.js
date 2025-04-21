import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Diese App wurde von{" "}
        <a
          href="https://github.com/Anthophila1909"
          target="_blank"
          rel="noreferrer"
        >
          Elena Würtz
        </a>{" "}
        geschrieben. Publiziert auf{" "}
        <a
          href="https://github.com/Anthophila1909/pen-and-paper-figure-generator"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {""} und open-sourced via{" "}
        <a
          href="https://game-charakter-generator.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
