import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Chai from './Chai.jsx'

function App() {
  const username = "taylor swift"
  return (
    <>
    <h3> {username} </h3>
    <Chai />
    
    </>
  )
}

export default App
