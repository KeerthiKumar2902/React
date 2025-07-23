import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  

  let [counter,setCounter] =useState(0)

  const addValue=()=>{
    counter=counter+1
    setCounter(counter)
    console.log("Clicked",counter)
  }
  const subValue=()=>{
   if(counter>0){
    setCounter(counter-1)
    console.log("Decreased:",counter)
   }
   else{
    console.log("Counter already at Zero")
   }
  }

  return (
    <>
      <h1>Keerthi Kumar S</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase count {counter}</button>
      <button onClick={subValue}>Decrease count {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
