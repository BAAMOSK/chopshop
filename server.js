const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('combined'));

app.get('/', (req, res) => {
  res.json('Hello');
});

app.listen(3000, err => {
  if(err) throw err;
  console.log('Server is running on port: 3000');
});