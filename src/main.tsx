import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BackgroundContainer } from "./components/common";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundContainer>
      <App />
    </BackgroundContainer>
  </StrictMode>,
);
