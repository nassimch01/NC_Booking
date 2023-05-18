const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://nassim001:nassim12345@cluster0.7jgmzos.mongodb.net/NC_Booking'

mongoose.connect(mongoURL ,{ useNewUrlParser : true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log('mongo DB connection failed')
})

connection.on('connected',()=>{
    console.log('mongo DB connection sucessful')
})


module.exports=mongoose