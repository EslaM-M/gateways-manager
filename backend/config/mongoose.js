const mongoose = require('mongoose'); // new

const connectMongoose = async () => {
  // Connect to MongoDB database
  return mongoose.connect('mongodb://localhost:27017/proxy', {
    useNewUrlParser: true,
    autoIndex: true,
  });
};

module.exports = connectMongoose;
