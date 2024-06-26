import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { useState } from 'react';
function App() {
  const [mode,setMode]=useState('light'); 
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    }
  return (
  
   <>
 
    <Navbar title="logistics" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container my-3">
     <TextForm heading="Enter the text to analyze below" mode={mode}/>
      <About/>
    </div>
   </>
  );
}

export default App;
