import React from 'react'
import './App.css'
import Navbar from './components/navbarr/Navbar'
import Landingpage from './components/landingPage/Landingpage'
function App() {
  return (
    <div id='main' className='w-full h-screen bg-zinc-100'>
      <Navbar />
      <Landingpage />
    </div>
  )
}

export default App