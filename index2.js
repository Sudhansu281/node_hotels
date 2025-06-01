const express = require("express");
const db = require("./db");
const personRoutes  = require("./routes/personRoutes");
require("dotenv").config();

//middleware.
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to my hotel...");
});


//use the routers
app.use("/person",personRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server started at port 3000");
});
