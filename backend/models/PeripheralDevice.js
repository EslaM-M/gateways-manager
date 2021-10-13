const mongoose = require('mongoose');
var uuid = require('node-uuid');
const schema = mongoose.Schema(
  {
    UID: {
      type: String,
      index: { unique: true },
      default: () => uuid.v1(),
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['online', 'offline'],
      default: 'online',
      required: true,
    },
    gateway: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gateway',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PeripheralDevice', schema);
