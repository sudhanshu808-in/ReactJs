import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
   <>
 
    <Navbar title="logistics" aboutText="Aboutt."/>
    
    <div className="container">
    {/* <TextForm heading="Enter ypur suggestion"/> */}
      <About/>
    </div>
   </>
  );
}

export default App;
