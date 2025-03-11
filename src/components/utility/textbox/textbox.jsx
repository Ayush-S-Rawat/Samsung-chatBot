import React, { useEffect, useRef, useState } from "react";
import Button from "../button/button.jsx";
import "./textbox.css";

const TextBox = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  // Function to adjust the height of the textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight); // Get line height
      const maxHeight = lineHeight * 5; // Maximum height for 5 rows
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`; // Set height to scrollHeight or max height
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
      <Button text="Send" type="primary" onClick={sendMessage} />
    </div>
  );
};

export default TextBox;