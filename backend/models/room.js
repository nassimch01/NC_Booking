const mongoose = require('mongoose');

const schema = new mongoose.Schema({ name: String, imageurls: Array, rentperday: Number, type: String, maxcount: Number, phonenumber: Number, currentbookings: Array, description: String });
const room = mongoose.model('Room', schema);

module.exports = room