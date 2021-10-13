const { Joi, Segments } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const post = {
  [Segments.BODY]: Joi.object().keys({
    vendor: Joi.string().required(),
    status: Joi.string().valid('online', 'offline').required(),
    gateway: Joi.objectId().required(),
  }),
};

module.exports = {
  postValidator: post,
};
