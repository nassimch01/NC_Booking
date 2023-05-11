const express =require("express");
var cors = require('cors')
const app = express(); 
const dbConfig=require('./db')

const roomsRoute = require('./routes/roomRoute')
app.use(cors())
app.use('/api/rooms', roomsRoute);  


app.use(express.json()); 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server running on port ${port}`));






