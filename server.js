const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

const isProduction = process.env.NODE_ENV === "production";

require("./utils/dbConnection");

app.use("/api/user", userRoute);
// app.use("/api/", userRoute);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Server started on port ${port}`);
});
