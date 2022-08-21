const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  des: {
    type: String,
    // required: true,
  },
  detail :{
      type : Object
  }
});

const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;
