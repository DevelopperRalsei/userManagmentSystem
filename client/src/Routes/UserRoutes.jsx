import axios from "axios"

const fuck = {
  getUsers: () =>
    axios.get("http://localhost:8080/api/users")
      .then(response => {return response})
      .catch(err => {
        console.error("Server connection Err: "+err);
        return [];
      }),

  getAUser: (id)=>
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then(response => {return response})
      .catch(err => {
        console.error("User couldn't get: "+err)
        return []
      }),

  newUser: (username, mail, pass) => 
  axios.post("http://localhost:8080/api/users/newUser", {
      newUsername: username,
      newMail: mail,
      newPass: pass
    }).then(response => {return response})
    .catch(err => console.error("Server post err: "+err))
};

export default fuck
