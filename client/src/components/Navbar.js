import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">NC Booking</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <span class="nav-link"> <Link to="/register">Register</Link></span>
            </li>
            <li class="nav-item">
              <span class="nav-link"><Link to="/login">Login</Link></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
