// console.log("Iam in the express project development");

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use("/api/contacts", require('./routes/contactRoutes'));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose"); 