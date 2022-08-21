const secretKey = require("../Models/secretKey");

const postSecretKey = async (req, res, next) => {
  console.log("req.body!!", req.body);
  try {
    let secret = await secretKey.findOne();
    if (
      req.body.user.email === "sandeepsokle12@gmail.com" ||
      req.body.secretKey === secret.secretKey
    ) {
      if (secret) {
        secret = await secretKey.findOneAndUpdate(
          {},
          { ...req.body, secretKey: req.body.newSecretKey },
          { new: true }
        );
        //   throw "Resume not found!!";
      } else {
        secret = await secretKey.create({
          ...req.body,
          secretKey: req.body.newSecretKey,
        });
      }
      res.status(200).send(secret);
    }
    res.status(400).send("Unauthorized User");
  } catch (err) {
    res.status(400).send(err);
  }
};

const getSecretKey = async (req, res, next) => {
  console.log("req.body!!", req.body);
  try {
    let secret = await secretKey.findOne();
    if (!secret) {
      res.status(400).send("not available!!");
    }
    res.status(200).send(secret);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  postSecretKey,
  getSecretKey,
};
