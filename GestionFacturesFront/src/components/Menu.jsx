import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ArticleManager from "./Article";

const Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  to="/articles"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""} text-white`
                  }
                >
                  <i className="bi bi-box me-2"></i>
                  Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""} text-white`
                  }
                >
                  <i className="bi bi-people me-2"></i>
                  Clients
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/factures"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""} text-white`
                  }
                >
                  <i className="bi bi-receipt me-2"></i>
                  Factures
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS personnalisé pour ajuster quelques styles
const styles = `
.sidebar {
  min-height: 100vh;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar .nav-link {
  font-weight: 500;
  padding: 1rem;
}

.sidebar .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar .nav-link.active {
  background-color: #0d6efd;
}

.nav-link i {
  margin-right: 4px;
}

@media (max-width: 767.98px) {
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
  }
}
`;

export default Menu;
