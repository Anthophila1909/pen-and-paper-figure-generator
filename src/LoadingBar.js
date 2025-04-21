import React from "react";
import { PacmanLoader } from "react-spinners";
import "./LoadingBar.css";

export default function LoadingBar() {
  return (
    <div className="LoadingBar">
      <PacmanLoader
        color="#bf8b67"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
