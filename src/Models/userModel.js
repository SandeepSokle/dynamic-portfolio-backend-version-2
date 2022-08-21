const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

const UserSchema = new mongoose.Schema({
  userData: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    default: 0,
  },
  email: {
    type: String,
    default: 0,
  },
  uid: {
    type: String,
    unique: true,
    default: 0,
  },
});

const users = mongoose.model("users", UserSchema);

module.exports = users;
