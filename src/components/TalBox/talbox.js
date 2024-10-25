import React, { useState } from "react";

const Talbox = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const predefinedQA = {
    "What is your name?": "I am Talbox, your virtual assistant.",
    "What do you do?": "I help users register and provide assistance.",
    "How can I register?": "Just fill in your details in the registration form and submit.",
    "What are the terms & conditions?": "You can view them by clicking the link in the registration form.",
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = { type: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Check for predefined questions
      const botResponse =
        predefinedQA[input] || "Sorry, I don't understand that question.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: botResponse },
      ]);

      setInput("");
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === "bot" ? "bot" : "user"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="chat-send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default Talbox;
