const mongoose = require("mongoose");
const isProduction = process.env.NODE_ENV === "production";
try {
  console.log("Trying to connect to the database.");
  mongoose.connect(
    isProduction
      ? process.env.MONGO_URI
      : process.env.MONGO_URI || "mongodb://127.0.0.1:27017/friendbookdb",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) return console.log(err.message);
      console.log("Connected to DB");
    }
  );
} catch (err) {
  console.log(err.message);
}
