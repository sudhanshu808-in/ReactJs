import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
//  let obj={
//   username : "sk",
//   cgpa :  "9.0",
//   address : NaN
//  }
  return (
    <>
    <h1>HELLO</h1>
    <Card name="Sudhanshu" btnText="click me"/>
    <Card name="KING KHAN" btnText="Click me"/>
    </>
  )
}

export default App
