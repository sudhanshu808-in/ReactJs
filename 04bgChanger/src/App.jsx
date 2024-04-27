
// import './App.css'
import { useState } from "react"
function App() {
const [colorr,setColor]=useState("green")

  return (
       <div>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:colorr}}>color</div>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
              <button className="outline-none px-3 rounded-full text-white shadow-lg "style={{backgroundColor : "red"}}onClick={()=>setColor("red")}>Red</button>

              <button className="outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor : "green"}}onClick={()=>setColor("green")}>green</button>

              <button className="outline-none px-3 rounded-full text-white shadow-lg "style={{backgroundColor : "Blue"}}onClick={()=>setColor("blue")}>Blue</button>

              {/* <button className="outline-none px-3 rounded-full text-white shadow-lg "style={{backgroundColor : "red"}}>Red</button>

              <button className="outline-none px-3 rounded-full text-white shadow-lg "style={{backgroundColor : "red"}}>Red</button> */}
            </div>
          </div>

        </div>
  )
}

export default App
