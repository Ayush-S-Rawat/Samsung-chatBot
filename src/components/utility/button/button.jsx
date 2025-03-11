import React from "react";
import "./button.css";

const Button = ({ text, onClick, type = "primary" }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;