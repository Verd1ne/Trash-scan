import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeroSection from './pages/HeroSection';
import BalanceSection from './pages/BalanceSection'
// import Card from "../src/components/Card";
// import Card2 from "./images/displaycard1.png";
import "./styles/global.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Redeem from './components/Redeem'
import LoginPage from "./pages/LoginPage";
import Dailytask from "./components/Dailytask"
import Layout from "./components/Layout"
import Register from './pages/Regis'
import Home from "./pages/Home";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});

function App() {
  const [hideMenu,showMenu] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',listenToScroll)
  }, [])
  function listenToScroll(){
    if(window.pageYOffset >= 700){
      showMenu(true)
    }else{
      showMenu(false)
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
