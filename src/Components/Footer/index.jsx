import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <>
        <div className="childContainer5">
        <div className="subContainer">
          <div className="aboutContainer">
            <p>About</p>
            <div className="aboutDetails">
              <h3>API</h3>
              <h3>Contact</h3>
              <h3>About</h3>
            </div>
          </div>

          <div className="contactContainer">
            <p>Contact</p>
            <div className="contactDetails">
              <h3>info@coronatracker.com</h3>
              <h3>Instagram</h3>
              <h3>Pinterest</h3>
              <h3>Twitter</h3>
              <h3>Facebook</h3>
            </div>
          </div>
        </div>

        <div className="email">
          <p>Join our newsletter</p>
          <h3>Your email</h3>
          <input type="email" />
        </div>

      </div>
        </>
    )
  
}
export default Footer;
