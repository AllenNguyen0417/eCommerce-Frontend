import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { Helmet } from "react-helmet";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <Helmet>
        <script src="Mycript.js" type="text/javascript" />
      </Helmet>

      <div className="container">
        <Link to="/" className="navbar-brand">
          Quan Nguyen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" aria-current="page">
                Inventory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
