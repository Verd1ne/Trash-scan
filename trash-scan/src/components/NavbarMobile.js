import React, { useEffect, useState } from 'react'
import {Link,Events} from "react-scroll";
import Logo from '../images/logo-horizontal.png'
import { Link as LinkR } from 'react-router-dom'

function NavbarMobile() {
    const [toggle,SetToggle] = useState(false)
    useEffect(() => {
      Events.scrollEvent.register('begin',()=>{
        SetToggle(false)
      })
    }, [])
    return (
     <div className="navbar is-hidden-desktop is-fixed-top is-black">
          <div className="navbar-brand">
          <div className="navbar-item">
              <LinkR to="/"><img src={Logo} style={{maxWidth:"200px"}}/></LinkR>
            </div>
            <div className="navbar-burger" style={{marginRight:"10px"}} onClick={()=>SetToggle(!toggle)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
         </div>
            <div className="navbar-end">
              <div className={toggle?"navbar-menu mobile is-active":"navbar-menu mobile"}> 
                <Link to="theme" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">Theme</Link>
                <Link to="trailer" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">Trailer</Link>
                <Link to="about" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">About</Link>
                <Link to="speaker" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">Speakers</Link>
                <Link to="faq" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">FAQ</Link>
                <Link to="schedule" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">Schedule</Link>
                <Link to="register" smooth={true} duration={750} className="navbar-item" spy={true} activeClass="is-active">Register</Link>
              </div>
            </div>      
     </div>)
}

export default NavbarMobile
/*
      <div className="container is-fluid">
        <div className=" level mt-3 is-black">
        <div className="level-left">
          <div className="level-item">
            <img src={Logo2} alt="logo" className="navbar-logo" />
          </div>
        </div>
        <div className="level-right is-size-5 has-text-weight-semibold">
          <a role="button" className="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="halo">
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
              <div className="level-item mr-5">Home</div>
              <div className="level-item mr-5">Theme</div>
              <div className="level-item mr-5">Speakers</div>
              <div className="level-item mr-5">About</div>
              <div className="level-item">Register</div>
        </div>
      </div>
      </div>
      */