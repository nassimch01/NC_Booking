const express = require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");

router.post("/register", bodyParser.json(), (req, res) => {
  user.findOne({ email: req.body.email }).then((newuser) => {
    if (newuser) return res.status(400).send({ msg: "Email already exist" });
  });
  let newUser = new user(req.body);

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((newuser) => {
        jwt.sign(
          { id: newuser.id },
          "jwtSecret",
          { expiresIn: 2596000 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                firstname: newuser.firstname,
                lastname: newuser.lastname,
                password: newuser.password,
                phonenumber: newuser.phonenumber,
                email: newuser.email,
                address: newuser.address,
              },
            });
          }
        );
      });
    });
  });
});

router.post("/login", bodyParser.json(), (req, res) => {
  let { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .send({
        msg: "Please enter all data | body : " + JSON.stringify(req.body),
      });

  user.findOne({ email: email }).then((newuser) => {
    if (!newuser) return res.status(400).send({ msg: "User does not exist" });

    bcrypt.compare(password, newuser.password).then((isMatch) => {
      if (!isMatch) return res.status(400).send({ msg: "Bad crediential" });
      jwt.sign(
        { id: newuser.id },
        "jwtSecret",
        { expiresIn: 2596000 },
        (err, token) => {
          if (err) throw err;
          return res
            .status(200)
            .send({
              status: 200,
              msg: "login successful",
              token: token,
              id: newuser.id,
            });
        }
      );
    });
  });
});

router.get("/getuserbyid/:id", async (req, res) => {
  try {
    const userDetails = await user.findById(req.params.id);
    return res.json(userDetails);
  } catch (error) {
    return res.status(404).json({ message: error });
  } 
});


module.exports = router;
