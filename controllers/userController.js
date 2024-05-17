const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")

module.exports = {
  getAllUsersGET: (req, res) => {
    if(!req.params.id){
      userModel.getAllUsers((err, result) => {
        if (err) {
          return res.status(500).send({ message: "Database error: "+err })
        }
        res.send({data: result})
      })
    } else {
      userModel.getAUser(req.params.id,(err,result)=>{
        if(err){
          console.log(err)
          return res.status(500).send({ message:"Database error: "+err })
        }
        res.send({data: result})
      })
    }
  },

  newUserPOST: (req, res) => {
    const { newUsername, newMail, newPass } = req.body;

    bcrypt.hash(newPass, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password: " + err);
        res.send({ message: "Password hashing Err: "+err });
        return;
      }
      
      userModel.newUser(newUsername, newMail, hashedPassword, (err) => {
        if (err) {
          return res.status(500).send({ error: "Database error: "+err });
        }
        res.status(201).send({ message: "Yeni Kullanıcı Oluşturuldu" });
      })
    })
  },

  compareUser: (req,res)=> {
    
  },

  editUserPUT: (req,res)=>{
    
  }
};