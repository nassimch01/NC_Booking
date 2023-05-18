import './App.css';
import BookingDetails from './components/bookingDetails';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/book/:id' element={<BookingDetails />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
