import "./Footer.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

// Images
import Logo from "../Images/Logo.png";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer>
      <div
        className="inner-footer"
        data-aos="zoom-out-up"
        data-aos-duration="1500"
      >
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
          <div className="footer-social">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="copyright">
            <p>
              © Copyright. All Rights Reserved Bellmol Global Resource 2022.
            </p>
          </div>
        </div>
        <div className="location">
          <div className="location-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="location-text">
            <ul>
              <li>
                <b>Eleme office : </b>
                <p>
                  Poultry, behind All well Second Refinery Road, Newton, Eleme,
                  Rivers State
                </p>
              </li>
              <li>
                <b>Port Harcourt Office:</b>
                <p>#9 Eboham Street off RSTV, Elelenwo. Rivers State</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="know-more">
          <h1>Who we are</h1>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
