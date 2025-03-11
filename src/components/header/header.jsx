import React from "react";
import logo from "../../assets/images/samsung-logo.png";
import Button from "../utility/button/button.jsx"; // Import the Button component
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section - Logo */}
      <div className="logo-container">
        <img src={logo} alt="Samsung Logo" className="logo" />
      </div>
      {/* Right Section - Buttons */}
      <div className="right-section">
        <Button text="Log in" type="primary" />
        <Button text="Sign up" type="secondary" />
      </div>
    </header>
  );
};

export default Header;