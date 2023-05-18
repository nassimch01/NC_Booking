const express = require("express");
const router = express.Router();

const room = require("../models/room");

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




module.exports = router;
