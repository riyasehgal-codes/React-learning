import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = { 
    username: "Riya",
    age : 19
  }

  return (
    <>
      <Card username='chairaurcode' btnText='click Me' />
      <Card username = "Riya Sehgal"  />
      
      
    </>
  )
}

export default App
