const express = require("express");
const secretKeyController = require("../controller/secretKeyController");
const secretRouter = express.Router();

secretRouter.post("/save", secretKeyController.postSecretKey);
secretRouter.get("/get", secretKeyController.getSecretKey);


module.exports = secretRouter;