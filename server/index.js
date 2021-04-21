const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Fede's world!");
});

module.exports = app;
