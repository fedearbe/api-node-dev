const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Fede's world!");
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
