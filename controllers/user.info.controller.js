const User = require("../models/user.model");
const updateValidator = require("../middlewares/updateValidator");
const bcrypt = require("bcrypt");
exports.user = async (req, res) => {
  try {
    const foundUser = await User.findById(req.authenticatedUser._id).select(
      "-password"
    );
    return res.send({
      error: {},
      isUserLoggedIn: true,
      response: {
        info: foundUser,
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
      response: {},
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { _id } = await req.authenticatedUser;
    const userExists = await User.exists(_id);
    if (userExists) {
    }

    // remove this return statement
    return;
    // 👆👆👆👆👆👆👆👆👆👆👆
    const { error } = await updateValidator(req.body);

    if (error)
      return res.status(400).send({
        error: {
          status: 400,
          message: error.details[0].message,
          detail: "The form data is invalid.",
        },
        isUserLoggedIn: true,

        response: {},
      });

    const {
      fullName,
      bio,
      address,
      country,
      phone,
      countryCode,
      password,
      confirm_password,
    } = await req.body;

    if (password && confirm_password) {
    }
  } catch (err) {}
};
