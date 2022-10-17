// Stylesheet
import "./Hero.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// Router Link
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

import React, { useEffect } from "react";
import { useState } from "react";

// Images
import HeroImage from "../Images/hero.jpg";
import Office from "../Images/office.jpg";
import Cleaning from "../Images/cleaning.jpg";
import Consultation from "../Images/consulting.jpg";
import Website from "../Images/website.png";

// CounterUp
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | Bellmol Global Resource </title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Pricing page for William SASS website"
        />
      </Helmet>
      {/* Hero section */}
      <div className="welcome">
        <div
          className="welcome-text"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h4>Welcome To Bellmol Global Resource</h4>
          <h1>Nonstop Services Life Better.</h1>
          <p>
            We provide the best professional and effective service. Bellmol has
            a team of well-trained personnel that have made their mark in the
            various fields that we offer services.
          </p>
          <Link to="/contact">
            <button>Book Our Services!</button>
          </Link>
        </div>
        <div
          className="welcome-image"
          data-aos-duration="1500"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <img src={HeroImage} alt="HeroImage" />
        </div>
      </div>
      {/* About Us */}
      <div className="about-us" id="about" data-aos="fade-right">
        <h1>About Us</h1>
        <div className="bar"></div>
        <p>
          <b>Bellmol Global Resource</b>, is a Nigeria registered company. Our
          primary objective is to provide the best professional and effective
          service. Bellmol has a team of well-trained personnel that have made
          their mark in the various fields that we offer services. We believe
          that people make a business successful.
        </p>
        <br />
        <p>
          Our pioneer <b>Helen Molokwu</b>, holds a
          <b> second class upper degree</b> in Library Science and English from
          the <b>University of Nigeria Nsukka</b> . And has a{" "}
          <b>diploma in Business Administration</b> . She also attended a Six
          Months Course with <b>Nigeria Institute of Management</b> (NIM) .She
          has years of professional experience from oil & Gas, Marine and
          Education industry before pioneering Bellmol Global Resources .
        </p>
        <p className="second-para">
          Our Services includes:
          <ul>
            <li>
              <i class="fa-solid fa-check"></i> Supply of Office / Home
              Equipment & Maintenance,
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Fumigation, Cleaning Services,
            </li>
            <li>
              <i class="fa-solid fa-check"></i> General Service & Consultation,
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Website/App design &
              development.{" "}
            </li>
          </ul>
        </p>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="rating">
            <div className="rate-team">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={25} duration={2.5} delay={0} />
                )}
                +
              </h1>
              <p>TEAM</p>
            </div>
            <div className="rate-team">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={65} duration={2.5} delay={0} />
                )}
                +
              </h1>
              <p>Clients</p>
            </div>
            <div className="rate-team">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={4} duration={2.5} delay={0} />
                )}
                +
              </h1>
              <p>Services</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      {/* Services */}
      <div className="services" id="service">
        <h1>Our Services</h1>
        <div className="bar"></div>
        {/* Office Supply */}
        <div
          className="office-supply"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="office-supply-image">
            <img src={Office} alt="Office" />
          </div>
          <div className="office-supply-text">
            <h4>Supply of Office / Home Equipment & Maintenance</h4>
            <p>
              We provide first hand quality home and office equipment you need
              to set up or maintain efficient office. Which include but not
              limited to: Stationeries, Computers Systems, Phones ,
              Refrigerators ,Air Conditioners , Photocopy Machines , Printers,
              monitors ,coffee Machines . Washing Machines, Furniture’s etc. We
              also deal on different kinds of office equipment Accessories like:
              Dictation machines, projectors, shredder, Meeting Cameras, Printer
              Inks, Files, folders, calculators , Waste Bin etc
            </p>
          </div>
        </div>
        {/* Cleaning */}
        <div className="cleaning" data-aos="fade-left" data-aos-duration="1500">
          <div className="cleaning-text">
            <h4>Fumigation & Cleaning Services</h4>
            <p>
              We offer variety of cleaning services to a wide range of clients,
              be it residential, commercial or industrial clients. As well as
              provide you with items needed for your personal hygiene and your
              protective safety .We are best in pest control and fumigation
              services. Our services include: removal and protection against
              Termites, mosquitoes and other pests. Items like Eye Googles ,
              Hand Cloves , Safety shoes/boat , Coveralls , Face/Nose Mark etc
            </p>
          </div>
          <div className="cleaning-image">
            <img src={Cleaning} alt="Cleaning" />
          </div>
        </div>
        {/* Consultation */}
        <div
          className="consultation"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="consultation-image">
            <img src={Consultation} alt="consultation" />
          </div>
          <div className="consultation-text">
            <h4>General Service & Consultation</h4>
            <p>
              We help you achieve your goal in all areas you will require third
              party outsourcing. We have good insight in most Nigeria Government
              agencies and organisation. We can help you manage your visa
              application, hotel reservation, logistics, Immigration issues,
              Custom related matters, Human Resources/recruitment etc . We
              provide Exhibition/ Event planning & management, gift item supply
              and packaging, Christmas hamper, Promotional items Supply &
              branding etc.
            </p>
          </div>
        </div>
        {/* Website/App design  */}
        <div className="web-dev" data-aos="fade-left" data-aos-duration="1500">
          <div className="web-dev-text">
            <h4>Website/App design & development</h4>
            <p>
              We create Websites that helps promote our clients business. We
              ensure the website is visually appealing and easy to navigate by
              our clients and their customers and target audience. We also build
              functions within a website — for example, a form to capture an
              e-mail or to provide a newsletter, a paywall to capture payment
              details, or a message to thank a customer for their business.
            </p>
          </div>
          <div className="web-dev-image">
            <img src={Website} alt="Website" />
          </div>
        </div>
        <div className="get-in-touch">
          <Link to="/contact">
            <button>Get In Touch</button>
          </Link>
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonial">
        <div className="testimonial-header">
          <h3>Testimonial</h3>
          <h1>What Our Clients Say</h1>
        </div>
        <div
          className="testimonial-card"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="inner-card">
            <p>
              "I would strongly recommend Bellmol Global Resources. Our website
              was handled with great professionalism and expertise."
            </p>
            <div className="testimony-author">
              <h2>Mr Peter Agu</h2>
              <b>Car dealer</b>
            </div>
          </div>
          <div className="inner-card">
            <p>
              "Bellmol Global Resources guided me through making the right
              choice in my business."
            </p>
            <div className="testimony-author">
              <h2>Miss Mary Samuel</h2>
              <b>Business woman</b>
            </div>
          </div>
          <div className="inner-card">
            <p>
              "I contracted Bellmol Global Resources to supply my office with
              equipments and other office furnitures and the delivered to my
              taste."
            </p>
            <div className="testimony-author">
              <h2>Mr Raymond Onyia</h2>
              <b>Business man</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
