import React,{ useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

function User(props) {
  const userData = props.userData

  const [usernameInputV, setUsernameInputV] = useState("")
  const [emailInputV, setemailInputV] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  useEffect(()=>{ 
    if(userData && userData.email && userData.username){
      setUsernameInputV(userData.username)
      setemailInputV(userData.email)
    }
  },[userData])

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
                  <input type="text" value={usernameInputV} className="form-control" onChange={e => setUsernameInputV(e.target.value)}/> <br />
                  <label>E-Posta: </label><br />
                  <input type="email" className="form-control" value={emailInputV} onChange={e => setemailInputV(e.target.value)}/>
                  <hr />
                  <label>Eski Şifre: </label><br />
                  <input type="password" placeholder='********' className="form-control" /><br />
                  <label>Yeni Şifre: </label><br />
                  <input type="password" placeholder='********' className="form-control" /><br />
                  <div className='input-group w-100'>
                    <a className='btn btn-warning'>Şifre Değiştir</a>
                    <button className='btn btn-default border' type='reset'>Sıfırla</button>
                    <button type="submit" className='btn btn-success'>Kaydet</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
