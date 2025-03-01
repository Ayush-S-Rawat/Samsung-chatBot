import React, { useState } from "react";
import ChatBubble from "../utility/chatBubble/chatBubble.jsx";
import TextBox from "../utility/textbox/textbox.jsx";
import "./chatSpace.css";

const ChatSpace = () => {
    const [messages, setMessages] = useState([]);

    const sendMessageToBackend = async (query) => {
        // Add user query to chat
        setMessages((prev) => [...prev, { text: query, type: "query" }]);

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
            setMessages((prev) => [...prev, { text: "Response from the server.", type: "response" }]);
            console.error("Error fetching response:", error);
        }
    };

    return (
        <div className="chat-container">
            <div className="chattingSpace">
                {messages.map((msg, index) => (
                    <ChatBubble key={index} text={msg.text} type={msg.type} />
                ))}
            </div>
            <TextBox onSendMessage={sendMessageToBackend} />
        </div>
    );
};

export default ChatSpace;
