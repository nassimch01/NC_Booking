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
import Navbar from "./components/navbar";

function App() {
  const [startdate, setstartdate] = useState(dayjs());
  const [enddate, setenddate] = useState(dayjs().add(1, "day"));
  const [user, setuser] = useState({});
  const [rooms, setrooms] = useState([]); //all rooms
  const [filteredrooms, setfilteredrooms] = useState([]); //filtered rooms by name
  const [loggedIn, setLoggedIn] = useState(true);

  const token = window && window.localStorage.getItem("token");

  useEffect(() => {
    if (window) {
      if (token && token.length > 0) setLoggedIn(true);
      if (!token || token == null) setLoggedIn(false);
    }
  }, [token, window]);

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
        <Navbar
          username={user.firstname}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setstartdate={setstartdate}
                setenddate={setenddate}
                rooms={rooms}
                filteredrooms={filteredrooms}
                setfilteredrooms={setfilteredrooms}
              />
            }
          ></Route>
          <Route
            path="/book/:id"
            element={
              <BookingDetails
                startdate={startdate}
                enddate={enddate}
                user={user}
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/myprofile" element={<Profile user={user} />}></Route>
          <Route
            path="/mybookings"
            element={<Bookings user={user} rooms={rooms} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
