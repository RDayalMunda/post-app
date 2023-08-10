const model = require("../model/index.js")


module.exports.getUserByEmail = async (email)=>{
    return await model.User.findOne({ email: email })
}

module.exports.getUserByPhone = async (phone)=>{
    return await model.User.findOne({ phone: phone })
}

module.exports.checkUserPresence = async (query)=>{
    return await model.User.count(query)
}

module.exports.createNewUser = async (data)=>{
    let userObj = await model.User(data)
    await userObj.save()
    return userObj
}