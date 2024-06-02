const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")

module.exports = {
  getAllUsersGET: (req, res) => {
    if(!req.params.id){
      userModel.getAllUsers((err, result) => {
        if (err) {
          return res.send({ message: "Database error: "+err })
        }
        res.send({data: result})
      })
    } else {
      userModel.getAUser(req.params.id,(err,result)=>{
        if(err){
          console.log(err)
          return res.send({ message:"Database error: "+err })
        }
        return res.send({data: result})
      })
    }
  },

  newUserPOST: (req, res) => {
    const { newUsername, newMail, newPass } = req.body;

    bcrypt.hash(newPass, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password: " + err)
        return res.send({ message: "Password hashing Err: "+err })
      }
      
      userModel.newUser(newUsername, newMail, hashedPassword, (err) => {
        if (err) {
          return res.status(500).send({ error: "Database error: "+err });
        }
        return res.status(201).send({ message: "Yeni Kullanıcı Oluşturuldu" });
      })
    })
  },

  editUserPUT: (req,res)=>{
    const { userId, newUsername, newMail,newPass } = req.body

    bcrypt.hash(newPass,10,(err,hashedPassword)=>{
      if(err){
        console.error("Password hash Err: "+err)
        return res.send({message: "Password Hash Err: "+err})
      }

      userModel.updateUser(userId,newUsername,newMail,hashedPassword,err=>{
        if(err){
          console.error("Mysql Query Err: "+err)
          return res.send({message: "Kullanıcı Düzenlenemedi Hata: "+err})
        }

        return res.send({message: "Kullanıcı Değiştirildi"})
      })
    })
  },

  deleteUserDELETE: (req,res) => {
    const {id} = req.body

    userModel.deleteUser(id,err=>{
      if(err){
        return res.send({messasge: "Kullanıcı Silinemedi: "+err})
      }
      return res.send({message: "Kullanıcı Silindi"})
    })
  }

  
};