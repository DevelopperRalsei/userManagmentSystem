import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserRoutes from '../Routes/UserRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'

function Register() {
   const [usernameValue, setUsernameValue] = useState("")
   const [mailValue, setMailValue] = useState("")
   const [passValue, setPassValue] = useState("")
   const [msg, setMsg] = useState("")

   document.title = "Kayıt Ol"

   const handleSubmit = (e) => {
      e.preventDefault()

      UserRoutes.newUser(usernameValue, mailValue, passValue)
         .then(response => {
            setMsg(response.data.message)
            const messageModal = new bootstrap.Modal(document.getElementById("messageModal"))
            messageModal.show()
         })
         .catch(err => {
            setMsg(err)
            const messageModal = new bootstrap.Modal(document.getElementById("messageModal"))
            messageModal.show()
         })
   }

   return (
      <div className='bg-light vh-100 d-flex align-items-center justify-content-center'>
         <a href="/" className="position-absolute top-0 start-0 m-3 bg-white rounded shadow p-3 text-dark text-decoration-none"><i className="fa fa-home"></i> &nbsp; Ana Sayfa</a>
         <div className="px-4 py-3 bg-white shadow rounded">
            <h3>Kayıt Ol</h3>
            <hr />
            <form action="#" onSubmit={handleSubmit}>
               <div className="input-container mt-2">
                  <label htmlFor="">Kullanıcı Adı</label> <br />
                  <input name='username' onChange={e => { setUsernameValue(e.target.value) }} type="text" className="form-control" placeholder='örn. Mehmet-32' />
               </div>
               <div className="input-container mt-2">
                  <label htmlFor="">E-Posta</label> <br />
                  <input name='email' onChange={e => { setMailValue(e.target.value) }} type="email" className="form-control" placeholder='örn. mail@mail.net' />
               </div>
               <div className="input-container mt-2">
                  <label htmlFor="">Şifre</label> <br />
                  <input name='password' onChange={e => { setPassValue(e.target.value) }} type="password" className="form-control" placeholder='********' min={8} />
               </div>
               <div className="btn-container btn-group mt-2 w-100">
                  <button type='submit' className="btn btn-success">Kayıt Ol</button>
                  <button type="reset" className='btn btn-default border'>Sıfırla</button>
               </div>
               <hr />
               <div>
                  <p>Zaten bir hesabın mı var?</p>
                  <Link to={`/login`} className='btn btn-primary w-100'>Giriş Yap</Link>
               </div>
            </form>
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

export default Register
