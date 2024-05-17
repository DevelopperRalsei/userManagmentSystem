import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import userRoutes from "../Routes/UserRoutes"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from "jquery"

function User(props) {
  const userData = props.userData

  const [usernameInputV, setUsernameInputV] = useState("")
  const [emailInputV, setemailInputV] = useState("")
  const [passInputV, setPassInputV] = useState("")
  const [passValidationInputV, setPassValidationInputV] = useState("")
  const [msg, setMsg] = useState("")


  useEffect(() => {
    if (userData && userData.email && userData.username) {
      setUsernameInputV(userData.username)
      setemailInputV(userData.email)
    }
  }, [userData])

  const handleSubmit = (e) => {
    e.preventDefault()

    var passInput = $(".passwordI")
    var passValidation = $(".passwordV")
    var passValidationSpan = $(".passwordVSpan")
    if (passInputV === passValidationInputV) {

      passInput.removeClass("border-danger")
      passValidation.removeClass("border-danger")
      passValidationSpan.addClass("d-none")

      userRoutes.updateUser(usernameInputV, emailInputV, passInputV)
        .then(response => {
          setMsg(response.data.message)
          const messageModal = new bootstrap.Modal(document.getElementById("messageModal"))
          messageModal.show()
        }).catch(err=>{
          console.error(err)
        })

    } else {
      passInput.addClass("border-danger")
      passValidation.addClass("border-danger")
      passValidationSpan.removeClass("d-none")

    }
  }
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                Düzenle : {userData.username}
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <label>Kullanıcı İsmi: </label> <br />
                  <input type="text" value={usernameInputV} className="form-control" onChange={e => setUsernameInputV(e.target.value)} /> <br />
                  <label>E-Posta: </label><br />
                  <input type="email" className="form-control" value={emailInputV} onChange={e => setemailInputV(e.target.value)} />
                  <hr />
                  <label>Eski Şifre: </label><br />
                  <input type="password" placeholder='********' className="form-control passwordI" onChange={e => setPassInputV(e.target.value)} /><br />
                  <label>Yeni Şifre: </label><br />
                  <input type="password" placeholder='********' className="form-control passwordV" onChange={e => setPassValidationInputV(e.target.value)} />
                  <span className='passwordVSpan d-none text-danger'>Şifre Eşleşmedi</span><br /><br />
                  <div className='input-group w-100'>
                    <button className='btn btn-default border' type='reset'>Sıfırla</button>
                    <button type="submit" className='btn btn-success'>Kaydet</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}

      <div id="messageModal" className="modal fade" tabIndex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="messageModalLabel">Sunucu Mesajı</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {msg}
            </div>
            <div className="modal-footer">
              <a href="/users" className="btn btn-success">Kullanıcı Listesi</a>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
