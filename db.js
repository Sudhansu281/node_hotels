const mongoose = require("mongoose")

//define the mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,  
})

const db = mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{
    console.log("Connected to mongodb server");
})

db.on('error',(err)=>{
    console.log("mongodb connection error",err);
})

db.on('disconnected',()=>{
    console.log("mongodb disconnected");
})


//export the database connection
module.exports = db;