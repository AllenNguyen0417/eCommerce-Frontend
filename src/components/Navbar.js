import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/products">Inventory</Link>
          </li>
        </ul>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/products">Inventory</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
