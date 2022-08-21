const users = require("../Models/userModel");

const saveUser = async (req, res, next) => {
  // console.log(req.body);
  const data = req.body.data;
  try {
    const oldUser = await users.findOne({ uid: data.uid });
    let user;
    if (oldUser) {
      user = await users.findOneAndUpdate(
        { uid: data.uid },
        {
          userData: data,
          name: data.displayName,
          email: data.email,
          uid: data.uid,
        }
      );
    } else {
      user = await users.create({
        userData: data,
        name: data.displayName,
        email: data.email,
        uid: data.uid,
      });
    }
    if (!user) {
      throw "User not found!!";
    }
    console.log("Resume Updated", user);
    res.status(200).send(user);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  saveUser,
};
