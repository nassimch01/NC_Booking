const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');

const booking = require("../models/booking");
var bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51NBNYkHtJq5KW2QMx52qwSXI2vPkMptgoldgEr7HD5gRFWrM4O68XEe19s5O5X2Baop13qLkwRd0PMBc0sYTYCB900ZEW2yRwd');

router.get("/getallbookings", bodyParser.json(), async (req, res) => {
  try {
    const bookings = await booking.find({ userid: req.params.userid });
    return res.json(bookings);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

router.post("/addbooking", bodyParser.json(), async (req, res) => { //triggered when clicking on button "Pay now"
  try{
    const token = req.body.token
    // const customer = await stripe.customers.create({
    //   email: token.email,
    //   source: token.id
    // })
    // const payment = await stripe.charges.create(
    //   {
    //     amount: req.body.totalamount * 100,
    //     customer: customer.id,
    //     currency: 'TND',
    //     receipt_email: token.email
    //   }, {
    //   idempotencyKey: uuidv4()
    // }
    // )
    //if (payment){
      //save booking in database
      let newbooking = new booking({ ...req.body, transactionid: token.id});
      newbooking.save().then((data) => {
        return res.json(data)
      }).catch(error => { return res.status(404).json({ message: error }); })
    //}
  } 
  catch (error) {
    res.status(400).send(error)
  }
  
  
});

router.post('/cancelbooking', bodyParser.json(), (req, res) => {
  booking.deleteOne({ _id: req.body.id}).then((data) => {
    return res.json(data)
  }).catch(error => { return res.status(404).json({ message: error }); })
})


module.exports = router;
