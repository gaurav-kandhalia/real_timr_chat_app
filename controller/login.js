const express = require('express');
const user_model = require('../model/model');
// const bcrypt = require('bcrypt')
// const cookie = require('cookie-parser')

const login_data = async (req, res) => {
  console.log('this is login api')
  const { email, password } = req.body;
  console.log(email, password)

  if (!email || !password) {
    return res.json({
      message: "invalid details"
    })
  }


  const isemail = await user_model.findOne({ email: email });
  console.log("isemail-->",isemail);
//   console.log(isemail)
  if (!isemail) {
    return res.json({
      message: "user doest not exists"
    })
  }


  const isPasswordValid = await (password, isemail.password);
  console.log("ispasswordvalid=", isPasswordValid)



  if (!isPasswordValid) {
    return res.json({
      message: "password does not match"
    })
  } else {

    return res.json({
      message: "welcome user",
   

    })
  }


}

module.exports = login_data

