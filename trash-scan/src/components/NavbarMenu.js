import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo-black.png";
import { Link as LinkR } from 'react-router-dom'

function NavbarMenu() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="600"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
      className="navbar is-fixed-top is-hidden-touch"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
         <LinkR to="/"> <img src={Logo} style={{ height: "1.5rem" }} /></LinkR>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-menu">
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="theme"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Theme
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="trailer"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Trailer
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              About
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="speaker"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Speakers
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="faq"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              FAQ
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link
              to="schedule"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Schedule
            </Link>
          </div>
          <div className="navbar-item is-size-5 has-text-weight-bold">
            {" "}
            <Link
              to="register"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
