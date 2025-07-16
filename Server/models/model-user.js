// This file is to specify the fields for users
const  mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
// .model() has 2 parameters, 1- Collection name(the name you have on database, in this case users) 2- Schema that is created right now 
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel 