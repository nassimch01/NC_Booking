import React from "react";
import { Button } from "react-bootstrap";



function Banner({ scrollTo }) {





  return (
    <div className="banner-background">
      <div className="banner-text">
        <h1> Make Your Vacation Comfortable</h1>
        <Button onClick={scrollTo} variant="secondary" size="lg">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
