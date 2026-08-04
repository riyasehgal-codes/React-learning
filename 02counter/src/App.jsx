import { useState } from 'react' //hook comes from here
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    console.log("clicked", counter );
    // counter = counter+1 
    setCounter(counter+1)
  }

  const removeValue = () => { 
    console.log("removed bleh", counter);
    if (counter>0) setCounter(counter-1)
    
  } 

  return (
    <>
    <h1> Chai aur React</h1>
    <h2> Counter Value: {counter} </h2>
    <button
    onClick={addValue} > Add Value </button>
    <br/>
    <button
    onClick={removeValue}> remove value</button>
    </>
  )
}

export default App
