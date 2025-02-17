
import React,{ useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000); 
  }

  const toggleMode= (m)=>{
    if(m === 'light'){
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success");
    }
    else if(m === 'dark'){
      setMode('dark');
      document.body.style.backgroundColor="black";
      showAlert("Dark mode is enabled","success");
    }
    else if(m==='Blue'){
      setMode('Blue');
      document.body.style.backgroundColor="Blue";
      showAlert("Blue mode is enabled","success");
    }
    else if(m === 'Green'){
      setMode('Green');
      document.body.style.backgroundColor="Green";
      showAlert("Green mode is enabled","success");
    }
    else{
      setMode('SlateBlue');
      document.body.style.backgroundColor="SlateBlue";
      showAlert("SlateBlue mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="aboutText" mode={Mode} toggleMode={toggleMode}/>
      <div class ="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
      </Router>
    </>
  );
}

export default App;
