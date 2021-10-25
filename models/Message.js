const mongoose = require("mongoose");

/* 
MessageSchema consists of

1. sender details
2. receiver details
3. messagetext
4. Timestamps

*/

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
