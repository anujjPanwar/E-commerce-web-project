import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import insta from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import whatsapp from "../../assets/whatsapp.png"
function Footer() {
  return (
    <div className="footer">
      <div className="tittle">
        <img src={logo} alt="logo"height="50px"/>
      </div>
      <div className="footer-links">
        <ul className="footer-links-list">
          <li>About</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-media-logo">
        <img src={insta} alt="insta" height='40px'/>
        <img src={facebook} alt="facbook" height='40px'/>
        <img src={whatsapp} alt="whatsapp" height='40px'/>
      </div>
      <hr/>
      <p>
        Copyright @ 2025 - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
