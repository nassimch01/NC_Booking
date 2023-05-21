import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingDetails from "./components/bookingDetails";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Bookings from "./components/bookings";
import Profile from "./components/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import dayjs from "dayjs";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');

function App() {
  const [startdate, setstartdate] = useState(dayjs());
  const [enddate, setenddate] = useState(dayjs().add(1,"day"));
  const [user, setuser] = useState({});
  const [rooms, setrooms] = useState([]); //all rooms
  const [filteredrooms, setfilteredrooms] = useState([]); //filtered rooms by name

  //get rooms
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/rooms/getallrooms").then((response) => {
        console.log(response.data); 
        setrooms(response.data); 
        setfilteredrooms(response.data); 
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //get user by id
  const id = window.localStorage.getItem("userid");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getuserbyid/${id}`)
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                startdate={startdate}
                enddate={enddate}
                setstartdate={setstartdate}
                setenddate={setenddate}
                rooms={rooms}
              />
            }
          ></Route>
          <Route
            path="/book/:id"
            element={<BookingDetails startdate={startdate} enddate={enddate} user={user} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/myprofile" element={<Profile user={user} />}></Route>
          <Route path="/mybookings" element={<Bookings user={user} rooms={rooms}/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}







export default App;
