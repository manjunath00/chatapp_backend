const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Server started listening`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server);

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to chatty</h1>')
// })

io.on("connection", function (socket) {
  console.log("Connection is made on socket");
});
