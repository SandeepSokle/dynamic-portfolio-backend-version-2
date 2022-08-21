const receivedMessage = require("../Models/receiveMessageModel");
const users = require("../Models/userModel");

const getMessage = async (req, res, next) => {
  const { userData, userSecret } = req.body.data;
  // console.log(req.query);
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
 

  try {
    if (
      userData.name !== existUser.displayName ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      throw { message: "Unauthorized User!!" };
    } else {
      console.log("name match!!");
    }
    const message = await receivedMessage.find().sort({ createdAt: -1 });
    if (!message) {
      throw "message not found!!";
    }
    console.log(message);
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

const sendMessage = async (req, res, next) => {
  const data = req.body.data;
  try {
    // console.log(data);
    const message = await receivedMessage.create(data);
    if (!message) {
      throw "Resume not found!!";
    }
    console.log("message !!", message);
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteMessage = async (req, res, next) => {
  const id = req.params.id;
  try {

    const message = await receivedMessage.findOneAndDelete({ _id: id });
    if (!message) {
      throw { message: "Message not found!!" };
    }
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getMessage, sendMessage, deleteMessage };
