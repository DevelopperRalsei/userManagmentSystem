import React, { useState, useEffect, useRef } from 'react'
import Layout from './Layout'
import UserRoutes from '../Routes/UserRoutes'
import MessageBox from '../Components/MessageBox'

function Delete() {
  const [userData, setUserData] = useState({})
  const [userId, setUserId] = useState("")
  const [msgBoxMsg, setMsgBoxMsg] = useState("")

  const messageBoxRef = useRef()

  useEffect(() => {
    const URLParams = new URLSearchParams(window.location.search)
    const Id = URLParams.get("Id")
    setUserId(Id)
    UserRoutes.getAUser(Id)
      .then(response => {
        if(response.data.data[0]){
          setUserData(response.data.data[0])
        } else {
          setMsgBoxMsg("Kullanıcı Bulunamadı")
          messageBoxRef.current.show()
        }
      })
      .catch(err => {
        setMsgBoxMsg("Bir şey ters gitti: "+err)
        messageBoxRef.current.show()
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    UserRoutes.deleteUser(userId)
      .then(response => {
        setMsgBoxMsg(response.data.message)
        messageBoxRef.current.show()
      }).catch(err => {
        setMsgBoxMsg("Birşey ters gitti: "+err)
        messageBoxRef.current.show()
      })
  }

  return (
    <Layout>
      <form className='card' onSubmit={handleSubmit}>
        <div className="card-header">Bu kullanıcıyı silecekmisiniz : {userData.username}</div>
        <div className="card-body">
          <a href='/users' type='reset' className="btn btn-default border">Hayır</a>
          <button type='submit' className="ms-2 btn btn-danger">Sil</button>
        </div>
      </form>

      <MessageBox ref={messageBoxRef} msg={msgBoxMsg}/>

    </Layout>
  )
}

export default Delete