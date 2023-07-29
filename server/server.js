const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
