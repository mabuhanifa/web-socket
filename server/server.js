const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
    res.send("Hello World!");

})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
