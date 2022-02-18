const User = require("../models/user.model");
const signupValidator = require("../middlewares/signupValidator");
const loginValidator = require("../middlewares/loginValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.all = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.send(users);
};

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const { error } = await signupValidator(req.body);

    if (error)
      return res.status(400).send({
        success: false,

        error: {
          status: 400,
          message: error.details[0].message,
          detail: "The form data is invalid.",
        },
        isUserLoggedIn: false,

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
        success: false,
        isUserLoggedIn: false,
        response: {},
      });
    }

    if (password.length < 6 || confirm_password.length < 6) {
      return res.status(400).send({
        error: {
          status: 400,
          message: "Password too short",
          detail: "Try using a password of at least 6 characters long",
        },
        isUserLoggedIn: false,
        success: false,
        response: {},
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
        isUserLoggedIn: false,
        success: false,

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
        isUserLoggedIn: false,
        success: false,
        response: {},
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      username: username.toLowerCase(),
      email,
      gender,
      dob,
      password: hashedPassword,
      bio: "",
      countryCode: "",
      phone: "",
      address: "",
      country: "",
    });

    const token = await jwt.sign(
      {
        _id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.MAX_AGE,
      }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      maxAge: process.env.MAX_AGE,
    });
    res.cookie("isUserLoggedIn", true, {
      secure: false,
      httpOnly: true,
      maxAge: process.env.MAX_AGE,
    });
    res.status(201).send({
      success: true,
      error: {},
      isUserLoggedIn: true,
      response: {
        info: user,
      },
    });
  } catch (err) {
    res.status(500).send({
      error: {
        status: 500,
        message: err.message,
        detail: "Something went wrong !!! \n Please try again.",
      },
      isUserLoggedIn: false,
      success: false,

      response: {},
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { error } = await loginValidator(req.body);

    if (error)
      return res.status(400).send({
        error: {
          status: 400,
          message: error.details[0].message,
          detail: "The form data is invalid.",
        },
        isUserLoggedIn: false,
        success: false,
        response: {},
      });

    const { email, password } = await req.body;

    const foundUser = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!foundUser) {
      return res.status(404).send({
        error: {
          status: 404,
          message: "Wrong email/password",
          detail: "Sit back and try to remember your email/password.",
        },
        isUserLoggedIn: false,
        success: false,
        response: {},
      });
    }

    const isPassCorrect = await bcrypt.compare(password, foundUser.password);

    if (!isPassCorrect) {
      return res.status(404).send({
        error: {
          status: 404,
          message: "Wrong email/password",
          detail: "Sit back and try to remember your email/password.",
        },
        isUserLoggedIn: false,
        success: false,

        response: {},
      });
    }

    const token = await jwt.sign(
      {
        _id: foundUser._id,
        username: foundUser.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.MAX_AGE,
      }
    );

    console.log(foundUser);
    res.cookie("jwt", token, {
      secure: false,
      httpOnly: true,
      maxAge: process.env.MAX_AGE,
    });
    res.cookie("isUserLoggedIn", true, {
      secure: false,
      httpOnly: false,
      maxAge: process.env.MAX_AGE,
    });
    res.status(201).send({
      success: true,
      error: {},
      isUserLoggedIn: true,
      response: {
        info: foundUser,
      },
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      error: {
        message: err.message,
        detail: "Something went wrong !!! \n Please try again.",
      },
      isUserLoggedIn: false,
      response: {},
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.clearCookie("isUserLoggedIn");
    res.status(200).send({
      success: true,
      error: {},
      isUserLoggedIn: false,
      response: {},
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      error: {
        status: 500,
        message: err.message,
        detail: "Something went wrong !!! \n Please try again.",
      },
      isUserLoggedIn: false,
      response: {},
    });
  }
};
