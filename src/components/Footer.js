import "./Footer.css";
import { Link, Outlet } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <Link to="/" style={{ color: "black" }}>
          <h1 className="footer__logo">Quan Nguyen</h1>
        </Link>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Call</h2>
          <ul className="nav__ul">
            <li>
              <a href="tel:6266324718">(626) 632-4718</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Email</h2>
          <ul className="nav__ul">
            <li>
              <a href="mailto: tnguyen@nisum.com">tnguyen@nisum.com</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a
                href="https://www.linkedin.com/in/quan-nguyen-0417/"
                target="_blank"
              >
                <img src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
