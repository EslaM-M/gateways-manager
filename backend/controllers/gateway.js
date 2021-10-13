const Gateway = require('../models/Gateway'); // new

const get = async (req, res, next) => {
  const gateways = await Gateway.find();
  res.send(gateways);
};

const post = async (req, res, next) => {
  const gateway = await Gateway.create({
    name: req.body.name,
    ipAddress: req.body.ipAddress,
  });

  res.send(gateway);
};

module.exports = {
  get,
  post,
};
