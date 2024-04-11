//@description get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
        // res.send("<h1>get all contacts</h1>");
        res.status(200).json({message: "get all contacts"});
    };


// //@description get single contact
// //@route POST /api/contacts
// //@access public
const getaContact = (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `get contact for ${req.params.id}`});
};

// //@description create contacts
// //@route POST /api/contacts
// //@access public
const createContact = (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: "create contacts"});
};

// //@description update an single contact
// //@route PUT /api/contacts/:id
// //@access public
const UpdateContact = (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `update contact for ${req.params.id}`});
};

// //@description delete a specific contact
// //@route GET /api/contacts/:id
// //@access public
const deleteContact = (req, res) =>{
    // res.send("<h1>get all contacts</h1>");
    res.status(200).json({message: `delete contact for ${req.params.id}`});
};

    
module.exports = {getContacts, getaContact, createContact, UpdateContact, deleteContact};

