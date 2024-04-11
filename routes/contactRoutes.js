const express = require('express');
const router = express.Router();
const { 
    getContacts,getaContact, createContact, UpdateContact, deleteContact} = require('../controllers/contactController.js');

//get contacts
//add contacts
router.route("/").get(getContacts).post(createContact);

//get single contact
//update single contact
//delete single contact
router.route("/:id").get(getaContact).put(UpdateContact).delete(deleteContact);

module.exports= router;