// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarreMenu from "./components/BarreMenu";
import ArticleManager from "./components/Article";
import Clients from "./components/Clients";
import Factures from "./components/Factures";
import "./App.css";
const App = () => (
  <Router>
    <div className="d-flex">
      {/* Sidebar */}
      <BarreMenu />

      {/* Contenu principal */}
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/articles" element={<ArticleManager />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/factures" element={<Factures />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
