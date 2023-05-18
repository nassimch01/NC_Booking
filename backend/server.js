const express =require("express");
var cors = require('cors')
const app = express(); 
const dbConfig=require('./db')
const roomsRoute = require('./routes/roomRoute')
const usersRoute = require('./routes/usersRoute')

app.use(cors())
app.use('/rooms', roomsRoute);  
app.use('/users', usersRoute);

app.use(express.json()); 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server running on port ${port}`));






