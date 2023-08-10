const router = require("express").Router()
const userController = require("../controller/user.js")

router.post("", userController.createNewUser) // adding 1 user
// router.put("") // updating 1 user
// router.get("") // getting 1 user
router.post("/sign-in", userController.signIn)



module.exports = router