import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Pages/Error'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Users from './Pages/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error message="Sayfa Bulunamadı"/>}/>
        <Route index path='/' element={<Users />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:Id' element={<Users />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
