const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    to: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    messageText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
