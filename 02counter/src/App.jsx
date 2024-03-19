import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [counter, setCounter] = useState(0)
 let [counter,setCounter]=  useState(3)
  // let counter=0;
  const  addValue=()=>{
    console.log("clicked",counter);
  setCounter(counter+1)
  }
  const decValue=()=>{
    if(counter>0){
    setCounter(counter-1)
  }}
  return (
    <>
    <h1>Sudhanshu</h1>
    <button 
    onClick={addValue}>+</button>
    <h2>Counter value : {counter}</h2>
    <br />
    <button 
    onClick={decValue}>-</button>
    </>
  )
}

export default App
