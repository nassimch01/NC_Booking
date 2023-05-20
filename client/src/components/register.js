import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const body = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      phonenumber: phoneNumber,
      address: address,
    };
    fetch("http://localhost:5000/users/register", {
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
        alert(data.msg);
        navigate("/login");
      });
  };

  return (
    <div>
      <Card className="register-form">
        <form onSubmit={handleSubmitForm}>
          <h3> Create an account </h3>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="inputFName">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="inputLName">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputNumber"
              placeholder="phone"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="address"
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="form-group">
            <Button
              type="submit"
              className="register-button"
              variant="secondary"
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Register;
