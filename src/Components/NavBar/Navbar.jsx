import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_logo.png";
import { Link } from "react-router-dom";
import { dataContext } from "../../Context/MainContext";
export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const { count } = useContext(dataContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" height="50px" />
      </div>
      <ul className="nav-menu">
        <li
          className={menu == "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "gray" }} to="/">
            Home
          </Link>{" "}
          <hr />
        </li>
        <li
          className={menu == "mens" ? "active" : ""}
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "gray" }} to="/mens">
            Mens
          </Link>{" "}
          <hr />
        </li>
        <li
          className={menu == "womens" ? "active" : ""}
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "gray" }} to="/womens">
            Womens
          </Link>{" "}
          <hr />
        </li>
        <li
          className={menu == "kids" ? "active" : ""}
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "gray" }} to="/kids">
            Kids
          </Link>{" "}
          <hr />
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/loginSignup">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="cart_icon" height="50px" />
        </Link>
        <div className="nav-cart-count">{count}</div>
      </div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
        <ul className={`nav-menu-popup ${isMenuOpen ? 'active' : ''}`}>
          <li>
            {" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>{" "}
            <hr />
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
              Mens
            </Link>{" "}
            <hr />
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/womens"
            >
              Womens
            </Link>{" "}
            <hr />
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
              Kids
            </Link>{" "}
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}