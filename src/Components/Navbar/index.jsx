import React from 'react'
import './Navbar.css'
import logo1 from '../../logo1.svg'

const Navbar = () => {
  return (
    <nav className="navcontainer">
        <div className="covid19Strain">
          <div className="covidLogo">
            <img src={logo1} alt="" />
          </div>
          <div className="covidWriteUp"><h2><a href="">Covid19Strain</a></h2></div>
        </div>
        <div className="navLinks">
          <ul>
            <li className="home"><a href="">HOME</a></li>
            <li><a href="">SYMPTOMS</a></li>
            <li><a href="">PROTECTION</a></li>
          </ul>
        </div>

        <div className="date">
          <p>Updated: May 22, 2020</p>
        </div>
      </nav>
  )
}

export default Navbar;
