const userDao = require("../dao/user.js")

module.exports.createNewUser = async(req,res)=>{
    let errorObj = []
    try{
        let userData;
        let userFound = false
        if (req.body.email){
            if ( await userDao.checkUserPresence({email: req.body.email}) ){
                errorObj.push("Email already taken")
                userFound = true
            }
        }
        if (req.body.phone){
            if ( await userDao.checkUserPresence({phone: req.body.phone}) ){
                errorObj.push("Phone number already taken")
                userFound = true
            }
        }
        if (!userFound){
            userData = await userDao.createNewUser(req.body)
        }

        res.status(200).send({
            status: 200,
            success: userData?true:false,
            message: userData?"Your account has been created":"Could not create your account",
            errorObj, userData,
        })
    }catch(err){
        console.log(err)
        res.status(500).send({ status: 500, message: "INTERNAL SERVER ERROR", error:err, errorObj, })
    }
}

module.exports.signIn = async (req,res)=>{
    try{
        let userData = await userDao.getUserByEmail(req.body.email)
        if (userData){
            userData = {
                userId: userData._id,
                userName: userData.firstName + ' ' + userData.lastName
            }
        }
        res.status(200).send({
            status: 200,
            success: userData?true:false,
            message: userData?"Your have signed in successfully":"Could not find account associated with this email.",
            userData,
        })
    }catch(err){
        console.log(err)
        res.status(500).send({ status: 500, message: "INTERNAL SERVER ERROR", error:err })
    }
}