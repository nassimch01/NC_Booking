const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  name: String,
  imageurls: Array,
  rentperday: Number,
  type: String,
  maxcount: Number,
  phonenummber: String,
  currentbookings: Array,
  description: String,
});
const room = mongoose.model("Room", schema);

module.exports = room;
