const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

mongoose.connect(
  process.env.MONGO_LOCAL_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use("/api/user", userRoute);
app.listen(4000);
