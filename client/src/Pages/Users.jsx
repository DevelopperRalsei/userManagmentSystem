import React, { useState, useEffect } from 'react'

import Navbar from '../Components/Navbar'
import userRoutes from '../Routes/UserRoutes'
import User from './User'

function Users() {
  const urlParams = new URLSearchParams(window.location.search)
  const Id = urlParams.get("Id")
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    if (!Id) {
      userRoutes.getUsers()
        .then(result => {
          setUsers(result.data.data)
        })
        .catch(err => {
          console.error("Something went wrong: " + err)

        })
    } else {
      userRoutes.getAUser(Id)
        .then(result => {
          setUser(result.data.data[0])
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [Id])

  if (Id) {
    return (
      <User userData={user} />
    )
  }

  return (
    <div>
      <Navbar activeUsers />
      <div className="container mt-4">
        <table className="table table-striped table-bordered rounded">
          <thead className='table-light'>
            <tr>
              <th width="1%">#</th>
              <th>Kullanıcı İsmi</th>
              <th>Kullanıcı e-Posta</th>
              <th width="1%">Düzenle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td role='group'>
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="" aria-expanded="false">
                    Düzenle
                  </button>
                  <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href={`users?Id=${user.id}`}>Düzenle</a></li>
                    <li><a className="dropdown-item" href={`deleteUser?Id=${user.id}`}>Sil</a></li>
                  </ul>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Users
