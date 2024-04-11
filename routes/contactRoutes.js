const express = require('express');
const router = express.Router();

router.route("/").get((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.json({message: "get all contacts"});
});


module.exports= router;