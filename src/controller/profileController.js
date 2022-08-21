// const res = require("express/lib/response");

const profileModel = require("../Models/profileModel/profileModel");

const getAbout = async (req, res, err) => {
  console.log("in get first");
  try {
    let profile = await profileModel.findOne();
    if (!profile) {
      res.status(400).send("Profile description not found!!");
    }
    res.status(200).send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getContact = (req, res, err) => {
  console.log("in get first");
  res.json({ name: "sandeep", clg: "crsu" });
};

const saveAbout = async (req, res, err) => {
  console.log("in save about!!");
  console.table(req.body);
  try {
    let profile = await profileModel.findOne();
    if (!profile) {
      // console.log("in new craete");
      profile = await profileModel.create({
        ...req.body,
      });
    } else {
      // console.log("in Update");
      profile = await profileModel.findOneAndUpdate(
        {},
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
    }
    res.status(200).send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
};

const saveContact = (req, res, err) => {
  console.log("in get first");
  res.json({ name: "sandeep", clg: "crsu" });
};

module.exports = {
  getAbout,
  getContact,
  saveAbout,
  saveContact,
};
