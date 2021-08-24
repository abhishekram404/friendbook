const router = require("express").Router();
const userController = require("../controllers/user.controller");
router.get("/all", userController.all);

router.post("/register", userController.register);

module.exports = router;
