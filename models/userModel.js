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
      console.log("Mysql Connected")

      const sql = "SELECT * FROM users WHERE id = ?"
      con.query(sql,[id],(err,result)=>{
        if(err){
          console.error("MySQL Query Err: "+err)
          callback(err,null)
          return
        }
        callback(null,result)
        con.release(console.log("MySQL pool connection Ended"))
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
    console.log("Mysql Connected")


    const sql = "INSERT INTO users (username, email,password) VALUES (?, ?, ?)"
    con.query(sql,[username,email,password],(err)=>{
      if(err){
        console.error("MySQL Query Err: "+err)
        callback(err)
        return
      }
      callback(null)
      con.release(console.log("MySQL Pool Connection Ended"))
    })
    })
  },
}
