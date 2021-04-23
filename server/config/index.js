const dotEnv = require('dotenv');

dotEnv.config();

const config = {
  server: {
    hostname: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
};

module.exports = config;