import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/men.webp";
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
    <div className="hero-containor">
      <div className="hero-left">
        <h2>Best Deals !  Best Price !</h2>

        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} height="60px" alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" height="30px" />
      </div>
      </div>
      <div className="hero-right">
        <img src={men} alt="men" height='600px' className="hero-men-img"/>
      </div>
      </div>
    </div>
  );
}

export default Hero;
