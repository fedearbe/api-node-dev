const express = require('express');
const logger = require('./config/logger');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Fede's world!");
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  logger.error(message);
  
  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
