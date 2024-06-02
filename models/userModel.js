const mysql = require("mysql")
const config = require("../config")

const pool = mysql.createPool(config.db.mysql)

module.exports = {
  getAllUsers: (callback) => {
    pool.getConnection((err,con)=>{
      if(err){
        console.error("MySQL Pool connection Err: "+err)
        callback(err,null)
        return
      }
    
      const sql = "SELECT * FROM users"
      con.query(sql,(err,result)=>{
        if(err){
          console.error("MySQL Query Err: "+err)
          callback(err,null)
          return
        }
        callback(null,result)
        con.release()

      })
    })
  },

  getAUser: (id, callback) => {
    pool.getConnection((err,con)=>{
      if(err){
        console.error("MySQL Pool Connection Err: "+err)
        callback(err,null)
        return
      }

      const sql = "SELECT * FROM users WHERE id = ?"
      con.query(sql,[id],(err,result)=>{
        if(err){
          console.error("MySQL Query Err: "+err)
          callback(err,null)
          return
        }
        callback(null,result)
        con.release()
      })
    })
  },

  newUser: (username, email, password, callback) => {
    pool.getConnection((err,con)=>{
      if(err){
        console.error("MySQL Pool Connection Err: "+err)
        callback(err,null)
        return
      }


    const sql = "INSERT INTO users (username, email,password) VALUES (?, ?, ?)"
    con.query(sql,[username,email,password],(err)=>{
      if(err){
        console.error("MySQL Query Err: "+err)
        callback(err)
        return
      }
      callback(null)
      con.release()
    })
    })
  },

  updateUser: (id, username,email,password,callback) => {
    pool.getConnection((err,con)=>{
      if(err){
        console.error("Mysql pool connection err: "+err)
        callback(err)
        return
      }

      const sql = "UPDATE users SET username = ?,email = ?,password = ? WHERE id = ?"
      con.query(sql,[username,email,password,id],(err)=>{
        if(err){
          console.error("MySQL query Err: "+err)
          callback(err)
          return
        }
        callback(null)
      })
      con.release()
    })
  },

  deleteUser: (id,callback) => {
    pool.getConnection((err,con)=>{
      if(err){
        console.error("Mysql Pool connection err: "+err)
        callback(err)
        return;
      }
      const sql = "DELETE FROM `users` WHERE id = ?"
      con.query(sql,[id],err=>{
        if(err){
          console.error("Mysql Query Err: "+err)
          callback(err)
          return
        } 
        callback(null)
        return
      })
      con.release()
    })
  }
}
