const mongoose = require('mongoose');
var uuid = require('node-uuid');

const schema = mongoose.Schema(
  {
    serialNumber: {
      type: String,
      index: { unique: true },
      default: () => uuid.v1(),
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gateway', schema);
