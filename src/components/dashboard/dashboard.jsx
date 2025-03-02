import React, { useState } from "react";
import { default as button1, default as button2, default as button3 } from "../../assets/images/samsung-logo.png";
import "./dashboard.css";

const Dashboard = () => {
  const [hoveredButton, setHoveredButton] = useState(null); // Track which button is hovered

  return (
    <div className="sideDashboard">
      <div className="floating-buttons">
        {/* Button 1 */}
        <div
          className="floating-btn-container"
          onMouseEnter={() => setHoveredButton(1)} // Show label on hover
          onMouseLeave={() => setHoveredButton(null)} // Hide label when not hovered
        >
          <button className="floating-btn">
            <img src={button1} alt="Button 1" />
          </button>
          {hoveredButton === 1 && (
            <div className="hover-label">Option-1</div>
          )}
        </div>

        {/* Button 2 */}
        <div
          className="floating-btn-container"
          onMouseEnter={() => setHoveredButton(2)} // Show label on hover
          onMouseLeave={() => setHoveredButton(null)} // Hide label when not hovered
        >
          <button className="floating-btn">
            <img src={button2} alt="Button 2" />
          </button>
          {hoveredButton === 2 && (
            <div className="hover-label">Option-2</div>
          )}
        </div>

        {/* Button 3 */}
        <div
          className="floating-btn-container"
          onMouseEnter={() => setHoveredButton(3)} // Show label on hover
          onMouseLeave={() => setHoveredButton(null)} // Hide label when not hovered
        >
          <button className="floating-btn">
            <img src={button3} alt="Button 3" />
          </button>
          {hoveredButton === 3 && (
            <div className="hover-label">Option-3</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;