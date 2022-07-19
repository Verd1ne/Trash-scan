import React from "react";
import Logo2 from "../images/logo.png";
import {Link} from "react-scroll";
import { Link as LinkR } from 'react-router-dom'
export default function NavbarDesktop() {
  return (
    <div className="container is-fluid">
        <div className="level mt-4 mb-4 is-hidden-touch">
        <div className="level-left">
          <div className="level-item">
            <LinkR to="/"><img src={Logo2} alt="logo" className="navbar-logo" /></LinkR>
          </div>
        </div>
        <div className="level-right is-size-5 has-text-weight-semibold">
          <div className="level-item mr-5"><Link to="theme" smooth={true} duration={750}>Theme</Link></div>
          <div className="level-item mr-5"><Link to="trailer" smooth={true} duration={750}>Trailer</Link></div>
          <div className="level-item mr-5"><Link to="about" smooth={true} duration={750}>About</Link></div>
          <div className="level-item mr-5"><Link to="speaker" smooth={true} duration={750}>Speakers</Link></div>
          <div className="level-item mr-5"><Link to="faq" smooth={true} duration={750}>FAQ</Link></div>
          <div className="level-item mr-5"><Link to="schedule" smooth={true} duration={750}>Schedule</Link></div>
          <div className="level-item"><Link to="register" smooth={true} duration={750}>Register</Link></div>
        </div>
      </div>
    </div>
    
  );
}
