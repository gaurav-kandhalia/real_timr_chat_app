const mongoose  = require('mongoose');
// const jwt = require('jsonwebtoken')
// const bycrypt = require('bcrypt')
// const JWT_SECRET = "MYnameisgauravkandhalia";


const user_schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})


// user_schema.methods.generateToken = function () {
//     return jwt.sign({ _id: this._id },JWT_SECRET);
//   };
    
const user_model = mongoose.model('chatapp_data',user_schema);

module.exports = user_model;