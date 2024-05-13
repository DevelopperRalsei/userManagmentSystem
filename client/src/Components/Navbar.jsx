import React from 'react'

document.title = "Proje İsmi"

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container">
        <a className="navbar-brand" href="/">Proje İsmi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`${props.activeMain && `active`} nav-link`} aria-current="page" href="/">Ana Sayfa</a>
            </li>
            <li className="nav-item">
              <a className={`${props.activeUsers && `active`} nav-link`} aria-current="page" href="/users">Kullanıcılar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/error">Hata Sayfası</a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <a href="/login" className="me-2 btn btn-primary" >Giriş Yap</a>
            <a href="/register" className="btn btn-success" type="submit">Kayıt Ol</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
