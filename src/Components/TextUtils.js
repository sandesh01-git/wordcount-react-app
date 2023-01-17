import { useState } from "react"
import React  from 'react'

function TextUtils(props) {


  
const handleupclick = () =>{
  console.log("upercase");
  let newText = text.toUpperCase();
  setText(newText);
}

const handleloclick = () =>{
  console.log("loercase")
  let newText =  text.toLowerCase();
  setText(newText);
};

const handletextclick = () =>{
 
  let newText =  " ";
  setText(newText);
};

const handlechange = (event) =>{
 
  setText(event.target.value);
}
const [text, setText] = useState('');

const [colorbt, setColorbt] = useState({

  color:'black',
  backgroundcolor:'white',
})

const [btntext, setBtnText] = useState("Dark Mode")

const toggleclick = () =>{
  if (colorbt.color == 'black') {
    setColorbt({
 color:'white',
 backgroundcolor: 'black'
  })
  setBtnText("Light Mode")

  }
  else{
    setColorbt({

      color:'black',
      backgroundcolor:'white'
  })
  setBtnText("Dark Mode")
  }
}

  return (
    <>
  <div className="container mx-auto" >

  <h1 > {props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handlechange} rows="8" style={colorbt}></textarea>
</div>

<button className="btn btn-primary mx-5" onClick={handleupclick} style={colorbt} >Uppercase</button>

<button className="btn btn-primary mx-5" onClick={handleloclick} style={colorbt}>Lowercase</button>


<button className="btn btn-primary mx-5" onClick={handletextclick} style={colorbt}>Clear</button>

<button className="btn btn-primary mx-5" onClick={toggleclick} style={colorbt}>{btntext} </button>
  </div>

  <div className="container my-3">
    <h1>text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> {0.008 * text.split(" ").length} minute's read</p>
    <h2>preview </h2>
    <p>{text}</p>
  </div>
    </>
  )
}

export default TextUtils