const dataModel = require("../Models/resumeModel/resumeModel");
const secretKey = require("../Models/secretKey");
const users = require("../Models/userModel");

const getResume = async (req, res, next) => {
  try {
    const resume = await dataModel
      .find()
      .sort({ createdAt: -1, updatedAt: -1 });
    if (!resume) {
      throw "Resume not found!!";
    }
    res.status(200).send(resume);
  } catch (err) {
    res.status(400).send(err);
  }
};

const saveResume = async (req, res, next) => {
  // console.log("start save data!!", req.body);
  const { userData, userSecret } = req.body.secret;
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  const secretData = await secretKey.findOne();
  // console.log("start update data!!", {
  //   userData,
  //   userSecret,
  //   existUser,
  //   secretData: secretData.secretKey,
  // });

  // delete data.secret;

  // const finalData = { ...data, secret: undefined };

  try {
    if (
      userData.name !== existUser.displayName ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      if (secretData.secretKey !== userSecret) {
        console.log("secret Key not match!!");
        throw { message: "Unauthorized User!!" };
      } else {
        console.log("secretKey match!!");
      }
    } else {
      console.log("name match!!");
    }
    let resume = await dataModel.create({
      ...req.body,
    });

    // resume.save();
    console.log("data saved !!", resume);

    if (!resume) {
      throw "Resume Creation failed!!";
    }
    res.status(200).send(resume);
  } catch (err) {
    console.log("end save data with failed!!", err.message);
    res.status(400).send(err.message);
  }
};

const deleteResume = async (req, res, next) => {
  const id = req.params.id;
  console.log("start delete data!!", req.body.secret);

  const { userData, userSecret } = req.body.secret;
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  const secretData = await secretKey.findOne();
  console.log("start update data!!", {
    // userData,
    userSecret,
    // existUser,
    secretData: secretData.secretKey,
  });

  // delete data.secret;

  // const finalData = { ...data, secret: undefined };

  try {
    if (
      userData.name !== existUser.displayName ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      if (secretData.secretKey !== userSecret) {
        console.log("secret Key not match!!");
        throw { message: "Unauthorized User!!" };
      } else {
        console.log("secretKey match!!");
      }
    } else {
      console.log("name match!!");
    }
    const resume = await dataModel.findOneAndDelete({ id });
    if (!resume) {
      throw "Resume not found!!";
    }
    console.log("Resume Deleted", resume);
    res.status(200).send(resume);
  } catch (err) {
    console.log("Resume Not Deleted", err.message);
    res.status(400).send(err);
  }
};

const updateResume = async (req, res, next) => {
  const id = req.params.id;
  let data = req.body;
  const { userData, userSecret } = req.body.secret;
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  const secretData = await secretKey.findOne();
  console.log("start update data!!", {
    // userData,
    userSecret,
    // existUser,
    secretData: secretData.secretKey,
  });

  delete data.secret;

  // const finalData = { ...data, secret: undefined };

  try {
    if (
      userData.name !== existUser.displayName ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      if (secretData.secretKey !== userSecret) {
        console.log("secret Key not match!!");
        throw { message: "Unauthorized User!!" };
      } else {
        console.log("secretKey match!!");
      }
    } else {
      console.log("name match!!");
    }
    const resume = await dataModel.findOneAndUpdate(
      { id },
      { data },
      { new: true }
    );
    if (!resume) {
      throw "Resume not found!!";
    }
    // console.log("Resume Updated", resume);
    res.status(200).send(resume);
  } catch (err) {
    console.log("Resume Not Updated", err.message);
    res.status(400).send(err);
  }
};

const getBlogs = async (req, res, next) => {
  try {
    const blogs = await dataModel.find({ module: "blog" });
    if (!blogs) {
      throw "Resume not found!!";
    }

    let data = blogs.map((ele) => {
      return ele.data;
    });

    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

const checkCreds = async (req, res, next) => {
  const { userData, userSecret } = req.body.secret;
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  const secretData = await secretKey.findOne();

  console.log({
    u1: userData.name,
    id: userData.uid,
    email: userData.email,
  });
  console.log({
    u1: existUser.name,
    id: existUser.uid,
    email: existUser.email,
    existUser,
  });
  try {
    if (
      userData.displayName !== existUser.name ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      if (secretData.secretKey !== userSecret) {
        console.log("secret Key not match!!");
        throw { message: "Unauthorized User!!" };
      } else {
        console.log("secretKey match!!");
      }
    } else {
      console.log("name match!!");
    }
    res.status(200).send({ status: true });
  } catch (err) {
    console.log("Resume Not Updated", err.message);
    res.status(400).send(err);
  }
};

const updateProjectStatus = async (req, res, next) => {
  const id = req.params.id;
  let data = req.body;
  const { userData, userSecret } = req.body.secret;
  const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  const secretData = await secretKey.findOne();

  console.log("start update data!!", {
    data,
    val: data.selectedVal,
    is: data.selectedVal === "Complete",
  });

  delete data.secret;

  // const finalData = { ...data, secret: undefined };

  try {
    if (
      userData.name !== existUser.displayName ||
      userData.uid !== existUser.uid ||
      userData.email !== existUser.email
    ) {
      if (secretData.secretKey !== userSecret) {
        console.log("secret Key not match!!");
        throw { message: "Unauthorized User!!" };
      } else {
        console.log("secretKey match!!");
      }
    } else {
      console.log("name match!!");
    }

    // const resume = await dataModel.findOne({ id });

    const resume = await dataModel.findOneAndUpdate(
      { id },
      {
        type: `${data.selectedVal === "Complete" ? "in progress" : "complete"}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { new: true }
    );
    if (!resume) {
      throw "Resume not found!!";
    }
    console.log("Resume Updated", resume);
    res.status(200).send(resume);
  } catch (err) {
    console.log("Resume Not Updated", err.message);
    res.status(400).send(err);
  }
};

module.exports = {
  getResume,
  saveResume,
  deleteResume,
  updateResume,
  getBlogs,
  checkCreds,
  updateProjectStatus,
};
