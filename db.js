const mongoose = require('mongoose');
//const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
//require('dotenv').config();

//const mongoURL = process.env.MONGO_URI;
const mongoURL = 'mongodb+srv://jcghotra1:Mannus1234@cluster0.l71i5.mongodb.net/';
//const mongoURL = 'mongodb+srv://jcghotra1:Mannus1234@cluster0.l71i5.mongodb.net/yourDatabaseName?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to MongoDB server');
});

db.on('error', (err) => { // Added 'err' parameter here
    console.log('MongoDB server error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

module.exports = db;
