import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "../utility/chatBubble/chatBubble.jsx";
import TextBox from "../utility/textbox/textbox.jsx";
import "./chatSpace.css";

const ChatSpace = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null); // Ref for the chat container

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      console.log("Scrolling to bottom..."); // Debugging
      console.log("Scroll Height:", chatContainerRef.current.scrollHeight); // Debugging
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom after a slight delay to ensure DOM updates
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100); // 100ms delay to ensure DOM updates

    return () => clearTimeout(timer); // Cleanup the timer
  }, [messages]); // Dependency on `messages`

  const sendMessageToBackend = async (query) => {
    // Add user query to chat
    setMessages((prev) => [...prev, { text: query, type: "query" }]);
    setIsLoading(true);

    try {
      const response = await fetch("YOUR_BACKEND_API", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      // Add bot response to chat
      setMessages((prev) => [...prev, { text: data.response, type: "response" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Failed to fetch response. Please try again.", type: "response" }]);
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chattingSpace" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <ChatBubble key={index} text={msg.text} type={msg.type} />
        ))}
        {isLoading && (
          <div className="loading-spinner">Loading...</div>
        )}
      </div>
      <TextBox onSendMessage={sendMessageToBackend} />
    </div>
  );
};

export default ChatSpace;