const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 32,
    },
    role: {
      type: Number,
      default: 0,
    },
    password: String,
    chats: [{ type: mongoose.Types.ObjectId, ref: "Chat" }],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
