const mongoose = require('mongoose');
const { connect } = require('../routes/contactRoutes');

const connectDb = async (req, res) => {
    try {
       const connect = await mongoose.connect(process.env.mongodb_connection_contacts_db);
        console.log('MongoDB connected',
        connect.connection.host,
        connect.connection.port,
        connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;