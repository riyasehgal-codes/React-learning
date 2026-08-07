import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8) 
  const [ number, setNumber ] = useState(false)
  const [ character, setCharacter ] = useState(false)
  const [ password, setPassword ] = useState("")

  //ref hook
const passwordRef = useRef(null)
  

  const passwordGen = useCallback( () => { 
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

    if ( number ) str += "1234567890" 
    if (character ) str+= "@#_@$&*#@)#%!*&)!#($)(&%(!)"

    for ( let i = 1 ; i < length ; i++){
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [ length, number, character, setPassword] )

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
  },
[password])

  useEffect( () => {
    passwordGen()}, [length, number, character, passwordGen] )


  return (
    <>

     <div className="w-full max-w-lg mx-auto my-20 shadow-md rounded-xl px-4 py-4 my-8 text-white bg-gray-700">
      <h1 className="text-white text-2xl text-center my-3 font-semibold">
      Password Generator
      </h1>
         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type = "text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder = 'password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-pink-500 text-white px-3 py-0.5 shrink-0'> COPY</button>
                     

         </div>

         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1' >
              <input 
              type ="range"
              min={6}
              max={90}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value)}}
              /> 
                <label> length: {length}</label>

            </div>

            <div className='flex items-center gap-x-1' >
              <input 
              type='checkbox'
              defaultChecked={number}
              id='numberInput'
              onChange={()=> {
                setNumber((prev) => !prev);
              }}
              />
                <label htmlFor='numberInput'> Number</label>

            </div>

            <div className='flex items-center gap-x-1' >
              <input 
              type='checkbox'
              defaultChecked={character}
              id='charInput'
              onChange={()=> {
                setCharacter((prev) => !prev);
              }}
              />
                <label htmlFor='charInput'> Special Characters</label>

            </div>
         </div>
      </div>


    </>
  )
}

export default App
