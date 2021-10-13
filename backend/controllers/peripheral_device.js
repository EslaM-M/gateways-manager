var express = require('express');
const PeripheralDevice = require('../models/PeripheralDevice'); // new

const get = async (req, res, next) => {
  const peripheralDevices = await PeripheralDevice.find();
  res.send(peripheralDevices);
};

const post = async (req, res, next) => {
  const peripheralDevice = await PeripheralDevice.create({
    vendor: req.body.vendor,
    gateway: req.body.gateway,
    status: req.body.status,
  });
  res.send(peripheralDevice);
};

module.exports = {
  get,
  post,
};
