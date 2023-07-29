import React, {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState('')
  // text = "new text" -- Wrong way to change text
  // setText = "new text" -- wright way to change text value
 

  const handleUpClick = ()=>{
    console.log("converting")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleonChange = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const changelowercase = ()=>{
    let lowertext =text.toLowerCase();
    setText(lowertext)
  }
  const CopyText = ()=>{
    var text = document.getElementById("myForm");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
 
    return (
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} id="myForm" rows="8"></textarea>
            <button className='btn btn-primary mx-2' onClick={ handleUpClick}>convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={ changelowercase}>convert to LowerCase</button> 
            <button className='btn btn-primary mx-2' onClick={ CopyText}>Copy Text</button> 
             {/* Call multiple functions onClick ReactJS */}
          </div>
        <div className="container mb-3">
          words {text.split(" ").length} and character {text.length}
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
          </div>  
    </div>  
  )
}
