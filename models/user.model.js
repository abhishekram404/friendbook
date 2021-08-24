const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 60,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: { type: String, trim: true, lowercase: true, unique: true },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 300,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
