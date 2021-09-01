const router = require("express").Router();
const userController = require("../controllers/user.controller");
const userInfoController = require("../controllers/user.info.controller");

const auth = require("../middlewares/auth");
const User = require("../models/user.model");
router.get("/all", async (req, res) => {
  const allUsers = await User.find({}).select("-password");
  res.send(allUsers);
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/", auth, userInfoController.user);
router.put("/update", auth, userInfoController.update);

module.exports = router;
