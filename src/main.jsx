import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/css/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./Context/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MaterialTailwindControllerProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </MaterialTailwindControllerProvider>
);
