import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
