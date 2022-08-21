const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

const secretSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  secretKey: {
    type: String,
    default: 0,
    required: true,
  },
});

const secretKey = mongoose.model("secretKey", secretSchema);

module.exports = secretKey;
