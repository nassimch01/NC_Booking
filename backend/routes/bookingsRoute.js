const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');

const booking = require("../models/booking");
var bodyParser = require("body-parser");

router.get("/getallbookings", bodyParser.json(), async (req, res) => {
  try {
    const bookings = await booking.find({userid: req.params.userid});
    return res.json(bookings);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

router.post("/addbooking", bodyParser.json(), (req, res) => {
    let newbooking = new booking({...req.body, transactionid: new mongoose.Types.ObjectId()});
    newbooking.save().then((data) => {
       return res.json(data)
    }).catch(error => {return res.status(404).json({ message: error });})
  });
   
router.delete('/cancelbooking/:id', (req, res) => {
  booking.findByIdAndDelete(req.params.id).then((data) => {
    return res.json(data)
 }).catch(error => {return res.status(404).json({ message: error });})
 })


module.exports = router;
