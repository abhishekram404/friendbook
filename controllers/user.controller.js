const User = require("../models/user.model");
const validator = require("../middlewares/signupValidator");
const bcrypt = require("bcrypt");
exports.all = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.send(users);
};

exports.register = async (req, res) => {
  try {
    const { error } = await validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // console.log(req.body);
    // return;
    const {
      fullName,
      username,
      email,
      gender,
      dob,
      password,
      confirm_password,
    } = await req.body;

    if (!(password === confirm_password)) {
      return res.status(400).send({
        error: "Both passwords don't match.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword);
    // return;
    const user = await User.create({
      fullName,
      username,
      email,
      gender,
      dob,
      password: hashedPassword,
    });
    res.status(200).send(`User created with user _id:${user._id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
