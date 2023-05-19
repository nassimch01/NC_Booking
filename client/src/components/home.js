import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "./room";
import { Col, Row, Container, Dropdown, Button } from "react-bootstrap";
import Banner from "./banner";
import { DatePicker } from "antd";
import { InputNumber } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

function Home({ startdate, enddate, setstartdate, setenddate }) {
  const [rooms, setrooms] = useState([]); //all rooms
  const [filteredrooms, setfilteredrooms] = useState([]); //all rooms

  const [adults, setadults] = useState(1);
  const [children, setchildren] = useState(0);
  const [bookedrooms, setbookedrooms] = useState(1);

  useEffect(() => {
    //initialisation
    try {
      axios.get("http://localhost:5000/rooms/getallrooms").then((response) => {
        //{data:...., config:..., headers: ....}
        console.log(response.data); //[] | rooms:[] | data: { rooms: []}.
        setrooms(response.data); // => rooms=[{id:...,name:...},{}...]
        setfilteredrooms(response.data); // => rooms=[{id:...,name:...},{}...]
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (event) => {
    const searchinput = event.target.value;
    setfilteredrooms(
      rooms.filter((room) =>
        room.name.toLowerCase().includes(searchinput.toLowerCase())
      )
    );
  };

  const handleChangeDate = (dates) => {
    //dates=[19-05-2023,23-05-2023]
    if (dates) {
      setstartdate(dates[0]);
      setenddate(dates[1]);
    }
  };

  return (
    <div>
      <Banner />
      <Container>
        <Row style={{ margin: "10px 0" }}>
          <Col span={3}>
            <input
              className="form-control"
              id="place"
              placeholder="search..."
              onChange={handleSearch}
            />
          </Col>
          <Col span={4}>
            <RangePicker
              onChange={handleChangeDate}
              format="YYYY/MM/DD"
            />
          </Col>
          <Col span={5}>
            <Dropdown>
              <Dropdown.Toggle>
                <Button color="tertiary">{`${adults} adults. ${children} children. ${bookedrooms} rooms`}</Button>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    onChange={(nb) => setadults(nb)}
                  />{" "}
                  Adults
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <InputNumber
                    min={0}
                    max={10}
                    defaultValue={0}
                    onChange={(nb) => setchildren(nb)}
                  />{" "}
                  Children
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    onChange={(nb) => setbookedrooms(nb)}
                  />{" "}
                  Rooms
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {filteredrooms.map((roomData) => (
            <Col xs={4}>
              <Room room={roomData} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
