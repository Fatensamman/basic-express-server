'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const app = express();

app.use(express.json());
app.use(logger);

app.get('/',(req,res)=>{
  res.send('Hellooo');
});
app.get('/person',validator, (req, res) => {
  let name = req.query.name;
  res.json({
    name:name,
  });
});



app.get('/bad', (req, res) => {
  throw new Error('something wrong!!');
});
app.get('/hhh', (req, res, next) => {
  next('something wrong!!');
});

app.use('*', notFoundHandler);
app.use(errorHandler);



module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 4040;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  },
};