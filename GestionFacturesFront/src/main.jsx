import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</StrictMode>
);
