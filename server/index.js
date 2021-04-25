const express = require('express');
const requestId = require('express-request-id')();

const logger = require('./config/logger');

const app = express();

app.use(requestId);
app.use(logger.requests);

app.get('/', (req, res) => {
  res.send(`Hello from Fede's world! Your ID is ${req.id}`);
});

app.use((req, res, next) => {
  const statusCode = 404;
  const message = 'Route not found';

  logger.warn(message);

  res.status(statusCode);
  res.json({
    message,
  });
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
