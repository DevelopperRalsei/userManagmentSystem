import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
   document.title = "Giriş Yap"
  return (
    <div className='bg-light vh-100 d-flex align-items-center justify-content-center'>
      <a href="/" className="position-absolute top-0 start-0 m-3 bg-white rounded shadow p-3 text-dark text-decoration-none"><i className="fa fa-home"></i> &nbsp; Ana Sayfa</a>
      <div className="px-4 py-3 bg-white rounded shadow">
         <h3>Giriş Yap</h3>
         <hr />
         <form action="#" className='form'>
            <div className="input-container mt-2">
               <label htmlFor="">Kullanıcı Adı</label> <br />
               <input name='username' type="text" className="form-control" placeholder='örn. Mehmet-32'/>
            </div>
            <div className="input-container mt-2">
               <label htmlFor="">Şifre</label> <br />
               <input name='password' type="password" className="form-control" placeholder='********' min={8}/>
               <span className='fs-6'></span>
            </div>
            <div className="btn-container btn-group mt-2 w-100">
               <button type='submit' className="btn btn-success">Giriş Yap</button>
               <button type="reset" className='btn btn-default border'>Sıfırla</button>
            </div>
            <hr />
            <div>
               <p>Bir hesabın yok mu?</p>
               <Link to="/register" className='btn btn-primary w-100'>Kayıt Ol</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login
