const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/dashaustelles';
// address updated to connect to docker's mongodb
// const mongoUri = 'mongodb://172.17.0.2:27017/dashaustelles';


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
});


const db = mongoose.connection;

module.exports = db;
