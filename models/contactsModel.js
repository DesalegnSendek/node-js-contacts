const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"please enter name"]
    },
    email:{
        type: String,
        required: [true,"please enter address"]
    },
    phone:{
        type: String,
        required: [true,"please enter number"]
    }
},
{
    timeStamp: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);