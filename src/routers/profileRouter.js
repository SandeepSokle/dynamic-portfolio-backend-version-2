const express = require("express");
const profileController = require("../controller/profileController");
const profileRouter = express.Router();

profileRouter.get("/getAbout", profileController.getAbout);


profileRouter.post("/saveAbout", profileController.saveAbout);


module.exports = profileRouter;
