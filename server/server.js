const PORT = process.env.PORT || 3333;
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3001`, // React app URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("message", (data) => {
    console.log(`Message from ${socket.id}: ${data}`);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
