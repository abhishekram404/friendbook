const User = require("../models/user.model");
const validator = require("../middlewares/signupValidator");
const bcrypt = require("bcrypt");
exports.all = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.send(users);
};

exports.register = async (req, res) => {
  // console.log(req.body);
  try {
    const { error } = await validator(req.body);

    if (error)
      return res.status(400).send({
        error: {
          status: 400,
          message: error.details[0].message,
          detail: "The form data is invalid.",
        },
        response: {},
      });

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

    const hasWhiteSpace = (word) => {
      return /\s/g.test(word);
    };

    if (hasWhiteSpace(username)) {
      return res.status(400).send({
        error: {
          status: 400,
          message: "Username must not contain spaces.",
          detail: "Try using a one-word, lowercase username.",
        },
      });
    }

    if (password.length < 6 || confirm_password.length < 6) {
      return res.status(400).send({
        error: {
          status: 400,
          message: "Password too short",
          detail: "Try using a password of at least 6 characters long",
        },
      });
    }

    if (!(password === confirm_password)) {
      return res.status(400).send({
        error: {
          status: 400,
          message: "Both passwords don't match.",
          detail:
            "The password entered in both the password fields must be the same.",
        },
        response: {},
      });
    }

    const userAlreadyExists = await User.exists({
      $or: [{ username: username.toLowerCase() }, { email: email }],
    });
    if (userAlreadyExists) {
      return res.status(409).send({
        error: {
          status: 409,
          message: "The email/username is already registered. Please login.",
          detail:
            "Please login using the existing email or use a different one. \n Or try using a different username.",
        },
        response: {},
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword);
    // return;
    const user = await User.create({
      fullName,
      username: username.toLowerCase(),
      email,
      gender,
      dob,
      password: hashedPassword,
    });
    res.status(201).send({
      error: {},
      response: {
        status: 201,
        message: "User registered successfully.",
        userId: user._id,
      },
    });
  } catch (err) {
    res.status(500).send({
      error: {
        status: 500,
        message: err.message,
        detail: "Something went wrong !!! \n Please try again.",
      },
      response: {},
    });
  }
};
