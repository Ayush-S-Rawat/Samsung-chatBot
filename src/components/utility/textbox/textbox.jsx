import React, { useEffect, useRef, useState } from "react";
import "./textbox.css";

const TextBox = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  // Function to adjust textarea height dynamically
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to recalculate
      textarea.style.height = `${Math.min(textarea.scrollHeight, 7.5 * 16)}px`; // Limit to 5 lines (7.5em)
    }
  };

  // Adjust height whenever inputValue changes
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline on Enter
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue); // Send message
      setInputValue(""); // Clear input
    }
  };

  return (
    <div className="textbox-container">
      <textarea
        ref={textareaRef}
        className="textbox"
        placeholder="Type your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1} // Start with 1 row
      />
      <button className="send-btn" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default TextBox;