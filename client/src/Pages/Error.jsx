import React from 'react'


function Error(props) {
  document.title = "Hata"

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 bg-light'>
      <a href="/" className="position-absolute top-0 start-0 m-3 bg-white rounded shadow p-3 text-dark text-decoration-none"><i className="fa fa-home"></i> &nbsp; Ana Sayfa</a>
      <div className='message-container bg-white shadow p-5 text-center'>
      <h1 className='text-danger'>Bir hata meydana geldi</h1>
      <p>
         Hata Mesajı : {props.message}
      </p>
      </div>
    </div>
  )
}

export default Error
