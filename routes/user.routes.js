const router = require("express").Router();
const userController = require("../controllers/user.controller");
const userInfoController = require("../controllers/user.info.controller");
const auth = require("../middlewares/auth");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/", auth, userInfoController.user);

module.exports = router;
