import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Theme.scss";
import App from "./App.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ThemeProvider>
  </StrictMode>
);
