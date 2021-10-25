const mongoose = require("mongoose");

/* 
A chatschema is like message history between 2 or more parties

1. Parties
2. Messages

*/

const chatSchema = new mongoose.Schema(
  {
    people: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
