import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
