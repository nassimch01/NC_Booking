import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

function BookingDetails() {
  // Get ID from URL
  const params = useParams(); //to get the id from url `/book/:id`

  const [room, setroom] = useState({});

  useEffect(() => {
    console.log(params.id);
    axios
      .get(`http://localhost:5000/rooms/getroombyid/${params.id}`)
      .then((res) => {
        setroom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6} className="room-text-left">
              <Card.Title>{room.name}</Card.Title>
              <Card.Img
                variant="top"
                src={room.imageurls && room.imageurls[0]}
                className="room-img"
              />
            </Col>
            <Col xs={6} className="room-text-right">
              <Card.Text>
                <p>
                  <h4>Booking Details</h4>
                  <div>Name: {}</div>
                  <div>From date: {}</div>
                  <div>To date: {} </div>
                  <div>Max count: {room.maxcount}</div>
                </p>
                <p>
                  <h4>Amount</h4>
                  <div>Total days: {}</div>
                  <div>Rent per day: {room.rentperday}</div>
                </p>
                <p>
                  <h4>Total amount: {} </h4>
                </p>
              </Card.Text>
              <Button variant="secondary" >
              Pay Now
            </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookingDetails;
