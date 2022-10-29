const { mongoose } = require("mongoose");
// const mongo = require("mongoose")
const uername = "SandeepSokle";
const password = "IQVgYtZFCQvNd1iV";

const mongoConnection = () => {
  const url =
    "mongodb+srv://SandeepSokle:IQVgYtZFCQvNd1iV@cluster0.wjv3si2.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection established!!");
    })
    .catch((err) => {
      console.log("Connection to DB failed");
      console.log(err.message);
    });
  // Schema,database
  // try {
  //   mongoose
  //     .connect(url, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then(() => {
  //       console.log("DB connection established!!");
  //     })
  //     .catch((err) => {
  //       console.log("Connection to DB failed");
  //       console.log(err.message);
  //     });
  // } catch (err) {
  //   console.log("Connection to DB failed");
  //   console.log(err.message);
  // }
};

module.exports = { mongoConnection };
