const express = require('express');
const router = express.Router();

//all contacts
router.route("/").get((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.json({message: "get all contacts"});
});

//single contact
router.route("/:id").get((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `get contact for ${req.params.id}`});
});
//add contact to the list
router.route("/").post((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.json({message: "create contacts"});
});

//update contact
router.route("/:id").put((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.json({message: `update contact for ${req.params.id}`});
});

//delete single contact
router.route("/:id").delete((req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.json({message: `delete contact for ${req.params.id}`});
});
module.exports= router;