const User = require("../models/user.model");
const defaultUpdateValidator = require("../middlewares/defaultUpdateValidator");
const passwordUpdateValidator = require("../middlewares/passwordUpdateValidator");
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
    // check if the user exists
    const { _id } = await req.authenticatedUser;
    const userExists = await User.exists({ _id });

    console.log(userExists);

    if (userExists) {
      const { data } = await req.body;
      if (data.mode === "default") {
        // validate the data
        const { error } = await defaultUpdateValidator(data);
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

        // get the values after validation
        const { fullName, bio, address, country, phone, countryCode } =
          await data;

        const updatedUser = await User.findOneAndUpdate(
          { _id },
          {
            fullName,
            bio,
            address,
            country,
            phone,
            countryCode,
          },
          {
            new: true,
          }
        );

        res.status(200).send({
          error: {},
          isUserLoggedIn: true,

          response: {
            status: 200,
            message: "User info updated successfully.",
            detail: updatedUser,
          },
        });
      }

      if (data.mode === "password") {
        const { error } = await passwordUpdateValidator(data);
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

        const { password, confirmPassword } = await data;

        if (password !== confirmPassword) {
          return res.status(400).send({
            error: {
              status: 400,
              message: "Password and confirm password must be same.",
              detail: "Confirm your password before submitting.",
            },
            isUserLoggedIn: true,

            response: {},
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        User.findOneAndUpdate(
          { _id },
          {
            password: hashedPassword,
          }
        );

        return res.status(200).send({
          error: {},
          isUserLoggedIn: true,

          response: {
            status: 200,
            message: "Password updated successfully.",
            detail: {},
          },
        });
      }
    }
  } catch (error) {
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
    // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺

    return res.status(500).send({
      error: {
        status: 500,
        message: "Something went wrong while updating the user info.",
        detail: error,
      },
      isUserLoggedIn: true,

      response: {},
    });
  }
};
