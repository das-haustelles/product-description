const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/dashaustelles';
// address updated to connect to docker's mongodb
// const mongoUri = 'mongodb://172.17.0.2:27017/dashaustelles';

mongoose.connect(process.env.MONGODB_URI || mongoUri, {
  useNewUrlParser: true,
});

console.log('connected to mongodb at:', process.env.MONGODB_URI);
const db = mongoose.connection;

module.exports = db;
