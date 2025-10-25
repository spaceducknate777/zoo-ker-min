import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Optional: Resume CSS
import "./resume/index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found. Make sure your index.html has a div with id='root'");
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
