const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactsModel");

//@description get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
        // res.send("<h1>get all contacts</h1>");
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    });


//@description get single contact
//@route POST /api/contacts
//@access public
const getaContact = asyncHandler(async (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `get contact for ${req.params.id}`});
});

//@description create contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    console.log("Request body is ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
       throw new Error("name, email and phone are required");
    }
        res.status(201).json({message: `created contact for ${name}`});
   
    res.status(200).json({message: "create contacts"});
});

//@description update an single contact
//@route PUT /api/contacts/:id
//@access public
const UpdateContact = asyncHandler(async (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `update contact for ${req.params.id}`});
});

//@description delete a specific contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});

    
module.exports = {getContacts, getaContact, createContact, UpdateContact, deleteContact};

