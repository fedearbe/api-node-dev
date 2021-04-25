const mongoose = require('mongoose');

const config = require('../config');

const initDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  await mongoose.connect(config.database.connectionString, options, () => {
    console.log('Connected to the database!');
  });
};

module.exports = { initDB };
