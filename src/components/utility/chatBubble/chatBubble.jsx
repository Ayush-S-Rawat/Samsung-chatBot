import "./chatBubble.css";

const ChatBubble = ({ text, type }) => {
    return (
        <div className={`chat-bubble ${type}`}>
            {text}
        </div>
    );
};

export default ChatBubble;