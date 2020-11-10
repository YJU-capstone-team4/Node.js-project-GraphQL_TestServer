const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const MONGO_URL = 'mongodb://localhost/people';

// Connect to mongoDB
module.exports = () => {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected')
  }).catch(err => {
    console.log(err);
  });
}