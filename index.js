const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    var customized_person = {
        name:"Sudhansu",
        age:21,
        gender:"male"
    }
    res.send(customized_person)
})
app.listen(3000,()=>{
    console.log("Server started at port 3000");
    
})