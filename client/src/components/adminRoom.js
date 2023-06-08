import React, { useState } from "react";
import { Modal, Button, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function AdminRoom({ room }) {
  return (
    <div>
      <Card>
        <Carousel interval={null}>
          {room.imageurls.map((url) => (
            <Carousel.Item>
              <Card.Img variant="top" src={url} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Text>
            <div>Name : {room.name}</div>
            <div>Phone number : {room.phonenummber}</div>
            <div>Type : {room.type}</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer> 
          <Button>Edit</Button>
            <Button>Delete</Button>
            </Card.Footer>
      </Card>

    </div>
  );
}
export default AdminRoom;
