import React from 'react'
import Navbar from '../Components/Navbar'

function Layout({children}) {
  return (
   <div>
      <Navbar />
      <main className="container mt-3">
          {children}
      </main>
   </div>
  )
}

export default Layout