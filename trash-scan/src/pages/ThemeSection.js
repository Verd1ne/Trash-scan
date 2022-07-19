import React from "react";
import EventLogo from "../images/event2.png";
import { Element } from "react-scroll";
import NavbarMenu from "../components/NavbarMenu";
import pi from "../images/pi.png";



function ThemeSection() {
  return (
    <Element
      name="theme"
      className="section is-medium"
    >
      <div className="container is-widescreen lg:pt-44 pt-36">
        <div className="absolute opacity-20 transform lg:scale-150 scale-100 mx-auto right-0 left-0">
          <img src={pi} className="mx-auto" alt="mathematical_pi"></img>
        </div>
        <div className="columns is-centered is-vcentered pb-7 -mt-20 lg:-mt-0">
        <h1
          className="text-5xl lg:text-8xl mx-auto lg:mx-0 text-red-600 font-bold pt-32 font-archivo text-center"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          GAME OF PI
        </h1>
        </div>
        <div className="columns is-vcentered z-10">
          <div
            className="column is-size-5 mx-10 pt-7"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <p className="lg:pt-3 text-lg lg:text-2xl lg:text-center mx-5 text-justify">
            Similar to life, not all things are solvable. There are endless challenges and opportunities for each being in this world which represents a level or stage in a game. Some might see pi only as 3.14, but the others might see it as an infinite plus some. Life cannot be defined just by mere numbers or theories, but it leaves us with many kinds of mysteries and uniqueness.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ThemeSection;
