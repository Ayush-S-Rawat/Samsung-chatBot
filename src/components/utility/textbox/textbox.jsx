import React, { useState } from "react";
import "./textbox.css";

const TextBox = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Send message to backend
    onSendMessage(inputValue);

    // Clear textbox
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline in textarea
      sendMessage();
    }
  };

  return (
    <div className="textbox-container">
      <textarea
        className="textbox"
        placeholder="Ask anything..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1} // Initial rows
      ></textarea>

      {/* Button Section */}
      <div className="button-section">
        <button className="option-btn">+ Attach</button>
        <button className="option-btn">🌐 Search</button>
        <button className="option-btn">💡 Reason</button>
      </div>

      {/* Send Button */}
      <button className="send-btn" onClick={sendMessage}>📩 Send</button>
    </div>
  );
};

export default TextBox;
