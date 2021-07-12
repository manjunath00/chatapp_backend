const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
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
