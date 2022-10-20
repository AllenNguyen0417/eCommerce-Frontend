import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { Helmet } from "react-helmet";

export function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
      <Helmet>
        <script src="Mycript.js" type="text/javascript" />
      </Helmet>

      <div class="container">
        <Link to="/" class="navbar-brand">
          Quan Nguyen
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/products" class="nav-link" aria-current="page">
                Inventory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
