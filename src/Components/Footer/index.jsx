import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="childContainer5">
        <div className="subContainer">
          <div className="aboutAndContact">
            
            <div className="aboutDetails">
            <h5>About</h5>
          <div className="aboutContainer">
              <h3>API</h3>
              <h3>Contact</h3>
              <h3>About</h3>
            </div>
          </div>

          <div className="contactContainer">
          <h5>Contact</h5>
            <div className="contactDetails">
              <div>
                <h3>info@coronatracker.com</h3>
                <h3>Instagram</h3>
                <h3>Pinterest</h3>
                <h3>Twitter</h3>
                <h3>Facebook</h3>
              </div>
            </div>
          </div>
          </div>

          <div className="email">
            <h5>Join our newsletter</h5>
            <div>
              <h3>Your email</h3>
              <input type="email" />
            </div>
          </div>
        </div>
        <div className="lastItem">
          <h5>Term & Conditions</h5>
          <h5>Privacy Policy</h5>
        </div>
      </div>
    </>
  );
};
export default Footer;
