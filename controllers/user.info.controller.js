const User = require("../models/user.model");

exports.user = async (req, res) => {
  try {
    const foundUser = await User.findById(req.authenticatedUser._id).select(
      "-password"
    );
    return res.send({
      error: {},
      response: {
        userInfo: foundUser,
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
