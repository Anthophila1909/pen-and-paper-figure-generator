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
        auf{" "}
        <a
          href="https://github.com/Anthophila1909/pen-and-paper-figure-generator"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {""} geschrieben. Open-sourced auf <a href="/">Netlify</a>.
      </p>
    </div>
  );
}
