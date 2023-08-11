const mongoose = require("mongoose");

let collectionSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String },
        gender: { type: String, required: true },
        email: { type: String, unique: true, required: true},
        phone: { type: Number, unique: true, required: true},
        // dob: { type: Date, required: true},
        isActive: { type: Boolean, default: false },
    },
    { timestamps: true }
)
module.exports = { collectionSchema, collectionName:"User" }
