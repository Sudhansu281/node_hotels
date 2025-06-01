const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async(req, res) => {
  try {
    const data = req.body;

    //create a new person document using the mongoose model
    const newPerson = new Person(data);

    //save the new person to the database
    const savedPerson = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(savedPerson);
  }catch (err) {
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
});

//Get method to get the person
router.get("/",async(req,res)=>{
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

router.get('/:worktype',async(req,res)=>{
  try {
    const worktype = req.params.worktype;//extract the worktype from the url
    if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
      const response = await Person.find({work:worktype})
      console.log("Response fetched");
      res.status(200).json(response);
    }else{
      res.status(404).json({error:"Invalid work type"});
    }
  } 
  catch (err) {   
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

router.put("/:id",async(req,res)=>{
    try {
        const personId = req.params.id;//extract the id from url parameter
        const updatedPersonData = req.body;//updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return the updated document
            runValidators:true,//Run/check mongoose validation
        })
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log("Data updated");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})


router.delete("/:id",async(req,res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log("Data deleted");
        res.status(200).json({message:"Person deleted successfully"});
    } catch (error) {
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

module.exports = router;