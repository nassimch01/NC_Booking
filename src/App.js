import './App.css';
import Navbar from './components/Navbar';
import Login from './components/login';
import Register from './components/register';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/*<Login></Login>*/}
    <Navbar/>
    </div>
  );
}

export default App;
