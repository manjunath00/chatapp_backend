const socket = io();

socket.on("connection", function () {
  console.log("Connection is made");
});
