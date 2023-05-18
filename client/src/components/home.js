import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "./room";
import { Col, Row, Container } from "react-bootstrap";
import Banner from "./banner";

function Home() {
  const [rooms, setrooms] = useState([]); //useState for variables

  useEffect(() => {
    //initialisation
    try {
      axios
        .get("http://localhost:5000/rooms/getallrooms")
        .then((response) => {
          //{data:...., config:..., headers: ....}
          console.log(response.data); //[] | rooms:[] | data: { rooms: []}.
          setrooms(response.data); // => rooms=[{id:...,name:...},{}...]
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Banner />
      <Container>
        <Row>
          {rooms.map((roomData) => (
            <Col xs={4}>
              {" "}
              <Room room={roomData} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
