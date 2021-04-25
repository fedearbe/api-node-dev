const express = require('express');
const requestId = require('express-request-id')();

const logger = require('./config/logger');
const api = require('./api/v1');

const app = express();

app.use(requestId);
app.use(logger.requests);

// Setup bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup router
app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res, next) => {
  next({
    message: 'Route not found',
    statusCode: 404,
    level: 'warn',
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message, level = 'error' } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[level](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
