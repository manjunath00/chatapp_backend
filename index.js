const express = require("express");
const socket = require("socket.io");

const app = express();
const PORT = 5000;

const server = app.listen(PORT, function () {
  console.log("listening for requests on port 5000,");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", function (socket) {
  console.log("Connection is made", socket.id);

  socket.on("message", function (data) {
    console.log("🚀 ~ file: index.js ~ line 19 ~ socket.on ~ data", data);

    // socket.on('chat', function(data) {
      io.sockets.emit("chat", data);
    // })
  });
  
});
