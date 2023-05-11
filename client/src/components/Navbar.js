import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">NC Booking</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="nav-link"> <Link to="/register">Register</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/login">Login</Link></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
