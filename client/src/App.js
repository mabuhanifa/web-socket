import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3333");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log({
    message,
    messages,
  });

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Socket.IO Chat</h1>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          height: "300px",
          overflow: "auto",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{ marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
