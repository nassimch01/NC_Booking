import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "react-bootstrap";
import { Row, Col } from "antd";

function Navbar({ username, loggedIn, setLoggedIn }) {

  const handleLogout = () => {
    window.localStorage.clear();
    setLoggedIn(false);
  };
  const [navbar,setNavbar]=useState(false) //if false, background=transparent else background=white
  const changeBackground =()=>{
    if (window.scrollY>=150){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  return (
    <div className={navbar ? "navbar-fixed navbar-white" : "navbar-fixed navbar-transparent"}>
      <div>
        <Link to="/">
          {" "}
          <h4>NC Booking</h4>
        </Link>
      </div>
      <div>
        {loggedIn ? (
          <Dropdown>
            <Dropdown.Toggle>
              <UserOutlined /> {username}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/mybookings"> My bookings</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className="action-buttons">
            <Link to="/register">
              <div> Register</div>{" "}
            </Link>
            <Link to="/login">
              <div> Login</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
