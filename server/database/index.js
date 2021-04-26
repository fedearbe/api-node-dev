const mongoose = require('mongoose');

const config = require('../config');
const logger = require('../config/logger');

const initDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  try {
    await mongoose.connect(config.database.connectionString, options);
    console.info('Connected to the database!');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { initDB };
