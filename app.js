const express = require('express');

const tourRouter = require('./router/tourRouter');
const userRouter = require('./router/userRouter');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('common'));

app.use((req, res, next) => {
  req.requestDate = new Date();
  next();
});

app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/user', userRouter);

app.use(express.static(`${__dirname}/public`));

module.exports = app;
