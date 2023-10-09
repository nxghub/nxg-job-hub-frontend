import React from "react";
import "../header/header.scss";
import Logo from "../../static/images/nxg-logo.png";
import { FiMenu } from "react-icons/fi";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="h-logo" style={{ width: "160px", height: "65px" }}>
          <img src={Logo} alt="Nxg Company Logo" className="logo" />
        </div>
        <button id="nav-toggle">
          <FiMenu />
        </button>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <Navbar />
            <div className="nav-btns">
              <NavLink to="/login" className="login-btn">
                Log In
              </NavLink>
              <NavLink to="/register" className="signup-btn">
                Sign Up
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
