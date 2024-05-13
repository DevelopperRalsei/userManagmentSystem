import React from 'react'
import Navbar from '../Components/Navbar'

function Home(props) {
  document.title = "Ana Sayfa"
  if (true) {
    return (
      <div>
        <Navbar activeMain />
        <div className="container mt-4">
          buraya projenin içeriği gelecek
        </div>
      </div>
    )
  }
}

export default Home
