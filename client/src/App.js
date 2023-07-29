import React, { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("message", {
      message: " message",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
