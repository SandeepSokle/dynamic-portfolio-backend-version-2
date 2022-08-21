const express = require("express");
const receivedController = require("../controller/receivedController");
const receviedRouter = express.Router();

receviedRouter.post("/getMessage", receivedController.getMessage);

receviedRouter.post("/sendMessage", receivedController.sendMessage);

receviedRouter.post("/deleteMessage/:id", receivedController.deleteMessage);

module.exports = receviedRouter;
