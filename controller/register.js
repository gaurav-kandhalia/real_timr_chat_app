const register_model = require('../model/model');


const register_data = async (req, res) => {

  console.log('this is register api')
//   const form_data = req.body;
//   console.log("form_data=",form_data);

  const { name, email, password } = req.body;


  if (!name && !email && !password){
    return res.json({
      message:"fill all details"
    })
  }
   

else{

const user = new register_model({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  console.log("user.email==",user.email);
//      
  const useremail = await register_model.findOne({ email: user.email });
  // console.log("useremail",useremail.email)
  // if (useremail == " ") {


    if (useremail) {
      console.log("useremail.email",useremail.email);
      console.log(user.email);


      if (useremail.email == user.email) {
        console.log("User already exists");
        return res.json({ message: "User already exists" });
      }
    }



    // If no user with the same email exists, save the new user
    await user.save();
   

    res.json({ message: "Registered successfully"});

     
}

}
module.exports = register_data;
