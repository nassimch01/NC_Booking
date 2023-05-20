import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.status == "usernotok") {
            alert(data.msg);
          }
          if (data.status == "passnotok") {
            alert(data.msg);
          }
        if (data.status == "200") {
          alert("login successful");
          window.localStorage.setItem("token", data.token);
          navigate("/")
        }
      });
  }
  return (
    <div>
      <Card className="login-form">
        <form onSubmit={handleSubmitForm}>
          <h3> Login </h3>

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

export default Login;
