import React, { useState, useEffect } from "react";
import Room from "./room";
import { Col, Row, Container, Dropdown } from "react-bootstrap";
import Banner from "./banner";
import { DatePicker } from "antd";
import { InputNumber, Button } from "antd";
import dayjs from "dayjs";
import { useRef } from "react";
import AdminRoom from "./adminRoom";
const { RangePicker } = DatePicker;

function AdminHome({
  rooms,
  filteredrooms,
  setfilteredrooms,
}) {

  const handleSearch = (event) => {
    const searchinput = event.target.value;
    const data = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchinput.toLowerCase())
  )
    setfilteredrooms(
      data
    );
  };

  return (
    <div className="top-space">
        <Row justify="space-between" className="admin-home-bar">
          <Col xs={6}>
            <input
              className="form-control"
              id="place"
              placeholder="search..."
              onChange={handleSearch}
            />
          </Col>
          <Col xs={6}>
        <Button type="primary" style={{float:"right", width: "120px"}}> + Add </Button>
        </Col>
        </Row>
        <Row>
          {filteredrooms?.map((roomData) => (
            <Col xs={4}>
              <AdminRoom room={roomData} />{" "}
            </Col>
          ))}
        </Row>
    </div>
  );
}

export default AdminHome;
