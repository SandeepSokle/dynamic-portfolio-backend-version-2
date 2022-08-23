const express = require("express");
const resumeController = require("../controller/resumeController");
const resumeRouter = express.Router();

resumeRouter.get("/get", resumeController.getResume);
resumeRouter.post("/save", resumeController.saveResume);
resumeRouter.put("/delete/:id", resumeController.deleteResume);
resumeRouter.put("/update/:id", resumeController.updateResume);
resumeRouter.put("/update", resumeController.updateResumeAbout);
resumeRouter.get("/getBlogs", resumeController.getBlogs);
resumeRouter.post("/checkCreds", resumeController.checkCreds);
resumeRouter.put(
  "/updateProjectStatus/:id",
  resumeController.updateProjectStatus
);

module.exports = resumeRouter;
