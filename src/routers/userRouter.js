const express = require("express");
const usersController = require("../controller/usersController");
const userRouter = express.Router();

userRouter.post("/save", usersController.saveUser);


module.exports = userRouter;