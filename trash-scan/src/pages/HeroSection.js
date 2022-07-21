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
              className="column is-4 is-6-mobile"
              data-aos="fade-in"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="3000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <img src={Logo} class="image trash-logo" alt="logo" />
            </div>
            <div className='section'>
                <div className='container'>
                    <h1>WELCOME TO TRASH-SCAN</h1>
                    <div className='columns'>
                        <div className='column'>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  