var express = require('express');
const PeripheralDevice = require('../models/PeripheralDevice'); // new

const get = async (req, res, next) => {
  const peripheralDevices = await PeripheralDevice.find({
    gateway: req.params.id,
  });
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

const remove = async (req, res, next) => {
  const result = await PeripheralDevice.remove({
    _id: req.params.id,
  });
  res.send(result);
};

const update = async (req, res, next) => {
  const result = await PeripheralDevice.updateOne(
    {
      _id: req.params.id,
    },
    {
      ...req.body,
    }
  );
  res.send(result);
};

module.exports = {
  get,
  post,
  remove,
  update,
};
