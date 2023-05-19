import React, { useState } from "react";
import BookingDetails from "./components/bookingDetails";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import dayjs from "dayjs";

function App() {
  const [startdate, setstartdate] = useState(dayjs());
  const [enddate, setenddate] = useState(dayjs());

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
              />
            }
          ></Route>
          <Route
            path="/book/:id"
            element={<BookingDetails startdate={startdate} enddate={enddate} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
