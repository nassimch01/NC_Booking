import React, { useState } from "react";
import { Modal, Button, Carousel ,Card} from 'react-bootstrap'
function Room({ room }) { //room={name:...,id:...,description:...} | {name:...,id:...,description:...}
    console.log(room)
    const handleClose = () => { }
    return (
        <div>
            {/* <div className="col-md-4">
                <img src={room.imageurls[0]} className="smalling" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <b>
                    {" "}
                    <p>Max count : {room.maxcount}</p>
                    <p>Phone number : {room.phonenumber}</p>
                    <p>Type : {room.type}</p>
                </b>
                <div style={{ float: "right" }}>
                    <button className="btn btn-primary"> View details</button>
                </div>
            </div> */}
            <Card >
                <Card.Img variant="top" src={room.imageurls[0]} />
                <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Card.Text>
                    <p>Max count : {room.maxcount}</p>
                    <p>Phone number : {room.phonenumber}</p>
                    <p>Type : {room.type}</p>
                    </Card.Text>
                    <Button variant="primary">view details</Button>
                </Card.Body>
            </Card>

            {/* <Modal onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel=''>
                        {room.imageurls.map(url => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100 bigimg"
                                    src={url}
                                    
                                />

                            </Carousel.Item>
                        })}
                    </Carousel>
                    <p>{room.description}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal> */}

        </div >
    );
}
export default Room;