import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "react-bootstrap";
import { Row, Col } from "antd";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token.length > 0) setLoggedIn(true);
  }, [window]);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Row justify="space-between">
          <Col span={6}>
            <a className="navbar-brand" href="#">
              NC Booking
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Col>
          <Col span={6}>
            {loggedIn ? (
              <Dropdown >
                <Dropdown.Toggle>
                  <UserOutlined />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/myprofile"> My profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/mybookings"> My bookings</Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <span className="nav-link">
                      {" "}
                      <Link to="/register">Register</Link>
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      <Link to="/login">Login</Link>
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </nav>
    </div>
  );
}

export default Navbar;
