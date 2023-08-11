const router = require("express").Router()
const userController = require("../controller/user.js")

router.post("", userController.createNewUser) // adding 1 user
// router.put("") // updating 1 user
// router.get("") // getting 1 user
router.post("/sign-in", userController.signIn)
router.get("/test-user", (req,res)=>{
    try{
        res.status(200).send({"message": "Working correctly try 1"})
    }catch(err){
        res.status(500).send({"message": "Error"})
    }
})



module.exports = router