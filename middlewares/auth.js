const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt;
    const user = await jwt.verify(token, process.env.JWT_SECRET);

    if (!user) {
      res.clearCookie("jwt");
      res.clearCookie("isAuth");
      return res.status(401).send({
        error: {
          status: 401,
          message: "Access denied!",
          detail: "Please login first.",
        },
        response: {},
      });
    }

    req.authenticatedUser = user;
    next();
  } catch (err) {
    res.clearCookie("jwt");
    res.clearCookie("isAuth");
    res.status(500).send({
      error: {
        status: 500,
        message: "Access denied! Please login again",
        detail: "Please login again.",
      },
      response: {},
    });
  }
};

module.exports = auth;
