import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
export function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>

    // <nav>
    //   <div class="nav-wrapper">
    //     <a href="#!" class="brand-logo">
    //       <img src="logo192.png" height="40px" />
    //     </a>
    //     <a href="#" data-target="mobile-demo" class="sidenav-trigger">
    //       <i class="material-icons">menu</i>
    //     </a>
    //     <ul class="right hide-on-med-and-down">
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <li>
    //         <Link to="/users">Account</Link>
    //       </li>
    //     </ul>
    //     <ul class="sidenav" id="mobile-demo">
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <li>
    //         <Link to="/users">Account</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
