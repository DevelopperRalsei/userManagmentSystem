import axios from "axios"

const kendimdenNefretEdiyorum = {
  getUsers: async () =>
    await axios.get("http://localhost:8080/api/users")
      .then(response => {return response})
      .catch(err => {
        console.error("Server connection Err: "+err);
        return [];
      }),

  getAUser: async (id)=>
    await axios.get(`http://localhost:8080/api/users/${id}`)
      .then(response => {return response})
      .catch(err => {
        console.error("User couldn't get: "+err)
        return []
      }),

  newUser: async (username, mail, pass) => 
  await axios.post("http://localhost:8080/api/users/newUser", {
      newUsername: username,
      newMail: mail,
      newPass: pass
    }).then(response => {return response})
    .catch(err => console.error("Server post err: "+err)),

  updateUser: async (id,username,mail,pass) =>
    await  axios.put("http://localhost:8080/api/users/updateUser",{
      userId:id,
      newUsername: username,
      newMail: mail,
      newPass: pass
    }).then(response => {return response})
    .catch(err => console.error("Server put err: "+err))
};

export default kendimdenNefretEdiyorum
