const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;
console.log(MONGO_URL)
// Connect to mongoDB
module.exports = () => {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected')
  }).catch(err => {
    console.log("test1", err);
  });
}