 
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
// import Contact from "./Components/Contact";
 
 
// import {
//   BrowserRouter as Router,
//    Routes,
//   Route
// } from "react-router-dom";


 

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "gray";
       showAlert("Dark mode has been enabled", "success");
       document.title = "TextUtils- Dark mode enabled";

       // if anyone want to change title every 2 sec than use setinterval
      //  setInterval(() => {
      //   document.title = "Install TextUtils Now";
      //  }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light mode enabled";
    }
  }

   
  return (
    <> 
    {/* <Router> */}
 <Navbar Title= "TEXTUTILS BLOGS" Shop = "Products" Contact = "Contact Us" mode = {mode} toogleMode = {toogleMode}/> 
 
 <Alert alert = {alert}/>
 <div className="container my-3">
 
 {/* exact is lia use hota ha ka user exact url par jay na ka us sa milta julta 
 url par  */}
 {/* <Routes>
 <Route path="/Contact" element={<Contact />} />
<Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode} />} />
 </Routes> */}

<TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode} />

 

 </div>

 {/* </Router> */}
 
</>
  
);
}


export default App;

