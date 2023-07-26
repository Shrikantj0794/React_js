import React, {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState('enter the text---')
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
  
    return (
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} id="myForm" rows="8"></textarea>
            <button className='btn btn-primary' onClick={ handleUpClick}>convert to UpperCase</button> 
            {/* Call multiple functions onClick ReactJS */}
            </div>  
    </div>  
  )
}
