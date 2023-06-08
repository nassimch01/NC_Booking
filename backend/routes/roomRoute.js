const express = require("express");
const router = express.Router();

const room = require("../models/room");
var bodyParser = require("body-parser");

router.get("/getallrooms", async (req, res) => { 
  try {
    const rooms = await room.find();
    return res.json(rooms);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

router.get("/getroombyid/:id", async (req, res) => {
  try {
    const roomDetails = await room.findById(req.params.id);
    return res.json(roomDetails);
  } catch (error) {
    return res.status(404).json({ message: error });
  } 
});

router.post("/add", bodyParser.json(), async (req, res) => {
  try {
    const roomDetails = await room.save(req.body);
    return res.json(roomDetails);
  } catch (error) {
    return res.status(404).json({ message: error });
  } 
});

router.post("/edit/:id",  bodyParser.json(),async (req, res) => {
  try {
    if (!req.params.id) res.json("room not found")
    const roomDetails = await room.updateOne({_id: req.params.id}, req.body);
    return res.json(roomDetails);
  } catch (error) {
    return res.status(404).json({ message: error });
  } 
});

router.post("/delete", bodyParser.json(),  async (req, res) => { 
  try {
    const roomDetails = await room.deleteOne({ _id: req.body.id})
    return res.json(roomDetails);
  } catch (error) {
    return res.status(404).json({ message: error });
  } 
});




module.exports = router;
