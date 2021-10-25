var socket = io.connect("http://localhost:5000");
const messages = [];

socket.on("connection", function () {
  socket.on("message", function (data) {
    console.log("data ", data);
  });
});

const nameField = document.getElementById("nameField");
const history = document.getElementById("messages");

const btn = document.getElementById("btn");
const textField = document.getElementById("textField");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const message = {
    message: textField.value,
    handle: nameField.value,
  };

  socket.emit("message", message);

  textField.value = "";
});

socket.on("chat", function (data) {
  messages.push(data);
  console.log("🚀 ~ file: script.js ~ line 27 ~ messages", messages);

  history.innerHTML = "";
  messages.forEach((item) => render(item));
});

const render = (item) => {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  const span = document.createElement("span");

  strong.textContent = item.handle + " " + " : ";

  span.textContent = item.message;

  li.appendChild(strong);
  li.appendChild(span);
  history.append(li);
};
