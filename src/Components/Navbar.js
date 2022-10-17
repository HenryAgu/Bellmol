import { Link } from "react-router-dom";
import { useState } from "react";
// Stylesheet
import "../Components/Navbar.css";
import Certificate from "../cert.pdf";

//Images
import Logo from "../Images/Logo.png";

export default function Navbars() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header>
        <nav className="navbar is-transparent is-light has-background-white has-shadow">
          <div className="container">
            <div className="navbar-brand">
              <Link
                className="navbar-item is-size-5 has-text-weight-semibold"
                to="/" 
                onClick={() => setShowMenu(!showMenu)}
              >
                <img src={Logo} alt="Logo"/>
              </Link>
              <button
                className={"navbar-burger" + (showMenu ? " is-active" : "")}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              className={"navbar-menu" + (showMenu ? " is-active" : "")}
              id="navMenu"
            >
              <div className="navbar-start">
                <Link
                  className="navbar-item has-text-weight-medium link"
                  to="/"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <p>Home</p>
                </Link>
                <a
                  className="navbar-item has-text-weight-medium link"
                  href="#about"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <p>About Us</p>
                </a>
                <a
                  className="navbar-item has-text-weight-medium link"
                  href="#service"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <p>Services</p>
                </a>
              </div>
              <div className="navbar-end">
                <a
                  href={Certificate}
                  download="Bellmol Global Resource Certificate"
                >
                  <div className="cert">
                    <i class="fa-solid fa-file"></i>
                    <span>License</span>
                  </div>
                </a>
                <Link
                  className="navbar-item has-text-weight-medium"
                  to="/contact"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
