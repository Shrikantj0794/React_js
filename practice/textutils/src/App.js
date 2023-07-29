import './App.css';
// import About from './compoenent/About';
import Navbar from './compoenent/Navbar';
import Form from './compoenent/Form';
import React, { useState } from 'react'
function App() {
  const [mode, setmode] = useState('dark');

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark')
    }
    else{
      setmode('light')
    } 
  }
  return (                                    
    <>
    <textForm/>
      <Navbar title="TextFormatter" about="about us" mode ={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3" >
      <Form heading ="Enter the Text"/>
      {/* <About/> theme change */}
      </div>
    </>
  );
}

export default App;
