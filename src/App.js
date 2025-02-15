
import React,{ useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [Mode,setMode]=useState('light');
  const toggleMode= ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="aboutText" mode={Mode} toggleMode={toggleMode}/>
      <div class ="container my-3">
        <TextForm heading="Enter the text to analyze" mode={Mode}/>
      </div>
    </>
  );
}

export default App;
