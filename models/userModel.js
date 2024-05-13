const mysql = require("mysql")
const config = require("../config")
const con = mysql.createConnection(config.db.mysql)

module.exports = {
  getAllUsers: (callback) => {
    con.connect(err => {
      if(err){
        console.error("Mysql Connection Err: "+err)
        callback(err,null)
        return
      }
      console.log("mysql connected")
      con.query("SELECT * FROM users", (err, result) => {
        if (err) {
          console.error("Mysql Query Err: " + err)
          callback(err, result)
        } else {
          callback(err, result)
        }
      })
      con.end(console.log("Connection ended"))
    })

  },

  getAUser: (id, callback) => {
    con.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("MySQL Query Err: " + err)
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  },

  newUser: (username, email, password, callback) => {

    con.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
      (err) => {
        if (err) {
          console.error("Mysql Query Err: " + err)
          callback(err)
        } else {
          callback(null)
        }
      }
    )
  },
}
