import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const  [count,setText] = useState('enter your text here');
   
    // setText("hell boi");
    const handleUpClick=(event)=>{
        event.preventDefault();
    //   console.log("up click wa triggered")
    let upr=count.toUpperCase();
      setText(upr);
    }
    const handleOnChange=(event)=>{
      console.log("changed");
      setText(event.target.value)
    }
  return (
    <>
    <div>
      <form> 

  <div className="form-group">
    <label htmlFor="text">{props.heading} </label>
    <textarea className="form-control" id="myBo x" rows="15" value={count} onChange={handleOnChange}></textarea>
  </div>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
</form>
    </div>
    </>
  )
}
