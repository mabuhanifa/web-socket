import React, { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

export default function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {};

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </div>
    </div>
  );
}
