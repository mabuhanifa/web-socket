const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
