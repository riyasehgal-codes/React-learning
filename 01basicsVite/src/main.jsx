import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function MyApp() { 
  return ( 
    <div> 
      <h1> custom app added on main.jsx</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>  
)
