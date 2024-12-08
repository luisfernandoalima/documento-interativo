import React from "react";
import ReactDOM from "react-dom/client";

// Pages
import { Home } from "./pages/Home";

// CSS
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
