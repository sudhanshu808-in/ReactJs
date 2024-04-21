import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
 
    <Navbar title="logistics" aboutText="Aboutt."/>
    
    <div className="container">
    <TextForm heading="Enter ypur suggestion"/>

    </div>
   </>
  );
}

export default App;
