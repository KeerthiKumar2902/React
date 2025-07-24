import {  useCallback, useEffect, useState } from 'react'


function App() {

  console.log("App Loaded")
  const [length,setLength] =useState(8)
  const [numberAllowed,setnumberAllowed] =useState(false)
  const [characterAllowed,setcharacterAllowed] =useState(false)
  const [password,setpassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="@#%^&*"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,numberAllowed,characterAllowed,setpassword])

  useEffect(passwordGenerator,[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password'readOnly />
            <button onClick={()=>{window.navigator.clipboard.writeText(password)}}className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded-r-lg transition-colors duration-200 shadow">
              Copy
            </button>
          </div>
          <div id='length' className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow mb-4">
              <label htmlFor="range" className="text-white font-medium">Length</label>
              <input
                type="range"
                min={8}
                max={50}
                value={length}
                onChange={e => setLength(Number(e.target.value))}
                className="cursor-pointer accent-orange-500 h-2 w-full rounded-lg"
                id="range"
          
              />
              <span className="text-orange-400 font-semibold">{length}</span>
          </div>
          <div id="checkBox" className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg shadow mb-4">
            <input
              type="checkbox"
              id="numberAllowed"
              checked={numberAllowed}
              onChange={e => setnumberAllowed((prev)=> !prev)}
              className="accent-orange-500 w-5 h-5 cursor-pointer"
            />
            <label htmlFor="numberAllowed" className="text-white font-medium">
              Include Numbers
            </label>
          </div>
          <div id="characterCheckBox" className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg shadow mb-4">
              <input
                type="checkbox"
                id="characterAllowed"
                checked={characterAllowed}
                onChange={e => setcharacterAllowed((prev) => !prev)}
                className="accent-orange-500 w-5 h-5 cursor-pointer"
              />
              <label htmlFor="characterAllowed" className="text-white font-medium">
                Include Special Characters
              </label>
          </div>
      </div>
    </>
  )
}

export default App
