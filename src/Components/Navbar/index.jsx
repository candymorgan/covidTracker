import React, {useState, useEffect,} from "react";
import "./Navbar.css";
import logo1 from "../../logo1.svg";



 
const Navbar = () => {
 
  return (
    
    <nav className="navcontainer">
      <div className="covid19Strain">
        <div className="covidLogo">
          <img src={logo1} alt="" />
        </div>
        <div className="covidWriteUp">
          <h2>
            <a href="">Covid19Strain</a>
          </h2>
        </div>
      </div>

      <div className="navLinks">
        <ul>
          <li className="home">
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SYMPTOMS</a>
          </li>
          <li>
            <a href="">PROTECTION</a>
          </li>
        </ul>
      </div>

      <div className="date">
        <p>Updated: {new Date().toDateString()} </p>
      </div>
      {/* <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg> */}
    </nav>
    
  );
};

export default Navbar;
