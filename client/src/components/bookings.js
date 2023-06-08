import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import dayjs from "dayjs";

function Bookings({ user, rooms }) {
  const [bookings, setbookings] = useState([]);

  useEffect(() => {
    //initialisation
    try {
      axios
        .get("http://localhost:5000/bookings/getallbookings", {
          params: { userid: user.id },
        })
        .then((response) => {
          setbookings(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const handleCancelBooking = (booking) => {
    axios
      .post(`http://localhost:5000/bookings/cancelbooking`, {id: booking._id})
      .then((data) => {
        const updatedbookings = bookings.filter(
          (item) => item._id != booking._id
        );
        setbookings(updatedbookings);
      });
  };

  return (
    <div className="top-space">
      {bookings.map((booking) => {
        const room = rooms.find((item) => item.id == booking.roomid);
        return (
          room && (
            <Card>
              <Card.Body className="booking-body">
                <Row>
                  <Col xs={2}>
                    <img
                      variant="top"
                      src={room.imageurls && room.imageurls[0]}
                      className="booking-img"
                    />
                  </Col>
                  <Col xs={6}>
                    <div>{room.name}</div>
                    <div>
                      Start date:{" "}
                      {dayjs(booking.startdate).format("DD/MM/YYYY")}
                    </div>
                    <div>
                      End date: {dayjs(booking.enddate).format("DD/MM/YYYY")}{" "}
                    </div>
                    <div>
                      Total days:{" "}
                      {dayjs(booking.enddate).diff(
                        dayjs(booking.startdate),
                        "day"
                      )}
                    </div>
                    <div>
                      {" "}
                      Total amount:{" "}
                      {dayjs(booking.enddate).diff(
                        dayjs(booking.startdate),
                        "day"
                      ) * room.rentperday}
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button onClick={() => handleCancelBooking(booking)}>
                      {" "}
                      Cancel booking{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )
        );
      })}
    </div>
  );
}

export default Bookings;
