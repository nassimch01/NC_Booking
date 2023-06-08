import React, { useState } from "react";
import { Modal, Button, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Room({ room }) {
  //room={name:...,id:...,description:...} | {name:...,id:...,description:...}

  const [openModal, setopenModal] = useState(false);
  const isLoggedIn = window && window.localStorage.getItem("token")

  console.log({isLoggedIn})

  const handleClose = () => {
    setopenModal(false);
  };
  const handleViewDetails = () => {
    setopenModal(true);
  };

  return (
    <div>
      <Card>
        <Carousel interval={null}>s
          {room.imageurls.map((url) => (
            <Carousel.Item>
              <Card.Img variant="top" src={url} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{room.name}</Card.Title>
          <Card.Text>
            <div>Phone number : {room.phonenummber}</div>
            <div>Type : {room.type}</div>
          </Card.Text>
          <div style={{ float: "right" }}>
            <Button variant="primary" onClick={handleViewDetails}>
              view details
            </Button>
            <Link to={isLoggedIn ? `/book/${room._id}` : '/login'}>
              <Button style={{ marginLeft: "8px" }}>Book now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      {openModal && (
        <Modal show={openModal} onHide={handleClose} size="lg">
          <Modal.Header>
            <Modal.Title>{room.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{room.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
export default Room;
