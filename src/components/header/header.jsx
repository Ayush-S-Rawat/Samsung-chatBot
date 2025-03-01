import logo from "../../assets/images/samsung-logo.png";
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
        <button className="login-btn" aria-label="Log in">Log in</button>
        <button className="signup-btn" aria-label="Sign up">Sign up</button>
      </div>
    </header>
  );
};

export default Header;