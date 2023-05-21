import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import dayjs from "dayjs";

function BookingDetails({ user, startdate, enddate }) {
  // Get ID from URL
  const params = useParams(); //to get the id from url `/book/:id`

  const [room, setroom] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/getroombyid/${params.id}`)
      .then((res) => {
        setroom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const handleBookRoom = () => {
    const body = {
      userid: user.id,
      roomid: room.id,
      startdate: startdate.toDate(),
      enddate: enddate.toDate(),
      totalamount: enddate.diff(startdate, "day") * room.rentperday,
      totaldays: enddate.diff(startdate, "day"),
      transactionid: "",
    };

    if(enddate.diff(startdate, "day") <1) alert("Please select a correct date range")
    fetch("http://localhost:5000/bookings/addbooking", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {

        //stripe for payment
      });
  };

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
                  <div>Name: {`${user.firstname} ${user.lastname}`}</div>
                  <div>From date: {startdate.format("DD/MM/YYYY")}</div>
                  <div>To date: {enddate.format("DD/MM/YYYY")} </div>
                  <div>Max count: {room.maxcount}</div>
                </p>
                <p>
                  <h4>Amount</h4>
                  <div>Total days: {enddate.diff(startdate, "day")}</div>
                  <div>Rent per day: {room.rentperday}</div>
                </p>
                <p>
                  <h4>
                    Total amount:{" "}
                    {enddate.diff(startdate, "day") * room.rentperday}{" "}
                  </h4>
                </p>
              </Card.Text>
              <Button variant="secondary" onClick={handleBookRoom}>
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
