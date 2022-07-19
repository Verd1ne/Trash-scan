import React from 'react';
import Logo from "../images/trashscan-icon.png";

export default function HeroSection() {
    return (
      <div className="one">
        <div className="logo-container">
          <div
            className="columns is-mobile is-centered"
            style={{ width: "100%" }}
          >
            <div 
              className="column is-6 is-8-mobile"
              data-aos="fade-in"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="3000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <img src={Logo} className="image trash-logo is-128x128" alt="logo" />
              <h1 className='has-text-centered is-size-1-desktop is-size-4-mobile'>WELCOME TO</h1>
              <h1 className='has-text-centered is-size-1-desktop is-size-4-mobile'>TRASH-SCAN</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  