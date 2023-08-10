const env = process.env.NODE_ENV || 'dev'
global.CONFIG = require(`./config/${env}.config.js`)

const mongoose = require("mongoose")

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

app.use("/user", require("./router/user.js"))

app.listen(CONFIG.PORT, () => {
    console.log(`server running-> http://localhost:${CONFIG.PORT}`)
    mongoose.connect(CONFIG.MDB.URL).then(()=>{
        console.log(`MDB connected: ${CONFIG.MDB.DB_NAME}`)
    }).catch( (err)=>{ console.log('MDB connection failed!') } )
})

