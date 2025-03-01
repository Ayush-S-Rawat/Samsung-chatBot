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
      textarea.style.height = `${Math.min(textarea.scrollHeight, 5 * 24)}px`; // Limit to 5 lines (24px per line)
    }
  };

  // Adjust height whenever inputValue changes
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Send message to backend
    onSendMessage(inputValue);

    // Clear textbox
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault(); // Prevents newline in textarea
      sendMessage();
    } else if (e.key === "Enter" && e.ctrlKey) {
      // Allow new line when Ctrl + Enter is pressed
      setInputValue((prevValue) => prevValue + "\n");
    }
  };

  return (
    <div className="textbox-container">
      <textarea
        ref={textareaRef}
        className="textbox"
        placeholder="Ask anything..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1} // Start with 1 row
      ></textarea>

      {/* Button Section */}
      <div className="button-section">
        <button className="option-btn">+ Attach</button>
        <button className="option-btn">🌐 Search</button>
        <button className="option-btn">💡 Reason</button>
      </div>

      {/* Send Button */}
      <button className="send-btn" onClick={sendMessage}>
        📩 Send
      </button>
    </div>
  );
};

export default TextBox;