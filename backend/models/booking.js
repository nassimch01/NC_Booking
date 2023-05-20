const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  userid: String,
  roomid: String,
  startdate: Date,
  enddate: Date,
  totalamount: Number,
  totaldays: Number,
  transactionid: String
});
const booking = mongoose.model("Booking", schema);

module.exports = booking;
