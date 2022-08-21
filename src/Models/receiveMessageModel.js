const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

const receiveMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: false,
      required: true,
    },
    email: {
      type: String,
      // default: 0,
      required: true,
    },
    subject: {
      type: String,
      // default: 0,
      required: true,
    },
    description: {
      type: String,
      // default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const receivedMessage = mongoose.model("messages", receiveMessageSchema);

module.exports = receivedMessage;
