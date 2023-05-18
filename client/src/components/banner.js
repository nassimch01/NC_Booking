import React from "react";
import Navbar from "./navbar";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner-background">
      <Navbar />
      <div className="banner-text">
        <h1> Make Your Vacation Comfortable</h1>
        <Button variant="secondary" size="lg">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
