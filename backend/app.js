var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var gatewayRouter = require('./routes/gateway');
var peripheralDeviceRouter = require('./routes/peripheral_device');

var connectMongoose = require('./config/mongoose');
const { errors } = require('celebrate');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/gateway', gatewayRouter);
app.use('/peripheral_device', peripheralDeviceRouter);
app.use(errors());

connectMongoose().then(() => {
  console.log('started');
});

module.exports = app;
