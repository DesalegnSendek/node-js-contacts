// console.log("Iam in the express project development");
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

//connection to database
connectDb();


const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api/contacts", require('./routes/contactRoutes'));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.use(errorHandler);

// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose"); 