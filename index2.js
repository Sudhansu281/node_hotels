const express = require("express");
const db = require("./db");
const personRoutes  = require("./routes/personRoutes");

//middleware.
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to my hotel...");
});


//use the routers
app.use("/person",personRoutes);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
