import React from "react";
import { Link } from "react-router-dom";

const BarreMenu = () => (
  <div
    className="sidebar bg-dark text-white p-3"
    style={{ height: "100vh", width: "150px" }}
  >
    <h2 className="text-center">Menu</h2>
    <ul className="list-unstyled">
      <li>
        <Link className="text-white" to="/articles">
          Articles
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/clients">
          Clients
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/invoices">
          Factures
        </Link>
      </li>
    </ul>
  </div>
);

export default BarreMenu;
