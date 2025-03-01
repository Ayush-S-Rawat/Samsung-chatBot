import { default as button1, default as button2, default as button3 } from "../../assets/images/samsung-logo.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="sideDashboard">
      <div className="floating-buttons">
        <button className="floating-btn">
          <img src={button1} alt="Button 1" />
        </button>
        <button className="floating-btn">
          <img src={button2} alt="Button 2" />
        </button>
        <button className="floating-btn">
          <img src={button3} alt="Button 3" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
