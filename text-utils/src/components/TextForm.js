import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const  [text,setText] = useState('enter your text here');
   
    // setText("hell boi");
    const handleUpClick=(event)=>{
        event.preventDefault();
    //   console.log("up click wa triggered")
    let upr=text.toUpperCase();
      setText(upr);
    }
    const handleOnChange=(event)=>{
      console.log("changed");
      setText(event.target.value)
    }
    const handleLowClick=()=>{
        let lower=text.toLowerCase();
        setText(lower);
    }
    const handleCLear=()=>{
        setText("");
    }
  return (
    <>
    <div className='container'>
   

  <div className={`form-group text-${props.mode=='light'?'dark':'light'}`}>
    <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>{props.heading}</h1>
    <textarea className="form-control" id="myBo x" rows="15" value={text} onChange={handleOnChange}  style={{backgroundColor :props.mode=='light'?'white':'black', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button> <button className='btn btn-primary mx-2' onClick={handleCLear}>Clear</button>
    </div>
    <div className="container my-3">
     <h1 className={`text-${props.mode=='light'?'dark':'light'}`}>Text Summary</h1>
     <p className={`text-${props.mode=='light'?'dark':'light'}`}>{text.split(" ").length-1} : words  {text.length} : characters</p>
     <h2 className={`text-${props.mode=='light'?'dark':'light'}`}>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}
