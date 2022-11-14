const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userRoute =  require('./routes/user');
const bodyParser = require("body-parser");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfully!"))
  .catch((err) => console.log(err));
  app.use(bodyParser())
app.use("/api/user", userRoute)
app.get("/", userRoute)
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
