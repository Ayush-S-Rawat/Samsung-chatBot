import React, { useEffect, useRef, useState } from "react";
import { sendMessageToBackend } from "../../services/chatService";
import ChatBubble from "../utility/chatBubble/chatBubble.jsx";
import TextBox from "../utility/textbox/textbox.jsx";
import "./chatSpace.css";

const ChatSpace = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true); // State for welcome message
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (query) => {
    // Hide welcome message on first input
    if (showWelcomeMessage) {
      setShowWelcomeMessage(false);
    }

    // Add user query to chat
    setMessages((prev) => [...prev, { text: query, type: "query" }]);
    setIsLoading(true);

    try {
      // Send query to backend using the service
      const response = await sendMessageToBackend(query);

      // Add bot response to chat
      setMessages((prev) => [...prev, { text: response.response, type: "response" }]);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      setMessages((prev) => [
        ...prev,
        { text: "Failed to fetch response. Please try again.", type: "response" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chattingSpace">
        {/* Welcome Message Container */}
        {showWelcomeMessage && (
          <div className="welcome-message-container">
            <div className="welcome-message">
              <div className="welcome-line1">Welcome to</div>
              <div className="welcome-line2">Samsung-ChatBot</div>
              <div className="welcome-line3">Developed by Enterprise Product AITF</div>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {messages.map((msg, index) => (
          <ChatBubble key={index} text={msg.text} type={msg.type} />
        ))}
        {isLoading && <div className="loading-spinner">Loading...</div>}
        <div ref={messagesEndRef} /> {/* Invisible div at the end of the chat */}
      </div>
      <TextBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatSpace;