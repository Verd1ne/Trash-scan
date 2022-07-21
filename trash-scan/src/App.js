import React from 'react'
import './App.css';
import Home from './pages/Home';
import Scan from './pages/Scan';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
